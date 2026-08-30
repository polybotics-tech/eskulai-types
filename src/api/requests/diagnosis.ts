import {
  PatientBioDataType,
  PatientHistoryQuestionType,
} from "@/types/diagnosis.js";

export type StartGuidedDiagnosisRequestDataType = {
  complaint: string;
  biodata: PatientBioDataType;
  initialPrompt?: PatientHistoryQuestionType;
};

export type DifferentialDiagnosisRequestDataType = {
  summary: string;
};

export type AnswerHistoryQuestionRequestDataType = {
  answer?: string;
  skipped: boolean;
  questionId: string;
};
