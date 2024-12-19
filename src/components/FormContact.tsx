"use client";

import * as yup from "yup";
import { TextArea } from "@/components/TextArea";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  User,
  EnvelopeSimple,
  ChatText,
  ArticleNyTimes,
} from "@phosphor-icons/react/dist/ssr";
import toast, { Toaster } from "react-hot-toast";

interface FormFaleConoscoProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const formContactSchema = yup.object({
  name: yup.string().required("Preencha esse campo, por favor."),
  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("Preencha esse campo, por favor."),
  subject: yup.string().required("Preencha esse campo, por favor."),
  message: yup
    .string()
    .required("Preencha esse campo, por favor.")
    .min(10, "Digite pelo menos 10 caracteres"),
});

export function FormContact() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFaleConoscoProps>({
    resolver: yupResolver(formContactSchema),
  });

  const onSubmit: SubmitHandler<FormFaleConoscoProps> = async ({
    name,
    email,
    subject,
    message,
  }) => {
    const response = await fetch("api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    });

    if (response.status === 200) {
      toast.success("Seu contato foi enviado com sucesso.", {
        duration: 4000,
        position: "top-center",
      });
      reset({
        email: "",
        message: "",
        name: "",
        subject: "",
      });
    } else {
      toast.error("Falha ao enviar contato, tente novamente mais tarde.", {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-[656px] flex-col gap-8 px-5"
    >
      <Toaster />
      <div>
        <Input
          id="name"
          control={control}
          icon={<User size={24} className="text-black" />}
          name="name"
          placeholder="Nome"
          type="text"
          error={errors.name?.message}
        />
      </div>
      <div>
        <Input
          id="email"
          control={control}
          icon={<EnvelopeSimple size={24} className="text-black" />}
          name="email"
          placeholder="E-mail"
          type="email"
          error={errors.email?.message}
        />
      </div>

      <div>
        <Input
          id="subject"
          control={control}
          icon={<ChatText size={24} className="text-black" />}
          name="subject"
          placeholder="Assunto"
          type="text"
          error={errors.subject?.message}
        />
      </div>

      <div>
        <TextArea
          id="message"
          control={control}
          icon={<ArticleNyTimes size={24} className="text-black" />}
          name="message"
          placeholder="Mensagem"
          error={errors.message?.message}
        />
      </div>
      <Button
        type="submit"
        title={isSubmitting ? "Carregando..." : "Enviar"}
        variation="secondary"
        disabled={isSubmitting}
      />
    </form>
  );
}
