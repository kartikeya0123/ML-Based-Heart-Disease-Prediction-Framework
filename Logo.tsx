import { HeartPulse } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const iconSize = size === "sm" ? "w-6 h-6" : size === "lg" ? "w-10 h-10" : "w-8 h-8";
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-xl";
  const padding = size === "sm" ? "p-2" : size === "lg" ? "p-3" : "p-2.5";
  const iconW = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-7 h-7" : "w-5 h-5";

  return (
    <div className="flex items-center gap-3">
      <div className={`${padding} rounded-2xl gradient-bg ${iconSize} flex items-center justify-center text-white shadow-lg shadow-sky-200`}>
        <HeartPulse className={iconW} />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSize} font-bold gradient-text leading-tight`}>CardioSense</span>
          <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase leading-tight">AI Healthcare</span>
        </div>
      )}
    </div>
  );
}
