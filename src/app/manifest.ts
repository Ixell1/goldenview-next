import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Goldenview Sokobanja',
    short_name: 'Goldenview',
    description: 'Moderni apartmani sa bazenom, restoran sa domaćom kuhinjom i tišina koju zaslužujete u Sokobanji.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F4',
    theme_color: '#C9A84C',
    icons: [
      { src: '/logo-goldenview.png', sizes: '512x512', type: 'image/png' },
    ],
    lang: 'sr',
  };
}
