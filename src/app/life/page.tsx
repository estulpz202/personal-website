import Container from '@/components/common/Container';
import LifeHero from '@/components/life/LifeHero';
import LifeAthletics from '@/components/life/LifeAthletics';
import LifeOutdoor from '@/components/life/LifeOutdoor';
import LifeDogs from '@/components/life/LifeDogs';
import LifeTeaching from '@/components/life/LifeTeaching';
import LifeFamily from '@/components/life/LifeFamily';
import LifeOther from '@/components/life/LifeOther';
import LifeCTA from '@/components/life/LifeCTA';

/**
 * Page metadata for browser tab display
 */
export const metadata = {
  title: 'Life',
};

/**
 * LifePage - Showcases personality, hobbies, and values through a narrative, visual approach.
 */
export default function LifePage() {
  return (
    <main className="py-10 fade-in-up">
      <Container>
        <LifeHero />
        <LifeAthletics />
        <LifeOutdoor />
        <LifeDogs />
        <LifeTeaching />
        <LifeFamily />
        <LifeOther />
        <LifeCTA />
      </Container>
    </main>
  );
}
