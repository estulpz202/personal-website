type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-5xl mx-auto px-4 sm:px-6">{children}</div>;
}
