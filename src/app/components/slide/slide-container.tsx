export function SlideContainer({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main className="select-none" {...props}>
      {children}
    </main>
  );
}
