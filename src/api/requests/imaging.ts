import { ImagePickerAsset } from "expo-image-picker";

export type MedicalImagingAnalysisRequestType = {
  photos: ImagePickerAsset[];

  modality: string;

  region: string;

  moreInfo?: string;
};
