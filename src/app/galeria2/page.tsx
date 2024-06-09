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
      <div className="mx-auto max-w-screen-xl mb-24">
        {/* Título */}
        <Title
          title="Novos convertidos sendo batizados em Dezembro"
          subtitle="Confira nossos eventos"
        />

        {/* */}
        <div className="flex flex-wrap gap-1 mx-5 xl:mx-0 justify-center xl:justify-start">
          <div className="overflow-hidden transition-all duration-1000 hover:rounded-[4px] hover:duration-100 ">
            <Image
              src="/img/images/Rectangle 15.png"
              width={422}
              height={280}
              alt="Image Example"
              className="md:h-[280px] md:w-[422px] object-cover transition-all duration-1000 hover:scale-110 hover:cursor-pointer hover:duration-1000"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
