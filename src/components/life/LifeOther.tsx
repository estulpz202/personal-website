import Icon from '@/components/ui/Icon';
import { SectionTitle } from './LifeAthletics';

/**
 * Interest item data
 */
interface InterestItem {
  icon: 'history' | 'game' | 'film' | 'book';
  title: string;
  description: string;
}

/**
 * Other interests data
 */
const interests: InterestItem[] = [
  {
    icon: 'history',
    title: 'History',
    description: 'Pursuing a History minor at CMU to understand how the past shapes our future',
  },
  {
    icon: 'game',
    title: 'Board Games',
    description: 'Strategic thinking and social connection through tabletop games',
  },
  {
    icon: 'film',
    title: 'Movies',
    description: 'MCU enthusiast and film buff, appreciating storytelling across genres',
  },
  {
    icon: 'book',
    title: 'Learning',
    description: 'Constantly exploring new topics in AI, CS, and beyond',
  },
];

/**
 * LifeOtherInterests - Other personal interests section
 *
 * Showcases additional hobbies and interests
 */
export default function LifeOther() {
  return (
    <section className="py-8 fade-in-up mb-6">
      <SectionTitle icon="brain" title="Other Interests" />

      <div className="grid grid-cols-4 gap-6 mb-8">
        {interests.map((interest, index) => (
          <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="bg-indigo-50 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
              <Icon name={interest.icon} className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{interest.title}</h3>
            <p className="text-sm text-gray-700">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
