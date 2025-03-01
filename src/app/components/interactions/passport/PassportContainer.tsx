export function PassportContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="backdrop-blur-[.1rem] font-inter -z-10 flex w-[18.5rem] rounded-3xl bg-[white]/25 p-2 text-gray-1 ring ring-[white]/30">
      {children}
    </div>
  );
}

