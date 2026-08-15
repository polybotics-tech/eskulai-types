export enum ImagingDiagnosisStatusEnum {
  Completed = "completed",
  Inconclusive = "inconclusive",
  InsufficientQuality = "insufficient_quality",
  Unsupported = "unsupported",
}

export type ImagingFindingSeverity =
  | "normal"
  | "mild"
  | "moderate"
  | "severe"
  | "critical";

export type ImagingConfidenceLevel =
  | "very_low"
  | "low"
  | "moderate"
  | "high"
  | "very_high";

export type ImagingFindingType = {
  title: string;

  description: string;

  severity?: ImagingFindingSeverity;

  confidence: ImagingConfidenceLevel;

  abnormal: boolean;
};

export type ImagingDifferentialDiagnosisType = {
  diagnosis: string;

  rationale: string;

  confidence: ImagingConfidenceLevel;
};
