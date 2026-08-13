import { DefaultContentListType } from "@/types/content.js";
import { ReactNode } from "react";

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
  category: PrepNoteCategoryType;
  contents: DefaultContentListType;
};

export type DiagnosticCaseDifficultyType = "easy" | "medium" | "hard";

export type DiagnosticCaseSectionType = {
  id: string;
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
  specialty: string;
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
