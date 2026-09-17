import {
  UserDetailsType,
  UserPreferencesType,
  UserType,
} from "@/types/user.js";

export type UserUpdateRequestType = {
  fullname: UserType["fullname"];
};

export type UserUpdateDetailsRequestType = Partial<
  Omit<UserDetailsType, "userId">
>;

export type UserUpdatePreferencesRequestType = Partial<
  Omit<UserPreferencesType, "userId">
>;

export type UserUpdatePasswordRequestType = {
  oldPassword: string;
  password: string;
  confirmPassword: string;
};
