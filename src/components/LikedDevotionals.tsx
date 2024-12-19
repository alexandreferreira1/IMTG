import { DevotionalList } from "@/@types/Devotional";
import { GetDevotionalsLiked } from "@/graphql/queries/get-devotionals-liked";
import { makeRequest } from "@/utils/hygraph-client";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DevotionalsLikedType {
  devotionals: [{ devotionalId: string; quantity: number }];
}

export async function LikedDevotionals() {
  const response = await fetch("api/liked-devotionals");

  let likedDevotionals = [] as string[];

  if (response.status === 200) {
    const data = ((await response.json()) as DevotionalsLikedType) || [];
    likedDevotionals = data.devotionals.map((devotional) => {
      return devotional.devotionalId;
    });
  }

  const { devotionals } = (await makeRequest(
    GetDevotionalsLiked({ likedDevotionals }),
  )) as DevotionalList;

  const devotionalsSorted = devotionals.sort((a, b) => {
    return likedDevotionals.indexOf(a.id) - likedDevotionals.indexOf(b.id);
  });

  return (
    <section>
      {devotionalsSorted.length > 0 && (
        <>
          <h3 className="pb-4 pt-10 text-lg font-bold text-black">
            Posts Mais Curtidos
          </h3>
          <div className="flex flex-col gap-4">
            {devotionalsSorted.map((devotional) => (
              <Link key={devotional.id} href={`/devocionais/${devotional.id}`}>
                <div className="flex gap-3 ">
                  <Image
                    src={devotional.thumbnail.url}
                    width={190}
                    height={141}
                    alt="Logotipo da IMTG"
                    className="h-[141px] w-[190px] object-cover"
                  />
                  <div className="flex max-w-40 flex-col  justify-center decoration-black group-hover:underline">
                    <h4 className="text-xs text-gray-medium">
                      {format(devotional.date, "dd 'de' ", { locale: ptBR })}
                      <span className="capitalize">
                        {format(devotional.date, "MMMM", { locale: ptBR })}
                      </span>
                      {format(devotional.date, ", yyyy", { locale: ptBR })}
                    </h4>
                    <h2 className="line-clamp-3 text-ellipsis text-lg font-bold text-black">
                      {devotional.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
