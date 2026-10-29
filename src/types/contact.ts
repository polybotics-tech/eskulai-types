import {
  SUPPORT_TICKET_CATEGORIES_CONST,
  SUPPORT_TICKET_STATUS_CONST,
} from "@/constants/contact.js";

export type FaqsType = {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  question: string;
  answer: string;
};

export type SupportTicketCategoryType =
  (typeof SUPPORT_TICKET_CATEGORIES_CONST)[number]["value"];

export type SupportTicketStatusType =
  (typeof SUPPORT_TICKET_STATUS_CONST)[number];

export type SupportTicketType = {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  tag: string;
  userId: string;
  subject: string;
  category: SupportTicketCategoryType;
  status: SupportTicketStatusType;
};

export type SupportTicketMessageType = {
  id: string;
  createdAt: Date | string;
  ticketId: string;
  userId: string;
  sender: "user" | "support";
  content: string;
};
