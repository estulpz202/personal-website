'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Props for the NavLink component
 */
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * NavLink - Navigation link with active state indication
 *
 * Renders a link that automatically shows active state when the current
 * URL matches the link's destination. Inactive links display a hover animation.
 */
export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  // Get current path to determine if this link is active
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`nav-link relative py-2 px-1 group ${isActive ? 'nav-link-active' : ''} ${className}`}
    >
      {children}
      {/* Animated underline effect that appears on hover for inactive links */}
      {!isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
      )}
    </Link>
  );
}
