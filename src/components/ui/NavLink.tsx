'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

// NavLink component that shows active state based on current path
export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`nav-link relative py-2 px-1 group ${isActive ? 'nav-link-active' : ''} ${className}`}
    >
      {children}
      {/* Hover underline effect for inactive links */}
      {!isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
      )}
    </Link>
  );
}
