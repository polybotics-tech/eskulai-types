import { OtpVerificationType } from "@/types/auth.js";
import { UserType, UserWithDetailsType } from "@/types/user.js";

export type AuthRegisterResponseDataType = {
  user: UserType;
  accessToken: string | null;
  refreshToken: string | null;
};

export type AuthLoginResponseDataType = {
  user: UserType;
  accessToken: string | null;
  refreshToken: string | null;
};

export type AuthRefreshTokenResponseDataType = {
  accessToken: string | null;
  refreshToken: string | null;
};

export type AuthFetchUserResponseDataType = {
  user: UserWithDetailsType;
};

export type AuthCheckEmailResponseDataType = {
  emailExists: boolean;
};

export type AuthSendOtpResponseType = {
  userId: string;
  purpose: OtpVerificationType["purpose"];
  accessToken: string | null;
};

export type AuthVerifyOtpResponseDataType = {
  user: UserType;
  accessToken: string | null;
  refreshToken: string | null;
};

export type AuthNewPasswordResponseDataType = {
  user: UserType;
  accessToken: string | null;
  refreshToken: string | null;
};
