import { PassportBackground } from "./PassportBackground";
import { PassportContainer } from "./PassportContainer";
import { PassportSectional } from "./PassportSectional";
import { PassportGradient } from "./PassportGradient";
import { PassportDetails } from "./PassportDetails";
import { PassportFooter } from "./PassportFooter";
import { PassportHeader } from "./PassportHeader";
import { PassportStroke } from "./PassportStroke";

export function Passport() {
  return (
    <div className="relative mx-auto size-fit rounded-3xl bg-gray-1  pointer-events-auto">
      <PassportContainer>
        <PassportGradient />

        <PassportBackground>
          <PassportHeader />
          <PassportDetails />
          <PassportSectional />
          <PassportFooter />
        </PassportBackground>
      </PassportContainer>

      <PassportStroke />
    </div>
  );
}
