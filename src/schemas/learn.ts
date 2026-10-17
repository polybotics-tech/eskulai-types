import Joi from "joi";
import { DiagnosticCaseEvaluationRequestType } from "@/api/requests/learn.js";

export const diagnosticCaseSubmissionSchema =
  Joi.object<DiagnosticCaseEvaluationRequestType>({
    caseId: Joi.string().required().trim().messages({
      "string.required": "Please provide a caseId",
      "string.empty": "Please provide a caseId",
    }),
    solution: Joi.array().items(
      Joi.object({
        questionId: Joi.string().required().trim().messages({
          "string.required": "provide a questionId for solution",
          "string.empty": "provide a questionId for solution",
        }),
        answer: Joi.string().required().trim().messages({
          "string.required": "provide an answer for solution",
          "string.empty": "provide an answer for solution",
        }),
      }),
    ),
  });
