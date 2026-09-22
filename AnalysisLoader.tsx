import { useEffect, useState } from "react";
import { Brain, CheckCircle2 } from "lucide-react";

const STEPS = [
  "Analyzing patient profile...",
  "Validating health parameters...",
  "Processing cardiovascular features...",
  "Running predictive model...",
  "Generating explanation...",
  "Preparing cardiovascular intelligence...",
  "Assessment complete.",
];

export function AnalysisLoader({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= STEPS.length - 1) {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setCurrentStep((s) => s + 1), 500);
    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-sky-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-sky-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Brain className="w-10 h-10 text-sky-500" />
        </div>
      </div>

      <div className="space-y-2.5 w-full max-w-sm">
        {STEPS.map((step, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 text-sm transition-all duration-300 ${
              i <= currentStep ? "opacity-100" : "opacity-25"
            }`}
          >
            {i < currentStep ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            ) : i === currentStep ? (
              <div className="w-4 h-4 rounded-full border-2 border-sky-400 border-t-transparent animate-spin flex-shrink-0" />
            ) : (
              <div className="w-4 h-4 rounded-full border-2 border-slate-200 flex-shrink-0" />
            )}
            <span className={i <= currentStep ? "text-slate-700" : "text-slate-400"}>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
