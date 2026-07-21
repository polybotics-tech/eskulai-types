import { UserType, UserWithDetailsType } from "@/types/user.js";

export type UserUpdateResponseDataType = {
  user: UserType;
};

export type UserUpdatePasswordResponseDataType = {
  user: UserType;
  accessToken: string | null;
  refreshToken: string | null;
};

export type UserUpdateDetailsResponseType = {
  user: UserWithDetailsType;
};

export type UserFetchUserResponseType = {
  user: UserWithDetailsType;
  extra?: any;
};
