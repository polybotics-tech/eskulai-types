import {
  FaqsType,
  SupportTicketMessageType,
  SupportTicketType,
} from "@/types/contact.js";
import { PaginationMetaType } from "@/types/global.js";

export type FaqsResponseType = {
  faqs: FaqsType[];
  meta: PaginationMetaType;
};

export type SupportTicketsResponseType = {
  tickets: SupportTicketType[];
  meta: PaginationMetaType;
};

export type SupportTicketResponseType = {
  ticket: Omit<SupportTicketType, "lastMessage">;
};

export type SupportTicketMessagesResponseType = {
  messages: SupportTicketMessageType[];
  meta: PaginationMetaType;
};
