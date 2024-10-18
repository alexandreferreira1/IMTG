"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  maxVisiblePages?: number;
}

const Pagination = ({
  currentPage,
  totalPages,
  maxVisiblePages = 3,
}: PaginationProps) => {
  const { replace } = useRouter();
  const searchParamsHook = useSearchParams();
  const pathname = usePathname();

  // Função para lidar com a mudança de página
  function handleClickPage(pageNumber: number) {
    const params = new URLSearchParams(searchParamsHook);

    if (pageNumber > 1) {
      params.set("page", pageNumber.toString());
    } else {
      params.delete("page");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: true });
  }

  const startPage = Math.max(
    Math.min(
      currentPage - Math.floor(maxVisiblePages / 2),
      totalPages - maxVisiblePages + 1,
    ),
    1,
  );
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  const pageArray = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className="flex items-center justify-between">
      <ul className="list-style-none flex items-center py-4">
        {/* Botão para a primeira página */}
        <li>
          <button
            className="mr-2 flex h-7 w-7 items-center justify-center rounded-full border disabled:opacity-40"
            onClick={() => handleClickPage(1)}
            disabled={currentPage === 1}
            aria-label="Ir para a primeira página"
          >
            <CaretDoubleLeft color="black" weight="bold" />
          </button>
        </li>

        {/* Botão Anterior */}
        <li>
          <button
            className="mr-2 flex h-7 w-7 items-center justify-center rounded-full border disabled:opacity-40"
            onClick={() => handleClickPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Página anterior"
          >
            <CaretLeft color="black" weight="bold" />
          </button>
        </li>

        {/* Páginas */}
        {pageArray.map((page) => (
          <li key={page}>
            <button
              className={`flex h-7 w-7 items-center justify-center font-sans ${
                currentPage === page
                  ? "rounded-md bg-red-light text-white"
                  : "text-black"
              }`}
              onClick={() => handleClickPage(page)}
              aria-label={`Ir para página ${page}`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Botão Próxima */}
        <li>
          <button
            className="ml-2 flex h-7 w-7 items-center justify-center rounded-full border disabled:opacity-40"
            onClick={() => handleClickPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            aria-label="Próxima página"
          >
            <CaretRight color="black" weight="bold" />
          </button>
        </li>

        {/* Botão para a última página */}
        <li>
          <button
            className="ml-2 flex h-7 w-7 items-center justify-center rounded-full border disabled:opacity-40"
            onClick={() => handleClickPage(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Ir para a última página"
          >
            <CaretDoubleRight color="black" weight="bold" />
          </button>
        </li>
      </ul>
      <p className="text-center">
        Página {currentPage} de {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
