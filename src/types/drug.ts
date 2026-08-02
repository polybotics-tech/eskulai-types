import { DefaultContentListType } from "@/types/global.js";

export enum DrugSuggestionTypeEnum {
  Drug = "drug",
  Brand = "brand",
  Constituent = "constituent",
}

export type DrugSearchSuggestionType = {
  type: DrugSuggestionTypeEnum;
  name: string;
  subtitle: string;

  tags: string[]; //--(for type=drug -> will be list of drug classification/actions/usage, for type=brand -> will be list of popular drug names from the brand, for type=constituent -> will be list of common drugs it can be found in)
};

export type DrugSearchResultIsDrug = {
  type: "drug";

  name: string;
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

  relatedSuggestions: DrugSearchSuggestionType[];
  references: DefaultContentListType;
};

type DrugSearchResultIsBrand = {
  type: "brand";

  name: string;

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

  relatedSuggestions: DrugSearchSuggestionType[];
  references: DefaultContentListType;
};

type DrugSearchResultIsConstituent = {
  type: "constituent";

  name: string;

  chemicalClass?: string;
  molecularFormula?: string;
  mechanismOfAction: DefaultContentListType;

  pharmacokinetics: DefaultContentListType;
  pharmacodynamics: DefaultContentListType;

  indications: DefaultContentListType;
  adverseEffects: DefaultContentListType;
  contraindications: DefaultContentListType;
  interactions: DefaultContentListType;
  toxicity: DefaultContentListType;

  commonBrands: string[];

  relatedSuggestions: DrugSearchSuggestionType[];
  references: DefaultContentListType;
};

export type DrugSearchResultType =
  | DrugSearchResultIsDrug
  | DrugSearchResultIsBrand
  | DrugSearchResultIsConstituent;
