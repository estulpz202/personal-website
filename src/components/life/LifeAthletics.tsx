import Image from 'next/image';
import Icon, { IconName } from '@/components/ui/Icon';

/**
 * SectionTitle - Reusable section title with icon
 */
interface SectionTitleProps {
  icon: IconName;
  title: string;
}

function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center mb-6">
      <div className="bg-indigo-50 rounded-full p-3 mr-4">
        <Icon name={icon} className="w-6 h-6 text-indigo-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
  );
}

/**
 * ImageWithOverlay - Reusable image component with hover caption
 */
interface ImageWithOverlayProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

function ImageWithOverlay({ src, alt, caption, className = 'h-80 w-full' }: ImageWithOverlayProps) {
  return (
    <div className={`relative ${className} rounded-xl overflow-hidden shadow-md`}>
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black/30 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-medium px-4 py-2 bg-black/50 rounded">
          {caption}
        </span>
      </div>
    </div>
  );
}

/**
 * LifeAthletics - Martial arts and athletics section
 *
 * Showcases wrestling and martial arts experiences and skills
 */
export default function LifeAthletics() {
  return (
    <section className="py-8 fade-in-up">
      <SectionTitle icon="dumbbell" title="Martial Arts & Athletics" />

      <div className="flex gap-10 mb-8">
        <div className="flex-1">
          <p className="text-base text-gray-700 mb-4">
            Wrestling has been transformative in my life. As Varsity Captain in high school, I
            learned not just about physical discipline, but about mental toughness and leadership.
            The sport taught me how to persevere through challenges and lift others up when they
            needed support.
          </p>
          <p className="text-base text-gray-700 mb-4">
            These days, I continue exploring combat sports through boxing and grappling. As an
            active member of the CMU Grappling Club, I both learn from more experienced
            practitioners and help teach newcomers—creating a cycle of growth and mentorship.
          </p>
          <p className="text-base text-gray-700">
            The lessons from martial arts—discipline, resilience, and respect—are principles I apply
            to everything from coding challenges to team leadership.
          </p>
        </div>

        <div className="flex-1">
          <ImageWithOverlay
            src="/images/life/team.jpg"
            alt="Wrestling team"
            caption="High School Wrestling Team"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <ImageWithOverlay
          src="/images/life/comp.jpg"
          alt="Wrestling competition"
          caption="Competition Lift"
          className="h-48"
        />

        <div className="relative h-48 rounded-xl overflow-hidden shadow-md bg-indigo-50 flex items-center justify-center">
          <blockquote className="text-indigo-800 text-lg italic px-6 text-center">
            "The real victory is found in the discipline of training, not just in the moment of
            triumph."
          </blockquote>
        </div>

        <div className="relative h-48 rounded-xl overflow-hidden shadow-md bg-gray-100 flex flex-col items-center justify-center p-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Skills Developed</h4>
          <ul className="text-gray-700">
            <li className="flex items-center mb-2">
              <Icon name="check" className="w-4 h-4 text-indigo-600 mr-2" />
              <span>Mental toughness</span>
            </li>
            <li className="flex items-center mb-2">
              <Icon name="check" className="w-4 h-4 text-indigo-600 mr-2" />
              <span>Team leadership</span>
            </li>
            <li className="flex items-center">
              <Icon name="check" className="w-4 h-4 text-indigo-600 mr-2" />
              <span>Disciplined practice</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export { SectionTitle, ImageWithOverlay };
