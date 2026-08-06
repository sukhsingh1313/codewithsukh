import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { PwaInstallPrompt } from '@/components/pwa/PwaInstallPrompt';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://www.codewithsukh.online';

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CodeWithSukh | Web Development, Courses & Projects',
    template: '%s | CodeWithSukh - Learn Web Development & Portfolio',
  },
  description:
    'CodeWithSukh (codewithsukh.online) by Sukhchain Singh — Master Full-Stack Web Development with real-world Next.js, Python, Django, React, and Supabase tutorials, interactive courses, and developer portfolio projects.',
  keywords: [
    'CodeWithSukh',
    'codewithsukh',
    'codewithsukh.online',
    'Sukhchain Singh',
    'Full Stack Developer',
    'Next.js Courses',
    'Python Django',
    'React Tutorials',
    'Web Development Portfolio',
    'JavaScript Masterclass',
    'Supabase Projects',
    'Software Engineer India',
  ],
  authors: [{ name: 'Sukhchain Singh', url: siteUrl }],
  creator: 'Sukhchain Singh',
  publisher: 'CodeWithSukh',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'CodeWithSukh',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'CodeWithSukh | Web Development, Courses & Projects',
    description:
      'Master Full-Stack Web Development with real-world Next.js, Python, React, and Supabase tutorials by Sukhchain Singh.',
    siteName: 'CodeWithSukh',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'CodeWithSukh Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeWithSukh | Web Development, Courses & Projects',
    description:
      'Master Full-Stack Web Development with real-world Next.js, Python, React, and Supabase tutorials by Sukhchain Singh.',
    creator: '@codewithsukh',
    images: [`${siteUrl}/og-image.png`],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CodeWithSukh',
    alternateName: ['codewithsukh', 'Code With Sukh', 'codewithsukh.online'],
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/courses?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CodeWithSukh',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    founder: {
      '@type': 'Person',
      name: 'Sukhchain Singh',
    },
    sameAs: [
      'https://github.com/sukhsingh1313',
      'https://linkedin.com',
      'https://twitter.com',
      'https://youtube.com',
      'https://instagram.com',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sukhchain Singh',
    url: siteUrl,
    jobTitle: 'Full-Stack Software Engineer & Technical Educator',
    worksFor: {
      '@type': 'Organization',
      name: 'CodeWithSukh',
    },
    sameAs: ['https://github.com/sukhsingh1313'],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-screen bg-theme-main text-text-theme-main font-sans selection:bg-cyan-500 selection:text-slate-950 flex flex-col">
        <ThemeProvider>
          {children}
          <PwaInstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
