import Icon, { IconName } from '@/components/ui/Icon';
import { SectionTitle } from '@/components/life/LifeShared';

/**
 * Interest item data
 */
interface InterestItem {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Other interests data
 */
const interests: InterestItem[] = [
  {
    icon: 'dice',
    title: 'Board Games',
    description:
      'Game nights with friends are my favorite way to unwind, think strategically, and share a few laughs.',
  },
  {
    icon: 'video',
    title: 'Movies',
    description:
      'Love the MCU and am drawn to any film with a strong story and thoughtful execution.',
  },
  {
    icon: 'scroll',
    title: 'History',
    description: 'Exploring how past events shape our modern world through my minor at CMU',
  },
  {
    icon: 'book',
    title: 'Learning',
    description: 'Constantly curious, always diving into new ideas in tech, history, and beyond.',
  },
];

/**
 * LifeOther - Other personal interests section
 *
 * Showcases additional hobbies and interests
 */
export default function LifeOther() {
  return (
    <section className="py-6 sm:py-7 md:py-8">
      <SectionTitle icon="dots" title="Other Interests" />

      {/* Responsive grid - 1 column on mobile, 2 columns on small/medium, 4 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 pt-1 sm:p-5 sm:pt-1 lg:pt-5 shadow-sm border border-gray-100 hover:shadow-md active:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center mb-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mr-2">
                {interest.title}
              </h3>
              <Icon
                name={interest.icon}
                className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mt-3.25"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-700">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
