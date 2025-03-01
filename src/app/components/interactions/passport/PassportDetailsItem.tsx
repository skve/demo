import { PassportDetailsTitle } from "./PassportDetailsTitle";

export function PassportDetailItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <>
      <PassportDetailsTitle>{title}</PassportDetailsTitle>

      <p className="font-mono text-xs font-medium uppercase leading-4 tracking-wider">
        {value}
      </p>
    </>
  );
}
