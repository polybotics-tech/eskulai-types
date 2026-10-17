import { PaginationMetaType } from "@/types/global.js";
import {
  DiagnosticCaseDifficultyType,
  DiagnosticCaseEvaluationType,
  DiagnosticCaseType,
  MedicalSpecialtyType,
  PrepNoteType,
} from "@/types/learn.js";

export type PrepNotesResponseType = {
  prepNotes: PrepNoteType[];
  meta: PaginationMetaType;
  specialty: MedicalSpecialtyType;
};

export type DiagnosticCaseResponseType = {
  diagnosticCase: DiagnosticCaseType;
  specialty: MedicalSpecialtyType;
  difficulty: DiagnosticCaseDifficultyType;
};

export type DiagnosticCaseEvaluationResponseType = {
  evaluation: DiagnosticCaseEvaluationType;
  caseId: string;
};
