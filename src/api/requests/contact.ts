import {
  SupportTicketCategoryType,
  SupportTicketSenderRoleType,
} from "@/types/contact.js";

export type UpdateFaqsRequestType = {
  question: string;
  answer: string;
};

export type CreateSupportTicketRequestType = {
  title: string;
  category: SupportTicketCategoryType;
  message: string;
};

export type SendTicketMessageRequestType = {
  sender: SupportTicketSenderRoleType;
  content: string;
};
