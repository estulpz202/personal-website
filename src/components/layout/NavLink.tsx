'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isClicked, setIsClicked] = useState(false);

  // Reset clicked state when pathname changes
  useEffect(() => {
    setIsClicked(false);
  }, [pathname]);

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick();
  };

  // Apply styling based on device type, clicked state, and active state
  const styleClass = `${isTouchDevice ? 'active:text-indigo-400' : 'nav-link'}
    ${isClicked ? 'text-indigo-400' : ''}
    ${isActive ? 'nav-link-active' : ''}`;

  return (
    <Link
      href={href}
      className={`relative py-1 px-1 group ${styleClass} ${className} transition-colors duration-200`}
      onClick={handleClick}
    >
      {children}
      {/* Underline hover effect for inactive links, on non-touch devices */}
      {!isActive && !isTouchDevice && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
      )}
    </Link>
  );
}
