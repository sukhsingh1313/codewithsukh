import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CodeWithSukh - Learn & Build Live Projects',
    short_name: 'CodeWithSukh',
    description:
      'Master Full-Stack Web Development, Next.js 15, Python, TypeScript, and Supabase tutorials & projects by Sukhchain Singh.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#020617',
    orientation: 'portrait',
    scope: '/',
    categories: ['education', 'developer', 'productivity'],
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
