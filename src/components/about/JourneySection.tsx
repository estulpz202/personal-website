// components/about/JourneySection.tsx
import SectionHeader from '@/components/common/SectionHeader';
import Icon from '@/components/ui/Icon';

/**
 * JourneySection - Professional journey and approach to software development
 */
export default function JourneySection() {
  return (
    <section className="py-7 fade-in-up">
      <SectionHeader title="My Journey" />
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-indigo-100">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Journey Text */}
          <div className="flex-1 text-gray-700">
            <p className="text-lg mb-4">
              I'm a Computer Science student at Carnegie Mellon University, pursuing a concentration
              in Software Engineering and a minor in History. My path in technology has been shaped
              by a fascination with how software can solve complex problems and improve lives.
            </p>
            <p className="mb-4">
              Through academic rigor at CMU and hands-on projects, I've built a strong foundation in
              everything from low-level systems programming to fullstack application development.
              I'm fluent in several programming languages and comfortable with modern development
              tools and practices.
            </p>
            <p className="mb-4">
              What drives me is the opportunity to create technology that has meaningful impact.
              Whether developing complex applications with RESTful APIs or mentoring high school
              students through their first programming experiences, I aim to build software that
              serves real needs while maintaining technical excellence.
            </p>
          </div>

          {/* Key Values */}
          <div className="flex-shrink-0 lg:w-60 space-y-5">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-50 p-2.5 rounded-lg flex items-center justify-center">
                  <Icon name="code-brackets" className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Technical Excellence</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-50 p-2.5 rounded-lg flex items-center justify-center">
                  <Icon name="users" className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Collaborative Mindset</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-50 p-2.5 rounded-lg flex items-center justify-center">
                  <Icon name="bulb" className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Continuous Learning</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
