import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function Separator({
  className,
  ...props
}: ComponentPropsWithoutRef<"hr">) {
  return (
    <hr aria-hidden className={cn("border-[black]/15", className)} {...props} />
  );
}
