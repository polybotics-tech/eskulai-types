import { DefaultContentListType } from "@/types/content.js";
import {
  PatientDiagnosisAssessmentType,
  PatientDiagnosisFindingType,
  PatientDifferentialDiagnosisType,
  PatientInvestigationType,
  PatientRedFlagType,
} from "@/types/diagnosis.js";

export type PatientDiagnosisResponseDataType = {
  id: string;

  status: "completed" | "inconclusive" | "insufficient_information";

  presentingComplaint: string;

  clinicalSummary: DefaultContentListType;

  keyFindings: PatientDiagnosisFindingType[];

  differentialDiagnoses: PatientDifferentialDiagnosisType[];

  mostLikelyDiagnosis?: PatientDiagnosisAssessmentType;

  redFlags: PatientRedFlagType[];

  recommendedNextSteps: DefaultContentListType;

  suggestedInvestigations: PatientInvestigationType[];

  clinicalConsiderations: DefaultContentListType;

  limitations: DefaultContentListType;

  references: DefaultContentListType;

  disclaimer: string;
};
