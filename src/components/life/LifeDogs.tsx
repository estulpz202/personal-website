import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * LifeDogs - Canine companions section
 *
 * Showcases pet dogs and their impact
 */
export default function LifeDogs() {
  return (
    <section className="py-6 sm:py-7 md:py-8">
      <SectionTitle icon="paw" title="My Pack" />

      {/* Responsive grid - 1 column on mobile, 5 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
        {/* Left Column - Dogs & Text */}
        <div className="md:col-span-3 flex flex-col gap-4 sm:gap-5 md:gap-6">
          <ImageWithOverlay
            src="/images/life/dogs.jpg"
            alt="My three dogs on their bed"
            caption="Three of a Kind"
            className="h-44 sm:h-60 md:h-64 w-full"
            objectPosition="center"
          />
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 flex-grow">
            <p className="text-sm sm:text-base text-gray-700">
              At home, I'm proudly a dog person. Our three dogs fill the house with joy, energy, and
              just the right amount of chaos. From training sessions and long walks to quiet moments
              when they all pile onto their bed, they bring warmth and balance to our days. They've
              taught me patience, empathy, and how to appreciate the little things.
            </p>
          </div>
        </div>

        {/* Right Column - Kane */}
        <div className="md:col-span-2">
          <ImageWithOverlay
            src="/images/life/kane_sunglasses.jpg"
            alt="My dog Kane wearing sunglasses"
            caption="Kane in Style"
            className="h-96 sm:h-152 md:h-full w-full"
            objectPosition="bottom"
          />
        </div>
      </div>
    </section>
  );
}
