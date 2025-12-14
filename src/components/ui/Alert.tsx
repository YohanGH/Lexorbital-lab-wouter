import type { HTMLAttributes, ReactNode } from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: AlertVariant;
  title?: string;
}

export function Alert({
  children,
  variant = "info",
  title,
  className = "",
  ...props
}: AlertProps) {
  const variantClasses = {
    info: "bg-blue-50 border-2 border-blue-200 text-blue-900",
    success: "bg-green-50 border-2 border-green-200 text-green-900",
    warning: "bg-yellow-50 border-2 border-yellow-200 text-yellow-900",
    error: "bg-red-50 border-2 border-red-200 text-red-900",
  };

  return (
    <div
      className={`p-4 rounded-md ${variantClasses[variant]} ${className}`}
      role="alert"
      {...props}
    >
      {title && <h4 className="font-semibold mb-2 text-base">{title}</h4>}
      <div className="text-sm">{children}</div>
    </div>
  );
}
