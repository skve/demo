import { edgeConfigAdapter } from "@flags-sdk/edge-config";
import { flag } from "flags/next";

export const reactScanFlag = flag({
  adapter: edgeConfigAdapter(),

  key: "react-scan",
  defaultValue: false,
});

export const precomputedFlags = [reactScanFlag] as const;
