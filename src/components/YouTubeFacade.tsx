'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  id: string;
  title: string;
  poster: string;
};

// Click-to-load YouTube facade. Until the user clicks, we render only a
// poster image + play button (a few KB). The ~1-3MB YouTube player JS and
// video streams are fetched only on demand — a major win on slow mobile,
// where 3 autoplaying iframes previously mounted on the home page at once.
export default function YouTubeFacade({ id, title, poster }: Props) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&modestbranding=1&controls=1&rel=0&iv_load_policy=3`}
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        title={title}
      />
    );
  }

  return (
    <button
      type="button"
      className="yt-facade"
      onClick={() => setLoaded(true)}
      aria-label={`${title} — pusti video`}
    >
      <Image src={poster} alt="" fill sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: 'cover' }} />
      <span className="yt-facade-play" aria-hidden>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
      </span>
    </button>
  );
}
