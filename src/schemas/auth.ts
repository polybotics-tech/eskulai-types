import Joi from "joi";
import {
  confirmPasswordSchema,
  emailSchema,
  otpVerificationPurposeSchema,
  passwordSchema,
} from "@/schemas/global.js";

import {
  AuthCheckEmailRequestType,
  AuthLoginRequestType,
  AuthNewPasswordRequestType,
  AuthRegisterRequestType,
  AuthSendOtpRequestType,
  AuthVerifyOtpRequestType,
} from "@/api/requests/auth.js";

export const authRegisterSchema = Joi.object<AuthRegisterRequestType>({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
});

export const authLoginSchema = Joi.object<AuthLoginRequestType>({
  email: emailSchema,
  password: Joi.string().required().messages({
    "any.required": "Please provide a password",
    "string.empty": "Please provide a password",
  }),
});

export const authCheckEmailSchema = Joi.object<AuthCheckEmailRequestType>({
  email: emailSchema,
});

export const authSendOtpSchema = Joi.object<AuthSendOtpRequestType>({
  userId: Joi.string().required().messages({
    "any.required": "Please provide a user ID",
    "string.empty": "Please provide a user ID",
  }),
  purpose: otpVerificationPurposeSchema,
});

export const authVerifyOtpSchema = Joi.object<AuthVerifyOtpRequestType>({
  otp: Joi.string().required().messages({
    "any.required": "Please provide an OTP",
    "string.empty": "Please provide an OTP",
  }),
  purpose: otpVerificationPurposeSchema,
});

export const authNewPasswordSchema = Joi.object<AuthNewPasswordRequestType>({
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
});
