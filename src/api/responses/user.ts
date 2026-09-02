import { UserType, UserWithDetailsType } from "@/types/user.js";

export type UserUpdateResponseType = {
  user: UserType;
};

export type UserUpdatePasswordResponseType = {
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
