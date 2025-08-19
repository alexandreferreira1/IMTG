/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { ButtonArrow } from "@/components/ButtonArrow";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section
        className="-mt-20 h-[400px] bg-[url('/img/capa1.jpg')] bg-cover bg-center bg-no-repeat lg:h-[700px]"
        // style={{ backgroundPositionY: "50%" }}
      >
        <div className="bg-blue-dark/70 flex h-full w-full flex-col items-center justify-end pb-11 text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
          <h1 className="drop-shadow-3xl">Seja bem vindo!</h1>
          <h3 className="drop-shadow-3xl">Um lugar para família</h3>
        </div>
      </section>

      {/* Sobre */}
      <section className="mx-auto flex max-w-screen-xl flex-col items-center gap-8 py-10  xl:flex-row xl:gap-[84px] xl:py-20">
        <div className="relative hidden shrink-0 md:block">
          <Image
            src="/img/fachada-imtg.jpeg"
            width={550}
            height={680}
            alt="Fachada IMTG"
            className="object-cover object-left xl:h-[680px] xl:w-[550px]"
          />

          <div className="bg-slate bottom-0 right-[-190px] hidden  h-[200px] w-full items-center justify-center px-10 xl:absolute xl:flex xl:w-[403px]">
            <p className="mx-auto w-full shrink-0 text-center text-3xl font-bold leading-[125%] text-white xl:text-left xl:text-[32px]">
              "Porque a graça de Deus se manisfestou"
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-10 sm:gap-6 xl:h-[435px] xl:pl-[200px]">
          <Image
            src="/img/logoietg.png"
            width={82}
            height={114}
            alt="Logotipo da IMTG"
            className="hidden h-[114px] w-[82px] md:block"
          />
          <div>
            <h2 className="font-medium text-gray-medium">
              NOSSA HISTÓRIA E VALORES
            </h2>
            <h3 className="mt-2 text-2xl font-bold leading-[125%] text-black sm:text-3xl xl:text-5xl">
              Nossa igreja começou há 8 anos atrás
            </h3>
          </div>

          <p className="text-base text-gray-medium sm:text-lg md:max-w-[500px]">
            A Igreja Ministerial Tempo da Graça nasceu não apenas como um sonho humano, mas como um projeto que primeiro floresceu no coração de Deus...
          </p>
          <Link href="/sobre">
            <ButtonArrow />
          </Link>
        </div>
      </section>

      {/* Faça uma visita! */}
      <section className=" bg-gray-thin pt-10 xl:pt-0">
        {/* Nossa Localização */}
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between xl:flex-row">
          <div>
            <div className="text-center xl:text-left">
              <h2 className="text-gray-medium">NOSSA LOCALIZAÇÃO</h2>
              <h3 className="pt-1 text-3xl font-bold text-black xl:text-5xl">
                Faça uma visita!
              </h3>
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
                <p className="font-semibold text-black">Culto de Celebração</p>
                <p className="text-gray-medium">Domingo às 18h</p>
                <p className="font-semibold text-black">Culto de Ensino</p>
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
                  Rua Dr. Miguel Vieira Ferreira, nº 155, Bairro Nossa Sra. das
                  Graças Campo Grande - MS CEP 79116-470
                </p>
              </div>
            </div>
          </div>
          {/* Mapa */}
          <div className="w-full pt-10 xl:w-[655px] xl:pt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14955.70383589071!2d-54.6461527!3d-20.4271279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e7a9c82c3cf1%3A0x50cb1fc890a959c7!2sIgreja%20Ministerial%20Tempo%20da%20Gra%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1714534417159!5m2!1spt-BR!2sbr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
