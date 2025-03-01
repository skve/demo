import { EncryptionText } from "./EncryptionText";
import { Passport } from "./Passport";

export function DemoPassport() {
  return (
    <div className="h-fit w-full relative">
      <Passport />
      <EncryptionText />
    </div>
  );
}
