import Icon from '@/components/ui/Icon';
import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * LifeMartialArts - Martial arts section
 *
 * Showcases wrestling and martial arts experiences and skills
 */
export default function LifeMartialArts() {
  return (
    <section className="py-8">
      <SectionTitle icon="wrestling" title="Martial Arts" />

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Description */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-grow">
          <p className="text-base text-gray-700 mb-4">
            Wrestling shaped who I am today. As Varsity Captain in HS, I gained discipline, mental
            toughness, and leadership experience. The sport taught me to push through setbacks and
            support others when they needed it.
          </p>
          <p className="text-base text-gray-700">
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
          className="h-64 w-full"
          objectPosition="top"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ImageWithOverlay
          src="/images/life/takedown.jpg"
          alt="Takedown during wrestling match"
          caption="Takedown"
          className="h-52 w-full"
          objectPosition="center 90%"
        />
        <div className="bg-gray-100 rounded-xl shadow-sm p-5">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Lessons from the Mat</h4>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-center">
              <Icon name="check" className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
              <span>Leading by example and lifting others up</span>
            </li>
            <li className="flex items-center">
              <Icon name="check" className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
              <span>Disciplined practice creates consistent results</span>
            </li>
            <li className="flex items-center">
              <Icon name="check" className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
              <span>Grit built from pressure, challenge, and persistence</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
