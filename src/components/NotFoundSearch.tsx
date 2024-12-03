/* eslint-disable react/no-unescaped-entities */
import { Button } from "./Button";
import Link from "next/link";

interface NotFoundSearchProps {
  searchParam?: string
}

export function NotFoundSearch({ searchParam = '' }: NotFoundSearchProps) {
  return (
    <>
      <div className="text-center w-[530px] text-base md:text-6xl text-black pb-4 font-extrabold">Oops...</div>

      <div className="text-center w-[530px] text-base md:text-xl text-gray-medium pb-4">Sua pesquisa por <strong>"{searchParam}"</strong> não retornou nenhum resultado. Tente pesquisar por outro termo.</div>
      <Link href={`/devocionais`}><div className="text-red-regular font-medium hover:underline text-center"><Button title="IR PARA DEVOCIONAIS"></Button></div></Link> 
    </>
  );
}
