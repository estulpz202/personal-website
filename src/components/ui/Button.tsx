import Link from 'next/link';
import { ReactNode } from 'react';

/**
 * Common properties for all button variants
 */
type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

/**
 * PrimaryButton - Used for main call-to-action buttons
 */
export function PrimaryButton({ href, children, className = '', external = false }: ButtonProps) {
  const baseClasses =
    'px-6 py-3 rounded-md font-medium transition-all bg-indigo-500 text-white hover:bg-indigo-600';
  const allClasses = `${baseClasses} ${className}`;

  // Render as external link with proper attributes if external flag is set
  if (external) {
    return (
      <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // Otherwise render as an internal link using Next.js Link
  return (
    <Link href={href} className={allClasses}>
      {children}
    </Link>
  );
}

/**
 * SecondaryButton - Used for secondary or alternative actions
 */
export function SecondaryButton({ href, children, className = '', external = false }: ButtonProps) {
  const baseClasses =
    'px-6 py-3 rounded-md font-medium transition-all bg-white text-indigo-500 border border-indigo-200 hover:bg-indigo-500 hover:text-white hover:border-indigo-500';
  const allClasses = `${baseClasses} ${className}`;

  // Render as external link with proper attributes if external flag is set
  if (external) {
    return (
      <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // Otherwise render as an internal link using Next.js Link
  return (
    <Link href={href} className={allClasses}>
      {children}
    </Link>
  );
}
