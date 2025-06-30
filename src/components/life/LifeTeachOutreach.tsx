import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * Props for community involvement data
 */
interface CommunityItem {
  name: string;
  description: string;
}

/**
 * Community involvement data
 */
const communities: CommunityItem[] = [
  {
    name: 'Acts2Fellowship',
    description: 'Christian campus ministry focused on faith, fellowship, and personal growth',
  },
  {
    name: 'SALSA',
    description: 'Raise awareness of issues facing Latino and Spanish-speaking students',
  },
  {
    name: 'GlamourGals',
    description: 'Reducing social isolation among seniors in care through meaningful connection',
  },
];

/**
 * LifeTeachOutreach - Teaching and outreach section
 *
 * Showcases educational experiences and community involvement
 */
export default function LifeTeachOutreach() {
  return (
    <section className="py-6 sm:py-7 md:py-8">
      <SectionTitle icon="teaching" title="Teaching & Outreach" />

      {/* Responsive grid - 1 column on mobile, 2 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
        {/* Left Column - Gcode & Text */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <ImageWithOverlay
            src="/images/life/gcode.jpg"
            alt="Teaching students at Generation Code"
            caption="Generation Code"
            className="h-48 sm:h-60 md:h-64 w-full"
            objectPosition="center 35%"
            banner={true}
          />
          <p className="p-4 sm:p-5 text-sm sm:text-base text-gray-700">
            Teaching high school students through Gcode at PFLL was one of my most rewarding
            experiences. I helped design a curriculum in tech and computer science, guided student
            teams through their first coding projects, and saw their confidence grow with every
            milestone.
          </p>
        </div>

        {/* Right Column - Escape Room & Text */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <ImageWithOverlay
            src="/images/life/escaperoom.jpg"
            alt="Tech Escape Room for PFLL"
            caption="Tech Escape Room"
            className="h-48 sm:h-60 md:h-64 w-full"
            objectPosition="center 35%"
            banner={true}
          />
          <p className="p-4 sm:p-5 text-sm sm:text-base text-gray-700">
            I volunteered to help design and run a Tech Escape Room for high school students,
            crafting puzzles that encouraged teamwork, critical thinking, and creativity. It was a
            fun and interactive way to introduce tech concepts outside the traditional classroom.
          </p>
        </div>
      </div>

      {/* Community Involvement Section */}
      <div className="bg-gray-100 rounded-xl p-4 pt-1 sm:p-5 sm:pt-1 shadow-sm">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Community Involvement</h3>

        {/* Responsive grid - 1 column on mobile, 3 columns on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {communities.map((community, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md active:shadow-md transition-shadow duration-200"
            >
              <div className="text-indigo-600 font-semibold mb-1">{community.name}</div>
              <div className="text-xs sm:text-sm text-gray-600">{community.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
