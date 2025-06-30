import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * Props for sports activities data
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
    <section className="py-6 sm:py-7 md:py-8">
      <SectionTitle icon="mountains" title="Recreation" />

      {/* Responsive grid - 1 column on mobile, 5 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
        {/* Left Column - Kayaking & Text */}
        <div className="md:col-span-3 flex flex-col gap-4 sm:gap-5 md:gap-6">
          <ImageWithOverlay
            src="/images/life/kayaking_fam.jpg"
            alt="Kayaking with family"
            caption="Summer Kayaking"
            className="h-52 sm:h-68 md:h-72 w-full"
            objectPosition="center 45%"
          />

          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 flex-grow">
            <p className="text-sm sm:text-base text-gray-700">
              Whether hiking mountain trails, kayaking with friends, or playing pickup games in the
              park, these outdoor activities help me maintain balance and perspective. Time in
              nature refreshes my creativity and clears my mind, qualities that enhance both my
              personal life and approach to technical problem solving.
            </p>
          </div>
        </div>

        {/* Right Column - Bear Mountain */}
        <div className="md:col-span-2">
          <ImageWithOverlay
            src="/images/life/bear_mountain.jpg"
            alt="Hiking on Bear Mountain"
            caption="Bear Mountain"
            className="h-116 sm:h-152 md:h-full w-full"
            objectPosition="center"
          />
        </div>
      </div>

      {/* Sports Section */}
      <div className="bg-gray-100 rounded-xl p-4 pt-1 sm:p-5 sm:pt-1 shadow-sm">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Favorite Sports</h3>

        {/* Responsive grid - 2 columns on mobile, 4 columns on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-2 sm:p-3 text-center shadow-sm hover:shadow-md active:shadow-md transition-shadow duration-200"
            >
              <div className="text-indigo-600 font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">
                {activity.name}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">{activity.venue}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
