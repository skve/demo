import { cn } from "@/lib/utils";

export function SlideConstraint({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("p-32 h-full max-h-dvh aspect-video", className)}>{children}</div>;
}
