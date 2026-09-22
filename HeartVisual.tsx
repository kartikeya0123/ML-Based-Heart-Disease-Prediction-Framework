import { Activity } from "lucide-react";

export function HeartVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto flex items-center justify-center py-8">
      {/* Pulse rings */}
      <div className="absolute w-48 h-48 rounded-full border-2 border-sky-200/40 pulse-ring" />
      <div className="absolute w-64 h-64 rounded-full border border-sky-200/20" />
      <div className="absolute w-80 h-80 rounded-full border border-sky-100/10" />

      {/* Core heart */}
      <div className="relative z-10 w-32 h-32 rounded-full gradient-bg flex items-center justify-center shadow-2xl shadow-sky-200 heart-beat">
        <Activity className="w-16 h-16 text-white" strokeWidth={1.5} />
      </div>

      {/* ECG line */}
      <svg
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none"
        height="80"
        viewBox="0 0 400 80"
        fill="none"
      >
        <path
          className="ecg-line"
          d="M0 40 L80 40 L100 40 L110 20 L120 60 L130 10 L140 70 L150 40 L200 40 L220 40 L230 25 L240 55 L250 40 L400 40"
          stroke="url(#ecgGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="ecgGradient" x1="0" y1="0" x2="400" y2="0">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
            <stop offset="30%" stopColor="#0ea5e9" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#14b8a6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* AI network nodes */}
      <div className="absolute top-4 right-8 w-3 h-3 rounded-full bg-sky-400 ai-node" />
      <div className="absolute top-12 left-6 w-2.5 h-2.5 rounded-full bg-teal-400 ai-node" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-8 right-12 w-3 h-3 rounded-full bg-cyan-400 ai-node" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-16 left-10 w-2 h-2 rounded-full bg-sky-300 ai-node" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-4 w-2 h-2 rounded-full bg-violet-400 ai-node" style={{ animationDelay: "2s" }} />
    </div>
  );
}
