import Link from 'next/link';
import SectionHeader from '@/components/common/SectionHeader';
import SkillIcon from '@/components/skills/SkillIcon';
import Icon from '@/components/ui/Icon';

// Skill types and data
type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Java', icon: 'java' },
      { name: 'C', icon: 'c' },
    ],
  },
  {
    title: 'Full Stack',
    skills: [
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      { name: 'GitHub', icon: 'github' },
      { name: 'LLM API', icon: 'llmapi' },
      { name: 'DevOps', icon: 'devops' },
      { name: 'Testing', icon: 'testing' },
    ],
  },
];

// Single skill card component
const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="flex-shrink-0">
        <SkillIcon name={skill.icon} className="h-6 w-6" />
      </div>
      <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section className="pt-7.5 pb-10 fade-in-up">
      <SectionHeader title="Technical Highlights" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((category) => (
          <div key={category.title} className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700 mb-2">{category.title}</h3>
            <div className="grid grid-cols-1 gap-2">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/about"
          className="text-indigo-500 font-medium hover:text-indigo-600 inline-flex items-center group px-1 py-0.5"
        >
          More about me
          <Icon
            name="arrow-right"
            className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
