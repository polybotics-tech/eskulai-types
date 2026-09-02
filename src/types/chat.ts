import { DefaultContentListType } from "@/types/content.js";

export type AIChatMessageType = {
  id: string;
  userId?: string;
  conversationId?: string;
  createdAt: string;
  content: DefaultContentListType;
  role: "assistant" | "user";
};
