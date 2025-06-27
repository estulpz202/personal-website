import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * Outdoor activity data
 */
interface ActivityItem {
  name: string;
  location: string;
}

/**
 * Activities data
 */
const activities: ActivityItem[] = [
  { name: 'Hiking', location: 'Bear Mountain, NJ trails' },
  { name: 'Kayaking', location: 'Lakes and calm rivers' },
  { name: 'Spikeball', location: 'Parks and beaches' },
  { name: 'Volleyball', location: 'Beach and indoor courts' },
];

/**
 * LifeOutdoor - Outdoor activities section
 *
 * Showcases outdoor adventures and recreational activities
 */
export default function LifeOutdoor() {
  return (
    <section className="py-8 fade-in-up">
      <SectionTitle icon="mountains" title="Outdoor Adventures" />

      <div className="grid grid-cols-5 gap-6 mb-8">
        <div className="col-span-3">
          <ImageWithOverlay
            src="/images/life/kayaking.jpg"
            alt="Kayaking with family and friends"
            caption="Kayaking Adventures"
            className="h-72 w-full"
          />
        </div>

        <div className="col-span-2">
          <ImageWithOverlay
            src="/images/life/bear.jpg"
            alt="Hiking on Bear Mountain"
            caption="Bear Mountain Hike"
            className="h-72 w-full"
          />
        </div>
      </div>

      <p className="text-base text-gray-700 mb-6">
        The natural world offers both challenge and rejuvenation. Whether I'm hiking up Bear
        Mountain, kayaking with family and friends, or playing volleyball or spikeball at the park,
        these activities help me maintain balance and perspective. There's something about being
        outdoors that clears the mind and refreshes creativity—skills that are essential in both
        personal life and technical problem-solving.
      </p>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Favorite Outdoor Activities</h3>
        <div className="grid grid-cols-4 gap-4">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-indigo-600 font-semibold mb-1">{activity.name}</div>
              <div className="text-sm text-gray-600">{activity.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
