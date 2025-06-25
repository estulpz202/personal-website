'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Icon, { IconName } from '@/components/ui/Icon';
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
 * Header - Site wide navigation header, provides consistent navigation across all pages.
 *
 * Displays the site logo, main navigation links, and social media links.
 * Fully responsive with mobile hamburger menu for smaller screens.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch capability
  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    detectTouch();

    const handleResize = () => {
      detectTouch();
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Apply styling based on device type or menu state
  const styleClass = `${isTouchDevice ? 'text-white active:text-indigo-400' : 'nav-link'}`;
  const hoverClass = `${isTouchDevice ? 'active:scale-110' : 'active:scale-110 hover:scale-110'}`;
  const menuClass = `${isMenuOpen ? 'max-h-[500px] opacity-100 mt-4 border-t border-gray-700' : 'max-h-0 opacity-0 mt-0'}`;

  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:py-6">
        {/* Header - top of page */}
        <div className="flex justify-between items-center">
          {/* Logo and site name, link to homepage */}
          <Link
            href="/"
            className={`flex items-center space-x-3 ${styleClass} transition-colors duration-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Icon name="e-logo" className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" />
            <span className="text-xl sm:text-2xl font-semibold">Estu</span>
          </Link>

          {/* Desktop Navigation - hidden on smaller screens */}
          <div className="hidden md:flex items-center md:space-x-8 lg:space-x-16">
            {/* Navigation menu */}
            <nav aria-label="Main navigation">
              <ul className="flex space-x-8 text-lg font-small m-0 p-0 list-none">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink href={link.href} isTouchDevice={isTouchDevice}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styleClass} ${hoverClass} transition-all duration-200`}
                  aria-label={social.name}
                >
                  <Icon
                    name={social.icon as IconName}
                    className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 fill-current"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button - visible only on smaller screens */}
          <button
            className="md:hidden flex items-center p-2 text-white active:text-indigo-400 transition-colors duration-200"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'x' : 'menu'} className="h-6.5 w-6.5" />
          </button>
        </div>

        {/* Mobile menu - slides in from top of page */}
        <div
          className={`md:hidden overflow-hidden ${menuClass} transition-all duration-400 ease-in-out`}
        >
          {/* Mobile navigation menu */}
          <nav className="flex flex-col space-y-4 py-4">
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

          {/* Mobile social links */}
          <div className="flex space-x-6 pt-4 border-t border-gray-700">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white active:text-indigo-400 active:scale-110 transition-all duration-200"
                aria-label={social.name}
              >
                <Icon name={social.icon as IconName} className="w-6.5 h-6.5 fill-current" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
