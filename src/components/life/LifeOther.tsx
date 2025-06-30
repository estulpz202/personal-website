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
    icon: 'scroll',
    title: 'History',
    description: 'Exploring how past events shape our modern world through my minor at CMU',
  },
  {
    icon: 'dice',
    title: 'Board Games',
    description:
      'Enjoying strategic thinking and social connection through game nights with friends',
  },
  {
    icon: 'video',
    title: 'Movies',
    description: 'Marvel enthusiast with appreciation for compelling storytelling across genres',
  },
  {
    icon: 'book',
    title: 'Learning',
    description: 'Constantly curious, exploring new topics in technology, history, and beyond',
  },
];

/**
 * LifeOther - Other personal interests section
 *
 * Showcases additional hobbies and interests
 */
export default function LifeOther() {
  return (
    <section className="py-8">
      <SectionTitle icon="dots" title="Other Interests" />

      <div className="grid grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center mb-1">
              <h3 className="text-lg font-semibold text-gray-800 mr-2">{interest.title}</h3>
              <Icon name={interest.icon} className="w-5 h-5 text-indigo-600 mt-3.25" />
            </div>
            <p className="text-sm text-gray-700">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
