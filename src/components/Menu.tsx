"use client";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import clsx from "clsx";
import { NavbarMobile } from "./NavbarMobile";
import { usePathname } from "next/navigation";

export function Menu() {
  const pathName = usePathname();
  const pathNameParts = pathName.split("/");

  return (
    <>
      <div
        className={clsx("hidden bg-black-dark px-4 lg:block", {
          "relative bg-black-dark/70":
            pathName === "/" ||
            (pathNameParts.length === 3 && pathNameParts[1] === "devocionais"),
        })}
      >
        <div className="flex h-20 max-w-screen-xl items-center lg:mx-auto lg:justify-between">
          <div className="flex w-full lg:w-auto lg:gap-8">
            <div className="flex w-full justify-between lg:w-auto">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/img/logoietg.png"
                  width={44}
                  height={62}
                  alt="Logotipo da IMTG"
                  quality={100}
                  className="h-[62px] w-11"
                />
              </Link>
            </div>

            {/* Nav */}
            <div className="hidden gap-7 lg:flex ">
              <button className="text-white transition-all duration-150 hover:text-red-extra-light">
                <Link href="/">Início</Link>
              </button>
              <button className="text-white transition-all duration-150 hover:text-red-extra-light">
                <Link href="/sobre">Sobre</Link>
              </button>
              <button className="text-white transition-all duration-150 hover:text-red-extra-light">
                <Link href="/devocionais">Devocionais</Link>
              </button>
              <button className="text-white transition-all duration-150 hover:text-red-extra-light">
                <Link href="/galeria">Galeria</Link>
              </button>
              <button className="text-white transition-all duration-150 hover:text-red-extra-light">
                <Link href="/fale-conosco">Fale Conosco</Link>
              </button>
            </div>
          </div>

          <Link href="/faca-sua-contribuicao" className="hidden lg:block">
            <Button title="FAÇA SUA CONTRIBUIÇÃO" size="text-sm" />
          </Link>
        </div>
      </div>
      <NavbarMobile />
    </>
  );
}
