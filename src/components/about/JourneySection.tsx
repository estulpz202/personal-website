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
              in Software Engineering and a minor in History. My path in tech has been driven by a
              fascination with how software can solve complex problems and improve lives.
            </p>
            <p className="mb-3 sm:mb-4">
              Through CMU coursework and hands-on projects, I've built a strong foundation in
              everything from low-level programming to fullstack application development. I'm fluent
              in multiple programming languages and comfortable with modern tools and practices.
            </p>
            <p>
              I'm motivated by the opportunity to build technology that makes a meaningful impact,
              whether it's designing applications with RESTful APIs or mentoring high school
              students through their first coding experiences. I aim to create software that serves
              real needs while maintaining technical excellence.
            </p>
          </div>

          {/* Key Values */}
          <div className="w-full lg:w-60 flex flex-col md:flex-row lg:flex-col gap-2 sm:gap-3">
            {keyValues.map((value) => (
              <div
                key={value.id}
                className="
                  flex-1 lg:flex-auto bg-white px-3 sm:px-4 py-1 sm:py-1.25
                  rounded-lg border border-indigo-100 shadow-sm
                  hover:shadow-md active:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-indigo-50 p-2 sm:p-2.5 ml-4 sm:ml-4.75 rounded-lg flex items-center justify-center">
                    <Icon name={value.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-medium text-sm sm:text-base text-gray-800 pb-2.5 sm:3.25">
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
