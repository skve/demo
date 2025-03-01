import { cn } from "@/lib/utils";

export function SlideContainer({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className={cn(
        "overflow-hidden bg-gray-2/70 h-dvh flex justify-center items-center"
      )}
      {...props}
    >
      {children}
    </main>
  );
}
