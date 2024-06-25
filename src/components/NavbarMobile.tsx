import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function NavbarMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {title: 'Início', href: '/'},
        {title: 'Sobre', href: '/sobre'},
        {title: 'Devocionais', href: '/devocionais'},
        {title: 'Galeria', href: '/galeria'},
        {title: 'Fale Conosco', href: '/fale-conosco'},
        {title: 'Faça sua Contribuição', href: '/faca-sua-contribuicao'}   
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="lg:hidden bg-black-dark text-white">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}                    
                    icon={isMenuOpen ? <X className="text-white w-[30px] h-[30px]"/> : <List className="text-white w-[30px] h-[30px]"/>}
                />
                <NavbarBrand>
                    <Image
                        src="/img/logoietg.png"
                        width={88}
                        height={62}
                        alt="Logotipo da IMTG"
                        quality={100}
                        className="h-[62px] w-11 ml-auto"
                    />
                </NavbarBrand>
            </NavbarContent>          
            <NavbarMenu className="bg-black-dark text-white">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>   
                        <Link className="w-full !text-white h-10 bg-black flex hover:text-white active:text-white items-center justify-center hover:bg-red-extra-light transition-all duration-50 rounded-md" href={item.href}>                            
                            {item.title}
                        </Link>                                       
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

