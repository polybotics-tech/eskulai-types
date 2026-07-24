export type NoteType = {
  id: string;
  userId: string;

  createdAt: Date | string;
  updatedAt: Date | string;

  title: string;
  content: string;
};
