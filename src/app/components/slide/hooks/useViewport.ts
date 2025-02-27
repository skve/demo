"use client";

import { useEffect, useState } from "react";

type Viewport = {
  width: number | undefined;
  height: number | undefined;
};

export function useViewport(): Viewport {
  const [windowSize, setWindowSize] = useState<Viewport>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
