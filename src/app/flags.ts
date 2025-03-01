import { flag } from "flags/next";

export const reactScanFlag = flag({
  key: "react-scan",
  decide() {
    return true;
  },
});