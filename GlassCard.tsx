import type { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  strong?: boolean;
  subtle?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = "", style, strong = false, subtle = false, onClick }: GlassCardProps) {
  const glassClass = strong ? "glass-strong" : subtle ? "glass-subtle" : "glass";
  return (
    <div onClick={onClick} style={style} className={`${glassClass} rounded-3xl ${className}`}>
      {children}
    </div>
  );
}
