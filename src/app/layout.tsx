import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CodeWithSukh | Modern Web Developer & Course Directory',
    template: '%s | CodeWithSukh',
  },
  description:
    'Explore high-performance web development projects, interactive courses, and expert coding tutorials by Sukhchain Singh (CodeWithSukh).',
  keywords: [
    'CodeWithSukh',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Supabase',
    'Web Development Courses',
  ],
  authors: [{ name: 'Sukhchain Singh', url: 'https://github.com' }],
  creator: 'Sukhchain Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codewithsukh.dev',
    title: 'CodeWithSukh | Personal Portfolio & Course Directory',
    description:
      'High-performance web applications, modern courses, and project showcases built with Next.js, Supabase, and Tailwind CSS.',
    siteName: 'CodeWithSukh',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
