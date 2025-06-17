import SectionHeader from '@/components/common/SectionHeader';
import Icon from '@/components/ui/Icon';

/**
 * JourneySection - Professional journey and approach to software development
 */
export default function JourneySection() {
  // Define the key values to display as an array of objects for better maintainability
  const keyValues = [
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
    <section className="py-7 fade-in-up">
      <SectionHeader title="My Journey" />
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl px-6 pt-6 pb-4 border border-indigo-100">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Journey Text */}
          <div className="flex-1 text-gray-800">
            <p className="text-lg mb-4">
              I'm a Computer Science student at Carnegie Mellon University, pursuing a concentration
              in Software Engineering and a minor in History. My path in tech has been driven by a
              fascination with how software can solve complex problems and improve lives.
            </p>
            <p className="mb-4">
              Through CMU coursework and hands-on projects, I've built a strong foundation in
              everything from low-level systems programming to full-stack application development.
              I'm fluent in multiple programming languages and comfortable with modern tools and
              practices.
            </p>
            <p className="mb-4">
              I'm motivated by the opportunity to build technology that makes a meaningful impact,
              whether it's designing applications with RESTful APIs or mentoring high school
              students through their first coding experiences. I aim to create software that serves
              real needs while maintaining technical excellence.
            </p>
          </div>

          {/* Key Values */}
          <div className="flex-shrink-0 lg:w-60 space-y-5">
            {keyValues.map((value) => (
              <div
                key={value.id}
                className="bg-white px-4 py-1.25 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-50 p-2.5 ml-4.75 rounded-lg flex items-center justify-center">
                    <Icon name={value.icon as any} className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 pb-3.25">{value.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
