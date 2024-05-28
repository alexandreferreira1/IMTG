import Image from "next/image";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { ButtonArrow } from "@/components/ButtonArrow";

export default function Devocionais() {
  return (
    <>
      {/* Menu */}
      <Menu />

      {/* Main */}
      <div className="mx-auto max-w-screen-xl py-24">
        {/* Título */}
        <Title
          title="Devocionais"
          subtitle="Tire um tempo para meditar na Palavra"
        />
        <div className="flex gap-36">
          {/* Coluna 1 */}
          <div>
            <div className="flex max-w-[772px] flex-col items-start gap-3">
              <Image
                src="/img/fachada-exemplo.jpg"
                width={772}
                height={514}
                alt="Logotipo da IMTG"
                className="h-[514px] w-[772px] object-cover"
              />
              <div>
                <h2 className="pb-[6px] text-4xl font-bold text-black">
                  Ellentesque massa velit, auctor laoreet{" "}
                </h2>
                <h4 className="text-sm text-gray-regular">
                  Publicado por{" "}
                  <span className="font-medium">AGNALDO FERREIRA</span> • 27 de
                  Maio, 2024
                </h4>
              </div>
              <p className="text-lg text-gray-medium">
                Então, orar para que a vontade de Deus seja feita é orar para
                que Sua vontade preceptiva seja mantida. No entanto, é mais do
                que isso. É pedir que as pessoas reconheçam que todos reconheçam
                que há uma vontade soberana por detrás de cada ação volitiva
                delas. Há um propósito maior...
              </p>

              <ButtonArrow />
            </div>
          </div>

          {/* Coluna 2 */}
          <div>
            <div className="relative flex w-[368px] items-center gap-[170px] text-xl text-gray-medium transition-all before:absolute before:-bottom-[4px] before:h-[1px] before:w-[368px] before:bg-gray-regular before:transition-all before:duration-1000 before:content-['']   hover:text-black hover:duration-1000 after:content-[''] after:-bottom-[4px] after:h-[1px] after:w-0 hover:after:w-[368px] after:bg-black after:absolute after:transition-all after:duration-1000 after:ease-out">
              {/* <span className="shrink-0">Pesquisar um tema</span> */}
              <input type="text" placeholder="Pesquisar um tema" className="w-full pr-10 outline-0" />
              <MagnifyingGlass size={24} className="absolute right-0" />
            </div>
            <h3 className="pb-4 pt-10 text-lg font-bold text-black">
              Posts Recentes
            </h3>

            <div className="flex gap-3 ">
              <Image
                src="/img/fachada-exemplo.jpg"
                width={190}
                height={141}
                alt="Logotipo da IMTG"
                className="h-[141px] w-[190px] object-cover"
              />
              <div className="flex max-w-40 flex-col  justify-center">
                <h4 className="text-xs text-gray-medium">
                  16 de Dezembro, 2024
                </h4>
                <h2 className="text-lg font-bold text-black">
                  Novos convertidos sendo batizados em Dezembro
                </h2>
              </div>
            </div>
          </div>
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
