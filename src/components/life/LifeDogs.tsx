import { SectionTitle, ImageWithOverlay } from './LifeAthletics';

/**
 * LifeDogs - Canine companions section
 *
 * Showcases pet dogs and their impact
 */
export default function LifeDogs() {
  return (
    <section className="py-8 fade-in-up">
      <SectionTitle icon="paw" title="My Canine Companions" />

      <div className="flex gap-8 mb-8">
        <div className="flex-1">
          <ImageWithOverlay
            src="/images/life/dogs.jpg"
            alt="My three dogs on their bed"
            caption="The Gang All Together"
            className="h-80 w-full"
          />
        </div>

        <div className="flex-1">
          <ImageWithOverlay
            src="/images/life/kane_sunglasses.jpg"
            alt="My dog Kane wearing sunglasses"
            caption="Kane's Fashion Statement"
            className="h-80 w-full"
          />
        </div>
      </div>

      <p className="text-base text-gray-700 mb-6">
        At home, I'm a proud dog person. Our three dogs bring endless joy, energy, and occasional
        chaos to our household. From training sessions to long walks to cozy moments when they all
        pile onto their bed together, they're a constant reminder of the simple joys in life.
        They've taught me patience, consistency, and the value of unconditional enthusiasm.
      </p>
    </section>
  );
}
