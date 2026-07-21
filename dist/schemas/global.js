import Joi from "joi";
export const emailSchema = Joi.string().trim().email().required().messages({
    "any.required": "Please provide an email address",
    "string.empty": "Please provide an email address",
    "string.email": "Please provide an email address",
});
export const passwordSchema = Joi.string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#.%*?&_])[A-Za-z\d@$!#.%*?&_]{8,20}$/)
    .min(8)
    .max(20)
    .required()
    .messages({
    "any.required": "Please provide a new password",
    "string.empty": "Please provide a new password",
    "string.min": "Password must be atleast 8 characters long",
    "string.max": "Password cannot exceed 20 characters",
    "string.pattern.base": "Password must be 8-20 characters long and include at least: 1 number, 1 uppercase letter, 1 lowercase letter, and one special character (@$!#.%*?&_)",
});
export const confirmPasswordSchema = Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .messages({
    "any.required": "Please confirm your password",
    "string.empty": "Please confirm your password",
    "any.only": "Ensure both passwords match",
});
export const otpVerificationPurposeSchema = Joi.string()
    .lowercase()
    .valid("email_verification", "device_verification")
    .optional()
    .messages({
    "string.empty": "Please provide a purpose",
    "any.only": "Unknown purpose provided",
});
export const fullnameSchema = Joi.string()
    .trim()
    .min(3)
    .max(100)
    .regex(/^[\p{L}\p{N}][\p{L}\p{N} \-'.&,]{1,98}[\p{L}\p{N}.]$/u)
    .messages({
    "string.empty": "Please provide a name",
    "string.min": "Account name must be at least 3 characters long",
    "string.max": "Account name cannot exceed 100 characters",
    "string.pattern.base": "Account name must start with a letter or number and may contain letters, numbers, spaces, and -'.&, but cannot end with space or special characters",
});
//# sourceMappingURL=global.js.map