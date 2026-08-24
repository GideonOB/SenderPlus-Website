"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { primaryNavigation } from "@/content/site";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return <div className="md:hidden">
    <button type="button" aria-expanded={open} aria-controls={menuId} onClick={() => setOpen((value) => !value)} className="flex min-h-12 min-w-12 items-center justify-center rounded-md border border-ink/20" aria-label={open ? "Close navigation" : "Open navigation"}>
      <span aria-hidden="true" className="text-xl leading-none">{open ? "×" : "☰"}</span>
    </button>
    {open && <div id={menuId} className="absolute inset-x-0 top-full border-t border-ink/10 bg-canvas px-5 py-6 shadow-lg">
      <nav aria-label="Mobile navigation" className="flex flex-col">
        {primaryNavigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-ink/10 py-4 font-bold">{item.label}</Link>)}
        <div className="mt-6 grid grid-cols-2 gap-3"><Link href="/track" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-md border border-ink/25 font-bold">Track</Link><Link href="/send" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-md bg-ink font-bold text-white">Send</Link></div>
      </nav>
    </div>}
  </div>;
}
