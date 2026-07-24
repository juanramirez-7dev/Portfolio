import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer";

const variants = {
  primary:
    "bg-primary-container text-[#0d0e12] hover:bg-primary hover:text-on-primary",
  ghost:
    "border border-[#ededed] text-[#ededed] bg-transparent hover:border-primary-container hover:text-primary-container",
};

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
