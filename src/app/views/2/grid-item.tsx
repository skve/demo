import { cn } from "@/lib/utils";

export function GridItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-gray-3 ring ring-gray-4 rounded-3xl relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
