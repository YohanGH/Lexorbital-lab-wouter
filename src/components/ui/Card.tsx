import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "outline" | "elevated";
}

export function Card({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const baseClasses = "rounded-md p-4";

  const variantClasses = {
    default: "bg-white border border-[var(--color-border)] shadow-sm",
    outline: "bg-transparent border-2 border-[var(--color-dark)]",
    elevated: "bg-white border border-[var(--color-border)] shadow-lg",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
