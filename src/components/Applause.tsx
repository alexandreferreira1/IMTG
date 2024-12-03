"use client";

import { HandsClapping } from "@phosphor-icons/react/dist/ssr";
import axios from "axios";
import { useState } from "react";

interface ApplauseProps {
  quantity: number;
  devotionalId: string;
}

export function Applause({ quantity = 1, devotionalId }: ApplauseProps) {
  const handleApplause = async () => {
    await axios.post(`http://localhost:3000/api/applause`, {
      devotionalId,
    });
  };

  return (
    <div onClick={handleApplause}>
      <div className="group h-fit w-fit rounded-full border border-black p-2 hover:bg-black">
        <HandsClapping
          size={28}
          weight="thin"
          className="group-hover:text-white group-active:h-9 group-active:w-9"
        />
      </div>
      {/* Contador */}
      <div className="absolute bottom-[0px] right-[-3px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-red-regular pr-[2px] text-[10px] font-medium text-white">
        +{quantity}
      </div>
    </div>
  );
}
