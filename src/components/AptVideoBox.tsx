'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster?: string;
  alt?: string;
};

// 9:16 vertical apartment teaser. Autoplays muted when scrolled into
// view, pauses when scrolled out. Tap toggles play/pause manually.
export default function AptVideoBox({ src, poster, alt = 'Apartman' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let inView = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          inView = entry.isIntersecting;
          if (inView) {
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
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="apt-video-box" onClick={toggle} role="button" aria-label={`${alt} — play/pause video`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      />
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
      {!ready && <div className="apt-video-shimmer" aria-hidden />}
    </div>
  );
}
