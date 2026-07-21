import { PaginationMetaType } from "@/types/global.js";
import { NoteType } from "@/types/note.js";

export type NoteResponseDataType = {
  note: NoteType;
};

export type NotesByDateResponseDataType = {
  notes: NoteType[];
  meta: PaginationMetaType;
};

export type DatesWithNoteResponseDataType = {
  dates: (Date | string)[];
};
