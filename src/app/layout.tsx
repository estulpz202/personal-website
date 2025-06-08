import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

// Define page metadata (title and description for SEO and browser tab)
export const metadata: Metadata = {
  title: 'Estuardo Lopez - Personal Website and Portfolio',
  description: 'Computer Science @ CMU | SWE Concentration & History Minor',
};

// Define navigation links as an array of objects
const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact', href: '/contact' },
];

// RootLayout is the base layout for your entire site
// It wraps around all pages (children) and defines consistent header, main content area, and footer
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
        {/* Site Header with navigation */}
        <header className="border-b">
          <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Site title (clickable link to Home page) */}
            <Link href="/" className="text-lg font-semibold">
              Estuardo Lopez
            </Link>
            {/* Navigation links */}
            <ul className="flex space-x-6 text-sm font-medium m-0 p-0 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Main content area where each page is rendered */}
        <main className="flex-grow">{children}</main>

        {/* Footer shown at bottom of every page */}
        <footer className="border-t py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Estuardo Lopez. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
