import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';

export default function AboutPage() {
  return (
    <main>
      <Container>
        {/* About Me Section */}
        <section className="py-12">
          <SectionHeader title="About Me" />
          <p className="text-base text-gray-700 mb-6">
            I'm Estuardo Lopez, a Computer Science student at Carnegie Mellon University, pursuing a
            concentration in Software Engineering and a minor in History. I'm passionate about
            building meaningful, impactful software and drawn to projects that challenge me both
            technically and creatively.
          </p>
          <p className="text-base text-gray-700 mb-6">
            Through a mix of academic rigor and hands-on experience, I've developed a strong
            foundation in low-level systems programming, algorithms, OOP, and fullstack development.
            I've built scalable backends with RESTful APIs, designed responsive frontends with
            React, and contributed to collaborative engineering teams using GitHub, Docker, and
            CI/CD workflows.
          </p>
          <p className="text-base text-gray-700 mb-6">
            Beyond technical skills, I value real-world impact, purpose-driven teamwork, and
            continuous growth as a developer and teammate.
          </p>
        </section>

        {/* Skills Section */}
        <section className="py-12">
          <SectionHeader title="Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-700">
            {skills.map((section) => (
              <div key={section.category}>
                <h3 className="font-semibold mb-2">{section.category}</h3>
                <ul className="list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

const skills = [
  {
    category: 'Programming Languages',
    items: ['C', 'Python', 'Java', 'TypeScript', 'SML', 'Swift', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Technical Tools',
    items: ['GitHub', 'Poetry', 'FastAPI', 'NPM/Yarn', 'Maven', 'Command Line (Bash/SSH)'],
  },
  {
    category: 'Development Skills',
    items: [
      'Algorithms & Data Structures',
      'Object-Oriented Programming',
      'Functional Programming',
      'Systems Programming',
      'API Design',
      'Full Stack Development',
      'UI/UX Design',
      'Version Control',
      'Testing',
      'DevOps Basics',
    ],
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'Collaboration', 'Adaptability', 'Organization', 'Leadership'],
  },
];
