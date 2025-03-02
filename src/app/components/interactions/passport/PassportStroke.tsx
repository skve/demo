export function PassportStroke() {
  const vars = {
    "--border-factor": "2",
    "--border-width": "2px",
    "--border-bg":
      "conic-gradient(from 180deg at 50% 50%,oklch(58.17% .239 291.76) 0deg,var(--gray-1) 360deg)",
    "--border-mask":
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
  } as React.CSSProperties;

  return (
    <div
      className="absolute -top-(--border-width) -right-(--border-width) -bottom-(--border-width) -left-(--border-width) -z-10 overflow-hidden rounded-[calc(var(--radius-3xl)_+_var(--border-width))] content-[''] [-webkit-mask:var(--border-bg)] [mask-composite:exclude] [mask:var(--border-mask)] before:absolute before:top-1/2 before:left-1/2 before:block before:w-[calc(100%_*_var(--border-factor))] before:animate-spin before:-translate-1/2 before:[animation-duration:30s] before:rounded-full before:py-96 before:opacity-75 before:content-[''] before:[background:var(--border-bg)]"
      style={vars}
      aria-hidden
    />
  );
}
