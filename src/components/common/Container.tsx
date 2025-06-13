/**
 * React nodes to be contained within this layout component
 */
type ContainerProps = {
  children: React.ReactNode;
};

/**
 * Container component - provides consistent width constraints and padding
 */
export default function Container({ children }: ContainerProps) {
  return <div className="max-w-5xl mx-auto px-4 sm:px-6">{children}</div>;
}
