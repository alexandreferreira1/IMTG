import { makeRequest } from "@/utils/hygraph-client";
import { GetGalleryByIdQuery } from "@/graphql/queries/get-gallery-by-id";
import { GalleryDetails as GalleryDetailsType } from "@/@types/Gallery";
import { notFound } from 'next/navigation'
import "react-image-gallery/styles/css/image-gallery.css"
import { useState } from "react";
import { GalleryPhotos } from "@/components/GalleryPhotos";



interface GalleryDetailsProps {
  params: {
    id: string;
  };
}

export default async function GalleryDetails({ params }: GalleryDetailsProps) {

  const query = GetGalleryByIdQuery(params.id)
  const gallery = await makeRequest(query) as GalleryDetailsType

  if (gallery.galleries.length === 0) {
    notFound()
  }

  console.log(gallery)




  return (
    <>

<GalleryPhotos />

    </>
  );
}
