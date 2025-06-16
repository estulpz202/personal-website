/**
 * Type definitions for a single skill, category, and skills data
 */
export type Skill = {
  name: string;
  proficiency?: number; // Optional: 1-5 scale for the about page
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
      { name: 'Python', proficiency: 5 },
      { name: 'TypeScript', proficiency: 4 },
      { name: 'Java', proficiency: 4 },
      { name: 'C', proficiency: 3 },
      { name: 'JavaScript', proficiency: 4 },
      { name: 'Swift', proficiency: 3 },
      { name: 'SML', proficiency: 3 },
      { name: 'HTML/CSS', proficiency: 4 },
    ],
  },
  frameworks: {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'FastAPI', proficiency: 5 },
      { name: 'Node.js', proficiency: 4 },
      { name: 'Next.js', proficiency: 4 },
      { name: 'Tailwind CSS', proficiency: 4 },
      { name: 'React', proficiency: 4 },
      { name: 'Express.js', proficiency: 3 },
      { name: 'Spring Boot', proficiency: 3 },
      { name: 'UIKit', proficiency: 3 },
    ],
  },
  tools: {
    title: 'Tools & Platforms',
    skills: [
      { name: 'GitHub', proficiency: 5 },
      { name: 'Git', proficiency: 5 },
      { name: 'Docker', proficiency: 4 },
      { name: 'VS Code', proficiency: 5 },
      { name: 'Firebase', proficiency: 3 },
      { name: 'AWS', proficiency: 3 },
      { name: 'Jira', proficiency: 4 },
      { name: 'Figma', proficiency: 3 },
    ],
  },
  practices: {
    title: 'Development Practices',
    skills: [
      { name: 'Testing', proficiency: 4 },
      { name: 'DevOps', proficiency: 3 },
      { name: 'LLM API Integration', proficiency: 4 },
      { name: 'CI/CD', proficiency: 3 },
      { name: 'Agile/Scrum', proficiency: 4 },
      { name: 'REST API Design', proficiency: 5 },
      { name: 'Code Review', proficiency: 4 },
      { name: 'System Design', proficiency: 4 },
    ],
  },
  concepts: {
    title: 'Computer Science',
    skills: [
      { name: 'Data Structures', proficiency: 5 },
      { name: 'Algorithms', proficiency: 5 },
      { name: 'Object-Oriented Programming', proficiency: 5 },
      { name: 'Functional Programming', proficiency: 4 },
      { name: 'Database Design', proficiency: 4 },
      { name: 'Computer Architecture', proficiency: 3 },
      { name: 'Operating Systems', proficiency: 3 },
      { name: 'Networking', proficiency: 3 },
    ],
  },
  soft: {
    title: 'Soft Skills',
    skills: [
      { name: 'Communication', proficiency: 5 },
      { name: 'Team Leadership', proficiency: 4 },
      { name: 'Project Management', proficiency: 4 },
      { name: 'Problem Solving', proficiency: 5 },
      { name: 'Mentorship', proficiency: 4 },
      { name: 'Time Management', proficiency: 4 },
      { name: 'Adaptability', proficiency: 5 },
      { name: 'Critical Thinking', proficiency: 5 },
    ],
  },
};
