'use client'
import Image from "next/image";
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
import { Button } from "@/components/Button";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { TextArea } from "@/components/TextArea";
import axios from 'axios'
import Link from "next/link";
interface FormFaleConoscoProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const formContactSchema = yup.object({
  name: yup
    .string()
    .required('Preencha esse campo, por favor.'),
  email: yup
    .string()
    .email('Digite um e-mail válido.')
    .required('Preencha esse campo, por favor.'),
  subject: yup
    .string()
    .required('Preencha esse campo, por favor.'),
  message: yup
    .string()
    .required('Preencha esse campo, por favor.')
    .min(10, 'Digite pelo menos 10 caracteres'),
});


export default function FaleConosco() {

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormFaleConoscoProps>({
    resolver: yupResolver(formContactSchema),
  });

  const onSubmit: SubmitHandler<FormFaleConoscoProps> = async ({ name, email, subject, message }) => {
    const response = await axios.post("/api/contact", {
      name,
      email,
      subject,
      message,
    });

    console.log(response)
  }

  return (
    <>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl pb-24">
        {/* Título */}
        <Title
          title="Como podemos te ajudar?"
          subtitle="Entre em contato com a IMTG, queremos orar por você, tirar 
          suas dúvidas, ouvir suas críticas e sugestões."
        />

        {/* Formulário */}

        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex w-full max-w-[656px] flex-col gap-8 px-5">
          <Input
            id="name"
            control={control}
            icon={<User size={24} className="text-black" />}
            name="name"
            placeholder="Nome"
            type="text"
            error={errors.name?.message}
          />

          <Input
            id="email"
            control={control}
            icon={<EnvelopeSimple size={24} className="text-black" />}
            name="email"
            placeholder="E-mail"
            type="email"
            error={errors.email?.message}
          />

          <Input
            id="subject"
            control={control}
            icon={<ChatText size={24} className="text-black" />}
            name="subject"
            placeholder="Assunto"
            type="text"
            error={errors.subject?.message}
          />

          <TextArea
            id="message"
            control={control}
            icon={<ArticleNyTimes size={24} className="text-black" />}
            name="message"
            placeholder="Mensagem"
            error={errors.message?.message}
          />
          <Button type="submit" title="Enviar" variation="secondary" disabled={isSubmitting} />
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
              <p className="text-lg">igreja.imtg@gmail.com</p>
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
    </>
  );
}
