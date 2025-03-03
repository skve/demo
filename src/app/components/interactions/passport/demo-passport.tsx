"use client";

import { useState } from "react";

import { RestartControl } from "../restart-control";
import { EncryptionText } from "./EncryptionText";
import { Passport } from "./Passport";

export function DemoPassport() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex-1 h-full relative flex flex-col justify-center items-center">
      <div className="fixed pointer-events-auto inset-x-0 w-full sm:hidden h-[clamp(5rem,_10vh,_6rem)] z-50 backdrop-blur-sm bottom-0 [mask-image:linear-gradient(to_top,#000_2%,transparent)] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_top,var(--gray-2),transparent)]"></div>

      <div className="h-fit w-full top-28 sm:top-[unset] relative">
        <Passport animationKey={key} />
        <EncryptionText />
      </div>

      <RestartControl onRestart={() => setKey((prev) => prev + 1)} />
    </div>
  );
}
