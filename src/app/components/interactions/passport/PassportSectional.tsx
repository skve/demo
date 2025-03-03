import Image from "next/image";

import { PassportDetailsTitle } from "./PassportDetailsTitle";
import { PassportSignature } from "./PassportSignature";
import { Separator } from "./PassportSeparator";

export function PassportSectional({ animationKey }: { animationKey: number }) {
  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="flex gap-0.5">
        <Image src="/passport/QR.svg" width={60} height={60} alt="QR code" />

        <p className="text-[0.5rem] w-fit rotate-180 text-center font-mono-system font-medium leading-4 tracking-[0.15em] [writing-mode:vertical-lr] select-none">
          EQG55555
        </p>
      </div>

      <div className="mt-1 flex flex-col gap-0.5">
        <PassportSignature key={animationKey} />

        <Separator />

        <PassportDetailsTitle>Signature of bearer</PassportDetailsTitle>
      </div>
    </section>
  );
}
