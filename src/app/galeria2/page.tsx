import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";

export default function Galeria2() {
  return (
    <>
      {/* Menu */}
      <Menu />

      {/* Main */}
      <div className="mx-auto max-w-screen-xl py-24">
        {/* Título */}
        <Title
          title="Novos convertidos sendo batizados em Dezembro"
          subtitle="Confira nossos eventos"
        />

        {/* */}
        <div className="flex flex-wrap gap-1">
          <div className="overflow-hidden transition-all duration-700 hover:rounded-[4px] hover:duration-700 ">
            <Image
              src="/img/images/Rectangle 15.png"
              width={422}
              height={280}
              alt="Image Example"
              className="h-[280px] w-[422px] object-cover transition-all duration-700 hover:scale-105 hover:cursor-pointer hover:duration-700 "
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
