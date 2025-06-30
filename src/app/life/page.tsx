import Container from '@/components/common/Container';
import LifeHero from '@/components/life/LifeHero';
import LifeFamily from '@/components/life/LifeFamily';
import LifeMartialArts from '@/components/life/LifeMartialArts';
import LifeTeachOutreach from '@/components/life/LifeTeachOutreach';
import LifeRecreation from '@/components/life/LifeRecreation';
import LifeDogs from '@/components/life/LifeDogs';
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
    <main className="py-6 sm:py-8 md:py-10 fade-in-up">
      <Container>
        <LifeHero />
        <LifeFamily />
        <LifeMartialArts />
        <LifeTeachOutreach />
        <LifeRecreation />
        <LifeDogs />
        <LifeOther />
        <LifeCTA />
      </Container>
    </main>
  );
}
