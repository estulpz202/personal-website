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
    description: 'Reducing social isolation among senior residents in care',
  },
];

/**
 * LifeTeaching - Teaching and leadership section
 *
 * Showcases educational experiences and community involvement
 */
export default function LifeTeaching() {
  return (
    <section className="py-8">
      <SectionTitle icon="teaching" title="Teaching & Leadership" />

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Left Column - Gcode & Text */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <ImageWithOverlay
            src="/images/life/gcode.jpg"
            alt="Teaching students at Generation Code"
            caption="Teaching at Gcode"
            className="h-64 w-full"
            objectPosition="center"
            rounded={false}
          />
          <div className="p-5 pt-0">
            <h3 className="text-xl font-semibold text-gray-800">CS & Mobile Development</h3>
            <p className="text-base text-gray-700">
              Teaching high school students through Prime Factors Learning Lab was one of my most
              rewarding experiences. I designed curriculum for mobile development, mentored teams
              through their first app projects, and watched their confidence and skills grow.
            </p>
          </div>
        </div>

        {/* Right Column - Escape Room & Text */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <ImageWithOverlay
            src="/images/life/escaperoom.jpg"
            alt="Tech escape room for PFLL"
            caption="Tech Escape Room"
            className="h-64 w-full"
            objectPosition="center"
            rounded={false}
          />
          <div className="p-5 pt-0">
            <h3 className="text-xl font-semibold text-gray-800">Creative Education</h3>
            <p className="text-base text-gray-700">
              I helped design and run a Tech Escape Room for high school students—creating
              challenging puzzles that required teamwork and problem-solving skills. It was a fun
              way to get students engaged with technology concepts outside traditional classrooms.
            </p>
          </div>
        </div>
      </div>

      {/* Community Involvement Section */}
      <div className="bg-gray-100 rounded-xl p-5 pt-1 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800">Community Involvement</h3>
        <div className="grid grid-cols-3 gap-4">
          {communities.map((community, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-indigo-600 font-semibold mb-1">{community.name}</div>
              <div className="text-sm text-gray-600">{community.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
