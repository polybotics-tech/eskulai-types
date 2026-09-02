import { PaginationMetaType } from "@/types/global.js";
import { NoteType } from "@/types/note.js";

export type NoteResponseType = {
  note: NoteType;
};

export type NotesByDateResponseType = {
  notes: NoteType[];
  meta: PaginationMetaType;
};

export type DatesWithNoteResponseType = {
  dates: (Date | string)[];
};
