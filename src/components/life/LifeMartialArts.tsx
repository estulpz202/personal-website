import Icon from '@/components/ui/Icon';
import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * Lessons data
 */
const lessons = [
  'Leading by example and lifting others up',
  'Disciplined practice creates consistent results',
  'Grit built from pressure, challenge, and persistence',
];

/**
 * LifeMartialArts - Martial arts section
 *
 * Showcases wrestling and martial arts experiences and skills
 */
export default function LifeMartialArts() {
  return (
    <section className="py-6 sm:py-7 md:py-8">
      <SectionTitle icon="wrestling" title="Martial Arts" />

      {/* Top grid - 1 column on mobile, 2 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
        {/* Wrestling Team */}
        <ImageWithOverlay
          src="/images/life/wrest_team.jpg"
          alt="Wrestling team holding trophy"
          caption="HS Wrestling Team"
          className="md:hidden h-48 sm:h-60 w-full"
          objectPosition="top"
        />

        {/* Description */}
        <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 flex-grow">
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            Wrestling shaped who I am today. As Varsity Captain in HS, I gained discipline, mental
            toughness, and leadership experience. The sport taught me to push through setbacks and
            support others when they needed it.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            Today, I stay active through boxing and CMU's Grappling Club, both learning and
            teaching. The resilience and respect at the heart of combat sports carry into everything
            I do, from coding to collaboration.
          </p>
        </div>

        {/* Wrestling Team */}
        <ImageWithOverlay
          src="/images/life/wrest_team.jpg"
          alt="Wrestling team holding trophy"
          caption="HS Wrestling Team"
          className="hidden md:block md:h-64 w-full"
          objectPosition="top"
        />
      </div>

      {/* Bottom grid - 1 column on mobile, 2 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        <ImageWithOverlay
          src="/images/life/takedown.jpg"
          alt="Takedown during wrestling match"
          caption="Takedown"
          className="h-48 sm:h-50 md:h-52 w-full"
          objectPosition="center 90%"
        />

        <div className="bg-gray-100 rounded-xl shadow-sm p-4 sm:p-5">
          <h4 className="text-base sm:text-lg font-semibold text-gray-800">Lessons from the Mat</h4>
          <ul className="text-gray-700 space-y-1.5 sm:space-y-2">
            {lessons.map((lesson, index) => (
              <li key={index} className="flex items-start">
                <Icon
                  name="check"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 mr-1.5 sm:mr-2 flex-shrink-0 mt-1.25"
                />
                <span className="text-sm sm:text-base">{lesson}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
