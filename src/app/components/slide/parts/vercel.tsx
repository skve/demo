 function Vercel() {
  return (
    <svg
      height="20"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="20"
      className="text-gray-12 relative bottom-0.5 right-0"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function Plus() {
  return (
    <svg
      height="12"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="12"
      className="text-gray-11 relative bottom-px"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function Join() {
    return (
        <span className="opacity-90 inline-flex align-middle items-center gap-2 ml-0.5">
            <Plus />
            <Vercel />
        </span>
    )
}