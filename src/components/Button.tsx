import clsx from "clsx";

interface ButtonProps {
  title: string;
  size?: string;
  variation?: "primary" | "secondary";
  fullsize?: boolean;
}

export function Button({
  title,
  size = "text-base",
  variation = "primary",
  fullsize = false,
}: ButtonProps) {
  return (
    <button
      className={clsx("h-14 rounded-[4px] px-7 uppercase transition-all duration-150", {
        "bg-red-regular text-white hover:bg-red-light": variation == "primary",
        "bg-black text-white hover:bg-black-dark": variation == "secondary",
        "w-full": fullsize,
        "w-fit": !fullsize,
      }, size)}
    >
      {title}
    </button>
  );
}
