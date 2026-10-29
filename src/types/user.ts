import {
  CUSTOMIZATIONS_INTERACTION_STYLES_CONST,
  CUSTOMIZATIONS_MEDICAL_TERMINOLOGIES_CONST,
  CUSTOMIZATIONS_RESPONSE_TONICITIES_CONST,
  CUSTOMIZATIONS_SPEECH_SPEEDS_CONST,
  USER_GENDERS_CONST,
  USER_ROLES_CONST,
} from "@/constants/user.js";

export type UserRoleType = (typeof USER_ROLES_CONST)[number]["value"];
export type UserGenderType = (typeof USER_GENDERS_CONST)[number]["value"];

export type CustomizationInteractionStyleType =
  (typeof CUSTOMIZATIONS_INTERACTION_STYLES_CONST)[number]["value"];
export type CustomizationResponseTonicityType =
  (typeof CUSTOMIZATIONS_RESPONSE_TONICITIES_CONST)[number]["value"];
export type CustomizationMedicalTerminologyType =
  (typeof CUSTOMIZATIONS_MEDICAL_TERMINOLOGIES_CONST)[number]["value"];
export type CustomizationSpeechSpeedType =
  (typeof CUSTOMIZATIONS_SPEECH_SPEEDS_CONST)[number]["value"];

export type UserType = {
  id: string;
  publicId: string;

  createdAt: Date | string;
  updatedAt: Date | string;

  fullname: string;
  email: string;

  isEmailVerified: boolean;
  isDisabled: boolean;
};

export type UserDetailsType = {
  userId: UserType["id"];

  dob: Date | string;
  country: string;

  gender: UserGenderType;
  role: UserRoleType;
};

export type UserPreferencesType = {
  userId: UserType["id"];

  interactionStyle: CustomizationInteractionStyleType;
  medicalTerminology: CustomizationMedicalTerminologyType;
  responseTonicity: CustomizationResponseTonicityType;
};

export type UserWithPasswordType = UserType & {
  passwordHash: string;
};

export type UserWithDetailsType = UserType & {
  details: UserDetailsType | null;
};

export type UserWithPreferencesType = UserType & {
  preferences: UserPreferencesType | null;
};

export type UserWithDetailsAndPreferencesType = UserWithDetailsType &
  UserWithPreferencesType;
