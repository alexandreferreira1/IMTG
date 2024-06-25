import Image from "next/image";
import CircleButton from "@/components/CircleButton";
import { makeRequest } from "@/utils/hygraph-client";
import { GetDevotionalByIdQuery } from "@/graphql/queries/get-devotional-by-id";
import { DevotionalDetails as DevotionalDetailsType } from "@/@types/Devotional";
import { notFound } from 'next/navigation'
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

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

        <div className="w-full h-full flex flex-col justify-end pb-[140px] items-center text-center text-white leading-[107%]">
          <h1 className="font-bold text-5xl lg:text-7xl pb-4 lg:w-[530px]">{devotional.devotional.title}</h1>
          <p className="text-white font-thin">
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
        <CircleButton icon="ShareFat" />
        <div className="hygraph-text" dangerouslySetInnerHTML={{ __html: devotional.devotional.content.html }} />

        <div className="mt-8 flex items-center justify-center gap-5 border-y-[1px] border-gray-regular py-7">
          <div className="w-[54px]  relative">
            <Image
              src="/img/icons/applause.svg"
              width={50}
              height={50}
              alt="Image Example"
              className="h-[50px] w-[50px] object-cover"
            />
            {/* Contador */}
            <div className="absolute right-[0px] bottom-[0px] h-[22px] w-[22px] font-medium text-white rounded-full bg-red-regular text-[10px] flex items-center justify-center pr-[2px]">+2</div>
          </div>
          {/* <p className="absolute left-[226px] top-[58px] text-[10px] ">
            +10
          </p> */}
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
