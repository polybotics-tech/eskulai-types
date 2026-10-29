export const USER_ROLES_CONST = [
  { value: "doctor", name: "Medical Doctor" },
  { value: "nurse", name: "Licensed Nurse" },
  { value: "student", name: "Practicing Student" },
] as const;

export const USER_GENDERS_CONST = [
  { value: "male", name: "Male" },
  { value: "female", name: "Female" },
] as const;

export const CUSTOMIZATIONS_SPEECH_SPEEDS_CONST = [
  { value: "slow", name: "Quite Slow" },
  { value: "normal", name: "Relatively Normal" },
  { value: "fast", name: "Very Fast" },
] as const;

export const CUSTOMIZATIONS_INTERACTION_STYLES_CONST = [
  { value: "summarized", name: "Briefly Summarized" },
  { value: "detailed", name: "Extensively Detailed" },
] as const;

export const CUSTOMIZATIONS_RESPONSE_TONICITIES_CONST = [
  { value: "simple", name: "Simple Regular Grammar" },
  { value: "professional", name: "Professional Medical Grammar" },
  { value: "technical", name: "Technical Exclusive Grammar" },
] as const;

export const CUSTOMIZATIONS_MEDICAL_TERMINOLOGIES_CONST = [
  { value: "basic", name: "Mostly use Basic terms" },
  { value: "standard", name: "Often use Standard terms" },
  { value: "clinical", name: "Always use Clinical terms" },
] as const;
