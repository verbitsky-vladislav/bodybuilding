import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dr. Magomed Batalov - Elite Endocrinologist',
    short_name: 'Dr. Batalov',
    description: 'Board-certified endocrinologist offering expert hormone optimization, TRT guidance, and competition prep coaching',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
