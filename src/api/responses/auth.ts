import { OtpVerificationType } from "@/types/auth.js";
import { UserType, UserWithDetailsType } from "@/types/user.js";

export type AuthRegisterResponseType = {
  user: UserType;
  accessToken: string | null;
  refreshToken: string | null;
};

export type AuthLoginResponseType = {
  user: UserType;
  isNewDevice: boolean;
  accessToken: string | null;
  refreshToken: string | null;
};

export type AuthRefreshTokenResponseType = {
  accessToken: string | null;
  refreshToken: string | null;
};

export type AuthFetchUserResponseType = {
  user: UserWithDetailsType;
};

export type AuthCheckEmailResponseType = {
  emailExists: boolean;
  user: UserType;
};

export type AuthSendOtpResponseType = {
  userId: string;
  purpose: OtpVerificationType["purpose"];
  accessToken: string | null;
};

export type AuthVerifyOtpResponseType = {
  user: UserType;
  accessToken: string | null;
  refreshToken: string | null;
};

export type AuthNewPasswordResponseType = {
  user: UserType;
  accessToken: string | null;
  refreshToken: string | null;
};
