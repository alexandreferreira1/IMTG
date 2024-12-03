import Image from "next/image";
import CircleButton from "@/components/CircleButton";
import { makeRequest } from "@/utils/hygraph-client";
import { GetDevotionalByIdQuery } from "@/graphql/queries/get-devotional-by-id";
import { DevotionalDetails as DevotionalDetailsType } from "@/@types/Devotional";
import { notFound } from 'next/navigation'
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import {  HandsClapping } from "@phosphor-icons/react/dist/ssr"

interface DevotionalDetailsProps {
  params: {
    id: string;
  };
}

export default async function DevotionalDetails({ params }: DevotionalDetailsProps) {

  const query = GetDevotionalByIdQuery(params.id);
  const devotional = await makeRequest(query) as DevotionalDetailsType

  if (!devotional) {
    notFound()
  }

  const date = new Date(parseISO(devotional.devotional.date))

  return (
    <>
      {/* Menu e Banner */}
      <div
        style={{ backgroundImage: `url(${devotional.devotional.thumbnail.url})` }}
        className={`mt-[-80px] h-[400px] lg:h-[700px] bg-cover bg-center bg-no-repeat`}
      >

        <div className="w-full h-full flex flex-col justify-end pb-[140px] items-center text-center text-white leading-[107%] bg-[#0c222c]/70">
          <h1 className="font-bold text-5xl lg:text-7xl pb-4 lg:w-[530px] drop-shadow-3xl">{devotional.devotional.title}</h1>
          <p className="text-white font-thin drop-shadow-3xl">
            Publicado por{" "}
            <span className="font-medium text-xs lg:text-base">{devotional.devotional.createdBy.name}</span> • {" "}
            {/* {devotional.devotional.date} */}
            {format(date, "dd 'de' ", { locale: ptBR })}
            <span className="capitalize">{format(date, "MMMM", { locale: ptBR })}</span>
            {format(date, ", yyyy", { locale: ptBR })}
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="flex max-w-[760px] flex-col gap-8 pb-24 pt-16 mx-5 md:mx-auto">
        <CircleButton/>
        <div className="hygraph-text" dangerouslySetInnerHTML={{ __html: devotional.devotional.content.html }} />

        
        {/* Aplausos */}
        <div className="mt-8 flex items-center justify-center gap-5 border-y-[1px] border-gray-regular h-24">
          <div className="w-[54px] relative">
            {/* <Image
              src="/img/icons/applause.svg"
              width={50}
              height={50}
              alt="Image Example"
              className="h-[50px] w-[50px] object-cover"
            /> */}
            <div className="rounded-full border border-black w-fit h-fit p-2 hover:bg-black group">
            <HandsClapping size={28} weight="thin" className="group-hover:text-white group-active:w-9 group-active:h-9"/>
            </div>
            {/* Contador */}
            <div className="absolute right-[-3px] bottom-[0px] h-[22px] w-[22px] font-medium text-white rounded-full bg-red-regular text-[10px] flex items-center justify-center pr-[2px]">+2</div>
          </div>

          <div>
            <p className="font-semibold text-black">Gostou do conteúdo?</p>
            <p className="text-gray-medium">
              Incentive aplaudindo uma ou várias vezes!
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
}
