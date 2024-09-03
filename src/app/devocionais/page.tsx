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


export interface Devotional {
  date: string;
  id: string;
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
}

export default async function Devocionais() {
  const devotionals = await makeRequest(GetDevotionalsQuery) as DevotionalList;    

  return (
    <>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl">
        {/* Título */}
        <Title
          title="Devocionais"
          subtitle="Tire um tempo para meditar na Palavra"
        />
        <div className="flex gap-36 mx-5 xl:mx-0 justify-center">
          {/* Coluna 1 */}

          <div>
            {devotionals.devotionals.map(devotional =>
              <DevotionalItem
                key={devotional.id}
                id={devotional.id}
                author={devotional.createdBy.name}
                date={devotional.date}
                title={devotional.title}
                resume={devotional.resume}
                imgUrl={devotional.thumbnail.url}
              />)
            }
          </div>


          {/* Coluna 2 */}
          <div className="hidden xl:block">

           <Search />
          </div>
        </div>

        {/* Paginação */}
        <Pagination />
      </div>
    </>
  );
}
