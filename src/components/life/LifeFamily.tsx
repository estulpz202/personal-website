import { SectionTitle, ImageWithOverlay } from './LifeAthletics';

/**
 * LifeFamily - Family and connections section
 *
 * Showcases family relationships and personal connections
 */
export default function LifeFamily() {
  return (
    <section className="py-8 fade-in-up">
      <SectionTitle icon="heart" title="Family & Connections" />

      <div className="grid grid-cols-2 gap-8 mb-8">
        <ImageWithOverlay
          src="/images/life/christmas.jpg"
          alt="Family Christmas photo"
          caption="Christmas Celebrations"
          className="h-72 w-full"
        />

        <ImageWithOverlay
          src="/images/life/nephew.jpg"
          alt="Holding my newborn nephew"
          caption="Meeting My Nephew"
          className="h-72 w-full"
        />
      </div>

      <p className="text-base text-gray-700 mb-10">
        Family grounds me and provides perspective. From celebrating holidays together to welcoming
        new members like my nephew, these connections remind me of what's truly important. The
        values I've learned from my family—integrity, care for others, and perseverance—shape how I
        approach both personal and professional relationships.
      </p>
    </section>
  );
}
