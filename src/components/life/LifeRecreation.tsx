import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * Sport activity data
 */
interface ActivityItem {
  name: string;
  venue: string;
}

/**
 * Sports activities data
 */
const activities: ActivityItem[] = [
  { name: 'Volleyball', venue: 'Parks with family & friends' },
  { name: 'Golf', venue: 'Driving range & TopGolf' },
  { name: 'Tennis', venue: 'Campus & local courts' },
  { name: 'Spikeball', venue: 'Beach & park meetups' },
];

/**
 * LifeRecreation - Recreation and outdoor activities section
 *
 * Showcases sports, outdoor adventures and recreational activities
 */
export default function LifeRecreation() {
  return (
    <section className="py-8">
      <SectionTitle icon="mountains" title="Recreation" />

      <div className="grid grid-cols-5 gap-6 mb-6">
        {/* Left Column - Kayaking & Text */}
        <div className="col-span-3 flex flex-col gap-6">
          <ImageWithOverlay
            src="/images/life/kayaking_fam.jpg"
            alt="Kayaking with family"
            caption="Summer Kayaking"
            className="h-72 w-full"
            objectPosition="center"
          />

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-grow">
            <p className="text-base text-gray-700">
              Whether hiking mountain trails, kayaking with friends, or playing pickup games in the
              park, these outdoor activities help me maintain balance and perspective. Time in
              nature refreshes my creativity and clears my mind, qualities that enhance both my
              personal life and approach to technical problem solving.
            </p>
          </div>
        </div>

        {/* Right Column - Bear Mountain */}
        <div className="col-span-2">
          <ImageWithOverlay
            src="/images/life/bear_mountain.jpg"
            alt="Hiking on Bear Mountain"
            caption="Bear Mountain"
            className="h-full min-h-[24rem] w-full"
            objectPosition="center"
          />
        </div>
      </div>

      {/* Sports Section */}
      <div className="bg-gray-100 rounded-xl p-5 pt-1 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Favorite Sports</h3>
        <div className="grid grid-cols-4 gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-indigo-600 font-semibold mb-1">{activity.name}</div>
              <div className="text-sm text-gray-600">{activity.venue}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
