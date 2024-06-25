export interface Devotional {
  date: string;
  id: string;
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
    }
  }
}

export interface DevotionalList {
  devotionals: Devotional[];
}
