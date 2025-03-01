import Image from "next/image";

export function EncryptionText() {
  return (
    <Image
      className="pointer-events-none absolute -z-10 -translate-x-30 top-16 overflow-hidden "
      src="/passport/EncryptionText.webp"
      height={592}
      width={536}
      aria-hidden
      priority
      alt=""
    />
  );
}
