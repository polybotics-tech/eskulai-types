import Joi from "joi";
import {
  confirmPasswordSchema,
  fullnameSchema,
  passwordSchema,
} from "@/schemas/global.js";

import {
  UserUpdatePasswordRequestType,
  UserUpdateDetailsRequestType,
  UserUpdateRequestType,
  UserUpdatePreferencesRequestType,
} from "@/api/requests/user.js";

export const userUpdateSchema = Joi.object<UserUpdateRequestType>({
  fullname: fullnameSchema,
});

export const userUpdateDetailSchema = Joi.object<UserUpdateDetailsRequestType>({
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

export const userUpdatePreferenceSchema =
  Joi.object<UserUpdatePreferencesRequestType>({
    interactionStyle: Joi.string()
      .lowercase()
      .valid("summarized", "detailed")
      .optional()
      .messages({
        "string.empty": "Please provide an interaction style type",
        "any.only": "Unknown interaction style type provided",
      }),
    medicalTerminology: Joi.string()
      .lowercase()
      .valid("basic", "standard", "clinical")
      .optional()
      .messages({
        "string.empty": "Please provide a medical terminology type",
        "any.only": "Unknown medical terminology type provided",
      }),
    responseTonicity: Joi.string()
      .lowercase()
      .valid("simple", "professional", "technical")
      .optional()
      .messages({
        "string.empty": "Please provide a response tonicity type",
        "any.only": "Unknown response tonicity type provided",
      }),
  });

export const userUpdatePasswordSchema =
  Joi.object<UserUpdatePasswordRequestType>({
    oldPassword: Joi.string().required().messages({
      "any.required": "Please provide a password",
      "string.empty": "Please provide a password",
    }),
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  });
