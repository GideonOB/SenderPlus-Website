import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const faqItems = [
  { question: "What is Sender+?", answer: "Sender+ is a technology-enabled package delivery company being built to help students, businesses, and everyday senders move packages conveniently within supported areas in Ghana, making package sending and delivery effortless." },
  { question: "Where does Sender+ deliver?", answer: "Sender+ is beginning with same-region delivery. Greater Accra is planned as the first launch market in 2027, with Ashanti planned next. Coverage will progressively expand to other parts of Ghana.", link: { href: "/coverage", label: "Explore the coverage roadmap" } },
  { question: "Will Sender+ deliver across Ghana?", answer: "Yes, this is the long-term direction. Country-wide coverage coming soon. Coverage will expand progressively, so this should not be interpreted as nationwide availability today." },
  { question: "Will Sender+ offer delivery between regions?", answer: "The initial service model focuses on delivery within individual regions. Inter-regional delivery is part of Sender+’s longer-term vision as the regional network grows. Inter-regional delivery infrastructure: loading." },
  { question: "Can students use Sender+?", answer: "Yes. Students are one of Sender+’s core audiences. The service is being built for packages, bags, foodstuffs, personal belongings, and other campus-related delivery needs within supported areas.", link: { href: "/students", label: "Explore Sender+ for Students" } },
  { question: "Can businesses use Sender+?", answer: "Yes. Sender+ is designed to help online sellers, shops, entrepreneurs, SMEs, and growing businesses move customer orders within supported areas.", link: { href: "/business", label: "Explore Sender+ for Business" } },
  { question: "How do I send a package?", answer: "Continue to the standalone Sender+ sending experience to get started.", link: { href: "/send", label: "Send a Package" } },
  { question: "How do I track a package?", answer: "Continue to the standalone Sender+ tracking experience to follow your package.", link: { href: "/track", label: "Track a Package" } },
  { question: "What can I send?", answer: "Package requirements and accepted-item guidance will be provided as Sender+ service policies are finalized. Sender+ should not be used to transport prohibited, illegal, dangerous, or restricted items." },
] as const;

export const metadata: Metadata = {
  title: "Help and Frequently Asked Questions",
  description: "Find Sender+ help and answers about sending, tracking, planned coverage, student deliveries, and business deliveries.",
};

export default function HelpPage() {
  return <>
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <Container><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sender-red">Help</p><h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-7xl">How can we help?</h1><p className="mt-6 max-w-xl text-lg leading-8 text-charcoal">Find quick answers about sending, tracking, coverage, and using Sender+.</p></Container>
    </section>
    <Section aria-label="Frequently asked questions" className="bg-canvas pt-12 sm:pt-16 lg:pt-20">
      <Container><div className="grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-20"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Quick answers</p><p className="mt-4 max-w-xs font-display text-3xl font-bold leading-tight tracking-[-0.04em]">Everything to know before the first journey.</p></header><FaqAccordion items={faqItems} /></div></Container>
    </Section>
    <Section aria-labelledby="contact-title" className="bg-sender-blue">
      <Container><div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em]">Still need help?</p><h2 id="contact-title" className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl">Send us a message.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-ink/75">Have a question that isn&apos;t covered above? Send us a message and we&apos;ll get back to you.</p></header><ContactForm /></div></Container>
    </Section>
  </>;
}
