import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import { pages } from "next/dist/build/templates/app-page";

export function Menu() {
  return (
    <div className=" bg-black-dark">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between">
        <div className="flex gap-8">
          {/* Logo */}
          <Image
            src="/img/logoietg.png"
            width={88}
            height={62}
            alt="Logotipo da IMTG"
            quality={100}
            className="h-[62px] w-11"
          />
          {/* Nav */}
          <div className="flex gap-7">
            <button className="text-white transition-all duration-150 hover:text-red-extra-light">
              <Link href="/">Início</Link>
            </button>
            <button className="duration-15 text-white transition-all hover:text-red-extra-light">
              <Link href="/sobre">Sobre</Link>
            </button>
            <button className="duration-15 text-white transition-all hover:text-red-extra-light">
              <Link href="/devocionais">Devocionais</Link>
            </button>
            <button className="duration-15 text-white transition-all hover:text-red-extra-light">
              <Link href="/galeria">Galeria</Link>
            </button>
            <button className="duration-15 text-white transition-all hover:text-red-extra-light">
              <Link href="/fale-conosco">Fale Conosco</Link>
            </button>
          </div>
        </div>

        <Button title="FAÇA SUA CONTRIBUIÇÃO" size="text-sm" />
      </div>
    </div>
  );
}
