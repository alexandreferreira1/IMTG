import { cn } from "@/utils/tw-merge";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  title: string;
  size?: string;
  variation?: "primary" | "secondary";
  fullsize?: boolean;
  className?: string;
}

export function Button({
  title,
  size = "text-base",
  variation = "primary",
  fullsize = false,
  className, 
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "h-14 rounded-[4px] px-7 uppercase transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-40",
        {
          "bg-red-regular text-white hover:bg-red-light":
            variation == "primary",
          "bg-black text-white hover:bg-black-dark": variation == "secondary",
          "w-full": fullsize,
          "w-fit": !fullsize,
        },
        size,
        className
      )}
      {...rest}
    >
      {title}
    </button>
  );
}
