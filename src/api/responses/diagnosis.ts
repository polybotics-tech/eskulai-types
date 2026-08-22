import {
  PatientDiagnosisAnalysisType,
  PatientHistoryAnswerType,
  PatientHistoryQuestionType,
  PatientHistorySessionFactType,
  PatientHistorySessionType,
} from "@/types/diagnosis.js";

export type DiagnosisAnalysisResponseDataType = {
  diagnosis: PatientDiagnosisAnalysisType;
};

export type DiagnosisHistoryQuestionResponseDataType = {
  session: PatientHistorySessionType;
  question?: PatientHistoryQuestionType;
};

export type DiagnosisHistorySessionResponseDataType = {
  session: PatientHistorySessionType;
  questions: PatientHistoryQuestionType[];
  answers: PatientHistoryAnswerType[];
  facts: PatientHistorySessionFactType[];
  pendingQuestion: PatientHistoryQuestionType;
};
