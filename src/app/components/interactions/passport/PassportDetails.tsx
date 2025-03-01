import Image from "next/image";

import { PassportDetailItem } from "./PassportDetailsItem";

export function PassportDetails() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <Headshot />

        <ul className="space-y-1">
          <li>
            <PassportDetailItem title="Given names" value="Mitch" />
          </li>

          <li>
            <PassportDetailItem title="Date of birth" value="07 June 85" />
          </li>

          <li>
            <PassportDetailItem title="Date of issue" value="17 Jan 24" />
          </li>
        </ul>
      </div>

      <ul className="space-y-1">
        <li>
          <PassportDetailItem title="Passport No." value="CA555555" />
        </li>

        <li className="flex gap-4">
          <span>
            <PassportDetailItem title="Type" value="P" />
          </span>

          <span>
            <PassportDetailItem title="Issuing Country" value="CAN" />
          </span>
        </li>

        <li>
          <PassportDetailItem title="Nationality" value="Canadian" />
        </li>

        <li>
          <PassportDetailItem title="Surname" value="Harris" />
        </li>

        <li>
          <PassportDetailItem title="Issuing Authority" value="Ottawa" />
        </li>

        <li>
          <PassportDetailItem title="Date of Expiry" value="17 Jan 34" />
        </li>
      </ul>
    </div>
  );
}

function Headshot() {
  return (
    <Image
      alt="Passport-style photo of a man"
      className="size-[6.5rem] rounded"
      src="/passport/Headshot.webp"
      height={104}
      width={104}
    />
  );
}
