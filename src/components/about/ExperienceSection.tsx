import SectionHeader from '@/components/common/SectionHeader';
import ExperienceCard from '@/components/about/ExperienceCard';
import { experiences } from '@/components/about/ExperienceData';

/**
 * ExperienceSection - Displays featured professional experiences
 */
export default function ExperienceSection() {
  return (
    <section className="py-5 sm:py-6 md:py-7">
      <SectionHeader title="Key Experience" />

      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}
