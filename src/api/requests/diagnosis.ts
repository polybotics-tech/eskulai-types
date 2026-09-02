import {
  PatientBioDataType,
  PatientHistoryQuestionType,
} from "@/types/diagnosis.js";

export type StartGuidedDiagnosisRequestType = {
  complaint: string;
  biodata: PatientBioDataType;
  initialPrompt?: PatientHistoryQuestionType;
};

export type DifferentialDiagnosisRequestType = {
  summary: string;
};

export type AnswerHistoryQuestionRequestType = {
  answer?: string;
  skipped: boolean;
  questionId: string;
};
