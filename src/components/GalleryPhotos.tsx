"use client";

import Image from "next/image";
import { Title } from "./Title";
import { ImageGallery } from "./ImageGallery";
import { useState } from "react";
import { GalleryDetails as GalleryDetailsType } from "@/@types/Gallery";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface GalleryPhotosProps {
  gallery: GalleryDetailsType;
}

export function GalleryPhotos({ gallery }: GalleryPhotosProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(0);

  const handleOpenGallery = (index: number) => {
    setIndexOpen(index);
    setIsGalleryOpen(true);
  };

  const images = gallery.gallery.photos.map((image) => {
    return {
      original: image.url,
      thumbnail: image.url,
    };
  });

  const date = new Date(parseISO(gallery.gallery.date));
  const month = format(date, "MMMM", { locale: ptBR });

  const capitalized = month.charAt(0).toUpperCase() + month.slice(1);

  return (
    <section>
      {/* Main */}
      {isGalleryOpen && (
        <ImageGallery
          indexOpen={indexOpen}
          images={images}
          setIsGalleryOpen={setIsGalleryOpen}
        />
      )}

      <div className="mx-auto mb-24 max-w-screen-xl">
        {/* Título */}
        <Title
          title={gallery.gallery.title}
          subtitle={`
                    ${format(date, "dd 'de' ", { locale: ptBR })}
                    ${capitalized}
                    ${format(date, ", yyyy", { locale: ptBR })}

                    • ${gallery.gallery.photos.length.toString().padStart(2, "0")} foto${gallery.gallery.photos.length > 1 && "s"}`}
        />

        {/* */}
        <div className="mx-5 flex flex-wrap justify-center gap-1 xl:mx-0 xl:justify-start">
          {gallery.gallery.photos.map((item, index) => (
            <div
              className="overflow-hidden transition-all duration-1000 hover:rounded-[4px] hover:duration-100"
              key={item.id}
            >
              <Image
                onClick={() => handleOpenGallery(index)}
                src={item.url}
                width={422}
                height={280}
                alt="Image Example"
                className="object-cover transition-all duration-1000 hover:scale-110 hover:cursor-pointer hover:duration-1000 sm:h-[280px] sm:w-[422px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
