export type SendAIChatMessageRequestType = {
  conversationId: string;
  message: string;
};

export type DeleteAIChatConversationsRequestType = {
  conversationIds: string[];
};
