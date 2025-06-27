import Icon from '@/components/ui/Icon';
import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * LifeAthletics - Martial arts and athletics section
 *
 * Showcases wrestling and martial arts experiences and skills
 */
export default function LifeMartialArts() {
  return (
    <section className="py-10">
      <SectionTitle icon="wrestling" title="Martial Arts" />

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Description */}
        <div className="flex-1">
          <p className="text-base text-gray-700 mb-4">
            Wrestling shaped who I am today. As Varsity Captain in high school, I gained discipline,
            mental toughness, and leadership experience. The sport taught me to persevere through
            setbacks and lift others up when they needed support.
          </p>
          <p className="text-base text-gray-700">
            These days, I stay active with boxing and CMU's Grappling Club, both learning from
            experienced members and teaching. The resilience and respect at the heart of combat
            sports carry over into everything I do, from coding to collaboration.
          </p>
        </div>
        {/* Wrestling Team */}
        <div className="flex-1">
          <ImageWithOverlay
            src="/images/life/wrest_team.jpg"
            alt="Wrestling team holding trophy"
            caption="HS Wrestling Team"
            className="h-60 w-full"
            objectPosition="top"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageWithOverlay
          src="/images/life/takedown.jpg"
          alt="Takedown during wrestling match"
          caption="Takedown"
          className="h-56 w-full"
          objectPosition="bottom"
        />
        <div className="bg-gray-100 rounded-xl shadow-md p-6 h-56">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Lessons from the Mat</h4>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-center">
              <Icon name="check" className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
              <span>Leadership by example and encouragement</span>
            </li>
            <li className="flex items-center">
              <Icon name="check" className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
              <span>Disciplined practice creates consistent results</span>
            </li>
            <li className="flex items-center">
              <Icon name="check" className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
              <span>Mental grit through challenges and competition</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
