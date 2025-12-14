import type { HTMLAttributes, ReactNode } from "react";

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  children: ReactNode;
  language?: string;
}

export function CodeBlock({
  children,
  language,
  className = "",
  ...props
}: CodeBlockProps) {
  return (
    <pre
      className={`bg-[var(--color-dark)] text-[var(--color-background)] p-4 rounded-md border-2 border-[var(--color-dark)] overflow-x-auto font-mono text-sm ${className}`}
      {...props}
    >
      {language && (
        <div className="text-xs text-[var(--color-primary-light)] mb-2 font-semibold uppercase tracking-wide">
          {language}
        </div>
      )}
      <code>{children}</code>
    </pre>
  );
}
