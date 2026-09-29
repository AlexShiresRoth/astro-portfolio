import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  // Set default headers to be included with all requests
  headers: {
    "X-Custom-Header": "custom-value",
  },
  apiVersion: "2025-02-06", // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
  token: import.meta.env.SANITY_API_TOKEN, // Needed for certain operations like updating content, accessing drafts or using draft perspectives
});

export const HEADER_QUERY = `*[_type == "header"]{
    _id,
    title,
    contentList,
    subtitle,
  }`;

export const PERSONAL_PROJECT_QUERY = `*[_type == "project" && type == "personal"] | order(order asc) {
    _id,
    title,
    liveLink,
    sourceCodeLink,
    mainImage,
    problem,
    solution,
    contributions,
    overview,
    code,
    type,
    slug,
  }`;

export const PROFESSIONAL_PROJECT_QUERY = `*[_type == "project" && type == "professional"] | order(order asc) {
    _id,
    title,
    liveLink,
    sourceCodeLink,
    mainImage,
    problem,
    solution,
    contributions,
    overview,
    code,
    type,
    slug,
  }`;

export const WORK_QUERY = `*[_type == "work"]{
    _id,
    order,
    title,
    dateRange,
    description,
    location,
    link,
  }`;

const imageBuilder = imageUrlBuilder(client);

export function buildImageUrl(source: SanityImageSource) {
  return imageBuilder.image(source);
}
