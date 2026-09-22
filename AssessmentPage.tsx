import { useState } from "react";
import { Logo } from "@/components/Logo";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { GlassCard } from "@/components/GlassCard";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Button } from "@/components/Button";
import { AnalysisLoader } from "@/components/AnalysisLoader";
import { ArrowLeft, Brain, User, HeartPulse, Stethoscope, Calendar, Activity, Zap, Eye, EyeOff } from "lucide-react";
import type { PatientInput, PredictionResult } from "@/types";
import { CATEGORICAL_OPTIONS, FIELD_META, DEFAULT_INPUT } from "@/types";
import { predict, validateInput } from "@/lib/predict";

interface AssessmentPageProps {
  onBack: () => void;
  onComplete: (input: PatientInput, result: PredictionResult) => void;
}

export function AssessmentPage({ onBack, onComplete }: AssessmentPageProps) {
  const [input, setInput] = useState<PatientInput>({ ...DEFAULT_INPUT });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [analyzing, setAnalyzing] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const updateField = (key: keyof PatientInput, value: string | number) => {
    setInput((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleAnalyze = () => {
    const validationErrors = validateInput(input);
    if (validationErrors.length > 0) {
      const errMap: Record<string, string> = {};
      validationErrors.forEach((e) => {
        if (e.includes("Age")) errMap.age = e;
        else if (e.includes("blood pressure")) errMap.restingBP = e;
        else if (e.includes("Cholesterol")) errMap.cholesterol = e;
        else if (e.includes("heart rate")) errMap.maxHR = e;
        else if (e.includes("Oldpeak")) errMap.oldpeak = e;
      });
      setErrors(errMap);
      return;
    }
    setAnalyzing(true);
  };

  const handleAnalysisComplete = () => {
    const result = predict(input);
    onComplete(input, result);
  };

  if (analyzing) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <BackgroundOrbs />
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <GlassCard strong className="p-8 md:p-12 w-full max-w-lg">
            <AnalysisLoader onComplete={handleAnalysisComplete} />
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundOrbs />

      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 md:px-12 py-6 flex items-center justify-between">
          <Logo size="md" />
          <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-sky-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </header>

        <div className="px-6 md:px-12 pb-16 max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-10 fade-in-up">
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Patient Assessment</h1>
            <p className="text-slate-500">Enter the patient's health information for AI-powered cardiovascular risk analysis</p>
          </div>

          {/* Section 1: Patient Profile */}
          <div className="mb-6 fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center">
                <User className="w-5 h-5 text-sky-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">Patient Profile</h2>
            </div>
            <GlassCard strong className="p-6 space-y-5">
              <Input
                label="Patient Name"
                type="text"
                value={input.name}
                onChange={(v) => updateField("name", v)}
                icon={<User className="w-5 h-5" />}
                placeholder="Enter patient name"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Age"
                  type="number"
                  value={String(input.age)}
                  onChange={(v) => updateField("age", Number(v))}
                  icon={<Calendar className="w-5 h-5" />}
                  unit="years"
                  error={errors.age}
                  helperText={`Typical range: ${FIELD_META.age.typical}`}
                />
                <Select
                  label="Biological Sex"
                  value={input.sex === 1 ? "Male" : "Female"}
                  onChange={(v) => updateField("sex", v === "Male" ? 1 : 0)}
                  options={CATEGORICAL_OPTIONS.sex}
                />
              </div>
            </GlassCard>
          </div>

          {/* Section 2: Cardiovascular Indicators */}
          <div className="mb-6 fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-rose-500" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">Cardiovascular Indicators</h2>
            </div>
            <GlassCard strong className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Resting Blood Pressure"
                  type="number"
                  value={String(input.restingBP)}
                  onChange={(v) => updateField("restingBP", Number(v))}
                  unit="mmHg"
                  error={errors.restingBP}
                  helperText={`Typical: ${FIELD_META.restingBP.typical}`}
                />
                <Input
                  label="Cholesterol"
                  type="number"
                  value={String(input.cholesterol)}
                  onChange={(v) => updateField("cholesterol", Number(v))}
                  unit="mg/dL"
                  error={errors.cholesterol}
                  helperText={`Typical: ${FIELD_META.cholesterol.typical}`}
                />
              </div>
              <Input
                label="Maximum Heart Rate"
                type="number"
                value={String(input.maxHR)}
                onChange={(v) => updateField("maxHR", Number(v))}
                icon={<Activity className="w-5 h-5" />}
                unit="bpm"
                error={errors.maxHR}
                helperText={`Typical: ${FIELD_META.maxHR.typical}`}
              />
            </GlassCard>
          </div>

          {/* Section 3: Clinical Characteristics */}
          <div className="mb-6 fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-teal-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">Clinical Characteristics</h2>
            </div>
            <GlassCard strong className="p-6 space-y-5">
              <Select
                label="Chest Pain Type"
                value={CATEGORICAL_OPTIONS.chestPainType[input.chestPainType]}
                onChange={(v) => updateField("chestPainType", CATEGORICAL_OPTIONS.chestPainType.indexOf(v as any))}
                options={CATEGORICAL_OPTIONS.chestPainType}
                helperText="0=Typical Angina (highest risk) → 3=Asymptomatic"
              />
              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="Fasting Blood Sugar > 120"
                  value={input.fastingBS === 1 ? "Yes" : "No"}
                  onChange={(v) => updateField("fastingBS", v === "Yes" ? 1 : 0)}
                  options={CATEGORICAL_OPTIONS.fastingBS}
                />
                <Select
                  label="Resting ECG"
                  value={CATEGORICAL_OPTIONS.restingECG[input.restingECG]}
                  onChange={(v) => updateField("restingECG", CATEGORICAL_OPTIONS.restingECG.indexOf(v as any))}
                  options={CATEGORICAL_OPTIONS.restingECG}
                />
              </div>
              <Select
                label="Exercise Induced Angina"
                value={input.exerciseAngina === 1 ? "Yes" : "No"}
                onChange={(v) => updateField("exerciseAngina", v === "Yes" ? 1 : 0)}
                options={CATEGORICAL_OPTIONS.exerciseAngina}
              />
            </GlassCard>
          </div>

          {/* Advanced section toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 font-medium mb-4 transition-colors"
          >
            {showAdvanced ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAdvanced ? "Hide" : "Show"} advanced ST parameters
          </button>

          {showAdvanced && (
            <div className="mb-6 fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-violet-600" />
                </div>
                <h2 className="text-lg font-bold text-slate-800">ST Parameters</h2>
              </div>
              <GlassCard strong className="p-6 space-y-5">
                <Input
                  label="Oldpeak (ST Depression)"
                  type="number"
                  value={String(input.oldpeak)}
                  onChange={(v) => updateField("oldpeak", Number(v))}
                  error={errors.oldpeak}
                  helperText={`Typical: ${FIELD_META.oldpeak.typical}`}
                />
                <Select
                  label="ST Slope"
                  value={CATEGORICAL_OPTIONS.stSlope[input.stSlope]}
                  onChange={(v) => updateField("stSlope", CATEGORICAL_OPTIONS.stSlope.indexOf(v as any))}
                  options={CATEGORICAL_OPTIONS.stSlope}
                  helperText="0=Upsloping (lower risk) → 2=Downsloping (higher risk)"
                />
              </GlassCard>
            </div>
          )}

          {/* Analyze button */}
          <div className="pt-4 fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Button
              onClick={handleAnalyze}
              fullWidth
              icon={<Brain className="w-5 h-5" />}
              className="text-base py-4"
            >
              Analyze with AI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
