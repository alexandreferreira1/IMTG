import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { HandHeart, Church } from "@phosphor-icons/react/dist/ssr";

export default function Contribuicao() {
  return (
    <section>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl py-10 md:py-24">
        {/* Pix */}
        <div className="flex flex-col items-center justify-center gap-12 px-5 text-center xl:flex-row xl:gap-32 xl:px-0 xl:text-left">
          <div className=" md:w-[600px]">
            <h2 className="pb-6 text-3xl font-extrabold text-black xl:text-4xl text-center">
              FAÇA UMA CONTRIBUIÇÃO COM PIX ATRAVÉS DO QR CODE
            </h2>
            <p className="pb-6 text-lg text-gray-regular text-center">
              Sua oferta é um gesto de fé e gratidão que faz a diferença. Contribua com o que sentir no coração e ajude a fortalecer esta obra. Você participa do que Deus está construindo aqui e abençoa vidas que têm sido transformadas por este ministério.
            </p>
            <p className="text-2xl text-black text-center">
              <b>Chave PIX:</b> 42.542.045/0001-38
            </p>
            <p className="text-2xl text-black text-center">
              <b>Razão Social:</b> Igreja Ministerial Tempo da Graça
            </p>
          </div>
          {/* <div>
            <Image
              src="/img/qrcode.png"
              width={322}
              height={322}
              alt="Whatsapp Icon"
              className="w-52 object-cover xl:h-[322px] xl:w-[322px]"
            />
          </div> */}
        </div>
      </div>

      <div className=" bg-gray-thin py-12 md:py-24">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-12 px-10 xl:px-0">
          <div className="text-center text-black xl:w-[870px]">
            <h3 className="pb-4 text-[40px] font-bold">
              Sua doação será destinada
            </h3>
            <p className="text-lg">
              A sua contribuição tem um papel fundamental no avanço da missão da Igreja Ministerial Tempo da Graça. Cada oferta recebida com amor e generosidade é investida com responsabilidade e propósito, sempre visando glorificar a Deus e servir à comunidade. Por meio dela, conseguimos manter e expandir as ações que tocam vidas, edificam fé e espalham o amor de Cristo. 
            </p>
          </div>

          {/* CARDS */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-4 md:gap-8 xl:gap-24">
            {/* 1 */}
            <div className="w-full max-w-96 flex flex-col items-center rounded-t-md border-b-[3px] border-solid border-red-regular bg-white p-8 shadow-3xl md:p-12">
              <div className="pb-6 text-red-regular">
                <HandHeart size={60} />
              </div>

              <h4 className="pb-2 text-2xl font-bold text-black">
                Trabalho Social
              </h4>
              <p className="text-center text-gray-medium">
                Parte das doações é destinada a projetos sociais que levam auxílio a famílias em situação de vulnerabilidade. Seja por meio da doação de cestas básicas, visitas a comunidades carentes ou ações de compaixão, buscamos ser resposta prática ao amor de Deus para o próximo.
              </p>
            </div>

            {/* 2 */}
            <div className="w-full max-w-96 flex flex-col items-center rounded-t-md border-b-[3px] border-solid border-red-regular bg-white p-8 text-center shadow-3xl md:p-12">
              <div className="pb-6 text-red-regular">
                <Church size={60} />
              </div>

              <h4 className="pb-2 text-2xl font-bold text-black">
                Edificação do Templo
              </h4>
              <p className="text-center text-gray-medium">
                Com a sua ajuda, conseguimos manter e aprimorar a estrutura física da nossa igreja, garantindo um ambiente seguro, acolhedor e preparado para receber a todos com dignidade. Investimos em reformas, manutenções, equipamentos e melhorias que sustentam a continuidade e o crescimento do ministério.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
