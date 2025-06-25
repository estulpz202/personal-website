'use client';

import Link from 'next/link';
import Icon from '@/components/ui/Icon';

/**
 * Links displayed in the footer navigation
 */
const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Life', href: '/life' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Footer - Site-wide footer with scroll-to-top and navigation functionality
 */
export default function Footer() {
  // Handler for smooth scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-gray-100 border-t border-gray-200 shadow-md text-gray-500 text-base font-extralight mt-16">
      {/* Floating scroll-to-top button */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-9 z-10">
        <div
          onClick={scrollToTop}
          className="
            w-[5.1rem] h-[4.6rem] sm:w-[6.5rem] sm:h-[6rem]
            bg-gray-100 rounded-full flex items-center justify-center cursor-pointer
            transition-transform duration-300 
            hover:-translate-y-2
            active:-translate-y-2
            shadow-lg
          "
          style={{
            boxShadow: '0 -3.75px 4px -3.5px rgba(0, 0, 0, 0.25)',
          }}
          aria-label="Scroll to top"
        >
          <div className="pt-0 pb-6 sm:pb-8 flex items-center justify-center">
            <Icon name="arrow-up" className="h-8 w-9.3 sm:h-12 sm:w-14 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main footer content container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-7 py-6 relative">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Copyright text with current year */}
          <div className="mb-2.5 sm:mb-0 text-center sm:text-left pt-2.5 sm:pt-0">
            <Link
              href="/"
              className="hover:text-indigo-400 active:text-indigo-400 transition-colors"
            >
              © {new Date().getFullYear()} Estuardo Lopez
            </Link>
          </div>

          {/* Secondary navigation links - visible on large screens */}
          <nav aria-label="Footer navigation" className="hidden lg:block">
            <ul className="flex space-x-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-400 active:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
