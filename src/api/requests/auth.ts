import { OtpVerificationType } from "@/types/auth.js";

export type AuthRegisterRequestType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type AuthLoginRequestType = {
  email: string;
  password: string;
};

export type AuthCheckEmailRequestType = {
  email: string;
};

export type AuthSendOtpRequestType = {
  userId: string;
  purpose: OtpVerificationType["purpose"];
};

export type AuthVerifyOtpRequestType = {
  otp: string;
  purpose: OtpVerificationType["purpose"];
};

export type AuthNewPasswordRequestType = {
  password: string;
  confirmPassword: string;
};

export type AuthSignInWithGoogleRequestType = {
  email: string;
  fullname: string;
};

export type AuthSignInWithAppleRequestType = {
  identityToken: string | null;
  userSub: string | null;
  email: string | null;
  fullname: string;
};
