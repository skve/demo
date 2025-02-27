"use client";

import { Grid } from "./grid";
import { GridItem } from "./grid-item";

export default function View2() {
  return (
    <div className="overflow-y-auto w-full flex h-full">
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
          {/* <p>Voice Memo</p> */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="https://rmqdxpokhwuzn5kd.public.blob.vercel-storage.com/work-previews/voice-memo-0HyUjp5JgN13YeHu2TYmdr4cvFwCrs.mp4"
          ></video>
        </GridItem>

        <GridItem className="col-span-3 row-span-1">
          <p>T/A Rename</p>
        </GridItem>
      </Grid>
    </div>
  );
}
