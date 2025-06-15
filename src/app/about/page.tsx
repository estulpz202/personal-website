import Container from '@/components/common/Container';
import EducationSection from '@/components/about/EducationSection';

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
    <main>
      <Container>
        {/* Hero Banner - Minimal */}
        <div className="py-12 border-b border-gray-100 fade-in-up">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I'm Estuardo Lopez</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Building software that matters with purpose, precision, and passion.
          </p>
        </div>

        {/* Education Section Component */}
        <EducationSection />
      </Container>
    </main>
  );
}
