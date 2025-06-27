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
    <div className="flex items-center mb-6">
      <div className="bg-indigo-50 rounded-full p-3 mr-4 mt-3">
        <Icon name={icon} className="w-7 h-7 text-indigo-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
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
}

/**
 * ImageWithOverlay - Reusable image component with hover caption
 */
export function ImageWithOverlay({
  src,
  alt,
  caption,
  className = 'h-80 w-full',
  objectPosition = 'center',
}: ImageWithOverlayProps) {
  return (
    <div className={`relative ${className} rounded-xl overflow-hidden shadow-md`}>
      <Image src={src} alt={alt} fill className="object-cover" style={{ objectPosition }} />
      <div
        className="
          absolute inset-0 opacity-0 hover:opacity-100 transition-opacit duration-300
          bg-black/30 flex items-center justify-center
        "
      >
        <span className="text-white text-lg font-medium px-4 py-2 bg-black/60 rounded">
          {caption}
        </span>
      </div>
    </div>
  );
}
