import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block font-mono text-xs uppercase tracking-[0.05em] text-on-surface-variant border border-[#9a9a9f]/30 rounded px-3 py-1.5 bg-transparent">
      {children}
    </span>
  );
}
