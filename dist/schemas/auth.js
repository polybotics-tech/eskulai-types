import Joi from "joi";
import { confirmPasswordSchema, emailSchema, otpVerificationPurposeSchema, passwordSchema, } from "../schemas/global.js";
export const authRegisterSchema = Joi.object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
});
export const authLoginSchema = Joi.object({
    email: emailSchema,
    password: Joi.string().required().messages({
        "any.required": "Please provide a password",
        "string.empty": "Please provide a password",
    }),
});
export const authCheckEmailSchema = Joi.object({
    email: emailSchema,
});
export const authSendOtpSchema = Joi.object({
    userId: Joi.string().required().messages({
        "any.required": "Please provide a user ID",
        "string.empty": "Please provide a user ID",
    }),
    purpose: otpVerificationPurposeSchema,
});
export const authVerifyOtpSchema = Joi.object({
    otp: Joi.string().required().messages({
        "any.required": "Please provide an OTP",
        "string.empty": "Please provide an OTP",
    }),
    purpose: otpVerificationPurposeSchema,
});
export const authNewPasswordSchema = Joi.object({
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
});
//# sourceMappingURL=auth.js.map