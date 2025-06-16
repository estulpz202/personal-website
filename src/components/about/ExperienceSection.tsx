import SectionHeader from '@/components/common/SectionHeader';
import ExperienceCard from '@/components/about/ExperienceCard';
import { experiences } from '@/components/about/ExperienceData';

/**
 * ExperienceSection - Displays featured professional experiences
 */
export default function ExperienceSection() {
  return (
    <section className="py-10 fade-in-up">
      <SectionHeader title="Featured Experience" />

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}
