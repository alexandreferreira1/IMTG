import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { HandHeart, Church } from "@phosphor-icons/react/dist/ssr";

export default function Contribuicao() {
  return (
    <>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl py-10 md:py-24">
        {/* Pix */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-20 xl:gap-32 text-center xl:text-left px-5 xl:px-0">
          <div className=" md:w-[600px]">
            <h2 className="pb-6 text-3xl xl:text-4xl font-extrabold text-black">
              FAÇA UMA CONTRIBUIÇÃO COM PIX ATRAVÉS DO QR CODE
            </h2>
            <p className="pb-6 text-lg text-gray-regular">
              Donec ut ullamcorper quam. Vivamus sagittis, massa a accumsan
              eleifend, risus mauris consequat purus, quis egestas erat ante sit
              amet mauris.
            </p>
            <p className="text-2xl text-black">
              <b>Chave PIX:</b> 03.231284/0001-54
            </p>
            <p className="text-2xl text-black">
              <b>Razão Social:</b> Igreja Ministerial Tempo da Graça
            </p>
          </div>
          <div>
            <Image
              src="/img/qrcode.png"
              width={322}
              height={322}
              alt="Whatsapp Icon"
              className="xl:h-[322px] xl:w-[322px] w-52 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contato */}
      <div className=" bg-gray-thin py-12 md:py-24">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-12 xl:px-0 px-10">
          <div className="xl:w-[870px] text-center text-black">
            <h3 className="pb-4 text-[40px] font-bold">
              Sua doação será destinada
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              nisl libero, fringilla ac dignissim ac, maximus a nisi. Donec
              bibendum quis odio eu fermentum. Sed luctus metus id eleifend
              pretium. 
            </p>
          </div>

          {/* CARDS */}
          <div className="flex md:flex-row flex-col gap-12 xl:gap-24">
            {/* 1 */}
            <div className="shadow-3xl flex flex-col items-center rounded-t-md border-b-[3px] border-solid border-red-regular bg-white md:p-12 p-3">
              <div className="pb-6 text-red-regular">
                <HandHeart size={60} />
              </div>

              <h4 className="pb-2 text-2xl font-bold text-black">
                Trabalho Social
              </h4>
              <p className="xl:w-64 text-center text-gray-medium">
                Sed at molestie ipsum. Phasellus mi mauris, lobortis quis purus
                sed, porttitor feugiat ligula. Ut interdum augue odio, nec
                egestas lectus fermentum nec.
              </p>
            </div>

            {/* 2 */}
            <div className="shadow-3xl flex flex-col items-center rounded-t-md border-b-[3px] border-solid border-red-regular bg-white md:p-12 p-3 text-center">
              <div className="pb-6 text-red-regular">
                <Church size={60} />
              </div>

              <h4 className="pb-2 text-2xl font-bold text-black">
                Edificação do Templo
              </h4>
              <p className="xl:w-64 text-center text-gray-medium">
                Sed at molestie ipsum. Phasellus mi mauris, lobortis quis purus
                sed, porttitor feugiat ligula. Ut interdum augue odio, nec
                egestas lectus fermentum nec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
