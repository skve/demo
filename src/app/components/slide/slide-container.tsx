export function SlideContainer({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main className="select-none bg-gray-2 h-dvh flex justify-center items-center" {...props}>
      {children}
    </main>
  );
}
