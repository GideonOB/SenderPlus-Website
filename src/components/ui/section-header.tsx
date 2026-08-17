type SectionHeaderProps = { eyebrow?: string; title: string; description?: string; align?: "left" | "center" };

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return <header className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">{eyebrow}</p>}
    <h1 className="font-display text-4xl font-bold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">{title}</h1>
    {description && <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal">{description}</p>}
  </header>;
}
