/**
 * Type definitions for a single skill, category, and skills data
 */
export type Skill = {
  name: string;
  icon?: string; // Optional: icon name for the home page
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type SkillsDataType = Record<string, SkillCategory>;

/**
 * Home page skills data
 */
export const homeSkillsData: SkillCategory[] = [
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

/**
 * Comprehensive skills data for the about page
 */
export const skillsData: SkillsDataType = {
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
  frameworks: {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'FastAPI' },
      { name: 'Node.js' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'React' },
      { name: 'Express.js' },
      { name: 'Spring Boot' },
      { name: 'UIKit' },
    ],
  },
  tools: {
    title: 'Tools & Platforms',
    skills: [
      { name: 'GitHub' },
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'VS Code' },
      { name: 'Firebase' },
      { name: 'AWS' },
      { name: 'Jira' },
      { name: 'Figma' },
    ],
  },
  practices: {
    title: 'Development Practices',
    skills: [
      { name: 'Testing' },
      { name: 'DevOps' },
      { name: 'LLM API Integration' },
      { name: 'CI/CD' },
      { name: 'Agile/Scrum' },
      { name: 'REST API Design' },
      { name: 'Code Review' },
      { name: 'System Design' },
    ],
  },
  concepts: {
    title: 'Computer Science',
    skills: [
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'Object-Oriented Programming' },
      { name: 'Functional Programming' },
      { name: 'Database Design' },
      { name: 'Computer Architecture' },
      { name: 'Operating Systems' },
      { name: 'Networking' },
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
