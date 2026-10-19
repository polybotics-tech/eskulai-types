import Joi from "joi";

export const updateFaqsSchema = Joi.object({
  question: Joi.string().trim().min(1).max(150).required(),
  answer: Joi.string().trim().min(1).max(2000).required(),
}).unknown(false);
