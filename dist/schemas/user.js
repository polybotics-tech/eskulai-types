import Joi from "joi";
import { confirmPasswordSchema, fullnameSchema, passwordSchema, } from "../schemas/global.js";
export const userUpdateSchema = Joi.object({
    fullname: fullnameSchema,
});
export const userUpdateDetailSchema = Joi.object({
    dob: Joi.date().less("now").optional().messages({
        "date.empty": "Please provide a date",
        "date.base": "Please provide a date",
        "date.less": "Date must be from the past",
    }),
    gender: Joi.string().lowercase().valid("male", "female").optional().messages({
        "string.empty": "Please provide a gender type",
        "any.only": "Unknown gender type provided",
    }),
    role: Joi.string()
        .lowercase()
        .valid("student", "doctor", "nurse")
        .optional()
        .messages({
        "string.empty": "Please provide a role type",
        "any.only": "Unknown role type provided",
    }),
    country: Joi.string().min(2).optional().messages({
        "string.empty": "Please provide a country",
        "string.min": "Please provide a country",
    }),
});
export const userNewPasswordSchema = Joi.object({
    oldPassword: Joi.string().required().messages({
        "any.required": "Please provide a password",
        "string.empty": "Please provide a password",
    }),
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
});
//# sourceMappingURL=user.js.map