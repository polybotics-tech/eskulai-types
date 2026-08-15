import { DefaultContentListType } from "@/types/content.js";
import {
  ImagingDiagnosisStatusEnum,
  ImagingDifferentialDiagnosisType,
  ImagingFindingType,
} from "@/types/imaging.js";

export type MedicalImagingDiagnosisResponseDataType = {
  id: string;

  status: ImagingDiagnosisStatusEnum;

  modality: string;
  region: string;

  summary: DefaultContentListType;

  imageAssessment: {
    imageCount: number;

    quality: "adequate" | "limited" | "poor";

    limitations: string[];
  };

  findings: ImagingFindingType[];

  differentialDiagnoses: ImagingDifferentialDiagnosisType[];

  recommendations: DefaultContentListType;

  clinicalCorrelation: DefaultContentListType;

  limitations: DefaultContentListType;

  references: DefaultContentListType;

  disclaimer: string;
};
