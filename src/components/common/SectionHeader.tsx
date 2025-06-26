/**
 * SectionHeader Component - Creates a consistently styled heading for page sections
 */
export default function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-2xl sm:text-[27px] md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 border-b-2 pb-1.5 sm:pb-2 border-indigo-500">
      {title}
    </h2>
  );
}
