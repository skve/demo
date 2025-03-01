export function PassportBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="z-10 min-w-0 space-y-4 overflow-hidden rounded-2xl bg-[white] bg-[url('/passport/Texture.webp'),url('/passport/Hologram.webp')] p-4 h-fit">
      {children}
    </div>
  );
}
