'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster?: string;
  alt?: string;
};

type NetInfo = { saveData?: boolean; effectiveType?: string };

function inspectConnection(): { skipVideo: boolean; slow: boolean } {
  if (typeof navigator === 'undefined') return { skipVideo: false, slow: false };
  const conn = (navigator as Navigator & { connection?: NetInfo }).connection;
  if (!conn) return { skipVideo: false, slow: false };
  if (conn.saveData) return { skipVideo: true, slow: true };
  if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') {
    return { skipVideo: true, slow: true };
  }
  if (conn.effectiveType === '3g') return { skipVideo: false, slow: true };
  return { skipVideo: false, slow: false };
}

export default function AptVideoBox({ src, poster, alt = 'Apartman' }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [skipVideo, setSkipVideo] = useState(false);

  // Detect Save-Data / very slow connection on mount.
  useEffect(() => {
    setSkipVideo(inspectConnection().skipVideo);
  }, []);

  // Defer rendering of <video> until the card is within 400px of viewport
  // so off-screen cards don't even fetch metadata. Saves 12 × HEAD requests
  // and any range/preload bytes on initial paint.
  useEffect(() => {
    if (skipVideo) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [skipVideo]);

  // Autoplay / pause based on actual viewport visibility.
  useEffect(() => {
    if (!shouldRender || skipVideo) return;
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
          } else if (!video.paused) {
            video.pause();
            setPlaying(false);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(video);

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onCanPlay = () => setReady(true);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('canplay', onCanPlay);
    return () => {
      observer.disconnect();
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('canplay', onCanPlay);
    };
  }, [shouldRender, skipVideo]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  // Save-Data / 2G: poster image only, no video element ever loaded.
  if (skipVideo) {
    return (
      <div ref={wrapRef} className="apt-video-box" role="img" aria-label={alt}>
        {poster && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt={alt}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="apt-video-box"
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${alt} — pusti ili pauziraj video`}
    >
      {shouldRender ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={alt}
        />
      ) : (
        poster && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt={alt}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )
      )}
      <button
        type="button"
        className={`apt-video-play${playing ? ' is-hidden' : ''}`}
        aria-label={playing ? 'Pause' : 'Play'}
        onClick={(e) => { e.stopPropagation(); toggle(); }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>
      {shouldRender && !ready && <div className="apt-video-shimmer" aria-hidden />}
    </div>
  );
}
