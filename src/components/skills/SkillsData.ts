/**
 * Types and data for skills section
 */

export type SkillCategory = 'languages' | 'tools' | 'development' | 'soft';

export const skillsData: Record<
  SkillCategory,
  {
    title: string;
    skills: Array<{ name: string }>;
  }
> = {
  languages: {
    title: 'Programming Languages',
    skills: [
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'C' },
      { name: 'JavaScript' },
      { name: 'Swift' },
      { name: 'SML' },
      { name: 'HTML/CSS' },
    ],
  },
  tools: {
    title: 'Technical Tools',
    skills: [
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'FastAPI' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'NPM/Yarn' },
      { name: 'Maven' },
      { name: 'Poetry' },
      { name: 'Command Line' },
      { name: 'Firebase' },
      { name: 'Tailwind CSS' },
    ],
  },
  development: {
    title: 'Development Skills',
    skills: [
      { name: 'Algorithms' },
      { name: 'Data Structures' },
      { name: 'OOP' },
      { name: 'Functional Programming' },
      { name: 'REST APIs' },
      { name: 'System Design' },
      { name: 'Full Stack Development' },
      { name: 'Testing' },
      { name: 'CI/CD' },
      { name: 'Version Control' },
      { name: 'UI/UX Basics' },
      { name: 'DevOps Basics' },
    ],
  },
  soft: {
    title: 'Soft Skills',
    skills: [
      { name: 'Communication' },
      { name: 'Team Leadership' },
      { name: 'Project Management' },
      { name: 'Problem Solving' },
      { name: 'Mentorship' },
      { name: 'Time Management' },
      { name: 'Adaptability' },
      { name: 'Critical Thinking' },
    ],
  },
};

/**
 * Home page simplified skills data (subset for homepage)
 */
export type Skill = {
  name: string;
  icon: string;
};

export type HomeSkillCategory = {
  title: string;
  skills: Skill[];
};

export const homeSkillsData: HomeSkillCategory[] = [
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
