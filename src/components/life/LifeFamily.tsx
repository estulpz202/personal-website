import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * LifeFamily - Family and connections section
 *
 * Showcases family relationships and personal connections
 */
export default function LifeFamily() {
  return (
    <section className="py-6 sm:py-7 md:py-8">
      <SectionTitle icon="heart" title="Family" />

      {/* Responsive grid - 1 column on mobile, 5 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
        {/* Left Column - Christmas & Text */}
        <div className="md:col-span-3 flex flex-col gap-4 sm:gap-5 md:gap-6">
          <ImageWithOverlay
            src="/images/life/christmas_fam.jpg"
            alt="Family Christmas photo"
            caption="Christmas Celebrations"
            className="h-52 sm:h-68 md:h-72 w-full"
            objectPosition="center 48%"
          />
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 flex-grow">
            <p className="text-sm sm:text-base text-gray-700">
              Family means everything to me. It keeps me grounded and gives me perspective. From
              holiday traditions to life's big milestones, these relationships remind me what truly
              matters. The values they've instilled in me, like compassion and perseverance, shape
              how I show up in both life and work.
            </p>
          </div>
        </div>

        {/* Right Column - Nephew */}
        <div className="md:col-span-2">
          <ImageWithOverlay
            src="/images/life/nephew.jpg"
            alt="Holding my newborn nephew"
            caption="Meeting My Nephew"
            className="h-80 sm:h-88 md:h-full w-full"
            objectPosition="center 20%"
          />
        </div>
      </div>
    </section>
  );
}
