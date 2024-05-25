import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { User, EnvelopeSimple, ChatText, ArticleNyTimes } from "@phosphor-icons/react/dist/ssr";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";

export default function FaleConosco() {
  return (
    <>
      {/* Menu */}
      <Menu />

      {/* Main */}
      <div className="mx-auto max-w-screen-xl py-24">
        {/* Título */}
        <Title
          title="Como podemos te ajudar?"
          subtitle="Entre em contato com a IMTG, queremos orar por você, tirar 
          suas dúvidas, ouvir suas críticas e sugestões."
        />

        {/* */}
        <div className="">
          <form>
            <div className="mx-auto flex w-full max-w-[656px] flex-col gap-8">
              <Input
                 id="name"
                icon={<User size={24} className="text-black" />}
                name="name"
                placeholder="Digite seu nome"
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
            <Button title="Enviar" variation="secondary"/>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
