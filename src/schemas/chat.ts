import Joi from "joi";

export const sendAIChatMessageSchema = Joi.object({
  conversationId: Joi.optional(),
  message: Joi.string().min(1).max(5000).required(),
}).unknown(false);
