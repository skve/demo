import { DemoPassport } from "../components/interactions/passport/demo-passport";
import { SlideConstraint } from "../components/slide/slide-constraint";
import { DemoLive } from "../components/interactions/live/demo-live";
import { GridTitle } from "../components/grid/grid-title";
import { GridItem } from "../components/grid/grid-item";
import { Signature } from "../components/signature";
import { Grid } from "../components/grid/grid";

export default function View2() {
  return (
    <SlideConstraint>
      <div className="overflow-y-auto max-w-[140rem] mx-auto flex-1 px-4 pt-6 sm:px-6 pb-24 flex-col w-full flex h-full">
        <GridTitle />

        <Grid>
          <GridItem cols={2} rows={2}>
            <DemoLive />
          </GridItem>

          <GridItem cols={2} rows={2}>
            <DemoPassport />
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
