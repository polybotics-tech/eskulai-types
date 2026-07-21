import Joi from "joi";
export const noteSchema = Joi.object({
    title: Joi.string().required().trim().min(2).max(50).messages({
        "string.required": "Please provide a title",
        "string.empty": "Please provide a title",
        "string.min": "Title must be at least 2 characters long",
        "string.max": "Title cannot exceed 50 characters",
    }),
    content: Joi.string().allow("").trim().max(500).messages({
        "string.max": "Content cannot exceed 500 characters",
    }),
});
//# sourceMappingURL=note.js.map