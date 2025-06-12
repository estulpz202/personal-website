import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import NavLink from '@/components/ui/NavLink';

// Navigation links data
const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Life', href: '/life' },
  { label: 'Contact', href: '/contact' },
];

// Social media links data
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

export default function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-5xl mx-auto px-7 py-6 flex justify-between items-center">
        {/* Logo and Site title */}
        <Link href="/" className="flex items-center space-x-3 nav-link">
          <Icon name="e-logo" className="w-10 h-10 text-indigo-400" />
          <span className="text-2xl font-semibold">Estu Lopez</span>
        </Link>

        <div className="flex items-center space-x-20">
          {/* Navigation links */}
          <nav aria-label="Main navigation">
            <ul className="flex space-x-8 text-lg font-small m-0 p-0 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href}>{link.label}</NavLink>
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
                className="nav-link hover:scale-110"
                aria-label={social.name}
              >
                <Icon
                  name={social.icon as 'github' | 'linkedin'}
                  className="w-8 h-8 fill-current"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
