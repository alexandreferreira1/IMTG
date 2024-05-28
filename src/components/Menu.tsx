import Image from "next/image";
import { Button } from "./Button";

export function Menu() {
  return (
      <div className=" bg-black-dark">
        <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between">
          <div className="flex gap-8">
            {/* Logo */}
            <Image
              src="/img/logoietg.png"
              width={44}
              height={62}
              alt="Logotipo da IMTG"
              className="h-[62px] w-11"
            />
            {/* Nav */}
            <div className="flex gap-7">
              <button className="text-white">Início</button>
              <button className="text-white">Sobre</button>
              <button className="text-white">Devocionais</button>
              <button className="text-white">Galeria</button>
              <button className="text-white">Fale Conosco</button>
            </div>
          </div>

          <Button title="FAÇA SUA CONTRIBUIÇÃO" size="text-sm" />
        </div>
      </div>
  );
}
