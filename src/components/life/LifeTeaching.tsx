import { SectionTitle, ImageWithOverlay } from './LifeAthletics';

/**
 * Community involvement data
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
    description: 'Faith-based community and mentorship program at CMU',
  },
  {
    name: 'SALSA',
    description: 'Supporting Latino and Spanish-speaking communities at CMU',
  },
  {
    name: 'Red Cross',
    description: 'Previously organized community service events',
  },
];

/**
 * LifeTeaching - Teaching and leadership section
 *
 * Showcases educational experiences and community involvement
 */
export default function LifeTeaching() {
  return (
    <section className="py-8 fade-in-up">
      <SectionTitle icon="teaching" title="Teaching & Leadership" />

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <ImageWithOverlay
            src="/images/life/gcode_teaching.jpg"
            alt="Teaching students at GCode"
            caption="CS Teaching at GCode"
            className="h-64 w-full mb-6"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">CS & Mobile Development</h3>
          <p className="text-base text-gray-700">
            Teaching high school students through Prime Factors Learning Lab was one of my most
            rewarding experiences. I designed curriculum for mobile development, mentored teams
            through their first app projects, and watched their confidence and skills grow.
          </p>
        </div>

        <div>
          <ImageWithOverlay
            src="/images/life/pfll_escaperoom.jpg"
            alt="Tech Escape Room"
            caption="Tech Escape Room"
            className="h-64 w-full mb-6"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Creative Education</h3>
          <p className="text-base text-gray-700">
            I helped design and run a Tech Escape Room for high school students—creating challenging
            puzzles that required teamwork and problem-solving skills. It was a fun way to get
            students engaged with technology concepts outside traditional classrooms.
          </p>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Community Involvement</h3>
        <div className="grid grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <div key={index} className="bg-white rounded-lg p-5 shadow-sm">
              <h4 className="text-lg font-medium text-indigo-600 mb-2">{community.name}</h4>
              <p className="text-gray-700 text-sm">{community.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
