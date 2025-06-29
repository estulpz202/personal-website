import Container from '@/components/common/Container';
import LifeHero from '@/components/life/LifeHero';
import LifeMartialArts from '@/components/life/LifeMartialArts';
import LifeRecreation from '@/components/life/LifeRecreation';
import LifeDogs from '@/components/life/LifeDogs';
import LifeTeachOutreach from '@/components/life/LifeTeachOutreach';
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
        <LifeMartialArts />
        <LifeRecreation />
        <LifeDogs />
        <LifeTeachOutreach />
        <LifeFamily />
        <LifeOther />
        <LifeCTA />
      </Container>
    </main>
  );
}
