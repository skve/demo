import { cn } from "@/lib/utils";

export function SlideContainer({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className={cn(
        "select-none overflow-hidden bg-gray-1 h-dvh flex justify-center items-center",
        "bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:12px_12px] bg-fixed  [--pattern-fg:var(--black-a3)]"
      )}
      {...props}
    >
      {children}
    </main>
  );
}
