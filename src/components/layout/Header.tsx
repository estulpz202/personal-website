'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/Icon';
import NavLink from './NavLink';

/**
 * Primary navigation links for the site header
 */
const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Life', href: '/life' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Social media profile links for the header
 */
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

/**
 * Header - Site-wide navigation header, provides consistent navigation across all pages.
 *
 * Displays the site logo, main navigation links, and social media links.
 * Fully responsive with mobile hamburger menu for smaller screens.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch capability and listen for resize/scroll events
  useEffect(() => {
    // Check if device has touch capability
    const detectTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    // Run touch detection immediately
    detectTouch();

    const handleResize = () => {
      // Re-detect touch capability (for connected/disconnected inputs)
      detectTouch();

      // Close mobile menu on larger screens
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Track scroll position for header styling
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine logo link class based on touch capability
  const logoLinkClass = isTouchDevice
    ? 'flex items-center space-x-3 text-white hover:text-white'
    : 'flex items-center space-x-3 nav-link';

  return (
    <header
      className={`bg-black text-white shadow-md sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 lg:py-6">
        <div className="flex justify-between items-center">
          {/* Logo and site name link to homepage */}
          <Link href="/" className={logoLinkClass} onClick={() => setIsMenuOpen(false)}>
            <Icon name="e-logo" className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" />
            <span className="text-xl sm:text-2xl font-semibold">Estu Lopez</span>
          </Link>

          {/* Desktop Navigation - hidden on smaller screens */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Primary navigation menu */}
            <nav aria-label="Main navigation">
              <ul className="flex space-x-6 text-base font-medium m-0 p-0 list-none">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink href={link.href} isTouchDevice={isTouchDevice}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social media profile links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isTouchDevice
                      ? 'text-white hover:text-white transition-transform'
                      : 'nav-link hover:scale-110 transition-transform'
                  }
                  aria-label={social.name}
                >
                  <Icon
                    name={social.icon as 'github' | 'linkedin'}
                    className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button - visible only on smaller screens */}
          <button
            className="md:hidden flex items-center text-white p-2"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu - slides in from top when active */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-[500px] opacity-100 mt-4 border-t border-gray-700 pt-4'
              : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="text-lg px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
                isTouchDevice={true}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Social links in mobile menu */}
          <div className="flex space-x-6 pt-2 border-t border-gray-700">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white p-2"
                aria-label={social.name}
              >
                <Icon
                  name={social.icon as 'github' | 'linkedin'}
                  className="w-6 h-6 fill-current"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
