import { ConnectionPattern } from "./Hygraph";

export interface GalleryPhoto {
  id: string;
  url: string;
}

export interface Gallery {
  id: string;
  title: string;
  date: string;
  photos: GalleryPhoto[];
  thumbnail: {
    id: string;
    url: string;
  };
}

export interface GalleryList {
  galleries: Gallery[];
  galleriesConnection: ConnectionPattern;
  
}

export interface GalleryDetails {
  gallery: Omit<Gallery, "thumbnail">
}
