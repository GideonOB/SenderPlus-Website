"use client";

import Link from "next/link";
import { useId, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return <div className="border-t border-ink/25">
    {items.map((item, index) => {
      const isOpen = openIndex === index;
      const triggerId = `${baseId}-trigger-${index}`;
      const panelId = `${baseId}-panel-${index}`;

      return <div key={item.question} className="border-b border-ink/25">
        <h2>
          <button
            id={triggerId}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className="group grid min-h-20 w-full grid-cols-[2.25rem_1fr_2rem] items-center gap-2 py-5 text-left sm:min-h-24 sm:grid-cols-[4rem_1fr_3rem] sm:gap-4"
          >
            <span className="text-xs font-bold text-sender-red">{String(index + 1).padStart(2, "0")}</span>
            <span className="font-display text-lg font-bold uppercase leading-tight tracking-[-0.025em] transition-colors group-hover:text-sender-red sm:text-2xl">{item.question}</span>
            <span aria-hidden="true" className={`justify-self-end text-3xl font-light leading-none transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "rotate-45 text-sender-red" : ""}`}>+</span>
          </button>
        </h2>
        <div id={panelId} role="region" aria-labelledby={triggerId} className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="pb-7 pl-[2.75rem] pr-8 sm:pb-9 sm:pl-20 sm:pr-16">
              <p className="max-w-3xl text-base leading-7 text-charcoal sm:text-lg sm:leading-8">{item.answer}</p>
              {item.link && <Link href={item.link.href} className="editorial-link mt-4 inline-flex border-b border-ink pb-1 text-sm font-extrabold">{item.link.label}</Link>}
            </div>
          </div>
        </div>
      </div>;
    })}
  </div>;
}

