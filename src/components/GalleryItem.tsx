import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface GalleryItemProps {
    id: string;
    date: string;
    quantity: number;
    title: string;
    imgUrl: string;
}

export function GalleryItem({ id, date, quantity, title, imgUrl }: GalleryItemProps) {
    return (

        <Link href={`/galeria/${id}`} className="group">
            <div className="max-w-[370px]">
                <div className="overflow-hidden bg-black-dark transition-all duration-700 rounded-[4px] hover:duration-700 ">
                    <Image
                        src={imgUrl}
                        width={370}
                        height={246}
                        alt="Image Example"
                        className="md:h-[246px] md:w-[370px] rounded-[4px] object-cover hover:scale-105  hover:duration-700 duration-700 transition-all group-hover:opacity-85"
                    />
                </div>
                <h3 className="text-sm text-gray-medium mt-1 group-hover:underline">
                    {format(date, "dd 'de' ", { locale: ptBR })}
                    <span className="capitalize">{format(date, "MMMM", { locale: ptBR })}</span>
                    {format(date, ", yyyy", { locale: ptBR })}
                    {" "}• {quantity.toString().padStart(2, '0')} foto{quantity > 1 && 's'}
                </h3>
                <h4 className="text-lg font-bold text-black group-hover:underline">
                    {title}
                </h4>
            </div>
        </Link>

    )
}
