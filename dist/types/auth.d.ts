export declare enum OtpPurposeEnum {
    EmailVerification = "email_verification",
    DeviceVerification = "device_verification"
}
export type AuthSessionType = {
    id: string;
    userId: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    deviceInfo: string;
    tokenHash: string;
    isRevoked: boolean;
};
export type OtpVerificationType = {
    id: string;
    userId: string;
    createdAt: Date | string;
    otpHash: string;
    purpose: OtpPurposeEnum;
};
//# sourceMappingURL=auth.d.ts.map