import {
  PatientBioDataType,
  PatientHistoryAnswerType,
} from "@/types/diagnosis.js";

export type PatientDiagnosisRequestDataType =
  | {
      mode: "summary";
      summary: string;
    }
  | {
      mode: "history";
      answer: PatientHistoryAnswerType;
      sessionId: string;
    };

export type PatientStartGuidedDiagnosisRequestDataType = {
  complaint: string;
  biodata: PatientBioDataType;
};
