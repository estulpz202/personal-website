import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Define comprehensive metadata for better SEO
export const metadata: Metadata = {
  title: 'Estuardo Lopez',
  description:
    'Personal website of Estuardo Lopez, a Computer Science student at Carnegie Mellon University focused on software engineering and fullstack development.',
  keywords: [
    'Estuardo Lopez',
    'CMU',
    'Computer Science',
    'Software Engineer',
    'Portfolio',
    'Projects',
  ],
  authors: [{ name: 'Estuardo Lopez' }],
};

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
