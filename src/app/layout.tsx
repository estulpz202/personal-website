import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

/**
 * Site metadata configuration for SEO optimization and social sharing
 */
export const metadata: Metadata = {
  // Title configuration with default and template for child pages
  title: {
    default: 'Estuardo Lopez',
    template: '%s | Estuardo Lopez',
  },

  // Site description for search engine results
  description:
    'Estuardo Lopez is a Computer Science student at Carnegie Mellon University specializing in software engineering and full stack development.',

  // Keywords for improved search engine indexing
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

  // Author and publisher information
  creator: 'Estuardo Lopez',
  publisher: 'Estuardo Lopez',
  authors: [{ name: 'Estuardo Lopez' }],

  // Prevent automatic formatting of contact information
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Search engine indexing configuration
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

  // Additional metadata
  applicationName: 'Estuardo Lopez Portfolio',
  generator: 'Next.js',
  category: 'portfolio',

  // Open Graph metadata for social link previews (LinkedIn, Discord, etc.)
  openGraph: {
    // Title and description shown in link previews
    title: 'Estuardo Lopez',
    description: 'CS @ Carnegie Mellon | Software Engineer | Personal Portfolio',

    // Canonical URL of your site
    url: 'https://www.estuardolopez.com',

    // Site name shown in previews
    siteName: 'Estuardo Lopez',

    // Image displayed in link previews (must be an absolute URL)
    images: [
      {
        url: 'https://www.estuardolopez.com/custom-banner.png',
        width: 1200,
        height: 630,
        alt: 'Estuardo Lopez Portfolio Preview',
      },
    ],

    // Type of Open Graph object
    type: 'website',
  },
};

/**
 * Viewport configuration for responsive display
 * Controls how the site scales on different devices
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

/**
 * Theme color for browser UI elements
 * Matches the site's indigo theme (indigo-600)
 */
export const themeColor = '#4f46e5';

/**
 * Root layout component that wraps all pages
 * Provides consistent header, footer, and page structure
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
