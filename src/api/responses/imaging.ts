import { DefaultContentListType } from "@/types/content.js";
import {
  ImagingConfidenceLevel,
  ImagingDiagnosisStatusEnum,
  ImagingDifferentialDiagnosisType,
  ImagingFindingSeverity,
  ImagingFindingType,
  ImagingImpressionType,
} from "@/types/imaging.js";

export type MedicalImagingDiagnosisResponseDataType = {
  id: string;

  status: ImagingDiagnosisStatusEnum;

  modality: string;
  region: string;

  summary: string;

  imageAssessment: {
    imageCount: number;

    quality: "adequate" | "limited" | "poor";

    limitations: string[];
  };

  findings: ImagingFindingType[];

  impressions: ImagingImpressionType[];

  differentialDiagnoses: ImagingDifferentialDiagnosisType[];

  recommendations: DefaultContentListType;

  clinicalCorrelation: DefaultContentListType;

  limitations: DefaultContentListType;

  references: DefaultContentListType;

  disclaimer: string;
};
