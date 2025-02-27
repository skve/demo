import { SlideConstraint } from "../components/slide/slide-constraint";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SlideConstraint className="flex">{children}</SlideConstraint>;
}
