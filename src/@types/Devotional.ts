import { ConnectionPattern } from "./Hygraph";

export interface Devotional {
  id: string;
  date: string;
  title: string;
  createdBy: {
    name: string;
  };
  thumbnail: {
    url: string;
  };
  resume: string;
}

export interface DevotionalDetails {
  devotional: Omit<Devotional, "resume"> & {
    content: {
      html: string;
    };
  };
}

export interface DevotionalList {
  devotionals: Devotional[];
  devotionalsConnection?: ConnectionPattern;
}

export interface DevotionalsSearch {
  devotionals: Devotional[] | [];
}
