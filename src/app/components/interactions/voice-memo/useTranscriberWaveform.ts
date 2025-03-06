"use client";

import { useMemo, useState } from "react";

export function useTranscriberWaveform() {
  const [resolution, setResolution] = useState<number>();

  const [waveform] = useState<number[]>([]);
  const [position] = useState<number>(0);

  const display = useMemo(() => {
    if (!resolution) return [];

    // Initialize with an array of zeros for minimum resolution
    const result = Array(resolution).fill(0);

    if (waveform.length === 0) return result;

    // Handle filling the display based on data recorded so far
    if (position === 0) {
      // Special case: when position wrapped back to 0
      // Take the last resolution items from waveform
      const start = Math.max(0, waveform.length - resolution);
      const visibleData = waveform.slice(start);

      // Fill the result array from right to left
      for (let i = 0; i < visibleData.length; i++) {
        const resultIndex = resolution - visibleData.length + i;
        result[resultIndex] = visibleData[i];
      }
    } else {
      // Normal case: get the most recent resolution items
      // This includes both values before and after the position

      // First, get the recent values up to position
      const recentData = [];

      // Go backwards from position-1 to collect the most recent data
      let count = 0;
      let p = position - 1;
      if (p < 0) p = waveform.length - 1;

      // Collect the most recent resolution-1 items (leaving space for newest)
      while (count < resolution - 1 && count < waveform.length) {
        recentData.unshift(waveform[p]);
        p = (p - 1 + waveform.length) % waveform.length;
        count++;
      }

      // Fill the result array from right to left, leaving the rightmost position for the newest value
      for (let i = 0; i < recentData.length; i++) {
        const resultIndex = resolution - recentData.length - 1 + i;
        if (resultIndex >= 0) {
          result[resultIndex] = recentData[i];
        }
      }

      // Add the most recent value (at position-1) to the rightmost spot
      if (waveform.length > 0) {
        result[resolution - 1] =
          waveform[(position - 1 + waveform.length) % waveform.length];
      }
    }

    return result;
  }, [waveform, position, resolution]);

  return { display, resolution, setResolution };
}
