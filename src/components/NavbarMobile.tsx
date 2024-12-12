import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Início", href: "/" },
    { title: "Sobre", href: "/sobre" },
    { title: "Devocionais", href: "/devocionais" },
    { title: "Galeria", href: "/galeria" },
    { title: "Fale Conosco", href: "/fale-conosco" },
    { title: "Faça sua Contribuição", href: "/faca-sua-contribuicao" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black-dark text-white lg:hidden"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={
            isMenuOpen ? (
              <X className="h-[30px] w-[30px] text-white" />
            ) : (
              <List className="h-[30px] w-[30px] text-white" />
            )
          }
        />
        <NavbarBrand>
          <Image
            src="/img/logoietg.png"
            width={44}
            height={62}
            alt="Logotipo da IMTG"
            quality={100}
            className="ml-auto h-[62px] w-11"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-black-dark text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="duration-50 flex h-10 w-full items-center justify-center rounded-md bg-black !text-white transition-all hover:bg-red-extra-light hover:text-white active:text-white"
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
