import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

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

// Define navigation links as an array of objects
const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Life', href: '/life' },
  { label: 'Contact', href: '/contact' },
];

// Social media links
const socialLinks = [
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/estulpz202',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/estuardo-lopez-letona/',
  },
];

// RootLayout is the base layout for your entire site
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
        {/* Site Header with navigation */}
        <header className="border-b shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
            {/* Logo and Site title */}
            <Link href="/" className="flex items-center space-x-2 nav-link">
              <Icon name="e-logo" className="w-8 h-8 text-indigo-500" />
              <span className="text-xl font-semibold">Estu Lopez</span>
            </Link>

            <div className="flex items-center space-x-20">
              {/* Navigation links */}
              <nav aria-label="Main navigation">
                <ul className="flex space-x-6 text-base font-medium m-0 p-0 list-none">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="nav-link relative py-2 px-1 group">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social media links */}
              <div className="flex items-center space-x-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-500 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon as 'github' | 'linkedin'} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Main content area where each page is rendered */}
        <main className="flex-grow">{children}</main>

        {/* Footer shown at bottom of every page */}
        <footer className="border-t py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Estuardo Lopez. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
