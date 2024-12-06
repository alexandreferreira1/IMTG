import CircleButton from "@/components/CircleButton";
import { makeRequest } from "@/utils/hygraph-client";
import { GetDevotionalByIdQuery } from "@/graphql/queries/get-devotional-by-id";
import { DevotionalDetails as DevotionalDetailsType } from "@/@types/Devotional";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Applause } from "@/components/Applause";

interface DevotionalDetailsProps {
  params: {
    id: string;
  };
}

export default async function DevotionalDetails({
  params,
}: DevotionalDetailsProps) {
  const query = GetDevotionalByIdQuery(params.id);
  const devotional = (await makeRequest(query)) as DevotionalDetailsType;

  if (!devotional) {
    notFound();
  }
  const date = new Date(parseISO(devotional.devotional.date));

  return (
    <>
      {/* Menu e Banner */}
      <div
        style={{
          backgroundImage: `url(${devotional.devotional.thumbnail.url})`,
        }}
        className={`mt-[-80px] h-[400px] bg-cover bg-center bg-no-repeat lg:h-[700px]`}
      >
        <div className="flex h-full w-full flex-col items-center justify-end bg-[#0c222c]/70 pb-[140px] text-center leading-[107%] text-white">
          <h1 className="pb-4 text-5xl font-bold drop-shadow-3xl lg:w-[530px] lg:text-7xl">
            {devotional.devotional.title}
          </h1>
          <p className="font-thin text-white drop-shadow-3xl">
            Publicado por{" "}
            <span className="text-xs font-medium lg:text-base">
              {devotional.devotional.createdBy.name}
            </span>{" "}
            • {/* {devotional.devotional.date} */}
            {format(date, "dd 'de' ", { locale: ptBR })}
            <span className="capitalize">
              {format(date, "MMMM", { locale: ptBR })}
            </span>
            {format(date, ", yyyy", { locale: ptBR })}
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="mx-5 flex max-w-[760px] flex-col gap-8 pb-24 pt-16 md:mx-auto">
        <CircleButton />
        <div
          className="hygraph-text"
          dangerouslySetInnerHTML={{
            __html: devotional.devotional.content.html,
          }}
        />

        {/* Aplausos */}
        <div className="mt-8 flex h-24 select-none items-center justify-center gap-5 border-y-[1px] border-gray-regular">
          <div className="relative w-[54px]">
            <Applause devotionalId={devotional.devotional.id} />
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
