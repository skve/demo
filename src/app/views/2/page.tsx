import { Grid } from "./grid";
import { GridItem } from "./grid-item";

export default function View2() {
  return (
    <Grid>
      <GridItem className="col-span-1 row-span-1">
        <p>Live Dot</p>
      </GridItem>
      <GridItem className="row-start-2 col-span-1 row-span-1">
        <p>Live Dot</p>
      </GridItem>
      <GridItem className="col-span-1 row-span-2">
        <p>Tailwind Demo</p>
      </GridItem>
      <GridItem className="col-span-2 row-span-1">
        <p>Suggested Questions?</p>
      </GridItem>
      <GridItem className="col-span-2 row-span-1">
        <p>Voice Memo</p>
      </GridItem>
   
      <GridItem className="col-span-3 row-span-1">
        <p>T/A Rename</p>
      </GridItem>
    </Grid>
  );
}
