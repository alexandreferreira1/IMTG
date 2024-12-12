import Image from "next/image";
import { Title } from "@/components/Title";
import { Phone, MapPinLine, Envelope } from "@phosphor-icons/react/dist/ssr";

import Link from "next/link";
import { FormContact } from "@/components/FormContact";

export default function FaleConosco() {
  return (
    <section>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl pb-24">
        {/* Título */}
        <Title
          title="Como podemos te ajudar?"
          subtitle="Entre em contato com a IMTG, queremos orar por você, tirar
          suas dúvidas, ouvir suas críticas e sugestões."
        />
        <FormContact />
      </div>

      {/* Contato */}
      <div className=" mt-10 bg-gray-thin py-24 xl:mt-0">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-16 md:flex-row xl:gap-32">
          <div className="flex w-full max-w-[320px] flex-col items-center px-5 xl:items-start xl:px-0 ">
            <div className="flex gap-3 pb-8">
              <Phone size={24} className="text-red-regular" />
              <p className="text-lg">67 99208-2436</p>
            </div>

            <div className="flex items-center gap-3 pb-8">
              <div>
                <MapPinLine size={24} className="text-red-regular" />
              </div>
              <p className="text-center text-lg leading-6 xl:text-left">
                Rua Dr. Miguel Vieira Ferreira, 155, Vila Nossa Sra. das Graças
              </p>
            </div>

            <div className="flex gap-3">
              <Envelope size={24} className="text-red-regular" />
              <p className="text-lg">igreja.imtg@gmail.com</p>
            </div>
          </div>

          <div className="flex max-w-[321px] flex-col gap-6 xl:gap-3">
            <h2 className="text-center text-4xl font-bold text-black">
              Entre em contato com a gente!
            </h2>
            <h3 className="text-center text-lg leading-6 text-gray-medium">
              Entre em contato com a IMTG, queremos tirar suas dúvidas, ouvir
              suas críticas e sugestões.
            </h3>

            <Link href="https://api.whatsapp.com/send?phone=5567992082436&text=Ol%C3%A1%20Pr.%20Agnaldo">
              <button
                className="mx-auto flex h-14 items-center justify-center
                gap-3 rounded-[4px] bg-red-regular px-7 uppercase text-white hover:bg-red-light"
              >
                <Image
                  src="/img/icons/whats.svg"
                  width={22}
                  height={22}
                  alt="Whatsapp Icon"
                  className="h-[22px] w-[22px] object-cover"
                />
                ENVIAR WHATSAPP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
