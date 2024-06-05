import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import Link from "next/link";


export default function Galeria() {
  return (
    <>
      {/* Menu */}
      <Menu />

      {/* Main */}
      <div className="mx-auto max-w-screen-xl py-24">
        {/* Título */}
        <Title title="Galeria de Fotos" subtitle="Confira nossos eventos" />
        <div className="flex flex-wrap gap-x-[84px] gap-y-16">
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
        <div className="mt-24 flex">
          <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] bg-red-regular font-medium text-white">
            1
          </button>
          <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] font-medium text-black">
            2
          </button>
          <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] font-medium text-black">
            3
          </button>

          <button className=" mr-[10px] flex h-[30px] w-[30px] justify-center rounded-[4px] font-medium text-black">
            ...
          </button>

          <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] font-medium text-black">
            4
          </button>
          <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] font-medium text-black">
            5
          </button>
          <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] font-medium text-black">
            6
          </button>
          <Image
            src="/img/arrow-right.svg"
            width={30}
            height={30}
            alt=""
            className="h-[28px] w-[28px] object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
