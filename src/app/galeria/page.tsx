import { Title } from "@/components/Title";
import { GalleryItem } from "@/components/GalleryItem";
import { GalleryList } from "@/@types/Gallery";
import { GetGalleriesQuery } from "@/graphql/queries/get-galleries";
import { makeRequest } from "@/utils/hygraph-client";
import Pagination from "@/components/Pagination";

interface SearchParamsProps {
  searchParams?: {
    search?: string;
    page?: string;
  };
}

const GALLERY_ITEMS = 3;

export const revalidate = 60;

export default async function Galeria({ searchParams }: SearchParamsProps) {
  const pageNumber = parseInt(searchParams?.page || "1", 10);

  const {
    galleries,
    galleriesConnection: { aggregate },
  } = (await makeRequest(
    GetGalleriesQuery({
      searchTerm: searchParams?.search,
      first: GALLERY_ITEMS,
      pageNumber,
    }),
  )) as GalleryList;

  const { count } = aggregate;
  const pageTotal = Math.ceil(count / GALLERY_ITEMS);

  return (
    <section>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl pb-24">
        {/* Título */}
        <Title title="Galeria de Fotos" subtitle="Confira nossos eventos" />

        <div className="mx-5 flex flex-wrap justify-center gap-x-[84px] gap-y-16 xl:mx-0 xl:justify-start">
          {galleries.map((gallery) => (
            <GalleryItem
              key={gallery.id}
              id={gallery.id}
              date={gallery.date}
              quantity={gallery.photos.length}
              title={gallery.title}
              imgUrl={gallery.thumbnail.url}
            />
          ))}
        </div>

        <div className="max-w-xl px-10 py-7 xl:px-0 ">
          {/* Paginação */}
          {pageTotal > 1 && (
            <Pagination
              currentPage={pageNumber}
              totalPages={pageTotal}
              maxVisiblePages={5}
            />
          )}
        </div>
      </div>
    </section>
  );
}
