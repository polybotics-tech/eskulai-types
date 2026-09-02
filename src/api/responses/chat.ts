import { DefaultContentListType } from "@/types/content.js";

export type AIChatMessageResponseType = {
  id: string;
  conversationId: string;
  role: "user" | "assistant";
  content: DefaultContentListType;
  createdAt: string;
};

export type AIChatConversationsResponseType = {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  lastMessage?: string;
};

export type AIChatHistoryResponseType = {
  messages: AIChatMessageResponseType[];
};
