'use client'
import { NotFoundSearch } from "@/components/NotFoundSearch";
import { Title } from "@/components/Title";
import { GetDevotionalSearch } from "@/graphql/queries/get-devotional-search";
import { makeRequest } from "@/utils/hygraph-client";
import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import { DevotionalDetails as DevotionalDetailsType } from "@/@types/Devotional";


export default function DevotionalsSearch() {
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('q')  

  const handleSearch = async () => {    
    const query = GetDevotionalSearch(searchTerm || '');   
    const devotionals = await makeRequest(query) as DevotionalDetailsType

    console.log(devotionals)
  }

  useEffect(() => {
    if(searchTerm !== '') {
      handleSearch()
      
    }
  }, [searchTerm])

  return (
    <>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl">
        {/* Título */}
        <Title
          title="Busca de devocionais"
          subtitle={`Você pesquisou por  "${searchTerm}", abaixo estão os resultados:`} 
        />    
      
        <NotFoundSearch />
      </div>
    </>
  );
}
