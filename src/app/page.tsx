import Container from '@/components/common/Container';
import HeroSection from '@/components/home/HeroSection';
import RecentWorkSection from '@/components/home/RecentWorkSection';
import SkillsSection from '@/components/skills/SkillsSection';
import ContactCTA from '@/components/home/ContactCTA';

/**
 * HomePage component - main landing page of the portfolio site
 */
export default function HomePage() {
  return (
    <main>
      <Container>
        {/* Personal introduction with photo, education, and bio */}
        <HeroSection />

        {/* Visual separator between main sections */}
        <div className="w-full border-t border-gray-200 my-6"></div>

        {/* Featured projects showcase */}
        <RecentWorkSection />

        {/* Technical capabilities and expertise */}
        <SkillsSection />

        {/* Call-to-action for potential collaborators */}
        <ContactCTA />
      </Container>
    </main>
  );
}
