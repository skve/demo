import { SlideConstraint } from "@/app/components/slide/slide-constraint";

import { IntroTitle } from "./title";

export function FirstSlide() {
  return (
    <SlideConstraint className="flex">
      <IntroTitle />
    </SlideConstraint>
  );
}
