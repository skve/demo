import { precomputedFlags, reactScanFlag } from "../flags";

type Params = Promise<{ code: string }>;

export async function ReactScan({ params }: { params: Params }) {
  const { code } = await params;

  const scan = await reactScanFlag(code, precomputedFlags);

  if (!scan) return null;

  return (
    <>
      <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
    </>
  );
}
