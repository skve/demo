import Image from "next/image";

import { PassportDetailItem } from "./PassportDetailsItem";

export function PassportDetails() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <Headshot />

        <ul className="space-y-1">
          <li>
            <PassportDetailItem title="Given names" value="LUDWIG" />
          </li>

          <li>
            <PassportDetailItem title="Date of birth" value="27 Mar 1886" />
          </li>

          <li>
            <PassportDetailItem title="Date of issue" value="17 Jan 1968" />
          </li>
        </ul>
      </div>

      <ul className="space-y-1">
        <li>
          <PassportDetailItem title="Passport No." value="US555555" />
        </li>

        <li className="flex gap-4">
          <span>
            <PassportDetailItem title="Type" value="P" />
          </span>

          <span>
            <PassportDetailItem title="Issuing Country" value="USA" />
          </span>
        </li>

        <li>
          <PassportDetailItem title="Nationality" value="American" />
        </li>

        <li>
          <PassportDetailItem title="Surname" value="MIES VAN DER" />
        </li>

        <li>
          <PassportDetailItem title="Issuing Authority" value="Chicago" />
        </li>

        <li>
          <PassportDetailItem title="Date of Expiry" value="17 Jan 1978" />
        </li>
      </ul>
    </div>
  );
}

function Headshot() {
  return (
    <div className="relative size-[6.5rem] overflow-hidden rounded">
      <Image
        alt="Passport-style photo of a man"
        className=" object-cover"
        src="/passport/Headshot.webp"
        height={104}
        width={104}
      />
    </div>
  );
}
