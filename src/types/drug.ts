import { DefaultContentListType } from "@/types/content.js";

export enum DrugSearchTypeEnum {
  Drug = "drug",
  Brand = "brand",
  Constituent = "constituent",
}

export type DrugInfoIsDrugType = {
  genericName?: string;

  pronunciation?: string;

  aliases: string[];
  classifications: string[];

  prescriptionStatus: "OTC" | "Prescription" | "Controlled";

  summary: DefaultContentListType;

  indications: DefaultContentListType;
  dosage: DefaultContentListType;
  activeConstituents: string[];

  administration: DefaultContentListType;

  contraindications: DefaultContentListType;
  warnings: DefaultContentListType;
  sideEffects: DefaultContentListType;
  overdose: DefaultContentListType;

  pregnancy: DefaultContentListType;
  breastfeeding: DefaultContentListType;

  interactions: DefaultContentListType;
  monitoring: DefaultContentListType;

  storage: DefaultContentListType;

  patientCounselling: DefaultContentListType;
};

export type DrugInfoIsBrandType = {
  manufacturer: string;
  country?: string;

  availableStrengths: string[];
  dosageForms: string[];
  activeConstituents: string[];

  summary: DefaultContentListType;

  indications: DefaultContentListType;
  administration: DefaultContentListType;
  warnings: DefaultContentListType;

  storage: DefaultContentListType;
};

export type DrugInfoIsConstituentType = {
  chemicalClass?: string;
  molecularFormula?: DefaultContentListType;
  mechanismOfAction: DefaultContentListType;

  pharmacokinetics: DefaultContentListType;
  pharmacodynamics: DefaultContentListType;

  indications: DefaultContentListType;
  adverseEffects: DefaultContentListType;
  contraindications: DefaultContentListType;
  interactions: DefaultContentListType;
  toxicity: DefaultContentListType;

  commonBrands: string[];
};

export type DrugType = {
  id: string;

  createdAt: Date | string;
  updatedAt: Date | string;

  type: DrugSearchTypeEnum;
  name: string;
  normalizedName: string;
  subtitle: string;

  tags: string[]; //--(for type=drug -> will be list of drug classification/actions/usage, for type=brand -> will be list of popular drug names from the brand, for type=constituent -> will be list of common drugs it can be found in)
  keywords: string[];
};

export type DrugInfoType = {
  id: string;
  drugId: string;

  createdAt: Date | string;
  updatedAt: Date | string;

  information:
    | DrugInfoIsDrugType
    | DrugInfoIsBrandType
    | DrugInfoIsConstituentType;

  references: DefaultContentListType;
};

export type DrugSearchHistoryType = {
  id: string;
  userId: string;

  createdAt: Date | string;
  updatedAt: Date | string;

  list: string[];
};
