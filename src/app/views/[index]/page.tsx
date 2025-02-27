import { SlideIndex } from "@/app/types/slide-index";

import { ContentRenderer } from "./parts/content-renderer";

type Params = {
  index: SlideIndex;
};

export default function Intro({ params }: { params: Params }) {
  return <ContentRenderer index={params.index} />;
}
