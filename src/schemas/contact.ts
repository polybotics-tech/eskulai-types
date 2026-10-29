import Joi from "joi";

export const updateFaqsSchema = Joi.object({
  question: Joi.string().trim().min(1).max(150).required(),
  answer: Joi.string().trim().min(1).max(2000).required(),
}).unknown(false);

export const sendSupportTicketMessageSchema = Joi.object({
  sender: Joi.string()
    .lowercase()
    .valid("user", "support")
    .optional()
    .messages({
      "string.empty": "Please provide a sender type",
      "any.only": "Unknown sender type provided",
    }),
  content: Joi.string().trim().min(1).max(1000).required().messages({
    "string.required": "Provide a message content",
    "string.max": "Content cannot exceed 1000 characters",
  }),
});

export const createNewTicketSchema = Joi.object({
  title: Joi.string().trim().min(1).max(100).required().messages({
    "string.required": "Provide a title or subject",
    "string.max": "Title cannot exceed 100 characters",
  }),
  category: Joi.string()
    .lowercase()
    .valid(
      "technical_issue",
      "account_authentication",
      "privacy_security",
      "ai_assistant_chat",
      "drug_information_search",
      "medical_imaging_analysis",
      "patient_assessment_diagnosis",
      "medical_calculators",
      "learning_study_resources",
      "incorrect_medical_information",
      "subscription_payments",
      "feature_request",
      "general_enquiry",
      "other",
    )
    .required()
    .messages({
      "string.required": "Please provide a category",
      "any.only": "Unknown category provided",
    }),
  message: Joi.string().trim().min(1).max(1000).required().messages({
    "string.required": "Provide a message message",
    "string.max": "Message cannot exceed 1000 characters",
  }),
});
