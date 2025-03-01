import Image from "next/image";

export function EncryptionText() {
  return (
    <Image
      className="pointer-events-none absolute -z-10 -top-20 sm:-top-32 left-1/2 -translate-x-1/2 overflow-hidden opacity-75"
      src="/passport/EncryptionText.webp"
      height={592}
      width={536}
      aria-hidden
      priority
      alt=""
    />
  );
}
