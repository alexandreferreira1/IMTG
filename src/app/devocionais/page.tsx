/* eslint-disable react/no-unescaped-entities */
import { Title } from "@/components/Title";
import { DevotionalItem } from "@/components/DevotionalItem";
import { makeRequest } from "@/utils/hygraph-client";
import { GetDevotionalsQuery } from "@/graphql/queries/get-devotionals";
import { Search } from "@/components/Search";
import { ConnectionPattern } from "@/@types/Hygraph";
import Pagination from "@/components/Pagination";
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
    page?: string;
  };
}

const DEVOTIONALS_ITEMS = 3;

export default async function Devocionais({ searchParams }: SearchParamsProps) {
  const pageNumber = parseInt(searchParams?.page || "1", 10);

  const {
    devotionals,
    devotionalsConnection: { aggregate },
  } = (await makeRequest(
    GetDevotionalsQuery({
      searchTerm: searchParams?.search,
      first: DEVOTIONALS_ITEMS,
      pageNumber,
    }),
  )) as DevotionalList;

  const { count } = aggregate;
  const pageTotal = Math.ceil(count / DEVOTIONALS_ITEMS);

  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <Title
          title="Devocionais"
          subtitle="Dedique um tempo para meditar na Palavra"
        />

        {searchParams?.search &&  <div className="max-w-[702px] mx-9 text-base md:text-xl text-red-regular pb-8">Você pesquisou por <strong>"{searchParams?.search}"</strong>, abaixo estão os resultados:</div>}
       

        <div className="mx-5 flex justify-center gap-36 xl:mx-0">
          <div>
            {devotionals.length > 0 ? (
              devotionals.map((devotional) => (
                <DevotionalItem
                  key={devotional.id}
                  id={devotional.id}
                  author={devotional.createdBy.name}
                  date={devotional.date}
                  title={devotional.title}
                  resume={devotional.resume}
                  imgUrl={devotional.thumbnail.url}
                />
              ))
            ) : (
              <NotFoundSearch searchParam={searchParams?.search} />
            )}
            {/* Paginação */}
            {pageTotal > 1 && (
              <Pagination
                currentPage={pageNumber}
                totalPages={pageTotal}
                maxVisiblePages={5}
              />
            )}
          </div>

          <div className="hidden xl:block pb-24">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}
