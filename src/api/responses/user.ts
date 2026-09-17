import {
  UserType,
  UserWithDetailsAndPreferencesType,
  UserWithDetailsType,
  UserWithPreferencesType,
} from "@/types/user.js";

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

export type UserUpdatePreferencesResponseType = {
  user: UserWithPreferencesType;
};

export type UserFetchUserResponseType = {
  user: UserWithDetailsAndPreferencesType;
  extra?: any;
};
