import SectionHeader from '@/components/common/SectionHeader';
import Icon, { type IconName } from '@/components/ui/Icon';

/**
 * JourneySection - Professional journey and approach to software development
 */
export default function JourneySection() {
  // Define the key values to display as an array of objects for better maintainability
  const keyValues: Array<{
    id: string;
    icon: IconName;
    title: string;
  }> = [
    {
      id: 'technical-excellence',
      icon: 'code-brackets',
      title: 'Technical Excellence',
    },
    {
      id: 'collaborative-mindset',
      icon: 'users',
      title: 'Collaborative Mindset',
    },
    {
      id: 'continuous-learning',
      icon: 'bulb',
      title: 'Continuous Learning',
    },
  ];

  return (
    <section className="py-5 sm:py-6 md:py-7">
      <SectionHeader title="My Journey" />
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-6 pb-3 sm:pb-4 border border-indigo-100">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-8">
          {/* Journey Text */}
          <div className="flex-1 text-gray-700">
            <p className="text-base sm:text-lg mb-3 sm:mb-4">
              I'm a Computer Science student at Carnegie Mellon University, pursuing a concentration
              in Software Engineering and a minor in History. My interest in tech started with a
              curiosity about how software can solve real problems and make things work better in
              everyday life.
            </p>
            <p className="mb-3 sm:mb-4">
              At CMU, that curiosity has grown through coursework and hands-on projects, from
              low-level systems to fullstack applications. I've worked with a range of languages and
              tools, and this summer I'll be joining Barclays as a Technology Developer Intern.
            </p>
            <p>
              I enjoy building software that is clean, practical, and reliable, and I've also spent
              time mentoring students as they learn to code. I'm interested in creating technology
              that's not just technically strong, but genuinely useful.
            </p>
          </div>

          {/* Key Values */}
          <div className="w-full lg:w-60 flex flex-col md:flex-row lg:flex-col gap-3 sm:gap-4">
            {keyValues.map((value) => (
              <div
                key={value.id}
                className="
                  flex-grow bg-white px-3 sm:px-4 py-0.5 sm:py-1
                  rounded-lg border border-indigo-100 shadow-sm
                  hover:shadow-md active:shadow-md transition-shadow duration-300
                "
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-indigo-50 p-2 sm:p-2.5 ml-4 md:ml-1 lg:ml-3 rounded-lg flex items-center justify-center">
                    <Icon name={value.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-medium text-sm sm:text-base text-gray-800 pb-3.5">
                    {value.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
