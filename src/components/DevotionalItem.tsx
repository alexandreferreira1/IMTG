import Image from "next/image";
import Link from "next/link";
import { ButtonArrow } from "./ButtonArrow";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DevotionalItemProps {
  id: string;
  title: string;
  author: string;
  date: string;
  resume: string;
  imgUrl: string;
}

export function DevotionalItem({
  id,
  author,
  date,
  imgUrl,
  resume,
  title,
}: DevotionalItemProps) {
  return (
    <div className="mb-24 flex max-w-[702px] flex-col items-start gap-3">
      <Link href={`/devocionais/${id}`} className="group">
        <Image
          src={imgUrl}
          width={772}
          height={514}
          alt="Image Example"
          className="h-[394px] w-[702px] object-cover"
        />
      </Link>
      <div>
        <h2 className="pb-[6px] text-4xl font-bold text-black">{title}</h2>
        <h4 className="text-sm font-light text-gray-regular">
          Publicado por <span className="font-medium">{author}</span> •{" "}
          {format(date, "dd 'de' ", { locale: ptBR })}
          <span className="capitalize">
            {format(date, "MMMM", { locale: ptBR })}
          </span>
          {format(date, ", yyyy", { locale: ptBR })}
        </h4>
      </div>
      <p className="text-lg text-gray-medium">{resume}</p>
      <Link href={`/devocionais/${id}`} className="group">
        <ButtonArrow />
      </Link>
    </div>
  );
}
