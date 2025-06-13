import { SVGProps } from 'react';

/**
 * Supported icon names in the icon system
 */
type IconName = 'github' | 'linkedin' | 'e-logo' | 'arrow-up' | 'arrow-right';

/**
 * Props for the Icon component
 */
type IconProps = {
  name: IconName;
  className?: string;
};

/**
 * Renders an SVG icon based on the provided name
 */
export default function Icon({ name, className = 'w-6 h-6' }: IconProps) {
  // Determine if we should use the filled variant based on className
  const isFilled = className?.includes('fill-current');

  // Common SVG properties applied to all icons for consistency
  const svgProps: SVGProps<SVGSVGElement> = {
    className,
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: isFilled ? 'currentColor' : 'none',
    stroke: 'currentColor',
    strokeWidth: isFilled ? '0' : '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  // Return the appropriate SVG based on the icon name
  switch (name) {
    case 'github':
      return isFilled ? (
        // GitHub icon (filled variant)
        <svg {...svgProps} viewBox="0 0 24 24" aria-label="GitHub">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ) : (
        // GitHub icon (outline variant)
        <svg {...svgProps} aria-label="GitHub">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );

    case 'linkedin':
      return isFilled ? (
        // LinkedIn icon (filled variant)
        <svg {...svgProps} aria-label="LinkedIn">
          <path
            transform="scale(0.95) translate(0.5, 0.5)"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      ) : (
        // LinkedIn icon (outline variant)
        <svg {...svgProps} aria-label="LinkedIn">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );

    case 'e-logo':
      return (
        // Custom logo icon (stylized 'E')
        <svg {...svgProps} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
          <path d="M7 7.5h10M7 12h5M7 16.5h10" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'arrow-up':
      return (
        // Arrow pointing upward (for "scroll to top" functionality)
        <svg {...svgProps} aria-label="Scroll to top">
          <path
            d="M18 15l-6-6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'arrow-right':
      return (
        // Arrow pointing right (for navigation and call-to-actions)
        <svg {...svgProps} aria-hidden="true">
          <path
            d="M13 7l5 5m0 0l-5 5m5-5H6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}
