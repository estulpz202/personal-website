import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * LifeDogs - Canine companions section
 *
 * Showcases pet dogs and their impact
 */
export default function LifeDogs() {
  return (
    <section className="py-8">
      <SectionTitle icon="paw" title="My Pack" />

      <div className="grid grid-cols-5 gap-6">
        {/* Left Column - Dogs & Text */}
        <div className="col-span-3 flex flex-col gap-6">
          <ImageWithOverlay
            src="/images/life/dogs.jpg"
            alt="My three dogs on their bed"
            caption="Three of a Kind"
            className="h-64 w-full"
            objectPosition="center"
          />

          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-grow">
            <p className="text-base text-gray-700">
              At home, I'm proudly a dog person. Our three dogs fill the house with joy, energy, and
              just the right amount of chaos. From training sessions and long walks to quiet moments
              when they all pile onto their bed, they bring warmth and balance to our days. They've
              taught me patience, empathy, and how to appreciate the little things.
            </p>
          </div>
        </div>

        {/* Right Column - Kane */}
        <div className="col-span-2">
          <ImageWithOverlay
            src="/images/life/kane_sunglasses.jpg"
            alt="My dog Kane wearing sunglasses"
            caption="Kane in Style"
            className="h-full min-h-[24rem] w-full"
            objectPosition="bottom"
          />
        </div>
      </div>
    </section>
  );
}
