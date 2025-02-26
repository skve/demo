import { cn } from "@/lib/utils";
import { SlideResize } from "./slide-resize";

export function SlideConstraint({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("shadow-4 bg-gray-1 h-auto ring ring-gray-6 w-full max-h-dvh aspect-video", className)}><SlideResize>{children}</SlideResize></div>;
}
