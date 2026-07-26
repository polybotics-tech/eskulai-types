import { DefaultContentListType } from "@/types/global.js";

export type AIChatType = {
  id: string;
  userId?: string;
  threadId?: string;
  createdAt: string;
  messages: DefaultContentListType;
  sender: "eskulai" | "user";
};
