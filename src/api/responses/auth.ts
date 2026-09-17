import { OtpVerificationType } from "@/types/auth.js";
import {
  UserType,
  UserWithDetailsAndPreferencesType,
  UserWithDetailsType,
  UserWithPreferencesType,
} from "@/types/user.js";

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
  user:
    | UserType
    | UserWithDetailsType
    | UserWithPreferencesType
    | UserWithDetailsAndPreferencesType;
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
