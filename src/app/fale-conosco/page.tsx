import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import {
  User,
  EnvelopeSimple,
  ChatText,
  ArticleNyTimes,
  Phone,
  MapPinLine,
  Envelope,
} from "@phosphor-icons/react/dist/ssr";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";

export default function FaleConosco() {
  return (
    <>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl">
        {/* Título */}
        <Title
          title="Como podemos te ajudar?"
          subtitle="Entre em contato com a IMTG, queremos orar por você, tirar 
          suas dúvidas, ouvir suas críticas e sugestões."
        />

        {/* Formulário */}

          <form className="mx-auto flex w-full max-w-[656px] flex-col gap-8 px-5">
              <Input
                id="name"
                icon={<User size={24} className="text-black" />}
                name="name"
                placeholder="Nome"
                type="text"
              />

              <Input
                id="email"
                icon={<EnvelopeSimple size={24} className="text-black" />}
                name="email"
                placeholder="E-mail"
                type="email"
                
              />

              <Input
                id="subject"
                icon={<ChatText size={24} className="text-black" />}
                name="subject"
                placeholder="Assunto"
                type="text"
              />

              <TextArea
                id="textarea"
                icon={<ArticleNyTimes size={24} className="text-black" />}
                name="message"
                placeholder="Mensagem"
              />
          <Button title="Enviar" variation="secondary" /> 
          {/* //TODO:colocar fullsize via js */}
          </form>
      </div>

      {/* Contato */}
      <div className=" bg-gray-thin py-24 mt-10 xl:mt-0">
        <div className="mx-auto flex flex-col md:flex-row max-w-screen-xl items-center justify-center gap-16 xl:gap-32">
          <div className="w-full max-w-[320px] flex flex-col items-center xl:items-start px-5 xl:px-0 ">
            <div className="flex gap-3 pb-8">
              <Phone size={24} className="text-red-regular" />
              <p className="text-lg">67 99208-2436</p>
            </div>

            <div className="flex items-center gap-3 pb-8">
              <div>
                <MapPinLine size={24} className="text-red-regular" />
              </div>
              <p className="text-lg leading-6 text-center xl:text-left">
                Rua Dr. Miguel Vieira Ferreira, 155, Vila Nossa Sra. das Graças
              </p>
            </div>

            <div className="flex gap-3">
              <Envelope size={24} className="text-red-regular" />
              <p className="text-lg">imtg@gmail.com</p>
            </div>
          </div>

          <div className="flex max-w-[321px] flex-col gap-6 xl:gap-3">
            <p className="text-center text-4xl font-bold text-black">
              Entre em contato com a gente!
            </p>
            <p className="text-center text-lg leading-6 text-gray-medium">
              Entre em contato com a IMTG, queremos tirar suas dúvidas, ouvir
              suas críticas e sugestões.
            </p>

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
          </div>
        </div>
      </div>
    </>
  );
}
