import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { coverageRoadmap } from "@/content/coverage";

const routes = ["Home → Campus", "Shop → Customer", "Transport terminal → Student", "Business → Buyer", "Friend → Friend"];

export const metadata: Metadata = {
  title: "Coverage and Expansion",
  description: "Explore Sender+ plans for same-region package delivery, beginning with Greater Accra, and the roadmap for progressive expansion across Ghana.",
};

export default function CoveragePage() {
  return <>
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24 lg:py-28">
      <div aria-hidden="true" className="absolute -bottom-32 right-0 font-display text-[22rem] font-black leading-none text-white/[0.035]">+</div>
      <Container className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sender-blue">Coverage</p>
          <h1 className="mt-5 max-w-4xl font-display text-6xl font-bold leading-[0.87] tracking-[-0.065em] sm:text-8xl lg:text-9xl">Your region.<br /><span className="text-sender-blue">Connected.</span></h1>
        </div>
        <div className="max-w-xl lg:justify-self-end">
          <p className="text-lg leading-8 text-white/72">Sender+ is being built to make package movement simpler between people, campuses, homes, shops, and businesses within supported areas of the same region.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/send" className="bg-sender-blue text-ink hover:bg-white">Send a Package</Button><Button href="/track" variant="secondary" className="border-white/35 text-white hover:border-white hover:bg-white hover:text-ink">Track a Package</Button></div>
        </div>
      </Container>
    </section>

    <Section aria-labelledby="roadmap-title" className="overflow-hidden bg-white">
      <Container>
        <header className="max-w-4xl"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Coverage roadmap</p><h2 id="roadmap-title" className="mt-4 font-display text-5xl font-bold leading-[0.93] tracking-[-0.055em] sm:text-7xl">Starting here.<br />Growing across Ghana.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal">Sender+ is starting with focused regional operations. Greater Accra is planned as the first launch market in 2027, with Ashanti planned next. From there, coverage will expand progressively across Ghana.</p></header>
        <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div className="mx-auto w-full max-w-[34rem] lg:max-w-[39rem]">
            <Image src="/maps/ghana-regions-senderplus.svg" alt="Map of Ghana showing Greater Accra as the planned 2027 launch region, Ashanti as the next planned region, and all other regions as future expansion" width={1000} height={1454} className="h-auto w-full" priority />
          </div>
          <div>
            <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.18em] text-charcoal">Planned coverage, not currently active</p>
            <ol className="border-t border-ink/25">{coverageRoadmap.map((item, index) => <li key={item.region} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-ink/25 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:py-8"><span className={`mt-1 h-3 w-3 ${item.color} ring-1 ring-ink/20 sm:mt-0`} aria-hidden="true" /><div><p className="font-display text-2xl font-bold uppercase tracking-[-0.03em] sm:text-3xl">{item.region}</p><p className="mt-1 text-sm text-charcoal">{index === 0 ? "First regional market" : index === 1 ? "Expected after Greater Accra" : "Progressive country-wide growth"}</p></div><p className="col-start-2 mt-1 text-sm font-extrabold uppercase tracking-[0.08em] text-sender-red sm:col-start-auto sm:mt-0 sm:text-right">{item.label}{item.timing ? ` · ${item.timing}` : ""}</p></li>)}</ol>
          </div>
        </div>
      </Container>
    </Section>

    <Section aria-labelledby="journeys-title" className="bg-canvas">
      <Container><div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">The starting model</p><h2 id="journeys-title" className="mt-4 font-display text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl">Built for the journeys closest to you.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-charcoal">Sender+ focuses on deliveries where the pickup and destination are located within the same region.</p></header><ol className="border-t-2 border-ink">{routes.map((route, index) => { const [from, to] = route.split(" → "); return <li key={route} className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-ink/20 py-6 sm:grid-cols-[4rem_1fr_4rem_1fr] sm:py-7"><span className="text-xs font-bold text-sender-red">0{index + 1}</span><span className="font-display text-xl font-bold sm:text-2xl">{from}</span><span aria-hidden="true" className="text-xl text-sender-red">→</span><span className="col-start-2 font-display text-xl font-bold sm:col-start-auto sm:text-2xl">{to}</span></li>; })}</ol></div></Container>
    </Section>

    <Section aria-labelledby="country-title" className="bg-white">
      <Container><div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Future roadmap</p><h2 id="country-title" className="mt-4 max-w-5xl font-display text-6xl font-bold leading-[0.88] tracking-[-0.065em] sm:text-8xl">Country-wide coverage <span className="text-sender-red">coming soon.</span></h2></div><div className="max-w-lg border-t border-ink/25 pt-6"><p className="text-lg leading-8 text-charcoal">This is the direction, not current nationwide availability. Sender+ plans to progressively extend its regional network across Ghana.</p><p className="mt-7 font-display text-2xl font-bold">Region by region, the network grows.</p></div></div></Container>
    </Section>

    <Section aria-labelledby="future-title" className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute -right-12 -top-28 font-display text-[24rem] font-black leading-none text-sender-blue/[0.08]">+</div>
      <Container className="relative"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-blue">Long-term vision</p><div className="mt-5 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"><h2 id="future-title" className="max-w-5xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-7xl">Inter-regional delivery infrastructure: <span className="text-sender-blue">loading.</span></h2><p className="max-w-xl text-lg leading-8 text-white/68">Today, the focus is building strong delivery within regions. The longer-term vision is to connect those regional networks and make package movement across Ghana simpler.</p></div><div className="mt-12 h-1 w-full bg-white/15" aria-hidden="true"><div className="h-full w-1/3 bg-sender-blue" /></div><p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/45">Future capability. No launch date announced.</p></Container>
    </Section>

    <Section aria-labelledby="coverage-cta" className="bg-sender-red text-white"><Container className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/65">The road ahead</p><h2 id="coverage-cta" className="mt-4 max-w-4xl font-display text-6xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-8xl">From one region to a connected Ghana.</h2></div><div className="flex shrink-0 flex-wrap gap-3"><Button href="/send" variant="light">Send a Package</Button><Button href="/track" variant="secondary" className="border-white/40 text-white hover:border-white hover:bg-white hover:text-ink">Track a Package</Button></div></Container></Section>
  </>;
}
