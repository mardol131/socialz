import axios from "axios";
import { Collections } from "../_types/collections";

export type PaginatedResponse<T> = {
  docs: (T & { id: string; createdAt: string; updatedAt: string })[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

export async function getCollection(collection: Collections) {
  console.log(
    `Fetching collection: ${collection} from CMS at ${process.env.NEXT_PUBLIC_CMS_URL}`
  );
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/${collection}`
  );

  return response.data;
}

export async function getItem(collection: Collections, slug: string) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/${collection}/${slug}`
  );

  return response.data;
}

export async function getColors(): Promise<
  PaginatedResponse<{ label: string; slug: string; hex: string }>
> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/colors`
  );
  return response.data;
}

export async function getRatios(): Promise<
  PaginatedResponse<{ label: string; slug: string }>
> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/ratios`
  );
  return response.data;
}
