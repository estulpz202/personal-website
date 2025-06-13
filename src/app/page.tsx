import Container from '@/components/common/Container';
import HeroSection from '@/components/home/HeroSection';
import RecentWorkSection from '@/components/home/RecentWorkSection';
import SkillsSection from '@/components/skills/SkillsSection';
import ContactCTA from '@/components/home/ContactCTA';

export default function HomePage() {
  return (
    <main>
      <Container>
        {/* Hero Section */}
        <HeroSection />

        <div className="w-full border-t border-gray-200 my-6"></div>

        {/* Recent Work Section */}
        <RecentWorkSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactCTA />
      </Container>
    </main>
  );
}
