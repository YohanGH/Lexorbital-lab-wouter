import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "wouter";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  asLink?: boolean;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  asLink = false,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-md border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-block text-center";

  const variantClasses = {
    primary:
      "bg-[var(--color-primary)] text-white border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:border-[var(--color-primary-light)] focus:ring-[var(--color-primary)]",
    secondary:
      "bg-transparent text-[var(--color-text)] border-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-white focus:ring-[var(--color-text)]",
    ghost:
      "bg-transparent text-[var(--color-text)] border-transparent hover:bg-[var(--color-dark)]/10 focus:ring-[var(--color-text)]",
  };

  const sizeClasses = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (asLink && href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
