import { AIChatConversationType, AIChatMessageType } from "@/types/chat.js";
import { PaginationMetaType } from "@/types/global.js";

export type AIChatMessageResponseType = {
  message: AIChatMessageType;
};

export type AIChatConversationsResponseType = {
  conversations: AIChatConversationType[];
  meta: PaginationMetaType;
};

export type AIChatHistoryResponseType = {
  messages: AIChatMessageType[];
  meta: PaginationMetaType;
};
