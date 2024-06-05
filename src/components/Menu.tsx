import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import clsx from "clsx";

interface MenuProps {
  transparent?: boolean;
}

export function Menu({transparent = false}: MenuProps) {
  return (
    <div className={clsx("bg-black-dark px-4", {"bg-black-dark/70":transparent})}>
      <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between">
        <div className="flex gap-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/img/logoietg.png"
              width={88}
              height={62}
              alt="Logotipo da IMTG"
              quality={100}
              className="h-[62px] w-11"
            />
          </Link>
          {/* Nav */}
          <div className="gap-7 hidden xl:flex">
            <button className="text-white transition-all duration-150 hover:text-red-extra-light">
              <Link href="/">Início</Link>
            </button>
            <button className="duration-150 text-white transition-all hover:text-red-extra-light">
              <Link href="/sobre">Sobre</Link>
            </button>
            <button className="duration-150 text-white transition-all hover:text-red-extra-light">
              <Link href="/devocionais">Devocionais</Link>
            </button>
            <button className="duration-150 text-white transition-all hover:text-red-extra-light">
              <Link href="/galeria">Galeria</Link>
            </button>
            <button className="duration-150 text-white transition-all hover:text-red-extra-light">
              <Link href="/fale-conosco">Fale Conosco</Link>
            </button>
          </div>
        </div>


        <Link href="/contribuicao" className="hidden xl:block">
          <Button title="FAÇA SUA CONTRIBUIÇÃO" size="text-sm" />
        </Link>
      </div>
    </div>
  );
}
