"use client";

import { Grid } from "./grid";
import { GridItem } from "./grid-item";

export default function View2() {
  return (
    <div className="overflow-y-auto flex-1 pt-20 pb-32 flex-col px-32 w-full flex h-full">
      <div className="fixed  inset-x-0 z-50 pointer-events-auto w-full h-[clamp(3rem,_10vh,_5rem)] backdrop-blur-sm top-0 [mask-image:linear-gradient(to_bottom,#000_25%,transparent)] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,var(--gray-1),transparent)]"></div>

      <Grid>
        <GridItem className="col-span-1 row-span-1">
          <p>Live Dot</p>
        </GridItem>
        <GridItem className="row-start-2 col-span-1 row-span-1">
          <p>???</p>
        </GridItem>
        <GridItem className="col-span-1 row-span-2">
          <p>Tailwind Demo</p>
        </GridItem>
        <GridItem className="col-span-2 row-span-1">
          <p>Suggested Questions?</p>
        </GridItem>
        <GridItem className="col-span-2 row-span-1">
          <video
            loop
            muted
            autoPlay
            playsInline
            className="w-full h-full object-cover"
            src="https://rmqdxpokhwuzn5kd.public.blob.vercel-storage.com/work-previews/voice-memo-0HyUjp5JgN13YeHu2TYmdr4cvFwCrs.mp4"
          ></video>
        </GridItem>

        <GridItem className="col-span-3 row-span-1">
          <p>T/A Rename</p>
        </GridItem>
      </Grid>

      <div className="fixed pointer-events-auto inset-x-0  w-full h-[clamp(5rem,_10vh,_8rem)] backdrop-blur-sm bottom-0 [mask-image:linear-gradient(to_top,#000_25%,transparent)] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_top,var(--gray-1),transparent)]"></div>
    </div>
  );
}
