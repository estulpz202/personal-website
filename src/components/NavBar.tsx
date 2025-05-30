'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 p-4 border-b">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-lg font-medium ${
            pathname === link.href ? 'underline' : 'text-gray-700'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
