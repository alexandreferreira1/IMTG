import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { ButtonArrow } from "@/components/ButtonArrow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Menu e Banner */}
      <div
        className="relative h-[400px] xl:h-[700px] bg-[url('/img/images/banner-home.png')] bg-cover bg-no-repeat"
        style={{ backgroundPositionY: "50%" }}
      >
        {/* Menu */}
        <Menu transparent />

        <div className="mx-auto px-4 xl:px-0 mt-[200px] xl:mt-[440px] max-w-screen-xl text-center text-3xl  xl:text-6xl font-bold text-white">
          <p >Seja bem vindo!</p>
          <p>Um lugar para família</p>
        </div>
      </div>

      {/* Main */}
      <div>
        {/* Sobre */}
        <div className="mx-auto flex flex-col xl:flex-row max-w-screen-xl items-center gap-[84px] md:py-[72px] py-0">
          <div className="relative shrink-0">
            <Image
              src="/img/fachada-exemplo.jpg"
              width={550}
              height={680}
              alt="Exemple Image"
              className="xl:h-[680px] xl:w-[550px] object-cover"
            />

            <div className="xl:absolute bottom-0 w-full right-[-190px]  flex h-[200px] xl:w-[403px] items-center justify-center bg-[#324049] px-10">
              <p className="mx-auto w-full shrink-0 text-center xl:text-left text-3xl xl:text-[32px] font-bold leading-[125%] text-white">
                “Porque a graça de Deus se manisfestou”
              </p>
            </div>
          </div>

          <div className="flex h-[435px] flex-col gap-6 px-10 xl:pl-[200px]">
            <Image
              src="/img/logoietg.png"
              width={82}
              height={114}
              alt="Logotipo da IMTG"
              className="h-[114px] w-[82px]"
            />
            <div>
              <h3 className="font-medium text-gray-medium">
                NOSSA HISTÓRIA E VALORES
              </h3>
              <h2 className="mt-2 xl:text-5xl text-3xl font-bold leading-[125%] text-black">
                Nossa igreja começou há 7 anos atrás
              </h2>
            </div>

            <p className="text-lg text-gray-medium md:max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis arcu quis nisi luctus, id accumsan felis
              tristique...
            </p>
            <Link href="/sobre">
              <ButtonArrow />
            </Link>
          </div>
        </div>

        {/* Faça uma visita! */}
        <div className="bg-gray-thin mt-28 xl:mt-0 pt-10 xl:pt-0">
          {/* Nossa Localização */}
          <div className="mx-auto flex flex-col xl:flex-row max-w-screen-xl justify-between items-center">
            <div>
              <div className="text-center xl:text-left">
                <p className="text-gray-medium">NOSSA LOCALIZAÇÃO</p>
                <p className="pt-1 text-3xl xl:text-5xl font-bold text-black">
                  Faça uma visita!
                </p>
              </div>

              {/* Horário e Endereço */}
              <div className="flex flex-col md:flex-row items-center xl:items-start gap-16 pt-12 text-center">
                <div>
                  <Image
                    src="/img/icons/churchlogo1.svg"
                    width={220}
                    height={132}
                    alt="Fachada da Igreja"
                    className="h-[132px] w-[220px]"
                  />

                  <h2 className="text-2xl font-bold text-black">
                    Horário de Culto
                  </h2>
                  <p className="font-semibold text-black">
                    Culto de Celebração
                  </p>
                  <p className="text-gray-medium">Domingo às 18h</p>
                  <p className="font-semibold text-black">
                    Culto de Libertação
                  </p>
                  <p className="text-gray-medium">Quinta às 19h</p>
                </div>

                <div className="max-w-[275px]">
                  <Image
                    src="/img/icons/churchlogo2.svg"
                    width={220}
                    height={132}
                    alt="Fachada da Igreja"
                    className="mx-auto h-[132px] w-[220px]"
                  />

                  <h2 className="text-2xl font-bold text-black">Endereço</h2>
                  <p className="text-gray-medium">
                    Rua Dr. Miguel Vieira Ferreira, nº 155, Bairro Nossa Sra.
                    das Graças Campo Grande - MS CEP 79116-470
                  </p>
                </div>
              </div>
            </div>
            {/* Mapa */}
            <div className="xl:w-[655px] w-full pt-10 xl:pt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14955.70383589071!2d-54.6461527!3d-20.4271279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e7a9c82c3cf1%3A0x50cb1fc890a959c7!2sIgreja%20Ministerial%20Tempo%20da%20Gra%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1714534417159!5m2!1spt-BR!2sbr"
                // width="655"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
