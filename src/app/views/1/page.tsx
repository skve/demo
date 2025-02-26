import { SlideConstraint } from "../../components/slide/slide-constraint";
import { IntroTitle } from "./parts/title";

export default function Intro() {
  return (
    <SlideConstraint className="flex">
      <IntroTitle />
    </SlideConstraint>
  );
}
