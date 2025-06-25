import Container from '@/components/common/Container';
import EducationSection from '@/components/about/EducationSection';
import ExperienceSection from '@/components/about/ExperienceSection';
import SkillsSection from '@/components/skills/SkillsSection';
import JourneySection from '@/components/about/JourneySection';
import BeyondCodeSection from '@/components/about/BeyondCodeSection';

/**
 * Page metadata for browser tab display
 */
export const metadata = {
  title: 'About',
};

/**
 * AboutPage - Professional background and skills overview
 */
export default function AboutPage() {
  return (
    <main className="fade-in-up">
      <Container>
        {/* Hero Banner - Minimal */}
        <div className="py-8 sm:py-9 md:py-10 border-b border-gray-100">
          <h1 className="text-3xl sm:text-[33px] md:text-4xl font-bold mb-3 sm:mb-4">
            Hi, I'm Estuardo Lopez
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            Building software that matters with purpose, precision, and passion.
          </p>
        </div>

        {/* Education Section Component */}
        <EducationSection />

        {/* Experience Section Component */}
        <ExperienceSection />

        {/* Skills Section Component */}
        <SkillsSection />

        {/* Journey Section Component */}
        <JourneySection />

        {/* Beyond Code Section - Link to Life Page */}
        <BeyondCodeSection />
      </Container>
    </main>
  );
}
