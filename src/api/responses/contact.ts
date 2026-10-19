import { FaqsType } from "@/types/contact.js";
import { PaginationMetaType } from "@/types/global.js";

export type FaqsResponseType = {
  faqs: FaqsType[];
  meta: PaginationMetaType;
};
