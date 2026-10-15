import { DefaultContentListType } from "@/types/content.js";
import { ReactNode } from "react";

export type MedicalSpecialtyType =
  | "general_medicine"
  | "general_surgery"
  | "pediatrics"
  | "obstetrics_gynecology"
  | "emergency_medicine"
  | "family_medicine"
  | "internal_medicine"
  | "geriatrics"
  | "orthopedics"
  | "neurosurgery"
  | "cardiothoracic_surgery"
  | "plastic_surgery"
  | "urology"
  | "ent"
  | "ophthalmology"
  | "cardiology"
  | "pulmonology"
  | "gastroenterology"
  | "nephrology"
  | "endocrinology"
  | "rheumatology"
  | "hematology"
  | "oncology"
  | "infectious_diseases"
  | "dermatology"
  | "neurology"
  | "radiology"
  | "pathology"
  | "laboratory_medicine"
  | "psychiatry"
  | "clinical_psychology"
  | "anesthesiology"
  | "critical_care_medicine"
  | "public_health"
  | "community_medicine"
  | "occupational_health"
  | "medical_surgical_nursing"
  | "pediatric_nursing"
  | "mental_health_nursing"
  | "critical_care_nursing"
  | "maternal_child_health_nursing";

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

export type DiagnosticCaseDifficultyType = "easy" | "medium" | "hard";
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

export type DiagnosticCaseType = {
  id: string;
  title: string;
  specialty: MedicalSpecialtyType;
  difficulty: DiagnosticCaseDifficultyType;

  tags?: string[];
  learningObjectives?: string[];

  sections: DiagnosticCaseSectionType[];
  questions: DiagnosticCaseQuestionType[];

  references?: string[];
};

export type DiagnosticCaseEvaluationType = {
  score: number;
  feedback: string;
  strengths: string[];
  missedFindings: string[];
  suggestedDiagnosis: string;
  explanation: string;
};
