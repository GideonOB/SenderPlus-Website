import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { getAppUrl, type AppDestination } from "@/lib/app-links";

export function AppBridge({ destination, title, cta }: { destination: AppDestination; title: string; cta: string }) {
  const appUrl = getAppUrl(destination);
  return <Section className="min-h-[60vh]"><Container><SectionHeader eyebrow="Continue in the Sender+ app" title={title} description="Sending and tracking take place in the standalone Sender+ application." />
    <div className="mt-9">{appUrl ? <Button href={appUrl} external>{cta}</Button> : <p role="status" className="max-w-xl border-l-4 border-sender-blue pl-5 leading-7 text-charcoal">The Sender+ app link is not configured yet. Please check back soon.</p>}</div>
  </Container></Section>;
}
