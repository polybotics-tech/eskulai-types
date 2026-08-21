import Joi from "joi";

import {
  PatientBioDataType,
  PatientHistoryAnswerType,
} from "@/types/diagnosis.js";

//--- Joi schemas for the AI / diagnosis endpoints ---

export const patientBioDataSchema = Joi.object<PatientBioDataType>({
  gender: Joi.string().valid("male", "female").required().messages({
    "any.required": "Please provide a gender",
    "any.only": "Unknown gender provided",
  }),
  age: Joi.number().integer().min(0).max(130).required().messages({
    "any.required": "Please provide an age",
    "number.base": "Age must be a number",
    "number.min": "Age cannot be negative",
    "number.max": "Age value is out of range",
  }),
  weight: Joi.number().min(0).max(1000).required().messages({
    "any.required": "Please provide a weight",
    "number.base": "Weight must be a number",
  }),
  weightDimension: Joi.string().valid("kg", "lb").required().messages({
    "any.required": "Please provide a weight unit",
    "any.only": "Unknown weight unit",
  }),
  height: Joi.number().min(0).max(300).required().messages({
    "any.required": "Please provide a height",
    "number.base": "Height must be a number",
  }),
  heightDimension: Joi.string().valid("cm", "in", "ft").required().messages({
    "any.required": "Please provide a height unit",
    "any.only": "Unknown height unit",
  }),
});

export const startGuidedHistorySchema = Joi.object({
  complaint: Joi.string().trim().min(3).max(1000).required().messages({
    "any.required": "Please describe the presenting complaint",
    "string.empty": "Please describe the presenting complaint",
    "string.min": "Complaint must be at least 3 characters long",
    "string.max": "Complaint cannot exceed 1000 characters",
  }),
  biodata: patientBioDataSchema.required(),
});

export const answerHistoryQuestionSchema = Joi.object({
  answer: Joi.string().allow("").max(2000).optional().messages({
    "string.max": "Answer cannot exceed 2000 characters",
  }),
  skipped: Joi.boolean().required().messages({
    "any.required": "Please specify whether the question was skipped",
  }),
});

export const differentialDiagnosisSchema = Joi.object({
  summary: Joi.string().trim().min(10).max(5000).required().messages({
    "any.required": "Please provide a clinical summary",
    "string.empty": "Please provide a clinical summary",
    "string.min": "Clinical summary must be at least 10 characters long",
    "string.max": "Clinical summary cannot exceed 5000 characters",
  }),
});

// Re-export type alias used by api_server validator typing
export type PatientHistoryAnswerSchemaType = PatientHistoryAnswerType;
