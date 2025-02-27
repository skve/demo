import { cn } from "@/lib/utils";
import { SlideSheriff } from "./slide-sheriff";

export function SlideConstraint({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "shadow-4 flex p-32 relative bg-gray-1 h-auto ring ring-gray-4 dark:ring-gray-3 w-full max-h-dvh aspect-video",
        className
      )}
    >
      <SlideSheriff />
      
      {children}
    </div>
  );
}
