import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function PlaceholderPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <Section className="min-h-[60vh]"><Container><SectionHeader eyebrow={eyebrow} title={title} description={description} /></Container></Section>;
}
