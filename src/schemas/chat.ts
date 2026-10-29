import Joi from "joi";

export const sendAIChatMessageSchema = Joi.object({
  conversationId: Joi.optional(),
  message: Joi.string().min(1).max(5000).required().messages({
    "string.required": "Provide a message to continue",
    "string.max": "Message cannot exceed 1000 characters",
  }),
}).unknown(false);
