"use client";

import { HandsClapping } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

interface ApplauseProps {
  devotionalId: string;
}

export function Applause({ devotionalId }: ApplauseProps) {
  const [applauseCount, setApplauseCount] = useState(1);

  // Valor debounced para evitar múltiplas chamadas consecutivas à API
  const debouncedApplause = useDebouncedValue({
    inputValue: applauseCount,
    delay: 1000, // 1 segundo
  });

  // Atualiza os aplausos no backend quando o valor debounced muda
  useEffect(() => {
    const updateApplause = async () => {
      await fetch(`http://localhost:3000/api/applause`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          devotionalId,
          quantity: debouncedApplause,
        }),
      });
    };

    if (Number(debouncedApplause) > 1) {
      updateApplause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedApplause]);

  // Busca o valor inicial atualizado do servidor ao montar o componente
  useEffect(() => {
    const fetchInitialApplause = async () => {
      const response = await fetch(
        `http://localhost:3000/api/applause?devotionalId=${devotionalId}`,
        { cache: "no-store" },
      );
      if (response.ok) {
        const data = await response.json();
        setApplauseCount(data.applause);
      }
    };
    fetchInitialApplause();
  }, [devotionalId]);

  return (
    <div onClick={() => setApplauseCount((prev) => prev + 1)}>
      <div className="group h-fit w-fit cursor-pointer rounded-full border border-black p-2 hover:bg-black">
        <HandsClapping
          size={28}
          weight="thin"
          className="group-hover:text-white group-active:h-9 group-active:w-9"
        />
      </div>
      {/* Contador */}
      <div className="absolute bottom-[-8px] right-[-3px] flex h-7 w-7 items-center justify-center rounded-full bg-red-regular pr-[2px] text-[10px] font-medium text-white">
        +{applauseCount}
      </div>
    </div>
  );
}
