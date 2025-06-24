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
  onClick?: () => void;
  isTouchDevice?: boolean;
};

/**
 * NavLink - Navigation link with active state indication
 */
export default function NavLink({
  href,
  children,
  className = '',
  onClick,
  isTouchDevice = false,
}: NavLinkProps) {
  // Get current path to determine if this link is active
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isTouchDevice ? 'active:text-indigo-400' : 'nav-link'} relative py-1 px-1 group ${
        isActive ? 'nav-link-active' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
      {/* Underline hover effect for inactive links, on non touch devices */}
      {!isActive && !isTouchDevice && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
      )}
    </Link>
  );
}
