'use client'

import { useRef } from "react";
import ImageGalleryComponent from "react-image-gallery";

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];

export function ImageGallery() {
    const divRef = useRef<HTMLDivElement>(null)
    console.log(divRef.current?.onclick)

    return (
        <div className="fixed  w-screen h-screen overflow-hidden z-50 inset-0  pt-10 px-10">
            <button onClick={() => console.log("oi")} className="absolute inset-0 bg-black-dark/80 backdrop-blur-md"/>
            <ImageGalleryComponent items={images} showThumbnails={false} showPlayButton={false} startIndex={1} showFullscreenButton={false}/>
        </div>
    )

}
