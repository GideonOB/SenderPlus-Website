import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const promise = [
  { number: "01", title: "Pickup", copy: "We collect your package." },
  { number: "02", title: "Track", copy: "Stay informed as it moves." },
  { number: "03", title: "Delivered", copy: "Securely handed over at its destination." },
];

const journey = [
  { number: "01", title: "Tell us where", copy: "Share the pickup and destination in Sender+." },
  { number: "02", title: "We pick it up", copy: "Your package begins its journey." },
  { number: "03", title: "Follow the journey", copy: "Stay close to its progress." },
  { number: "04", title: "Delivered", copy: "Your package reaches its recipient." },
];

const experience = [
  ["Visible", "Designed to keep senders close to every delivery."],
  ["Secure", "Careful handling and verified delivery where supported."],
  ["Human", "Clear updates backed by customer-centered care."],
] as const;

export const metadata: Metadata = {
  title: "Send Anywhere in Your Region",
  description: "Sender+ is a Ghanaian package delivery company built for students, businesses, and everyday senders.",
};

export default function Home() {
  return <>
    <section className="relative overflow-hidden bg-ink text-white">
      <Container className="grid min-h-[calc(100svh-5rem)] items-center gap-10 pb-12 pt-12 md:pb-16 md:pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0 lg:pb-0 lg:pt-0">
        <div className="relative z-10 py-4 lg:py-20">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sender-blue"><span className="h-px w-8 bg-sender-blue" />Delivery, built for your region</p>
          <h1 className="max-w-3xl font-display text-[clamp(3.45rem,8vw,7.9rem)] font-bold leading-[0.86] tracking-[-0.065em] text-balance">Your package.<br /><span className="text-sender-blue">Anywhere</span> in your region.<br />Delivered.</h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">Fast, secure, tech-enabled package delivery built for students, businesses, and everyday senders in Ghana.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button href="/send" className="bg-sender-blue text-ink hover:bg-white">Send a Package</Button><Button href="/track" variant="secondary" className="border-white/30 text-white hover:border-white hover:bg-white hover:text-ink">Track a Package</Button></div>
        </div>
        <div className="relative -mx-5 flex h-[52svh] min-h-[390px] items-end overflow-hidden bg-sender-blue p-5 sm:-mx-8 sm:p-8 lg:mx-0 lg:h-[calc(100svh-5rem)] lg:min-h-[650px]">
          <div className="absolute -right-[12%] top-[12%] h-[72%] w-[72%] border-[clamp(2rem,6vw,6rem)] border-white/20" aria-hidden="true" />
          <div className="absolute left-[12%] top-[18%] h-[42%] w-[48%] bg-[#b98b5f] shadow-[2rem_2rem_0_rgba(255,255,255,.18)]" aria-hidden="true"><span className="absolute left-1/2 top-0 h-full w-px bg-ink/20" /><span className="absolute left-0 top-1/2 h-px w-full bg-ink/20" /></div>
          <p className="relative max-w-xs font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-ink">Approved Sender+ photography will appear here once the assets are uploaded directly to GitHub.</p>
          <p className="absolute bottom-5 right-5 max-w-[13rem] text-right text-xs font-semibold leading-5 text-white/90 sm:bottom-8 sm:right-8">Bridging Ghana<br />One Package at a Time.</p>
        </div>
      </Container>
    </section>

    <section aria-labelledby="promise-title" className="bg-white py-16 sm:py-20">
      <Container><div className="flex flex-col justify-between gap-5 border-b border-ink/15 pb-8 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">The simple promise</p><h2 id="promise-title" className="mt-3 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">From here to there.</h2></div><p className="max-w-sm text-sm leading-6 text-charcoal">A clear delivery experience, from the moment your package is collected to the moment it arrives.</p></div>
      <ol className="grid md:grid-cols-3">{promise.map((item) => <li key={item.number} className="group border-b border-ink/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="text-xs font-bold text-sender-red">{item.number}</span><h3 className="mt-10 font-display text-3xl font-bold tracking-[-0.04em] transition-transform group-hover:translate-x-1">{item.title}</h3><p className="mt-2 text-charcoal">{item.copy}</p></li>)}</ol></Container>
    </section>

    <Section aria-labelledby="audiences-title">
      <Container><header className="mb-12 grid gap-5 md:grid-cols-2 md:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Made for the way you send</p><h2 id="audiences-title" className="mt-4 max-w-xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl">One delivery partner. Many reasons to move.</h2></div><p className="max-w-md text-lg leading-8 text-charcoal md:justify-self-end">From a single personal package to the orders that keep a local business moving.</p></header>
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <article className="flex min-h-[30rem] flex-col justify-between bg-sender-blue p-7 sm:p-10 lg:min-h-[38rem]"><p className="text-xs font-extrabold uppercase tracking-[0.18em]">Students</p><div><h3 className="font-display text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-6xl">Campus life is busy enough.</h3><p className="mt-6 max-w-lg text-lg leading-8 text-ink/75">Sender+ makes moving and receiving packages simpler—between home, campus, shops, hostels, and people within supported areas.</p><Link href="/students" className="editorial-link mt-8 inline-flex border-b border-ink pb-1 text-sm font-extrabold">Explore Sender+ for Students</Link></div></article>
        <article className="flex min-h-[30rem] flex-col justify-between bg-ink p-7 text-white sm:p-10 lg:min-h-[38rem]"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-blue">Business</p><div><h3 className="max-w-2xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-6xl">You sell it.<br />We deliver it.</h3><p className="mt-6 max-w-xl text-lg leading-8 text-white/68">For online sellers, WhatsApp and Instagram merchants, shops, SMEs, and local businesses that want a more professional way to fulfill orders.</p><Link href="/business" className="editorial-link mt-8 inline-flex border-b border-sender-blue pb-1 text-sm font-extrabold text-sender-blue">Sender+ for Business</Link></div></article>
      </div></Container>
    </Section>

    <Section aria-labelledby="journey-title" className="bg-white">
      <Container><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">How it works</p><h2 id="journey-title" className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl">Four clear steps. One simple journey.</h2></header><ol className="border-t border-ink/20">{journey.map((step) => <li key={step.number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/20 py-6 sm:grid-cols-[4rem_1fr_1fr] sm:items-center"><span className="text-xs font-bold text-sender-red">{step.number}</span><h3 className="font-display text-2xl font-bold tracking-[-0.035em]">{step.title}</h3><p className="col-start-2 text-sm leading-6 text-charcoal sm:col-start-auto">{step.copy}</p></li>)}</ol></div></Container>
    </Section>

    <Section aria-labelledby="coverage-title" className="relative overflow-hidden bg-sender-blue">
      <Container className="relative"><div aria-hidden="true" className="absolute -right-12 -top-24 font-display text-[20rem] font-black leading-none text-white/18">+</div><div className="relative grid gap-12 lg:grid-cols-2 lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em]">Coverage</p><h2 id="coverage-title" className="mt-4 max-w-2xl font-display text-6xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl">Built to move your region.</h2></div><div className="max-w-xl lg:justify-self-end"><p className="text-xl leading-8">Sender+ is designed to move packages between pickup and delivery locations within the same Ghanaian region.</p><p className="mt-5 text-2xl font-bold">Rolling out region by region.</p><Link href="/coverage" className="editorial-link mt-8 inline-flex border-b border-ink pb-1 text-sm font-extrabold">Explore Coverage</Link></div></div></Container>
    </Section>

    <Section aria-labelledby="trust-title">
      <Container><div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-24"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Trust, by design</p><h2 id="trust-title" className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl">Know your package is in good hands.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-charcoal">The Sender+ experience is designed around visibility, thoughtful handling, clear communication, and customer care.</p></header><div className="divide-y divide-ink/20 border-y border-ink/20">{experience.map(([title, copy], index) => <article key={title} className="grid grid-cols-[3rem_1fr] gap-4 py-7 sm:grid-cols-[4rem_0.45fr_1fr] sm:items-center"><span className="text-xs font-bold text-sender-red">0{index + 1}</span><h3 className="font-display text-2xl font-bold">{title}</h3><p className="col-start-2 text-sm leading-6 text-charcoal sm:col-start-auto">{copy}</p></article>)}</div></div></Container>
    </Section>

    <Section aria-labelledby="app-title" className="overflow-hidden bg-ink text-white">
      <Container><div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-blue">Sender+ digital experience</p><h2 id="app-title" className="mt-4 font-display text-6xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl">Delivery, right in your hands.</h2><p className="mt-7 max-w-lg text-lg leading-8 text-white/68">Manage your delivery through the standalone Sender+ experience. The website keeps the handoff simple, so you can continue where sending and tracking happen.</p><Button href="/send" className="mt-9 bg-sender-blue text-ink hover:bg-white">Open Sender+</Button></div>
      <div className="relative mx-auto w-full max-w-md py-6" aria-label="Presentation placeholder for the Sender+ digital experience"><div className="absolute inset-y-0 left-1/2 w-px bg-sender-blue/30" /><div className="relative ml-auto w-[82%] border border-white/20 bg-white p-5 text-ink shadow-2xl sm:p-7"><div className="flex items-center justify-between border-b border-ink/15 pb-5"><span className="font-display text-lg font-extrabold tracking-[-0.06em]"><span className="text-[#087a9d]">SEN</span><span className="text-sender-red">DER</span><span className="text-[#087a9d]">+</span></span><span className="h-2 w-2 rounded-full bg-sender-blue" /></div><div className="py-12 sm:py-16"><p className="text-xs font-bold uppercase tracking-[0.18em] text-sender-red">Your delivery</p><p className="mt-3 font-display text-3xl font-bold tracking-[-0.045em]">Ready when you are.</p><div className="mt-10 h-1 w-full bg-mist"><div className="h-full w-2/3 bg-sender-blue" /></div></div><p className="border-t border-ink/15 pt-5 text-xs text-charcoal">Presentation placeholder · App visuals to come</p></div></div></div></Container>
    </Section>

    <Section aria-labelledby="ghana-title" className="bg-white">
      <Container><div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Our point of view</p><h2 id="ghana-title" className="mt-4 max-w-4xl font-display text-6xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">Built in Ghana.<br /><span className="text-sender-red">Built for how Ghana moves.</span></h2></div><div className="max-w-lg lg:justify-self-end"><p className="text-lg leading-8 text-charcoal">Modern delivery technology, grounded in local understanding and shaped around trust, care, and the people behind every package.</p><p className="mt-8 font-display text-2xl font-bold tracking-[-0.03em]">Bridging Ghana One Package at a Time.</p></div></div></Container>
    </Section>

    <Section aria-labelledby="final-title" className="bg-sender-red text-white">
      <Container><div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/70">Start a delivery</p><h2 id="final-title" className="mt-4 font-display text-7xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-8xl">Ready to send?</h2></div><div className="flex flex-wrap gap-3"><Button href="/send" className="bg-white text-ink hover:bg-sender-blue">Send a Package</Button><Button href="/track" variant="secondary" className="border-white/40 text-white hover:border-white hover:bg-white hover:text-ink">Track a Package</Button></div></div></Container>
    </Section>
  </>;
}
