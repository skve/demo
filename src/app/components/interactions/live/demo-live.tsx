import { Avatar, AvatarImage, AvatarFallback } from "./demo-live-avatar";
import { LiveBadge } from "./demo-live-badge";

export function DemoLive() {
  return (
    <div className="flex flex-1 h-full relative">
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

          <LiveBadge />
        </div>
      </div>
    </div>
  );
}
