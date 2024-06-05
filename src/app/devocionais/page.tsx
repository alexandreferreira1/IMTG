import Image from "next/image";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { ButtonArrow } from "@/components/ButtonArrow";
import { Input } from "@/components/Input";
import Link from "next/link";
import Pagination from "@/components/Pagination";

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
            <Link href="" className="group">
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
              </Link>
          </div>


          {/* Coluna 2 */}
          <div>
            <Input
              id="search"
              icon={<MagnifyingGlass size={24} className="text-black" />}
              name="search"
              placeholder="Pesquisar um tema"
              type="text"
              iconPosition="right"
            />
            <h3 className="pb-4 pt-10 text-lg font-bold text-black">
              Posts Recentes
            </h3>
            <Link href="" className="group">
              <div className="flex gap-3 ">
                <Image
                  src="/img/fachada-exemplo.jpg"
                  width={190}
                  height={141}
                  alt="Logotipo da IMTG"
                  className="h-[141px] w-[190px] object-cover"
                />
                <div className="flex max-w-40 flex-col  justify-center group-hover:underline decoration-black">
                  <h4 className="text-xs text-gray-medium">
                    16 de Dezembro, 2024
                  </h4>
                  <h2 className="text-lg font-bold text-black">
                    Novos convertidos sendo batizados em Dezembro
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Paginação */}
        <Pagination />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
