import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

/**
 * Site metadata configuration for SEO optimization
 * Controls how the site appears in search results and when shared on social platforms
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
 * Matches the site's indigo theme
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
      </body>
    </html>
  );
}
