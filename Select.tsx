import { ChevronDown, AlertCircle } from "lucide-react";

interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  helperText?: string;
}

export function Select({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  error,
  disabled = false,
  helperText,
}: SelectProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>}
      <div className="relative">
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={`input-glass w-full pl-4 pr-11 py-3 rounded-2xl text-sm text-slate-800 appearance-none cursor-pointer ${error ? "error" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
      </div>
      {error && (
        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-500 fade-in">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      {helperText && !error && <p className="mt-1.5 text-xs text-slate-400">{helperText}</p>}
    </div>
  );
}
