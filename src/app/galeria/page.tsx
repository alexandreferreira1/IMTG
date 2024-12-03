import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import Pagination from "@/components/Pagination";
import {GalleryItem} from "@/components/GalleryItem";
import { Gallery, GalleryList } from "@/@types/Gallery";
import { GetGalleriesQuery } from "@/graphql/queries/get-galleries";
import { makeRequest } from "@/utils/hygraph-client";


export default async function Galeria() {
  const galleries = await makeRequest(GetGalleriesQuery) as GalleryList
  
  return (
    <>
      {/* Main */}
      <div className="mx-auto max-w-screen-xl pb-24">
        {/* Título */}
        <Title
          title="Galeria de Fotos"
          subtitle="Confira nossos eventos"
        />

        <div className="flex flex-wrap justify-center xl:justify-start gap-x-[84px] gap-y-16 mx-5 xl:mx-0">
          {galleries.galleries.map(gallery =>
            <GalleryItem
            key={gallery.id}
              id={gallery.id}
              date={gallery.date}
              quantity={gallery.photos.length}
              title={gallery.title}
              imgUrl={gallery.thumbnail.url}
            />)}

        </div>

        {/* Paginação */}
        {/* <Pagination /> */}
      </div>
    </>
  );
}
