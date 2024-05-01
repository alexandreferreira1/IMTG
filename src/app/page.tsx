import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <>
      {/* Menu e Banner */}
      <div
        className="relative h-[700px] bg-[url('/img/fachada.jpg')] bg-cover bg-no-repeat"
        style={{ backgroundPositionY: "50%" }}
      >
        {/* Menu */}
        <Menu />

        <div className="mx-auto mt-[440px] max-w-screen-xl text-white">
          <p className="text-6xl">
            <b>Seja bem vindo!</b>
          </p>
          <p className="text-6xl">
            <b>Um lugar para família.</b>
          </p>
        </div>
        {/* Banner */}
        {/* <div>
          <div className="overflow-hidden w-full">
            <Image
              src="/img/fachada.jpg"
              width={1536}
              height={1152}
              alt="Fachada da Igreja"
              className="mt-[-352px]"
            />
          </div>



        </div> */}
      </div>

      {/* Main */}
      <div>
        {/* Sobre */}
        <div className="mx-auto flex max-w-screen-xl items-center gap-[84px] py-[72px]">
          <div className="relative w-[700px] shrink-0">
            <Image
              src="/img/fachada-exemplo.jpg"
              width={550}
              height={680}
              alt="Logotipo da IMTG"
              className="h-[680px] w-[550px] object-cover"
            />

            <div className="absolute bottom-0 right-0 flex h-[200px] w-[403px] items-center justify-center bg-black px-10">
              <p className="mx-auto w-full shrink-0 text-left text-[32px] font-bold leading-[125%] text-white">
                “Porque a graça de Deus se manisfestou”
              </p>
            </div>
          </div>

          <div className="flex h-[435px] w-[494px] flex-col gap-6 ">
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
              <h2 className="mt-2 text-5xl font-bold leading-[125%] text-black">
                Nossa igreja começou há 7 anos atrás
              </h2>
            </div>

            <p className="text-lg text-gray-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis arcu quis nisi luctus, id accumsan felis
              tristique...
            </p>

            <button className="w-fit animate-fade-right animate-ease-in animate-fill-both relative flex items-center gap-2 text-xs text-black transition-all after:absolute after:-bottom-[4px] after:h-[1px] after:w-[142px] after:bg-black after:transition-all after:duration-1000 after:content-[''] hover:font-medium hover:text-black-dark hover:duration-1000 hover:after:w-0">
              <span className="shrink-0">CONTINUAR LENDO</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Faça uma visita */}
        <div className="relative h-[600px] bg-gray-thin">

          {/* Nossa Localização */}
          <div className="mx-auto max-w-screen-xl pt-[100px]">
            <div>
              <p className="text-gray-medium">NOSSA LOCALIZAÇÃO</p>
              <p className="pt-1 text-5xl font-bold text-black">
                Faça uma visita!
              </p>
            </div>

            {/* Horário e Endereço */}
            <div className="flex gap-16 pt-12 text-center">
              <div>
                <Image
                  src="/img/churchlogo1.svg"
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
                <p className="font-semibold text-black">Culto de Libertação</p>
                <p className="text-gray-medium">Quinta às 19h</p>
              </div>

              <div className="max-w-[275px]">
                <Image
                  src="/img/churchlogo2.svg"
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14955.70383589071!2d-54.6461527!3d-20.4271279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e7a9c82c3cf1%3A0x50cb1fc890a959c7!2sIgreja%20Ministerial%20Tempo%20da%20Gra%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1714534417159!5m2!1spt-BR!2sbr"
            width="48%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute right-0 top-0"
          />
        </div>

        {/* Footer */}
        <div>
          <div>
            <p></p>
            <p></p>
          </div>

          <div>
          <Image
                  src="/img/churchlogo2.svg"
                  width={220}
                  height={132}
                  alt="Fachada da Igreja"
                  className="mx-auto h-[132px] w-[220px]"
                />
          </div>

          <div>
            <button>Facebook</button>
            <button>Email</button>
          </div>
        </div>
      </div>

      {/* Fim */}
    </>
  );
}
