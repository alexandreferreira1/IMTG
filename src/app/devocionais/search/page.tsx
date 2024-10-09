"use client";

import { NotFoundSearch } from "@/components/NotFoundSearch";
import { Title } from "@/components/Title";
import { format, parseISO } from "date-fns";
import { GetDevotionalSearch } from "@/graphql/queries/get-devotional-search";
import { makeRequest } from "@/utils/hygraph-client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ptBR } from "date-fns/locale";
import {
  Devotional,
  DevotionalsSearch as DevotionalsSearchType,
} from "@/@types/Devotional";
import { DevotionalItem } from "@/components/DevotionalItem";
import Image from "next/image";
import Link from "next/link";
import { ButtonArrow } from "@/components/ButtonArrow";

export default function DevotionalsSearch() {
  const [devotionalsAPI, setDevotionalsAPI] = useState<Devotional[] | []>([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("q");

  const handleSearch = async () => {
    const query = GetDevotionalSearch(searchTerm || "");
    const { devotionals } = (await makeRequest(query)) as DevotionalsSearchType;

    console.log(devotionals);
    if (devotionals.length > 0) {
      setDevotionalsAPI(devotionals);
    }
  };

  useEffect(() => {
    if (searchTerm !== "") {
      handleSearch();
    }
  }, [searchTerm]);

  console.log({ devotionalsAPI });

  return (
    <>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl">
        {/* Título */}
        <Title
          title="Busca de devocionais"
          subtitle={`Você pesquisou por  "${searchTerm}", abaixo estão os resultados:`}
        />

        {devotionalsAPI.length === 0 && <NotFoundSearch />}

        {devotionalsAPI.length > 0 && (
          <div className="gap-4- grid grid-cols-3">
            {devotionalsAPI.map((devotional) => (
              <div
                key={devotional.id}
                className="mb-24 flex flex-col items-start gap-3"
              >
                <Link href={`/devocionais/${devotional.id}`} className="group">
                  <Image
                    src={devotional.thumbnail.url}
                    width={300}
                    height={300}
                    alt="Image Example"
                    className="h-[300px] w-[300px] object-cover"
                  />
                </Link>
                <div>
                  <h2 className="pb-[6px] text-lg font-bold text-black">
                    {devotional.title}
                  </h2>
                  <h4 className="text-sm font-light text-gray-regular">
                    {format(devotional.date, "dd 'de' ", { locale: ptBR })}
                    <span className="capitalize">
                      {format(devotional.date, "MMMM", { locale: ptBR })}
                    </span>
                    {format(devotional.date, ", yyyy", { locale: ptBR })}
                  </h4>
                </div>
                <p className="text-xs text-gray-medium">{devotional.resume}</p>
                <Link href={`/devocionais/${devotional.id}`} className="group">
                  <ButtonArrow />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
