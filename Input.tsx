import { useState, type ReactNode } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface InputProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  success?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  maxLength?: number;
  helperText?: string;
  unit?: string;
}

export function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  success = false,
  icon,
  disabled = false,
  maxLength,
  helperText,
  unit,
}: InputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">{icon}</div>
        )}
        <input
          type={type}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`input-glass w-full ${icon ? "pl-11" : "pl-4"} ${unit ? "pr-14" : "pr-4"} py-3 rounded-2xl text-sm text-slate-800 placeholder:text-slate-400 ${error ? "error" : ""} ${success ? "success" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        />
        {unit && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-medium pointer-events-none">
            {unit}
          </span>
        )}
      </div>
      {error && (
        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-500 fade-in">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      {success && !error && (
        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-emerald-500 fade-in">
          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
          <span>Valid</span>
        </div>
      )}
      {helperText && !error && !success && (
        <p className="mt-1.5 text-xs text-slate-400">{helperText}</p>
      )}
    </div>
  );
}
