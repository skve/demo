import { IntroTitle } from "./intro-title";
import Link from "next/link";

export default function View1() {
  return (
    <>
      <IntroTitle />

      <Link href="/views/2">Get Started</Link>
    </>
  );
}
