import { SectionTitle, ImageWithOverlay } from '@/components/life/LifeShared';

/**
 * LifeFamily - Family and connections section
 *
 * Showcases family relationships and personal connections
 */
export default function LifeFamily() {
  return (
    <section className="py-8">
      <SectionTitle icon="heart" title="Family" />

      <div className="grid grid-cols-5 gap-6">
        {/* Left Column - Christmas & Text */}
        <div className="col-span-3 flex flex-col gap-6">
          <ImageWithOverlay
            src="/images/life/christmas_fam.jpg"
            alt="Family Christmas photo"
            caption="Christmas Celebrations"
            className="h-72 w-full"
            objectPosition="center"
          />
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-grow">
            <p className="text-base text-gray-700">
              Family means everything to me. It keeps me grounded and gives me perspective. From
              holiday traditions to life's big milestones, these relationships remind me what truly
              matters. The values they've instilled in me, like honesty, compassion, and
              perseverance, shape how I show up in both life and work.
            </p>
          </div>
        </div>

        {/* Right Column - Nephew */}
        <div className="col-span-2">
          <ImageWithOverlay
            src="/images/life/nephew.jpg"
            alt="Holding my newborn nephew"
            caption="Meeting My Nephew"
            className="h-full min-h-[24rem] w-full"
            objectPosition="bottom"
          />
        </div>
      </div>
    </section>
  );
}
