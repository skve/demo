import { ComponentPropsWithoutRef } from "react";

import { PassportBiometric } from "./PassportBiometric";
import { Separator } from "./PassportSeparator";

function ItemContainer(props: ComponentPropsWithoutRef<"div">) {
  return <div className="flex items-center gap-2" {...props} />;
}

export function PassportHeader() {
  return (
    <header className="grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] grid-rows-1 items-center justify-between gap-2 font-semibold uppercase [&>*]:leading-4">
      <ItemContainer>
        <p className="text-[0.5rem] tracking-wider">Passport</p>

        <Separator className="flex-1" />
      </ItemContainer>

      <h3 className="text-sm tracking-wider">Canada</h3>

      <ItemContainer>
        <Separator className="flex-1" />

        <PassportBiometric />
      </ItemContainer>
    </header>
  );
}
