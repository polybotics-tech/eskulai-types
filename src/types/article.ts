import { DefaultContentListType } from "@/types/content.js";

export type ArticleCategoryType = {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  name: string;
  numOfArticle?: number;
};

export type ArticlePreviewType = {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  categoryId: string;
  category?: string;
  slug: string;
  title: string;
  intro: string;
  photoUri?: string;
};

export type ArticleType = {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  authorId: string;
  author?: string;
  categoryId: string;
  category?: string;
  keywords: string[];
  slug: string;
  title: string;
  intro: string;
  photoUri?: string;
  contents: DefaultContentListType;
};
