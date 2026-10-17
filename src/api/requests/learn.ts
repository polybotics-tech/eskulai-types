import { DiagnosticCaseAnswerType } from "@/types/learn.js";

export type DiagnosticCaseEvaluationRequestType = {
  caseId: string;
  solution: DiagnosticCaseAnswerType[];
};
