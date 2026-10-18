import Joi from "joi";

export const updateCategorySchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
}).unknown(false);

export const updateArticleSchema = Joi.object({
  authorId: Joi.string().required(),
  categoryId: Joi.string().required().messages({
    "string.required": "Select a category for this article",
  }),
  keywords: Joi.array()
    .items(Joi.string().min(1).max(100))
    .min(1)
    .max(10)
    .messages({
      "array.min": "Provide atleast 1 keyword",
      "array.max": "Too many keywords provided",
    }),
  slug: Joi.string().min(1).max(50).required().messages({
    "string.required": "Provide a slug for this article",
    "string.max": "Slug is a bit too long",
  }),
  title: Joi.string().min(20).max(70).required().messages({
    "string.required": "Provide a title for this article",
    "string.min": "Title is a bit too short",
    "string.max": "Title is a bit too long",
  }),
  intro: Joi.string().min(100).max(400).required().messages({
    "string.required": "Provide a convincing introduction",
    "string.min": "Introduction is too short",
    "string.max": "Introduction is too long",
  }),
  photoUri: Joi.string(),
  contents: Joi.optional(),
});
