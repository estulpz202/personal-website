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
              Family grounds me and provides perspective. From celebrating holidays together to
              sharing life's milestones, these connections remind me of what's truly important. The
              values I've learned—integrity, care for others, and perseverance—shape how I approach
              both personal and professional relationships.
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
