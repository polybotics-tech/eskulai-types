import {
  MEDICAL_OPTIONS_BODY_REGIONS_CONST,
  MEDICAL_OPTIONS_CASE_DIFFICULTIES_CONST,
  MEDICAL_OPTIONS_MODALITIES_CONST,
  MEDICAL_OPTIONS_SPECIALTIES_CONST,
} from "@/constants/learn.js";
import { DefaultContentListType } from "@/types/content.js";
import { ReactNode } from "react";

export type MedicalSpecialtyType =
  (typeof MEDICAL_OPTIONS_SPECIALTIES_CONST)[number]["value"];
export type MedicalImagingModalityType =
  (typeof MEDICAL_OPTIONS_MODALITIES_CONST)[number]["value"];
export type MedicalBodyRegionType =
  (typeof MEDICAL_OPTIONS_BODY_REGIONS_CONST)[number]["value"];
export type MedicalCaseDifficultyType =
  (typeof MEDICAL_OPTIONS_CASE_DIFFICULTIES_CONST)[number]["value"];

export type PrepNoteCategoryType =
  | "tips"
  | "drugs"
  | "diagnosis"
  | "management"
  | "emergency"
  | "investigations"
  | "procedures"
  | "guidelines"
  | "pearls"
  | "red_flags"
  | "anatomy"
  | "physiology"
  | "references";

export type PrepNoteCategoryIconType = Record<PrepNoteCategoryType, ReactNode>;

export type PrepNoteType = {
  id: string;
  title: string;
  specialty: MedicalSpecialtyType;
  category: PrepNoteCategoryType;
  contents: DefaultContentListType;
};

export type DiagnosticCaseSectionIdType =
  | "demographics"
  | "presenting_complaint"
  | "history_of_presenting_illness"
  | "past_medical_history"
  | "physical_exam"
  | "investigation_results";

export type DiagnosticCaseSectionType = {
  id: DiagnosticCaseSectionIdType;
  title: string;
  contents: DefaultContentListType;
};

export type DiagnosticCaseQuestionType = {
  id: string;
  question: string;
  placeholder?: string;
  isRequired?: boolean;
};

export type DiagnosticCaseAnswerType = {
  questionId: string;
  answer: string;
};

export type DiagnosticCaseType = {
  id: string;
  title: string;
  specialty: MedicalSpecialtyType;
  difficulty: MedicalCaseDifficultyType;

  tags?: string[];
  learningObjectives?: string[];

  sections: DiagnosticCaseSectionType[];
  questions: DiagnosticCaseQuestionType[];

  references?: string[];

  intendedDiagnosis: string;
  assessmentCriteria: string[];
};

export type DiagnosticCaseEvaluationType = {
  score: number;
  feedback: string;
  strengths: string[];
  missedFindings: string[];
  suggestedDiagnosis: string;
  explanation: string;
};
