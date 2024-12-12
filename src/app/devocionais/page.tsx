/* eslint-disable react/no-unescaped-entities */
import { Title } from "@/components/Title";
import { DevotionalItem } from "@/components/DevotionalItem";
import { makeRequest } from "@/utils/hygraph-client";
import { GetDevotionalsQuery } from "@/graphql/queries/get-devotionals";
import { Search } from "@/components/Search";
import Pagination from "@/components/Pagination";
import { NotFoundSearch } from "@/components/NotFoundSearch";
import { LikedDevotionals } from "@/components/LikedDevotionals";
import { DevotionalList } from "@/@types/Devotional";

interface SearchParamsProps {
  searchParams?: {
    search?: string;
    page?: string;
  };
}

const DEVOTIONALS_ITEMS = 3;

export default async function Devocionais({ searchParams }: SearchParamsProps) {
  const pageNumber = parseInt(searchParams?.page || "1", 10);

  const { devotionals, devotionalsConnection } = (await makeRequest(
    GetDevotionalsQuery({
      searchTerm: searchParams?.search,
      first: DEVOTIONALS_ITEMS,
      pageNumber,
    }),
  )) as DevotionalList;

  const { count } = devotionalsConnection?.aggregate || { count: 0 };
  const pageTotal = Math.ceil(count / DEVOTIONALS_ITEMS);

  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <Title
          title="Devocionais"
          subtitle="Dedique um tempo para meditar na Palavra"
        />

        {searchParams?.search && devotionals.length !== 0 && (
          <div className="mx-9 max-w-[702px] pb-8 text-base text-red-regular md:text-xl">
            Você pesquisou por <strong>"{searchParams?.search}"</strong>, abaixo
            estão os resultados:
          </div>
        )}

        <div className="mx-5 flex justify-center gap-36 xl:mx-0">
          <section>
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
          </section>

          <div className="hidden pb-24 xl:block">
            <Search />
            <LikedDevotionals />
          </div>
        </div>
      </div>
    </>
  );
}
