/* eslint-disable react/no-unescaped-entities */
import { Button } from "./Button";
import Link from "next/link";

interface NotFoundSearchProps {
  searchParam?: string;
}

export function NotFoundSearch({ searchParam = "" }: NotFoundSearchProps) {
  return (
    <>
      <div className="w-[530px] pb-4 text-center text-base font-extrabold text-black md:text-6xl">
        Oops...
      </div>

      <div className="w-[530px] pb-4 text-center text-base text-gray-medium md:text-xl">
        Sua pesquisa por <strong>"{searchParam}"</strong> não retornou nenhum
        resultado. Tente pesquisar por outro termo.
      </div>
      <Link href="/devocionais">
        <div className="text-center font-medium text-red-regular hover:underline">
          <Button title="IR PARA DEVOCIONAIS"></Button>
        </div>
      </Link>
    </>
  );
}
