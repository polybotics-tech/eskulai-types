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

  gender: "male" | "female";
  role: "student" | "nurse" | "doctor";
};

export type UserWithPasswordType = UserType & {
  passwordHash: string;
};

export type UserWithDetailsType = UserType & {
  details: UserDetailsType | null;
};
