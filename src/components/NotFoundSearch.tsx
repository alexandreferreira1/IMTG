/* eslint-disable react/no-unescaped-entities */
import { Button } from "./Button";
import Link from "next/link";

interface NotFoundSearchProps {
  searchParam?: string;
}

export function NotFoundSearch({ searchParam = "" }: NotFoundSearchProps) {
  return (
    <div className="mx-auto max-w-[530px] text-center space-y-4">
      <div className="text-3xl md:text-6xl font-extrabold text-black">
        Oops...
      </div>

      <div className="px-5 pb-4 text-base md:text-xl text-gray-medium">
        Sua pesquisa por <strong>"{searchParam}"</strong> não retornou nenhum
        resultado. Tente pesquisar por outro termo.
      </div>
      <Link href="/devocionais">
        <div className="text-center font-medium text-red-regular hover:underline pb-72">
          <Button title="IR PARA DEVOCIONAIS"></Button>
        </div>
      </Link>
    </div>
  );
}
