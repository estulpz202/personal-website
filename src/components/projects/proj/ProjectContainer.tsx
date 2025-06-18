/**
 * Custom container with thinner max-width for project detail display
 */
export default function ProjectContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
