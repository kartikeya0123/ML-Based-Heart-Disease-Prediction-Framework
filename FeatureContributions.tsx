import type { FeatureContribution } from "@/types";

interface FeatureContributionsProps {
  contributions: FeatureContribution[];
}

export function FeatureContributions({ contributions }: FeatureContributionsProps) {
  const maxAbsImpact = Math.max(...contributions.map((c) => Math.abs(c.impact)), 0.01);
  const top6 = contributions.slice(0, 6);

  return (
    <div className="space-y-4">
      {top6.map((contrib, i) => {
        const widthPercent = Math.abs(contrib.impact) / maxAbsImpact * 100;
        const isPositive = contrib.direction === "positive";
        const barColor = isPositive ? "risk-veryhigh" : "risk-low";

        return (
          <div key={contrib.name} className="fade-in-up" style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-700">{contrib.label}</span>
                <span className="text-xs text-slate-400">= {contrib.value}</span>
              </div>
              <span className={`text-xs font-bold ${isPositive ? "text-risk-veryhigh" : "text-risk-low"}`}>
                {isPositive ? "+" : ""}{contrib.impact.toFixed(3)}
              </span>
            </div>
            <div className="relative h-2.5 rounded-full bg-slate-100/60 overflow-hidden">
              <div
                className={`contribution-bar-fill h-full ${barColor}`}
                style={{ width: `${widthPercent}%` }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-1">{contrib.description}</p>
          </div>
        );
      })}
    </div>
  );
}
