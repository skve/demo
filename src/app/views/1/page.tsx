"use client";

import { SlideConstraint } from "../../components/slide/slide-constraint";

export default function Intro() {
  return (
    <SlideConstraint className="flex">
      <hgroup className="font-medium mt-auto space-y-1.5 tracking-tight">
        <h1 className="text-4xl text-gray-12">Luke Shiels</h1>
        <h2 className="text-3xl text-gray-11">Selected Works</h2>
      </hgroup>
    </SlideConstraint>
  );
}
