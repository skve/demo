"use client";

import { notFound } from "next/navigation";
import { useMemo } from "react";

import { SlideIndex } from "@/app/types/slide-index";

import { FirstSlide } from "./1-intro/first-slide";

export function ContentRenderer({ index }: { index: SlideIndex }) {
  const content = useMemo(() => {
    switch (index) {
      case "1":
        return <FirstSlide />;
      default:
        return notFound();
    }
  }, [index]);

  return content;
}
