import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export type Project = {
  _id: string;
  body: string;
  languages: string[];
  liveLink: string;
  mainImage: { _type: string; asset: [Object] };
  optImage?: ImageUrlBuilder;
  sourceCodeLink: string;
  title: string;
};

export type Work = {
  _id: string;
  order: number;
  title: string;
  dateRange: string;
  description: string;
  responsibilities: string;
  location: string;
  Projects: Project[];
  link: string;
};

export type Header = {
  _id: string;
  title: string;
  contentList: string[];
};
