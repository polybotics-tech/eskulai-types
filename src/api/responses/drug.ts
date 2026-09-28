import { DrugInfoType, DrugSearchHistoryType, DrugType } from "@/types/drug.js";
import { PaginationMetaType } from "@/types/global.js";

export type DrugInfoResponseType = {
  drugInfo: DrugInfoType;
  searchHistory: DrugSearchHistoryType;
};

export type DrugSearchResponseType = {
  drugs: DrugType[];
  meta: PaginationMetaType;
};

export type DrugSearchHistoryResponseType = {
  history: DrugSearchHistoryType;
};
