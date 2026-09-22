import type { PatientInput, PredictionResult, FeatureContribution } from "@/types";

const MODEL_VERSION = "cardiosense-heart-v1.0.0";

const FEATURE_LABELS: Record<string, { label: string; description: string }> = {
  age: { label: "Age", description: "Advanced age increases cardiovascular risk" },
  sex: { label: "Biological Sex", description: "Males statistically carry higher baseline risk" },
  chestPainType: { label: "Chest Pain Type", description: "Typical angina is the strongest indicator" },
  restingBP: { label: "Blood Pressure", description: "Elevated resting BP strains the heart" },
  cholesterol: { label: "Cholesterol", description: "High cholesterol contributes to arterial plaque" },
  fastingBS: { label: "Fasting Blood Sugar", description: "Elevated fasting sugar signals metabolic risk" },
  restingECG: { label: "Resting ECG", description: "ECG abnormalities suggest cardiac stress" },
  maxHR: { label: "Max Heart Rate", description: "Lower max HR during exercise indicates reduced capacity" },
  exerciseAngina: { label: "Exercise Angina", description: "Chest pain during exertion is a major red flag" },
  oldpeak: { label: "Oldpeak", description: "ST depression reflects myocardial ischemia" },
  stSlope: { label: "ST Slope", description: "Flat or downsloping ST indicates coronary disease" },
};

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

function computeRawScore(input: PatientInput): number {
  let score = -1.8;

  if (input.age > 65) score += 1.6;
  else if (input.age > 55) score += 1.1;
  else if (input.age > 45) score += 0.7;
  else if (input.age > 35) score += 0.3;

  if (input.sex === 1) score += 0.45;

  if (input.chestPainType === 0) score += 1.5;
  else if (input.chestPainType === 1) score += 1.0;
  else if (input.chestPainType === 2) score += 0.6;
  else if (input.chestPainType === 3) score += 0.3;

  if (input.restingBP > 160) score += 0.9;
  else if (input.restingBP > 140) score += 0.6;
  else if (input.restingBP > 120) score += 0.3;

  if (input.cholesterol > 300) score += 0.8;
  else if (input.cholesterol > 240) score += 0.55;
  else if (input.cholesterol > 200) score += 0.3;

  if (input.fastingBS === 1) score += 0.5;

  if (input.restingECG === 2) score += 0.5;
  else if (input.restingECG === 1) score += 0.35;

  const expectedMaxHR = 220 - input.age;
  const hrDeficit = expectedMaxHR - input.maxHR;
  if (hrDeficit > 40) score += 0.7;
  else if (hrDeficit > 25) score += 0.45;
  else if (hrDeficit > 10) score += 0.2;

  if (input.exerciseAngina === 1) score += 0.9;

  if (input.oldpeak > 3) score += 1.0;
  else if (input.oldpeak > 2) score += 0.75;
  else if (input.oldpeak > 1) score += 0.5;
  else if (input.oldpeak > 0.5) score += 0.25;

  if (input.stSlope === 2) score += 0.85;
  else if (input.stSlope === 1) score += 0.45;
  else if (input.stSlope === 0) score += 0.1;

  return score;
}

function computePerFeatureImpact(input: PatientInput): FeatureContribution[] {
  const contributions: FeatureContribution[] = [];
  const keys = Object.keys(FEATURE_LABELS);

  for (const key of keys) {
    const baseline = { ...input };
    const modified = { ...input };

    if (key === "age") {
      baseline.age = 40;
      modified.age = input.age;
    } else if (key === "sex") {
      baseline.sex = 0;
      modified.sex = input.sex;
    } else if (key === "chestPainType") {
      baseline.chestPainType = 3;
      modified.chestPainType = input.chestPainType;
    } else if (key === "restingBP") {
      baseline.restingBP = 110;
      modified.restingBP = input.restingBP;
    } else if (key === "cholesterol") {
      baseline.cholesterol = 150;
      modified.cholesterol = input.cholesterol;
    } else if (key === "fastingBS") {
      baseline.fastingBS = 0;
      modified.fastingBS = input.fastingBS;
    } else if (key === "restingECG") {
      baseline.restingECG = 0;
      modified.restingECG = input.restingECG;
    } else if (key === "maxHR") {
      baseline.maxHR = 180;
      modified.maxHR = input.maxHR;
    } else if (key === "exerciseAngina") {
      baseline.exerciseAngina = 0;
      modified.exerciseAngina = input.exerciseAngina;
    } else if (key === "oldpeak") {
      baseline.oldpeak = 0;
      modified.oldpeak = input.oldpeak;
    } else if (key === "stSlope") {
      baseline.stSlope = 0;
      modified.stSlope = input.stSlope;
    }

    const baseProb = sigmoid(computeRawScore(baseline));
    const modProb = sigmoid(computeRawScore(modified));
    const impact = modProb - baseProb;

    const meta = FEATURE_LABELS[key];
    contributions.push({
      name: key,
      label: meta.label,
      value: (input as any)[key],
      impact: impact,
      direction: impact >= 0 ? "positive" : "negative",
      description: meta.description,
    });
  }

  contributions.sort((a, b) => Math.abs(b.impact) - Math.abs(a.impact));
  return contributions;
}

function generateRecommendations(input: PatientInput): string[] {
  const recs: string[] = [];

  if (input.cholesterol > 200)
    recs.push("Reduce dietary cholesterol and saturated fat intake; consider lipid-lowering therapy if clinically indicated");
  if (input.restingBP > 130)
    recs.push("Monitor blood pressure regularly; reduce sodium intake and discuss antihypertensive options with a clinician");
  if (input.exerciseAngina === 1)
    recs.push("Exercise-induced chest pain warrants prompt cardiology evaluation — consider stress testing or angiography");
  if (input.age > 50)
    recs.push("Age is a non-modifiable risk factor — schedule regular cardiovascular screening and preventive check-ups");
  if (input.fastingBS === 1)
    recs.push("Elevated fasting blood sugar increases cardiac risk — manage glucose through diet, exercise, and medication if prescribed");
  if (input.oldpeak > 1)
    recs.push("Significant ST depression on exercise suggests ischemia — further cardiac imaging may be warranted");
  if (input.maxHR < 130 && input.age < 60)
    recs.push("Reduced maximum heart rate may indicate impaired cardiac reserve — discuss exercise capacity testing");
  if (input.chestPainType === 0)
    recs.push("Typical angina symptoms are a strong predictor — seek cardiology consultation without delay");

  if (recs.length === 0)
    recs.push("Maintain a heart-healthy lifestyle: regular aerobic exercise, balanced diet, and routine medical check-ups");

  return recs;
}

export function predict(input: PatientInput): PredictionResult {
  const rawScore = computeRawScore(input);
  const probability = sigmoid(rawScore);
  const riskScore = Math.round(probability * 1000) / 10;

  let riskLevel: PredictionResult["riskLevel"];
  let prediction: string;

  if (riskScore < 25) {
    riskLevel = "Low";
    prediction = "The model estimates a low probability of cardiovascular disease based on the provided parameters";
  } else if (riskScore < 50) {
    riskLevel = "Moderate";
    prediction = "The model identifies moderate risk factors — monitoring and preventive lifestyle adjustments are advisable";
  } else if (riskScore < 75) {
    riskLevel = "High";
    prediction = "The model estimates elevated cardiovascular risk — clinical consultation is recommended for further evaluation";
  } else {
    riskLevel = "Very High";
    prediction = "The model indicates a high probability of cardiovascular disease — prompt medical evaluation is strongly advised";
  }

  const contributions = computePerFeatureImpact(input);
  const recommendations = generateRecommendations(input);

  return {
    probability,
    riskScore,
    riskLevel,
    prediction,
    contributions,
    recommendations,
    inputSnapshot: { ...input },
    modelVersion: MODEL_VERSION,
    timestamp: new Date().toISOString(),
  };
}

export function validateInput(input: PatientInput): string[] {
  const errors: string[] = [];
  const meta = {
    age: [1, 120],
    restingBP: [80, 220],
    cholesterol: [0, 600],
    maxHR: [50, 230],
    oldpeak: [-3, 7],
  };

  if (input.age < 1 || input.age > 120) errors.push("Age must be between 1 and 120 years");
  if (input.restingBP < 80 || input.restingBP > 220) errors.push("Resting blood pressure must be between 80 and 220 mmHg");
  if (input.cholesterol < 0 || input.cholesterol > 600) errors.push("Cholesterol must be between 0 and 600 mg/dL");
  if (input.maxHR < 50 || input.maxHR > 230) errors.push("Maximum heart rate must be between 50 and 230 bpm");
  if (input.oldpeak < -3 || input.oldpeak > 7) errors.push("Oldpeak must be between -3 and 7");

  return errors;
}
