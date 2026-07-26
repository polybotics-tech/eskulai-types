import { ReactNode } from "react";

export type CalculatorIdType =
  | "bmi"
  | "bsa"
  | "crcl"
  | "dde"
  | "gage"
  | "hcfa"
  | "infusion"
  | "ivdr"
  | "edd"
  | "phfa"
  | "pwfa"
  | "shock";

export type CalculatorListType = {
  id: CalculatorIdType;
  title: string;
  desc?: string;
  icon?: ReactNode;
};

export type BMIResultType = {
  bmi: number | null;
  category:
    | "Underweight"
    | "Normal"
    | "Overweight"
    | "Obesity I"
    | "Obesity II"
    | "Obesity III";
  analysis: string;
};

export type CRCLResultType = {
  crcl: number | null;
  category:
    | "Normal"
    | "Mild Reduction"
    | "Moderate Reduction"
    | "Severe Reduction"
    | "Kidney Failure";
  analysis: string;
};

export type GAGEResultType = {
  weeks: number;
  days: number;
  category: "First Trimester" | "Second Trimester" | "Third Trimester";
};

export type EDDResultType = {
  edd: string;
  category: "First Trimester" | "Second Trimester" | "Third Trimester";
};

export type HCFAResultType = {
  percentile: number;
  zscore: number;
};

export type ShockResultType = {
  index: number | null;
  category:
    | "Normal"
    | "Borderline"
    | "Hemodynamic Instability"
    | "High Risk"
    | "Critical";
  analysis: string;
};
