import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export default function Home() {
  return <Section className="min-h-[65vh] overflow-hidden"><Container>
    <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.45fr]">
      <div><SectionHeader eyebrow="Package delivery within your region" title="Your package. Anywhere in your region. Delivered." description="Sender+ is a Ghanaian, technology-enabled package delivery company for students, businesses, and everyday senders." /><div className="mt-9 flex flex-wrap gap-3"><Button href="/send">Send a Package</Button><Button href="/track" variant="secondary">Track a Package</Button></div></div>
      <p className="border-l-4 border-sender-blue pl-6 text-lg leading-8 text-charcoal">Send anywhere in your region.</p>
    </div>
  </Container></Section>;
}
