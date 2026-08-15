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

  confidence: "low" | "moderate" | "high";

  supportingFindings: string[];

  findingsAgainst: string[];

  explanation: DefaultContentListType;
};

export type PatientDiagnosisAssessmentType = {
  diagnosis: string;

  confidence: "low" | "moderate" | "high";

  explanation: DefaultContentListType;

  supportingFindings: string[];

  importantAlternatives: string[];
};

export type PatientRedFlagType = {
  title: string;

  description: string;

  urgency: "routine" | "prompt" | "urgent" | "emergency";

  action: string;
};

export type PatientInvestigationType = {
  name: string;

  reason: string;

  priority: "routine" | "recommended" | "urgent";

  expectedPurpose?: string;
};

//---
export type PatientHistoryQuestionType = {
  id: string;

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

  answer?: string | number;

  skipped: boolean;

  answeredAt?: string;
};

export type PatientHistorySessionType = {
  id: string;

  status: "active" | "completed" | "abandoned";

  presentingComplaint: string;

  questions: PatientHistoryQuestionType[];

  currentQuestionId?: string;

  startedAt: string;
  completedAt?: string;
};

export type PatientHistorySessionStateType = {
  sessionId: string;

  known: Record<string, string>;

  unknown: string[];

  skipped: string[];

  relevantNegatives: string[];

  unansweredImportantQuestions: string[];
};

export type PatientHistoryAnswerType = {
  questionId: string;

  answer?: string;

  skipped: boolean;

  answeredAt: string;
};

export type PatientBioDataType = {
  gender: "male" | "female";
  age: number;
  weight: number;
  weightDimension: string;
  height: number;
  heightDimension: string;
};
