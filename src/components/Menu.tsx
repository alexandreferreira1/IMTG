'use client'
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import clsx from "clsx";
import { NavbarMobile } from "./NavbarMobile";
import { usePathname } from "next/navigation";
import Devocionais from "@/app/devocionais/page";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { List } from "@phosphor-icons/react/dist/ssr"

export function Menu() {
  const pathName = usePathname()
  const pathNameParts = pathName.split('/')

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Início",
    "Sobre",
    "Devocionais",
    "Galeria",
    "Fale Conosco",
    "Faça sua Contribuição",
  ];

  return (
    <>
      <div className={clsx("bg-black-dark px-4 hidden lg:block", { "bg-black-dark/70 relative": pathName === '/' || (pathNameParts.length === 3 && pathNameParts[1] === "devocionais") })}>
        <div className="lg:mx-auto flex h-20 max-w-screen-xl items-center lg:justify-between">
          <div className="flex w-full lg:w-auto lg:gap-8">
            <div className="flex w-full lg:w-auto justify-between">
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
              {/* Hamburguer Button Mobile
            <div className="lg:hidden my-auto">
              <button
                className="p-2 text-black rounded-md outline-none focus:border-gray-medium"
                onClick={() => setNavBar(!navbar)}
              >
                {navbar ? (
                  <Image src="/img/icons/close.svg" width={30} height={30} alt="close button" />
                ) : (
                  <Image
                    src="/img/icons/menu.svg"
                    width={30}
                    height={30}
                    alt="menu button"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div> */}
            </div>


            {/* Nav */}
            <div className="gap-7 hidden lg:flex ">
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


          <Link href="/faca-sua-contribuicao" className="hidden lg:block">
            <Button title="FAÇA SUA CONTRIBUIÇÃO" size="text-sm" />
          </Link>


          {/* <NavbarMobile /> */}

        </div>
      </div>

      <NavbarMobile />
    </>
  );
}
