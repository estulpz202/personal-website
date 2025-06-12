'use client';

import Link from 'next/link';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Life', href: '/life' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-gray-100 border-t border-gray-200 shadow-md">
      {/* Scroll to top button */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-9">
        <div
          onClick={scrollToTop}
          className="
            w-[6.5rem] h-[6rem]
            bg-gray-100 rounded-full flex items-center justify-center cursor-pointer
            transition-transform duration-300 
            hover:-translate-y-2
          "
          style={{
            boxShadow: '0 -4px 3.2px -3.75px rgba(0, 0, 0, 0.2)',
          }}
          aria-label="Scroll to top"
        >
          <div className="pt-0 pb-7.5 flex items-center justify-center">
            <svg
              className="h-12 w-12 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15l-6-6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-5xl mx-auto px-7 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-3 md:mb-0">
            © {new Date().getFullYear()} Estuardo Lopez
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex space-x-8 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-indigo-500 transition-colors"
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
