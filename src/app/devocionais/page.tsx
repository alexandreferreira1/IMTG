import Image from "next/image";

// import { Menu } from "@/components/Menu";
// import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";

import Link from "next/link";
import Pagination from "@/components/Pagination";
import { DevotionalItem } from "@/components/DevotionalItem";
import { makeRequest } from "@/utils/hygraph-client";
import { GetDevotionalsQuery } from "@/graphql/queries/get-devotionals";
import { useForm } from "react-hook-form";
import InputSearch from "@/components/InputSearch";
import { Search } from "@/components/Search";
import { useState } from "react";
import { ConnectionPattern } from "@/@types/Hygraph";
import { NotFoundSearch } from "@/components/NotFoundSearch";

export interface Devotional {
  id: string;
  date: string;
  title: string;
  createdBy: {
    name: string;
  };
  thumbnail: {
    url: string;
  };
  resume: string;
}

export interface DevotionalList {
  devotionals: Devotional[];
  devotionalsConnection: ConnectionPattern;
}

interface SearchParamsProps {
  searchParams?: {
    search?: string;
    page?: number;
  };
}

const DEVOTIONALS_ITEMS = 2;

export default async function Devocionais({ searchParams }: SearchParamsProps) {
  const currentPage = searchParams?.page ? Number(searchParams.page) : 1;
  const skip = searchParams?.page
    ? Number(searchParams.page) * DEVOTIONALS_ITEMS - DEVOTIONALS_ITEMS
    : 0;
  const q = GetDevotionalsQuery({
    searchTerm: searchParams?.search,
    first: DEVOTIONALS_ITEMS,
    skip,
  });
  const devotionals = (await makeRequest(q)) as DevotionalList;

  const TOTAL_PAGES = Math.ceil(
    devotionals.devotionalsConnection.aggregate.count / DEVOTIONALS_ITEMS,
  );

  const lastPage = devotionals.devotionalsConnection.aggregate.count;

  let links = Array.from({ length: 3 }, (_, index) => {
    const pageNumber = Math.min(Math.max(currentPage + index, 1), TOTAL_PAGES); // Garante que as páginas fiquem dentro dos limites

    return {
      label: String(pageNumber),
      active: pageNumber === currentPage,
      id: index,
    };
  });

  return (
    <>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl">
        {/* Título */}
        <Title
          title="Devocionais"
          subtitle="Tire um tempo para meditar na Palavra"
        />
        <div className="mx-5 flex justify-center gap-36 xl:mx-0">
          {/* Coluna 1 */}

          <div>
            {devotionals.devotionals.length > 0 &&
              devotionals.devotionals.map((devotional) => (
                <DevotionalItem
                  key={devotional.id}
                  id={devotional.id}
                  author={devotional.createdBy.name}
                  date={devotional.date}
                  title={devotional.title}
                  resume={devotional.resume}
                  imgUrl={devotional.thumbnail.url}
                />
              ))}

            {devotionals.devotionals.length === 0 && <NotFoundSearch />}
          </div>

          {/* Coluna 2 */}
          <div className="hidden xl:block">
            <Search />
          </div>
        </div>

        {/* Paginação */}
        <Pagination links={links} lastPage={lastPage} />
      </div>
    </>
  );
}
