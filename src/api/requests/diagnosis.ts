import {
  BodyRegionType,
  ImagingModalityType,
  PatientBioDataType,
  PatientHistoryQuestionType,
} from "@/types/diagnosis.js";
import { ImagePickerAsset } from "expo-image-picker";

export type StartGuidedDiagnosisRequestType = {
  complaint: string;
  biodata: PatientBioDataType;
  initialPrompt?: PatientHistoryQuestionType;
};

export type DifferentialDiagnosisRequestType = {
  summary: string;
};

export type AnswerHistoryQuestionRequestType = {
  answer?: string;
  skipped: boolean;
  questionId: string;
};

export type MedicalImagingAnalysisRequestType = {
  images: (ImagePickerAsset & {
    id?: string;
    isFromClipboard?: boolean;
    data?: string;
  })[];

  modality: ImagingModalityType;

  region: BodyRegionType;

  moreInfo?: string;
};
