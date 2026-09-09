"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/content/site";

export function DesktopNavigation() {
  const pathname = usePathname();

  return <nav aria-label="Primary navigation" className="flex items-center gap-4 xl:gap-7">
    {primaryNavigation.map((item) => {
      const isCurrent = pathname === item.href;

      return <Link
        key={item.href}
        href={item.href}
        aria-current={isCurrent ? "page" : undefined}
        className={`group relative whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-200 ease-out hover:text-ink focus-visible:text-ink ${isCurrent ? "text-ink" : "text-charcoal"}`}
      >
        {item.label}
        <span aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-px origin-left transition-transform duration-200 ease-out motion-reduce:transition-none ${isCurrent ? "scale-x-100 bg-sender-red" : "scale-x-0 bg-sender-blue group-hover:scale-x-100 group-focus-visible:scale-x-100"}`} />
      </Link>;
    })}
  </nav>;
}
