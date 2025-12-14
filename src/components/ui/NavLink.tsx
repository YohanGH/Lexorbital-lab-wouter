import { Link } from "wouter";
import type { AnchorHTMLAttributes } from "react";

interface NavLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

export function NavLink({
  children,
  href,
  isActive = false,
  className = "",
  ...props
}: NavLinkProps) {
  const baseClasses =
    "text-white no-underline py-2 px-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]";

  const activeClasses = isActive
    ? "bg-[var(--color-primary)] text-white font-semibold"
    : "bg-transparent text-white/90 hover:bg-[var(--color-dark)]/50";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${activeClasses} ${className}`}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </Link>
  );
}
