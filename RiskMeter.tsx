import { useEffect, useState } from "react";
import type { PredictionResult } from "@/types";

interface RiskMeterProps {
  riskScore: number;
  riskLevel: PredictionResult["riskLevel"];
  animate?: boolean;
}

export function RiskMeter({ riskScore, riskLevel, animate = true }: RiskMeterProps) {
  const [displayScore, setDisplayScore] = useState(animate ? 0 : riskScore);

  useEffect(() => {
    if (!animate) {
      setDisplayScore(riskScore);
      return;
    }
    let frame: number;
    const start = displayScore;
    const diff = riskScore - start;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.round((start + diff * eased) * 10) / 10);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [riskScore, animate]);

  const riskColor =
    riskLevel === "Low" ? "text-risk-low" :
    riskLevel === "Moderate" ? "text-risk-moderate" :
    riskLevel === "High" ? "text-risk-high" :
    "text-risk-veryhigh";

  const riskBg =
    riskLevel === "Low" ? "bg-risk-low" :
    riskLevel === "Moderate" ? "bg-risk-moderate" :
    riskLevel === "High" ? "bg-risk-high" :
    "bg-risk-veryhigh";

  return (
    <div className="text-center">
      {/* Big number */}
      <div className="mb-6">
        <div className={`text-6xl md:text-7xl font-bold ${riskColor} count-up`}>
          {displayScore.toFixed(1)}%
        </div>
        <p className="text-sm text-slate-400 mt-2 uppercase tracking-wider font-medium">Estimated Model Risk</p>
        <div className={`inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full ${riskBg}`}>
          <span className={`text-sm font-bold ${riskColor}`}>{riskLevel}</span>
        </div>
      </div>

      {/* Meter bar */}
      <div className="relative">
        <div className="risk-meter-track h-3 rounded-full" />
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000"
          style={{ left: `calc(${Math.min(displayScore, 100)}% - 12px)` }}
        >
          <div className={`w-6 h-6 rounded-full ${riskLevel === "Low" ? "risk-low" : riskLevel === "Moderate" ? "risk-moderate" : riskLevel === "High" ? "risk-high" : "risk-veryhigh"} shadow-lg border-2 border-white`} />
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-3 text-xs text-slate-400 font-medium">
        <span>Low</span>
        <span>Moderate</span>
        <span>High</span>
        <span>Very High</span>
      </div>
    </div>
  );
}
