import { DefaultContentListType } from "@/types/content.js";

export type UpdateCategoryRequestType = {
  name: string;
};

export type UpdateArticleRequestType = {
  authorId: string;
  categoryId: string;
  keywords: string[];
  slug: string;
  title: string;
  intro: string;
  photoUri?: string;
  contents: DefaultContentListType;
};
