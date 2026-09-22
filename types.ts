export interface PatientInput {
  name: string;
  age: number;
  sex: number;
  chestPainType: number;
  restingBP: number;
  cholesterol: number;
  fastingBS: number;
  restingECG: number;
  maxHR: number;
  exerciseAngina: number;
  oldpeak: number;
  stSlope: number;
}

export interface FeatureContribution {
  name: string;
  label: string;
  value: number;
  impact: number;
  direction: "positive" | "negative";
  description: string;
}

export interface PredictionResult {
  probability: number;
  riskScore: number;
  riskLevel: "Low" | "Moderate" | "High" | "Very High";
  prediction: string;
  contributions: FeatureContribution[];
  recommendations: string[];
  inputSnapshot: PatientInput;
  modelVersion: string;
  timestamp: string;
}

export interface SessionPrediction extends PredictionResult {
  id: string;
}

export const FIELD_META = {
  age: { label: "Age", unit: "years", min: 1, max: 120, typical: "28-77" },
  sex: { label: "Biological Sex", unit: "", min: 0, max: 1, typical: "Male / Female" },
  chestPainType: { label: "Chest Pain Type", unit: "", min: 0, max: 3, typical: "0-3" },
  restingBP: { label: "Resting Blood Pressure", unit: "mmHg", min: 80, max: 200, typical: "94-200" },
  cholesterol: { label: "Cholesterol", unit: "mg/dL", min: 0, max: 600, typical: "126-564" },
  fastingBS: { label: "Fasting Blood Sugar > 120", unit: "", min: 0, max: 1, typical: "0 or 1" },
  restingECG: { label: "Resting ECG", unit: "", min: 0, max: 2, typical: "0-2" },
  maxHR: { label: "Maximum Heart Rate", unit: "bpm", min: 60, max: 220, typical: "71-202" },
  exerciseAngina: { label: "Exercise Induced Angina", unit: "", min: 0, max: 1, typical: "0 or 1" },
  oldpeak: { label: "Oldpeak (ST Depression)", unit: "", min: -2, max: 6, typical: "-2 to 6.2" },
  stSlope: { label: "ST Slope", unit: "", min: 0, max: 2, typical: "0-2" },
} as const;

export const CATEGORICAL_OPTIONS = {
  sex: ["Male", "Female"],
  chestPainType: ["Typical Angina", "Atypical Angina", "Non-Anginal", "Asymptomatic"],
  fastingBS: ["No", "Yes"],
  restingECG: ["Normal", "ST-T Wave Abnormality", "Left Ventricular Hypertrophy"],
  exerciseAngina: ["No", "Yes"],
  stSlope: ["Upsloping", "Flat", "Downsloping"],
} as const;

export const DEFAULT_INPUT: PatientInput = {
  name: "",
  age: 52,
  sex: 1,
  chestPainType: 0,
  restingBP: 145,
  cholesterol: 240,
  fastingBS: 0,
  restingECG: 1,
  maxHR: 132,
  exerciseAngina: 1,
  oldpeak: 1.2,
  stSlope: 1,
};
