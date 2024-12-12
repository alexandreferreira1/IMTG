export function FacebookLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={45}
      fill="none"
      className="group fill-gray-light hover:fill-red-light"
    >
      <circle
        cx={22.5}
        cy={22.5}
        r={22}
        stroke="#fff"
        className="stroke-gray-light group-hover:stroke-red-light"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M28 13h-3a5 5 0 0 0-5 5v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 0 1 1-1h3v-4Z"
        className=" fill-black-dark stroke-none group-hover:fill-gray-light"
      />
    </svg>
  );
}
