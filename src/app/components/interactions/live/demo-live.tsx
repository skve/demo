"use client";

import { useState } from "react";

import { Avatar, AvatarImage, AvatarFallback } from "./demo-live-avatar";
import { PlaybackControl } from "../playback-control";
import { LiveBadge } from "./demo-live-badge";

export function DemoLive() {
  const [isLive, setIsLive] = useState(false);

  const handleLiveChange = () => {
    setIsLive((prev) => !prev);
  };

  return (
    <div className="flex flex-1 justify-center items-end h-full relative">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
        <div className="mx-auto flex min-w-0 w-full items-center gap-3 sm:mx-0">
          <div className="flex w-fit min-w-0 items-center gap-3">
            <span className="relative">
              <Avatar className="h-10 w-10 sm:h-8 sm:w-8">
                <AvatarImage
                  src={"/demo-avatar.png"}
                  alt={`Profile image for Luke Shiels`}
                />

                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
            </span>

            <div className="flex min-w-0 items-center gap-1">
              <h1 className="font-suisse cursor-default  truncate text-nowrap text-xl font-medium leading-none tracking-tight">
                Luke Shiels
              </h1>
            </div>
          </div>

          <LiveBadge isLive={isLive} />
        </div>
      </div>

      <div className="flex w-full flex-none">
        <PlaybackControl checked={isLive} onCheckedChange={handleLiveChange} />
      </div>
    </div>
  );
}
