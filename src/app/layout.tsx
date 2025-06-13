import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Define comprehensive metadata for better SEO
export const metadata: Metadata = {
  title: {
    default: 'Estuardo Lopez',
    template: '%s | Estuardo Lopez',
  },
  description:
    'Estuardo Lopez is a Computer Science student at Carnegie Mellon University specializing in software engineering and full stack development.',
  keywords: [
    'Estuardo Lopez',
    'Software Engineer',
    'Carnegie Mellon University',
    'Full Stack Developer',
    'Computer Science',
    'CMU',
    'Web Development',
    'Programming',
    'Python',
    'TypeScript',
    'Next.js',
    'Portfolio',
  ],
  creator: 'Estuardo Lopez',
  publisher: 'Estuardo Lopez',
  authors: [{ name: 'Estuardo Lopez' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  applicationName: 'Estuardo Lopez Portfolio',
  generator: 'Next.js',
  category: 'portfolio',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const themeColor = '#4f46e5';

// RootLayout is the base layout for your entire site
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
