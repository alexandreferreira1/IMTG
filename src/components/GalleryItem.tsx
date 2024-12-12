import Image from "next/image";
import Link from "next/link";
import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

interface GalleryItemProps {
  id: string;
  date: string;
  quantity: number;
  title: string;
  imgUrl: string;
}

export function GalleryItem({
  id,
  date,
  quantity,
  title,
  imgUrl,
}: GalleryItemProps) {
  const dateFormatted = parse(date, "yyyy-MM-dd", new Date());

  return (
    <Link href={`/galeria/${id}`} className="group">
      <div className="overflow-hidden rounded-[4px] bg-black-dark transition-all duration-700 hover:duration-700 ">
        <Image
          src={imgUrl}
          width={370}
          height={246}
          alt="Image Example"
          className="rounded-[4px] object-cover transition-all duration-700 hover:scale-105  hover:duration-700 group-hover:opacity-85 md:h-[246px] md:w-[370px]"
        />
      </div>
      <h3 className="mt-1 text-sm text-gray-medium group-hover:underline">
        {format(dateFormatted, "dd 'de' ", { locale: ptBR })}
        <span className="capitalize">
          {format(dateFormatted, "MMMM", { locale: ptBR })}
        </span>
        {format(dateFormatted, ", yyyy", { locale: ptBR })} •{" "}
        {quantity.toString().padStart(2, "0")} foto{quantity > 1 && "s"}
      </h3>
      <h4 className="text-lg font-bold text-black group-hover:underline">
        {title}
      </h4>
    </Link>
  );
}
