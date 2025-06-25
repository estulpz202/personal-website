import Link from 'next/link';
import { ReactNode } from 'react';
import Icon, { IconName } from './Icon';

/**
 * Common properties for all button variants
 */
type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  icon?: IconName;
  size?: 'small' | 'medium';
};

/**
 * Type for download button props
 */
type DownloadButtonProps = Omit<ButtonProps, 'external'> & {
  filename: string;
};

/**
 * Get size-specific classes
 */
function getSizeClasses(size: 'small' | 'medium') {
  return size === 'small' ? 'px-4 py-2 text-sm' : 'px-6 py-3';
}

/**
 * PrimaryButton - Used for main call-to-action buttons
 */
export function PrimaryButton({
  href,
  children,
  className = '',
  external = false,
  icon,
  size = 'medium',
}: ButtonProps) {
  const sizeClasses = getSizeClasses(size);
  const baseClasses = `${sizeClasses} rounded-md font-medium transition-all 
    bg-indigo-600 text-white 
    hover:bg-indigo-700 active:bg-indigo-700 
    shadow-sm inline-flex items-center justify-center`;
  const allClasses = `${baseClasses} ${className}`;

  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="w-4 h-4 ml-2" />}
    </>
  );

  // Render as external link with proper attributes if external flag is set
  if (external) {
    return (
      <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  // Otherwise render as an internal link using Next.js Link
  return (
    <Link href={href} className={allClasses}>
      {content}
    </Link>
  );
}

/**
 * SecondaryButton - Used for secondary or alternative actions
 */
export function SecondaryButton({
  href,
  children,
  className = '',
  external = false,
  icon,
  size = 'medium',
}: ButtonProps) {
  const sizeClasses = getSizeClasses(size);
  const baseClasses = `${sizeClasses} rounded-md font-medium transition-all 
    bg-white text-indigo-600 border border-indigo-200 
    hover:bg-indigo-600 hover:text-white hover:border-indigo-600 
    active:bg-indigo-600 active:text-white active:border-indigo-600 
    shadow-sm inline-flex items-center justify-center`;
  const allClasses = `${baseClasses} ${className}`;

  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="w-4 h-4 ml-2" />}
    </>
  );

  // Render as external link with proper attributes if external flag is set
  if (external) {
    return (
      <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  // Otherwise render as an internal link using Next.js Link
  return (
    <Link href={href} className={allClasses}>
      {content}
    </Link>
  );
}

/**
 * DownloadButton - Used for downloading files
 */
export function DownloadButton({
  href,
  children,
  className = '',
  filename,
  icon = 'download',
  size = 'medium',
}: DownloadButtonProps) {
  const sizeClasses = getSizeClasses(size);
  const baseClasses = `${sizeClasses} rounded-md font-medium transition-all 
    bg-indigo-600 text-white 
    hover:bg-indigo-700 active:bg-indigo-700
    shadow-sm inline-flex items-center justify-center`;
  const allClasses = `${baseClasses} ${className}`;

  return (
    <a href={href} className={allClasses} download={filename}>
      {children}
      {icon && <Icon name={icon} className="w-4 h-4 ml-2" />}
    </a>
  );
}
