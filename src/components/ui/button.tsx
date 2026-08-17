import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = { children: ReactNode; href: string; variant?: "primary" | "secondary"; className?: string; external?: boolean };

export function Button({ children, href, variant = "primary", className = "", external = false }: ButtonProps) {
  const styles = variant === "primary" ? "bg-ink text-white hover:bg-sender-red" : "border border-ink/25 text-ink hover:border-ink hover:bg-white";
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-md px-6 py-3 text-sm font-bold transition-colors ${styles} ${className}`} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{children}</Link>;
}
