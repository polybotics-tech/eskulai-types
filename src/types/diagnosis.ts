import { DefaultContentListType } from "@/types/content.js";

export type PatientDiagnosisFindingType = {
  finding: string;

  description: string;

  significance: "supporting" | "against" | "neutral";

  importance: "low" | "moderate" | "high";
};

export type PatientDifferentialDiagnosisType = {
  diagnosis: string;

  likelihood:
    | "very_unlikely"
    | "unlikely"
    | "possible"
    | "likely"
    | "very_likely";
};

export type PatientDiagnosisAssessmentType = {
  diagnosis: string;

  supportingFindings: string[];
};

//---
export type PatientHistorySessionType = {
  id: string;
  userId: string;

  status: "active" | "completed" | "abandoned";

  presentingComplaint: string;

  lastActivityAt: Date | string;

  completedAt?: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export type PatientHistorySessionStateType = {
  sessionId: string;

  known: Record<string, string>;

  unknown: string[];

  skipped: string[];

  relevantNegatives: string[];

  unansweredImportantQuestions: string[];
};

export type PatientHistorySessionFactType = {
  id: string;
  sessionId: string;

  category:
    | "symptom"
    | "sign"
    | "medical_history"
    | "medication"
    | "allergy"
    | "family_history"
    | "social_history"
    | "exposure"
    | "risk_factor"
    | "other";

  fact: string;

  value?: string;

  polarity: "present" | "absent" | "unknown";

  sourceQuestionId?: string;

  confidence: "low" | "moderate" | "high";

  createdAt: Date | string;
};

export type PatientHistoryQuestionType = {
  id: string;
  sessionId: string;

  question: string;
  helpText?: string;

  category:
    | "presenting_complaint"
    | "history_of_present_illness"
    | "past_medical_history"
    | "medications"
    | "allergies"
    | "family_history"
    | "social_history"
    | "review_of_systems"
    | "other";

  responseType:
    | "text"
    | "yes_no"
    | "single_choice"
    | "multiple_choice"
    | "number";

  options?: string[];

  status: "pending" | "answered" | "skipped";
};

export type PatientHistoryAnswerType = {
  id: string;
  sessionId: string;
  questionId: string;

  answer?: string;

  skipped: boolean;

  createdAt: Date | string;
};

export type PatientBioDataType = {
  gender: "male" | "female";
  age: number;
  weight: number;
  weightDimension: string;
  height: number;
  heightDimension: string;
};

export enum PatientDiagnosisStatusEnum {
  Completed = "completed",
  Inconclusive = "inconclusive",
  InsufficientQuality = "insufficient_quality",
}

export type PatientDiagnosisAnalysisType = {
  id: string;

  status: PatientDiagnosisStatusEnum;

  presentingComplaint: string;

  clinicalSummary: DefaultContentListType;

  keyFindings: PatientDiagnosisFindingType[];

  differentialDiagnoses: PatientDifferentialDiagnosisType[];

  mostLikelyDiagnosis?: PatientDiagnosisAssessmentType;

  recommendedNextSteps: DefaultContentListType;

  clinicalConsiderations: DefaultContentListType;

  limitations: DefaultContentListType;

  references: DefaultContentListType;

  disclaimer: string;
};
