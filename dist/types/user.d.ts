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
    id: string;
    userId: UserType["id"];
    dob: Date | string;
    country: string;
    gender: "male" | "female";
    role: "student" | "nurse" | "doctor";
};
export type UserWithPassword = UserType & {
    passwordHash: string;
};
export type UserWithDetails = UserType & UserDetailsType;
//# sourceMappingURL=user.d.ts.map