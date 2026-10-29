export const SUPPORT_TICKET_CATEGORIES_CONST = [
  // App & Account
  {
    name: "Technical Issue",
    value: "technical_issue",
    description:
      "Report app crashes, errors, slow performance, or features that aren't working.",
    group: "App & Account",
  },
  {
    name: "Account & Authentication",
    value: "account_authentication",
    description:
      "Get help with signing in, registration, password resets, or your account.",
    group: "App & Account",
  },
  {
    name: "Privacy & Security",
    value: "privacy_security",
    description:
      "Report privacy concerns, suspicious activity, or account security issues.",
    group: "App & Account",
  },

  // Medical Features
  {
    name: "AI Assistant & Chat",
    value: "ai_assistant_chat",
    description:
      "Report issues with AI responses, chat history, or conversations.",
    group: "Medical Features",
  },
  {
    name: "Drug Information & Search",
    value: "drug_information_search",
    description:
      "Report missing drugs, incorrect drug details, or search problems.",
    group: "Medical Features",
  },
  {
    name: "Medical Imaging Analysis",
    value: "medical_imaging_analysis",
    description:
      "Get help with image uploads, scan analysis, or imaging results.",
    group: "Medical Features",
  },
  {
    name: "Patient Assessment & Diagnosis",
    value: "patient_assessment_diagnosis",
    description:
      "Report issues with patient history, assessments, or diagnostic tools.",
    group: "Medical Features",
  },
  {
    name: "Medical Calculators",
    value: "medical_calculators",
    description:
      "Report calculation errors or problems using medical calculators.",
    group: "Medical Features",
  },
  {
    name: "Learning & Study Resources",
    value: "learning_study_resources",
    description:
      "Get help with study notes, learning materials, or preparation resources.",
    group: "Medical Features",
  },
  {
    name: "Report Incorrect Medical Information",
    value: "incorrect_medical_information",
    description:
      "Flag potentially inaccurate, misleading, or outdated medical information.",
    group: "Medical Features",
  },

  // Billing & Feedback
  {
    name: "Subscription & Payments",
    value: "subscription_payments",
    description:
      "Get help with subscriptions, payments, billing, or purchase issues.",
    group: "Billing & Feedback",
  },
  {
    name: "Feature Request",
    value: "feature_request",
    description: "Suggest a new feature or an improvement to an existing one.",
    group: "Billing & Feedback",
  },

  // General
  {
    name: "General Enquiry",
    value: "general_enquiry",
    description:
      "Ask a question about Aesculai that doesn't fit another category.",
    group: "General",
  },
  {
    name: "Other",
    value: "other",
    description:
      "Choose this if your issue doesn't fit any of the listed categories.",
    group: "General",
  },
] as const;

export const SUPPORT_TICKET_STATUS_CONST = [
  "open",
  "awaiting",
  "resolved",
  "closed",
] as const;
