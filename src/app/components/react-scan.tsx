import { reactScanFlag } from "../flags";

export async function ReactScan() {
  const scan = await reactScanFlag();

  return (
    <>
      {scan && (
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      )}
    </>
  );
}
