import { PaginationMetaType } from "@/types/global.js";
import { PrepNoteType } from "@/types/learn.js";

export type PrepNotesResponseType = {
  prepNotes: PrepNoteType[];
  meta: PaginationMetaType;
};
