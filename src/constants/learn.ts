import { DropDownOptionType } from "@/types/global.js";

export const MEDICAL_OPTIONS_SPECIALTIES_CONST = [
  {
    name: "General Medicine",
    value: "general_medicine",
    group: "Core Clinical",
  },
  {
    name: "General Surgery",
    value: "general_surgery",
    group: "Core Clinical",
  },
  {
    name: "Pediatrics",
    value: "pediatrics",
    group: "Core Clinical",
  },
  {
    name: "Obstetrics & Gynecology",
    value: "obstetrics_gynecology",
    group: "Core Clinical",
  },
  {
    name: "Emergency Medicine",
    value: "emergency_medicine",
    group: "Core Clinical",
  },
  {
    name: "Family Medicine",
    value: "family_medicine",
    group: "Core Clinical",
  },
  {
    name: "Internal Medicine",
    value: "internal_medicine",
    group: "Core Clinical",
  },
  {
    name: "Geriatrics",
    value: "geriatrics",
    group: "Core Clinical",
  },

  // Surgical Specialties
  {
    name: "Orthopedics",
    value: "orthopedics",
    group: "Surgical",
  },
  {
    name: "Neurosurgery",
    value: "neurosurgery",
    group: "Surgical",
  },
  {
    name: "Cardiothoracic Surgery",
    value: "cardiothoracic_surgery",
    group: "Surgical",
  },
  {
    name: "Plastic Surgery",
    value: "plastic_surgery",
    group: "Surgical",
  },
  {
    name: "Urology",
    value: "urology",
    group: "Surgical",
  },
  {
    name: "ENT (Otorhinolaryngology)",
    value: "ent",
    group: "Surgical",
  },
  {
    name: "Ophthalmology",
    value: "ophthalmology",
    group: "Surgical",
  },

  // Medical Specialties
  {
    name: "Cardiology",
    value: "cardiology",
    group: "Medical",
  },
  {
    name: "Pulmonology",
    value: "pulmonology",
    group: "Medical",
  },
  {
    name: "Gastroenterology",
    value: "gastroenterology",
    group: "Medical",
  },
  {
    name: "Nephrology",
    value: "nephrology",
    group: "Medical",
  },
  {
    name: "Endocrinology",
    value: "endocrinology",
    group: "Medical",
  },
  {
    name: "Rheumatology",
    value: "rheumatology",
    group: "Medical",
  },
  {
    name: "Hematology",
    value: "hematology",
    group: "Medical",
  },
  {
    name: "Oncology",
    value: "oncology",
    group: "Medical",
  },
  {
    name: "Infectious Diseases",
    value: "infectious_diseases",
    group: "Medical",
  },
  {
    name: "Dermatology",
    value: "dermatology",
    group: "Medical",
  },
  {
    name: "Neurology",
    value: "neurology",
    group: "Medical",
  },

  // Diagnostics
  {
    name: "Radiology",
    value: "radiology",
    group: "Diagnostics",
  },
  {
    name: "Pathology",
    value: "pathology",
    group: "Diagnostics",
  },
  {
    name: "Laboratory Medicine",
    value: "laboratory_medicine",
    group: "Diagnostics",
  },

  // Mental Health
  {
    name: "Psychiatry",
    value: "psychiatry",
    group: "Mental Health",
  },
  {
    name: "Clinical Psychology",
    value: "clinical_psychology",
    group: "Mental Health",
  },

  // Critical Care
  {
    name: "Anesthesiology",
    value: "anesthesiology",
    group: "Critical Care",
  },
  {
    name: "Critical Care Medicine",
    value: "critical_care_medicine",
    group: "Critical Care",
  },

  // Community & Public Health
  {
    name: "Public Health",
    value: "public_health",
    group: "Community Health",
  },
  {
    name: "Community Medicine",
    value: "community_medicine",
    group: "Community Health",
  },
  {
    name: "Occupational Health",
    value: "occupational_health",
    group: "Community Health",
  },

  // Nursing
  {
    name: "Medical-Surgical Nursing",
    value: "medical_surgical_nursing",
    group: "Nursing",
  },
  {
    name: "Pediatric Nursing",
    value: "pediatric_nursing",
    group: "Nursing",
  },
  {
    name: "Mental Health Nursing",
    value: "mental_health_nursing",
    group: "Nursing",
  },
  {
    name: "Critical Care Nursing",
    value: "critical_care_nursing",
    group: "Nursing",
  },
  {
    name: "Maternal & Child Health Nursing",
    value: "maternal_child_health_nursing",
    group: "Nursing",
  },
] as const;

export const MEDICAL_OPTIONS_MODALITIES_CONST = [
  { name: "Magnetic Resonance Imaging", value: "mri", subText: "MRI" },
  { name: "Computed Tomography", value: "ct", subText: "CT" },
  { name: "X-Ray", value: "xray" },
  { name: "Ultrasound", value: "ultrasound" },
  { name: "Mammography", value: "mammography" },
  { name: "Fluoroscopy", value: "fluoroscopy" },
  { name: "Angiography", value: "angiography" },
  { name: "Echocardiogram", value: "echocardiogram", subText: "Echo" },
  {
    name: "Hysterosalpingography",
    value: "hysterosalpingography",
    subText: "HSG",
  },
  { name: "Positron Emission Tomography", value: "pet", subText: "PET" },
  { name: "Bone Density Scan", value: "dexa", subText: "DEXA" },
  { name: "Other", value: "other" },
] as const;

export const MEDICAL_OPTIONS_BODY_REGIONS_CONST = [
  // Head & Brain
  { group: "Head & Brain", name: "Head", value: "head" },
  { group: "Head & Brain", name: "Brain", value: "brain" },
  { group: "Head & Brain", name: "Skull", value: "skull" },
  { group: "Head & Brain", name: "Face", value: "face" },
  { group: "Head & Brain", name: "Jaw", value: "jaw" },
  { group: "Head & Brain", name: "Teeth", value: "teeth" },
  { group: "Head & Brain", name: "Sinuses", value: "sinuses" },
  { group: "Head & Brain", name: "Eyes", value: "eyes" },
  {
    group: "Head & Brain",
    name: "Orbit",
    subText: "Left",
    value: "left_orbit",
  },
  {
    group: "Head & Brain",
    name: "Orbit",
    subText: "Right",
    value: "right_orbit",
  },

  // Neck & Spine
  { group: "Neck & Spine", name: "Neck", value: "neck" },
  { group: "Neck & Spine", name: "Spine", value: "spine" },
  {
    group: "Neck & Spine",
    name: "Spine",
    subText: "Cervical",
    value: "cervical_spine",
  },
  {
    group: "Neck & Spine",
    name: "Spine",
    subText: "Thoracic",
    value: "thoracic_spine",
  },
  {
    group: "Neck & Spine",
    name: "Spine",
    subText: "Lumbar",
    value: "lumbar_spine",
  },

  // Chest & Cardiac
  { group: "Chest & Cardiac", name: "Chest", value: "chest" },
  { group: "Chest & Cardiac", name: "Thorax", value: "thorax" },
  { group: "Chest & Cardiac", name: "Lungs", value: "lungs" },
  { group: "Chest & Cardiac", name: "Heart", value: "heart" },
  { group: "Chest & Cardiac", name: "Breast", value: "breast" },
  { group: "Chest & Cardiac", name: "Ribs", value: "ribs" },

  // Abdomen
  { group: "Abdomen", name: "Abdomen", value: "abdomen" },
  { group: "Abdomen", name: "Liver", value: "liver" },
  { group: "Abdomen", name: "Gallbladder", value: "gallbladder" },
  { group: "Abdomen", name: "Pancreas", value: "pancreas" },
  { group: "Abdomen", name: "Spleen", value: "spleen" },
  { group: "Abdomen", name: "Stomach", value: "stomach" },
  { group: "Abdomen", name: "Appendix", value: "appendix" },

  // Kidneys & Urinary
  { group: "Kidneys & Urinary", name: "Kidneys", value: "kidneys" },
  {
    group: "Kidneys & Urinary",
    name: "Kidney",
    subText: "Left",
    value: "left_kidney",
  },
  {
    group: "Kidneys & Urinary",
    name: "Kidney",
    subText: "Right",
    value: "right_kidney",
  },
  { group: "Kidneys & Urinary", name: "Bladder", value: "bladder" },

  // Gastrointestinal
  {
    group: "Gastrointestinal",
    name: "Gastrointestinal Tract",
    value: "gastrointestinal_tract",
  },
  {
    group: "Gastrointestinal",
    name: "Esophagus",
    value: "esophagus",
  },
  {
    group: "Gastrointestinal",
    name: "Small Intestine",
    value: "small_intestine",
  },
  {
    group: "Gastrointestinal",
    name: "Large Intestine",
    value: "large_intestine",
  },

  // Pelvis & Reproductive
  { group: "Pelvis & Reproductive", name: "Pelvis", value: "pelvis" },
  { group: "Pelvis & Reproductive", name: "Uterus", value: "uterus" },
  { group: "Pelvis & Reproductive", name: "Ovaries", value: "ovaries" },
  { group: "Pelvis & Reproductive", name: "Prostate", value: "prostate" },
  { group: "Pelvis & Reproductive", name: "Scrotum", value: "scrotum" },
  { group: "Pelvis & Reproductive", name: "Testes", value: "testes" },

  // Vascular
  { group: "Vascular", name: "Blood Vessels", value: "blood_vessels" },
  { group: "Vascular", name: "Arteries", value: "arteries" },
  {
    group: "Vascular",
    name: "Arteries",
    subText: "Coronary",
    value: "coronary_arteries",
  },
  { group: "Vascular", name: "Veins", value: "veins" },

  // Upper Limbs
  { group: "Upper Limbs", name: "Arms", value: "arms" },
  {
    group: "Upper Limbs",
    name: "Arm",
    subText: "Left",
    value: "left_arm",
  },
  {
    group: "Upper Limbs",
    name: "Arm",
    subText: "Right",
    value: "right_arm",
  },

  { group: "Upper Limbs", name: "Shoulders", value: "shoulders" },
  {
    group: "Upper Limbs",
    name: "Shoulder",
    subText: "Left",
    value: "left_shoulder",
  },
  {
    group: "Upper Limbs",
    name: "Shoulder",
    subText: "Right",
    value: "right_shoulder",
  },

  { group: "Upper Limbs", name: "Wrists", value: "wrists" },
  {
    group: "Upper Limbs",
    name: "Wrist",
    subText: "Left",
    value: "left_wrist",
  },
  {
    group: "Upper Limbs",
    name: "Wrist",
    subText: "Right",
    value: "right_wrist",
  },

  // Lower Limbs
  { group: "Lower Limbs", name: "Legs", value: "legs" },
  {
    group: "Lower Limbs",
    name: "Leg",
    subText: "Left",
    value: "left_leg",
  },
  {
    group: "Lower Limbs",
    name: "Leg",
    subText: "Right",
    value: "right_leg",
  },

  { group: "Lower Limbs", name: "Knees", value: "knees" },
  {
    group: "Lower Limbs",
    name: "Knee",
    subText: "Left",
    value: "left_knee",
  },
  {
    group: "Lower Limbs",
    name: "Knee",
    subText: "Right",
    value: "right_knee",
  },

  // Musculoskeletal
  { group: "Musculoskeletal", name: "Bones", value: "bones" },
  { group: "Musculoskeletal", name: "Joints", value: "joints" },
  { group: "Musculoskeletal", name: "Cartilage", value: "cartilage" },
  { group: "Musculoskeletal", name: "Ligaments", value: "ligaments" },
  { group: "Musculoskeletal", name: "Tendons", value: "tendons" },
  { group: "Musculoskeletal", name: "Muscles", value: "muscles" },

  // Other
  { group: "Other", name: "Soft Tissue", value: "soft_tissue" },
  { group: "Other", name: "Other", value: "other_region" },
] as const;

export const MEDICAL_OPTIONS_CASE_DIFFICULTIES_CONST = [
  { name: "Easy", value: "easy" },
  { name: "Medium", value: "medium" },
  { name: "Hard", value: "hard" },
] as const;
