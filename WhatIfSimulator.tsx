import { useState, useMemo, useCallback } from "react";
import { GlassCard } from "@/components/GlassCard";
import { SlidersHorizontal, TrendingDown, TrendingUp, Sparkles, AlertTriangle } from "lucide-react";
import type { PatientInput, PredictionResult } from "@/types";
import { predict } from "@/lib/predict";

interface WhatIfSimulatorProps {
  originalInput: PatientInput;
  originalResult: PredictionResult;
}

const SLIDER_FIELDS: { key: keyof PatientInput; label: string; min: number; max: number; step: number; unit: string }[] = [
  { key: "age", label: "Age", min: 20, max: 90, step: 1, unit: "yrs" },
  { key: "restingBP", label: "Resting Blood Pressure", min: 90, max: 200, step: 1, unit: "mmHg" },
  { key: "cholesterol", label: "Cholesterol", min: 100, max: 500, step: 5, unit: "mg/dL" },
  { key: "maxHR", label: "Max Heart Rate", min: 70, max: 200, step: 1, unit: "bpm" },
  { key: "oldpeak", label: "Oldpeak (ST Depression)", min: 0, max: 5, step: 0.1, unit: "" },
];

export function WhatIfSimulator({ originalInput, originalResult }: WhatIfSimulatorProps) {
  const [modified, setModified] = useState<PatientInput>({ ...originalInput });

  const newResult = useMemo(() => predict(modified), [modified]);

  const change = newResult.riskScore - originalResult.riskScore;
  const riskImproved = change < -0.1;
  const riskWorsened = change > 0.1;

  const handleSlider = useCallback((key: keyof PatientInput, value: number) => {
    setModified((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleReset = useCallback(() => {
    setModified({ ...originalInput });
  }, [originalInput]);

  return (
    <div className="space-y-6">
      {/* Disclaimer */}
      <div className="flex items-start gap-3 glass-subtle rounded-2xl p-4 border-amber-200/50">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-slate-500 leading-relaxed">
          This is a model simulation, not a medical recommendation or guarantee of a health outcome.
          Changing one model input does not establish that changing that factor in real life will produce the same medical result.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="space-y-5">
          {SLIDER_FIELDS.map((field) => (
            <div key={field.key}>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-700">{field.label}</label>
                <span className="text-sm font-bold text-sky-600 tabular-nums">
                  {modified[field.key]}{field.unit && ` ${field.unit}`}
                </span>
              </div>
              <input
                type="range"
                className="glass-slider"
                min={field.min}
                max={field.max}
                step={field.step}
                value={modified[field.key]}
                onChange={(e) => handleSlider(field.key, Number(e.target.value))}
              />
              <div className="flex justify-between mt-1 text-xs text-slate-400">
                <span>{field.min}</span>
                <span className="text-slate-300">Original: {originalInput[field.key]}</span>
                <span>{field.max}</span>
              </div>
            </div>
          ))}

          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 font-medium transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Reset to original values
          </button>
        </div>

        {/* Comparison */}
        <div className="space-y-4">
          {/* Original risk */}
          <div className="glass-subtle rounded-2xl p-5 text-center">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Original Risk</p>
            <p className="text-3xl font-bold text-slate-600">{originalResult.riskScore.toFixed(1)}%</p>
            <p className="text-sm text-slate-400 mt-1">{originalResult.riskLevel}</p>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            {riskImproved ? (
              <div className="flex items-center gap-2 text-emerald-600">
                <TrendingDown className="w-6 h-6" />
                <span className="text-lg font-bold">{Math.abs(change).toFixed(1)}% lower</span>
              </div>
            ) : riskWorsened ? (
              <div className="flex items-center gap-2 text-orange-600">
                <TrendingUp className="w-6 h-6" />
                <span className="text-lg font-bold">{change.toFixed(1)}% higher</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-slate-400">
                <SlidersHorizontal className="w-6 h-6" />
                <span className="text-lg font-medium">No change</span>
              </div>
            )}
          </div>

          {/* New risk */}
          <div className={`rounded-2xl p-5 text-center ${
            newResult.riskLevel === "Low" ? "risk-low" :
            newResult.riskLevel === "Moderate" ? "risk-moderate" :
            newResult.riskLevel === "High" ? "risk-high" : "risk-veryhigh"
          }`}>
            <p className="text-xs text-white/70 uppercase tracking-wider mb-2">Simulated Risk</p>
            <p className="text-4xl font-bold text-white">{newResult.riskScore.toFixed(1)}%</p>
            <p className="text-sm text-white/80 mt-1">{newResult.riskLevel}</p>
          </div>

          {/* New prediction text */}
          <GlassCard subtle className="p-4">
            <p className="text-xs text-slate-500 leading-relaxed">{newResult.prediction}</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
