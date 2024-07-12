import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { ButtonArrow } from "@/components/ButtonArrow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div
        className="mt-[-80px] h-[400px] lg:h-[700px] bg-[url('/img/images/banner-home1.png')] bg-cover bg-center bg-no-repeat"
        // style={{ backgroundPositionY: "50%" }}
      >
        <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white w-full h-full flex flex-col justify-end items-center pb-11 bg-[#0c222c]/70">
          <p className="drop-shadow-3xl">Seja bem vindo!</p>
          <p className="drop-shadow-3xl">Um lugar para família</p>
        </div>
      </div>

      {/* Main */}
      <div>
        {/* Sobre */}
        <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-8 xl:gap-[84px]  py-10 xl:py-20 xl:flex-row">
          <div className="relative hidden shrink-0 md:block">
            <Image
              src="/img/fachada-exemplo.jpg"
              width={550}
              height={680}
              alt="Exemple Image"
              className="object-cover xl:h-[680px] xl:w-[550px]"
            />

            <div className="bottom-0 right-[-190px] xl:flex h-[200px]  w-full items-center justify-center bg-[#324049] px-10 xl:absolute xl:w-[403px] hidden">
              <p className="mx-auto w-full shrink-0 text-center text-3xl font-bold leading-[125%] text-white xl:text-left xl:text-[32px]">
                “Porque a graça de Deus se manisfestou”
              </p>
            </div>
          </div>

          <div className="flex xl:h-[435px] flex-col gap-6 px-10 xl:pl-[200px]">
            <Image
              src="/img/logoietg.png"
              width={82}
              height={114}
              alt="Logotipo da IMTG"
              className="hidden h-[114px] w-[82px] md:block"
            />
            <div>
              <h3 className="font-medium text-gray-medium">
                NOSSA HISTÓRIA E VALORES
              </h3>
              <h2 className="mt-2 text-3xl font-bold leading-[125%] text-black xl:text-5xl">
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
        <div className=" bg-gray-thin pt-10 xl:pt-0">
          {/* Nossa Localização */}
          <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between xl:flex-row">
            <div>
              <div className="text-center xl:text-left">
                <p className="text-gray-medium">NOSSA LOCALIZAÇÃO</p>
                <p className="pt-1 text-3xl font-bold text-black xl:text-5xl">
                  Faça uma visita!
                </p>
              </div>

              {/* Horário e Endereço */}
              <div className="flex flex-col items-center gap-16 pt-12 text-center md:flex-row xl:items-start">
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
            <div className="w-full pt-10 xl:w-[655px] xl:pt-0">
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
      </div>
    </>
  );
}
