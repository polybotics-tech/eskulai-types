import {
  PatientDiagnosisAnalysisType,
  PatientHistoryAnswerType,
  PatientHistoryQuestionType,
  PatientHistorySessionFactType,
  PatientHistorySessionType,
} from "@/types/diagnosis.js";

export type DiagnosisAnalysisResponseType = {
  diagnosis: PatientDiagnosisAnalysisType;
};

export type DiagnosisHistoryQuestionResponseType = {
  session: PatientHistorySessionType;
  question?: PatientHistoryQuestionType;
};

export type DiagnosisHistorySessionResponseType = {
  session: PatientHistorySessionType;
  questions: PatientHistoryQuestionType[];
  answers: PatientHistoryAnswerType[];
  facts: PatientHistorySessionFactType[];
  pendingQuestion: PatientHistoryQuestionType;
};

export type DiagnosisPendingHistorySessionResponseType = {
  sessions: PatientHistorySessionType[];
};
