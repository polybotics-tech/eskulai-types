import { PatientBioDataType } from "@/types/diagnosis.js";

export type StartGuidedDiagnosisRequestDataType = {
  complaint: string;
  biodata: PatientBioDataType;
};

export type DifferentialDiagnosisRequestDataType = {
  summary: string;
};

export type AnswerHistoryQuestionRequestDataType = {
  answer?: string;
  skipped: boolean;
  questionId: string;
};
