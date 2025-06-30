import Image from 'next/image';
import Icon, { IconName } from '@/components/ui/Icon';

/**
 * Props for the SectionTitle component
 */
interface SectionTitleProps {
  icon: IconName;
  title: string;
}

/**
 * SectionTitle - Reusable section title with icon
 */
export function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center mb-3 sm:mb-4">
      <div className="bg-indigo-50 rounded-full p-2 sm:p-2.5 md:p-3 mr-2 sm:mr-3 md:mr-4 mt-3.25">
        <Icon name={icon} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-indigo-600" />
      </div>
      <h2 className="text-xl sm:text-xl md:text-2xl font-bold">{title}</h2>
    </div>
  );
}

/**
 * Props for the ImageWithOverlay component
 */
interface ImageWithOverlayProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  objectPosition?: string;
  banner?: boolean;
}

/**
 * ImageWithOverlay - Reusable image component with hover/touch caption
 */
export function ImageWithOverlay({
  src,
  alt,
  caption,
  className = 'h-60 sm:h-72 md:h-80 w-full',
  objectPosition = 'center',
  banner = false,
}: ImageWithOverlayProps) {
  return (
    <div
      className={`
        relative ${className} 
        ${banner ? '' : 'rounded-xl shadow-md'} 
        overflow-hidden
      `}
    >
      <Image src={src} alt={alt} fill className="object-cover" style={{ objectPosition }} />

      <div
        className="
          absolute inset-0 opacity-0 hover:opacity-100 active:opacity-100
          transition-opacity duration-300 bg-black/30 flex items-center justify-center
        "
      >
        <span
          className="
            text-white text-sm sm:text-base md:text-lg font-medium 
            px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-black/60 rounded
          "
        >
          {caption}
        </span>
      </div>
    </div>
  );
}
