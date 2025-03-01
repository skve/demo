
import { Grid } from "./components/grid/grid";
import { GridItem } from "./components/grid/grid-item";
import { GridTitle } from "./components/grid/grid-title";
import { Signature } from "./components/signature";
import { SlideConstraint } from "./components/slide/slide-constraint";

export default function View2() {
  return (
    <SlideConstraint>
      <div className="overflow-y-auto flex-1 px-6 pt-6 sm:px-10 pb-24 flex-col xl:px-32 w-full flex h-full">
        <GridTitle />

        <Grid>
          <GridItem className="sm:col-span-1 row-span-1">
            <p>Live Dot</p>
          </GridItem>
          <GridItem className="row-start-2 col-span-1 row-span-1">
            <p>???</p>
          </GridItem>
          <GridItem className="sm:col-span-1 row-span-2">
            <p>Tailwind Demo</p>
          </GridItem>
          <GridItem className="sm:col-span-2 row-span-1">
            <p>Suggested Questions?</p>
          </GridItem>
          <GridItem className="sm:col-span-2 row-span-1">
            <video
              loop
              muted
              autoPlay
              playsInline
              className="w-full h-full object-cover"
              src="https://rmqdxpokhwuzn5kd.public.blob.vercel-storage.com/work-previews/voice-memo-0HyUjp5JgN13YeHu2TYmdr4cvFwCrs.mp4"
            ></video>
          </GridItem>

          <GridItem className="sm:col-span-3 row-span-1">
            <p>T/A Rename</p>
          </GridItem>
        </Grid>

        <div className="flex mt-24 justify-center items-center flex-none">
          <Signature />
        </div>

        <div className="fixed pointer-events-auto inset-x-0 w-dvw h-[clamp(5rem,_10vh,_6rem)] z-50 backdrop-blur-sm bottom-0 [mask-image:linear-gradient(to_top,#000_25%,transparent)] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_top,var(--gray-1),transparent)]"></div>
      </div>
    </SlideConstraint>
  );
}
