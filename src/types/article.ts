import { DefaultContentListType } from "@/types/global.js";

export type ArticlePreviewType = {
  id: string;
  createdAt: string;
  category: string;
  slug: string;
  title: string;
  intro: string;
  photoUri?: string;
};

export type ArticleType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  author?: unknown;
  category: string;
  keywords: string[];
  slug: string;
  title: string;
  intro: string;
  photoUri?: string;
  contents: DefaultContentListType;
};
