import Container from '@/components/common/Container';
import HeroSection from '@/components/home/HeroSection';
import RecentWorkSection from '@/components/home/RecentWorkSection';

export default function HomePage() {
  return (
    <main>
      <Container>
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Projects Section */}
        <RecentWorkSection />

        {/* Additional sections to come */}
      </Container>
    </main>
  );
}
