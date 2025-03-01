import { ComponentPropsWithoutRef } from "react";

export function PassportDetailsTitle(
  props: Omit<ComponentPropsWithoutRef<"h4">, "className">,
) {
  return <h4 className="text-[0.5rem] font-medium leading-4" {...props} />;
}
