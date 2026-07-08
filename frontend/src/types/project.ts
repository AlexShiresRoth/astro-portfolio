import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export type Project = {
  _id: string;
  problem?: string;
  solution?: string;
  contributions?: string[];
  overview?: string;
  code: string[];
  type: "personal" | "professional";
  liveLink: string;
  mainImage: { _type: string; asset: [Object] };
  optImage?: ImageUrlBuilder;
  order: number;
  sourceCodeLink: string;
  title: string;
};

export type Work = {
  _id: string;
  order: number;
  title: string;
  dateRange: string;
  description: string[];
  location: string;
  Projects: Project[];
  link?: string;
};

export type Header = {
  _id: string;
  title: string;
  subtitle: string;
  contentList: string[];
};
