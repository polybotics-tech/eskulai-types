import {
  ArticleCategoryType,
  ArticlePreviewType,
  ArticleType,
} from "@/types/article.js";
import { PaginationMetaType } from "@/types/global.js";

export type ArticleCategoriesResponseType = {
  categories: ArticleCategoryType[];
  meta: PaginationMetaType;
};

export type ArticleCategoryResponseType = {
  category: ArticleCategoryType;
};

export type ArticlePreviewListResponseType = {
  articles: ArticlePreviewType[];
  meta: PaginationMetaType;
};

export type ArticleResponseType = {
  article: ArticleType;
};
