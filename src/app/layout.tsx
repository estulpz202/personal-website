import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import NavLink from '@/components/ui/NavLink';

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
          <div className="max-w-5xl mx-auto px-7 py-6 flex justify-between items-center">
            {/* Logo and Site title */}
            <Link href="/" className="flex items-center space-x-3 nav-link">
              <Icon name="e-logo" className="w-10 h-10 text-indigo-500" />
              <span className="text-2xl font-semibold">Estu Lopez</span>
            </Link>

            <div className="flex items-center space-x-24">
              {/* Navigation links */}
              <nav aria-label="Main navigation">
                <ul className="flex space-x-8 text-lg font-medium m-0 p-0 list-none">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <NavLink href={link.href}>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social media links */}
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link text-gray-700"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon as 'github' | 'linkedin'} className="w-7 h-7" />
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
