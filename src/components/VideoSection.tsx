'use client';

import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';

export const VideoSection = () => {
  const { lang } = useLang();
  const revealRef = useReveal();

  const desktopVideoId = 'N5dFkd2JIoo';
  const mobileVideoId = 'Wva-CCJvxyc';

  const desktopVideoUrl = `https://www.youtube.com/embed/${desktopVideoId}?autoplay=1&mute=1&loop=1&playlist=${desktopVideoId}&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3`;
  const mobileVideoUrl = `https://www.youtube.com/embed/${mobileVideoId}?autoplay=1&mute=1&loop=1&playlist=${mobileVideoId}&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3`;

  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <span className="eyebrow">
            {lang === 'sr' ? 'Pogledajte video' : 'Watch video'}
          </span>
          <h2>
            <span>
              {lang === 'sr'
                ? 'Doživite atmosferu'
                : 'Experience the atmosphere'}
            </span>
            <br />
            <span className="cursive">
              {lang === 'sr' ? 'pre dolaska' : 'before you arrive'}
            </span>
          </h2>
        </div>

        {/* Desktop: horizontal video */}
        <div className="video-wrap reveal video-desktop">
          <iframe
            src={desktopVideoUrl}
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
            title="Goldenview video"
          ></iframe>
        </div>

        {/* Mobile: vertical video (shorts format) */}
        <div className="video-wrap-vertical reveal video-mobile">
          <iframe
            src={mobileVideoUrl}
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
            title="Goldenview video mobile"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
