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
  { name: 'Volleyball', venue: 'At the park with family' },
  { name: 'Golf', venue: 'Top golf, the range, courses' },
  { name: 'Tennis', venue: 'Campus & local courts' },
  { name: 'Spikeball', venue: 'At the beach with friends ' },
];

/**
 * LifeRecreation - Recreation and outdoor activities section
 *
 * Showcases sports, outdoor adventures and recreational activities
 */
export default function LifeRecreation() {
  return (
    <section className="py-10">
      <SectionTitle icon="mountains" title="Recreation" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mb-8">
        {/* Left Column - Kayaking & Text */}
        <div className="md:col-span-3 flex flex-col">
          <ImageWithOverlay
            src="/images/life/kayaking.jpg"
            alt="Kayaking with family and friends"
            caption="Summer Kayaking"
            className="h-72 w-full mb-4 md:mb-6"
            objectPosition="center"
          />

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-grow">
            <p className="text-base text-gray-700">
              Whether hiking up Bear Mountain, kayaking with friends, or playing a pickup game,
              outdoor activities help me maintain balance and perspective. These experiences in
              nature and recreation clear my mind and refresh my creativity—qualities that enhance
              both my personal life and my approach to problem-solving in tech.
            </p>
          </div>
        </div>

        {/* Right Column - Bear Mountain */}
        <div className="md:col-span-2">
          <ImageWithOverlay
            src="/images/life/bear_mountain.jpg"
            alt="Hiking on Bear Mountain"
            caption="Bear Mountain View"
            className="h-full min-h-[24rem] w-full"
            objectPosition="center"
          />
        </div>
      </div>

      {/* Sports Section */}
      <div className="bg-gray-50 rounded-xl p-5 pt-1 md:p-6 md:pt-2 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Favorite Sports</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-indigo-600 font-semibold mb-1">{activity.name}</div>
              <div className="text-sm text-gray-600">{activity.venue}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
