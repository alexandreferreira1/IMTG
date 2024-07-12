'use client'

import { X } from "@phosphor-icons/react/dist/ssr";
import { Dispatch, SetStateAction } from "react";
import ImageGalleryComponent from "react-image-gallery";
interface Image {
    original: string;
    thumbnail: string;
}
interface ImageGalleryProps {
    indexOpen: number;
    images: Image[]
    setIsGalleryOpen: Dispatch<SetStateAction<boolean>>
}

export function ImageGallery({ indexOpen, images, setIsGalleryOpen }: ImageGalleryProps) {
    return (
        <div className="fixed w-screen h-screen overflow-hidden z-[10] inset-0  pt-10 px-10">
            <button onClick={() => console.log("oi")} className="absolute inset-0 bg-black-dark/80 backdrop-blur-md" />
            <button onClick={() => setIsGalleryOpen(false)}><X className="text-white absolute top-4 right-8" size={44} /></button>
            <ImageGalleryComponent items={images} showThumbnails={false} showPlayButton={false} startIndex={indexOpen} showFullscreenButton={false} />
        </div>
    )
}
