"use client";

export function GridItemCaption({ children }: { children: React.ReactNode }) {
  return (
    <div className=" opacity-0 backdrop-blur-sm ease-out hover:opacity-100 transition-opacity duration-200 z-10 flex p-5 absolute inset-0 bg-gray-a2 tracking-normal font-mono capitalize text-sm leading-none">
      
      <span className="lukas text-gray-12">{children}</span>
    </div>
  );
}
