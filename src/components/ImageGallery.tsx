"use client";

import { X } from "@phosphor-icons/react/dist/ssr";
import { Dispatch, SetStateAction } from "react";
import ImageGalleryComponent from "react-image-gallery";
interface Image {
  original: string;
  thumbnail: string;
}
interface ImageGalleryProps {
  indexOpen: number;
  images: Image[];
  setIsGalleryOpen: Dispatch<SetStateAction<boolean>>;
}

export function ImageGallery({
  indexOpen,
  images,
  setIsGalleryOpen,
}: ImageGalleryProps) {
  return (
    <div className="fixed inset-0 z-[10] h-screen w-screen overflow-hidden  px-10 pt-10">
      <button
        onClick={() => {}}
        className="absolute inset-0 bg-black-dark/80 backdrop-blur-md"
      />
      <button onClick={() => setIsGalleryOpen(false)}>
        <X className="absolute right-8 top-4 text-white" size={44} />
      </button>
      <ImageGalleryComponent
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        startIndex={indexOpen}
        showFullscreenButton={false}
      />
    </div>
  );
}
