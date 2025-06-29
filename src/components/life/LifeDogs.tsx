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
              At home, I'm a proud dog person. Our three dogs bring endless joy, energy, and
              occasional chaos to our household. From training sessions to long walks to cozy
              moments when they all pile onto their bed together, they're a constant reminder of the
              simple joys in life. They've taught me patience, consistency, and the value of
              unconditional enthusiasm.
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
