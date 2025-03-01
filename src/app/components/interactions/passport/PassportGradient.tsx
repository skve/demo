import { SVGProps } from "react";

export function PassportGradient(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="875"
      height="753"
      viewBox="0 0 875 753"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute -top-36 -right-10 translate-x-1/4 mix-blend-color-dodge blur-3xl sm:-top-52"
      {...props}
    >
      <path
        d="M178.933 732L784 94H156V732H178.933Z"
        fill="url(#linear)"
        fillOpacity="0.7"
      />

      <defs>
        <linearGradient
          id="linear"
          x1="644.64"
          y1="314.827"
          x2="344.817"
          y2="485.137"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D96FF" stopOpacity="0.2" />
          <stop offset="0.515" stopColor="#9C1DD8" stopOpacity="1" />
          <stop offset="0.982063" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
