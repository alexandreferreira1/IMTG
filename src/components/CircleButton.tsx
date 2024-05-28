import clsx from "clsx";
import Image from "next/image";
import React, { ReactNode } from "react";

interface ButtonCircleStyle {
  logo: string;
  variation: "primary" | "secondary";
}

export default function CircleButton({ logo, variation }: ButtonCircleStyle) {
  return (
    <button>
      <div className="pl-3">
        <Image
          src={logo}
          width={variation === "primary" ? 45 : 30}
          height={variation === "primary" ? 45 : 30}
          alt="logo facebook"
          className={clsx("mx-auto", {
            "h-[45px] w-[45px]": variation == "primary",
            "h-[30px] w-[30px]": variation == "secondary",
          })}
        />
      </div>
    </button>
  );
}
