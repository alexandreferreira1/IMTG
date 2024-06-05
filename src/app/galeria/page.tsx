import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import Link from "next/link";
import Pagination from "@/components/Pagination";


export default function Galeria() {
  return (
    <>
      {/* Menu */}
      <Menu />

      {/* Main */}
      <div className="mx-auto max-w-screen-xl">
        {/* Título */}
        <Title
          title="Galeria de Fotos"
          subtitle="Confira nossos eventos"
        />

        <div className="flex flex-wrap justify-center xl:justify-start gap-x-[84px] gap-y-16 mx-5 xl:mx-0">
          <Link href="" className="group">
            <div className="max-w-[370px]">
              <div className="overflow-hidden bg-black-dark transition-all duration-700 rounded-[4px] hover:duration-700 ">
                <Image
                  src="/img/images/Frame 41.jpg"
                  width={370}
                  height={246}
                  alt="Image Example"
                  className="h-[246px] w-[370px] rounded-[4px] object-cover hover:scale-105  hover:duration-700 duration-700 transition-all group-hover:opacity-85"
                />
              </div>
              <h3 className="text-sm text-gray-medium mt-1 group-hover:underline">
                16 de Dezembro, 2024 • 58 fotos
              </h3>
              <h4 className="text-lg font-bold text-black group-hover:underline">
                Novos convertidos batizados em Dezembro
              </h4>
            </div>
          </Link>
        </div>

        {/* Paginação */}
        <Pagination />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
