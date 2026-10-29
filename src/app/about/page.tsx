import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { founders } from "@/content/founders";

const audiences = ["Students", "Families", "Everyday senders", "Online sellers", "Shops", "Entrepreneurs", "Growing businesses"];

const values = [
  ["01", "Availability", "Delivery should be easier to access when and where people need it."],
  ["02", "Customer Care", "Treat both sender and recipient with attention, respect, and care."],
  ["03", "Excellence", "Build every part of the experience to a high standard and keep improving it."],
  ["04", "Speed", "Respect customers’ time and move with purpose."],
  ["05", "Security", "Treat every package and customer interaction with responsibility and care."],
] as const;

export const metadata: Metadata = {
  title: "About Sender+",
  description: "Meet the founders of Sender+ and learn how a shared experience inspired a Ghanaian delivery company with a vision for a more connected country.",
};

export default function AboutPage() {
  return <>
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24 lg:py-32">
      <div aria-hidden="true" className="absolute -bottom-40 -right-10 font-display text-[24rem] font-black leading-none text-sender-blue/[0.07]">+</div>
      <Container className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sender-blue">About Sender+</p><h1 className="mt-5 max-w-5xl font-display text-[clamp(3.4rem,8vw,7.8rem)] font-bold leading-[0.87] tracking-[-0.065em]">Built to make delivery <span className="text-sender-blue">feel finished.</span></h1></div>
        <p className="max-w-xl text-lg leading-8 text-white/72 lg:justify-self-end">Sender+ is being built to make sending and receiving packages simpler, more convenient, and less burdensome for people and businesses across Ghana.</p>
      </Container>
    </section>

    <Section aria-labelledby="story-title" className="bg-white">
      <Container><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">The story</p><h2 id="story-title" className="mt-4 font-display text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-7xl">Built from a simple frustration.</h2></header><div className="max-w-2xl text-lg leading-8 text-charcoal lg:pt-8"><p className="font-display text-2xl font-bold leading-tight tracking-[-0.035em] text-ink sm:text-3xl">A package can travel most of the way and still leave the recipient with an inconvenient final stretch.</p><p className="mt-7">Sender+ grew from a problem its founders experienced personally. Their separate experiences at the University of Ghana helped them see how receiving a package could still mean spending significant time, money, and effort after the item had already reached the city. It could also mean relying on middlemen with no clear pricing standards, no tracking, and little more than hope that your item would actually arrive.</p><p className="mt-6">That shared dilemma shaped a simple question: what would it take for the last mile of delivery to feel complete, with less stress, less wasted time, and less unnecessary expense for the person waiting at the other end?</p><p className="mt-6 font-semibold text-ink">What would it take for people to simply receive their packages in peace?</p></div></div></Container>
    </Section>

    <Section aria-labelledby="bigger-title" className="overflow-hidden bg-sender-blue">
      <Container><div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em]">Beyond the first idea</p><h2 id="bigger-title" className="mt-4 max-w-5xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-7xl">What started as a student problem was much bigger than campus.</h2></div><p className="max-w-xl text-lg leading-8 text-ink/75">The same friction affects families, everyday senders, online sellers, shops, entrepreneurs, and growing businesses. The challenge is not simply moving a package over a long distance. It is making the entire journey from sender to recipient feel complete.</p></div><ul className="mt-14 flex flex-wrap border-l border-t border-ink/25 sm:mt-20">{audiences.map((audience, index) => <li key={audience} className="min-h-28 w-1/2 border-b border-r border-ink/25 p-4 sm:w-1/3 sm:p-6 lg:w-[14.285%]"><span className="text-[0.65rem] font-bold text-ink/55">0{index + 1}</span><p className="mt-7 font-display text-base font-bold leading-tight sm:text-lg">{audience}</p></li>)}</ul></Container>
    </Section>

    <Section aria-labelledby="founders-title" className="bg-canvas">
      <Container><header className="max-w-4xl"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Meet the co-founders</p><h2 id="founders-title" className="mt-4 font-display text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-7xl">Three people.<br />One problem worth solving.</h2></header>
        <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8 lg:mt-20 lg:gap-12">{founders.map((founder, index) => <article key={founder.name} className="flex flex-col items-center text-center md:items-start md:text-left"><div className={`relative aspect-square w-full max-w-[18rem] rounded-full border-2 p-3 ${founder.accent}`} aria-hidden="true"><div className="flex h-full w-full items-center justify-center rounded-full bg-mist"><div className="text-center"><span className="block text-4xl font-light text-ink/25">+</span><span className="mt-2 block text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-charcoal/60">Founder portrait to come</span></div></div><span className={`absolute bottom-[8%] right-[4%] h-5 w-5 rounded-full ${index === 1 ? "bg-sender-red" : "bg-sender-blue"}`} /></div><p className="mt-8 text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">{founder.role}</p><h3 className="mt-2 font-display text-3xl font-bold leading-tight tracking-[-0.04em]">{founder.name}</h3><p className="mt-5 max-w-sm text-base leading-7 text-charcoal">{founder.bio}</p></article>)}</div>
        <figure className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-[1.3fr_0.7fr] lg:items-end"><div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-ink/20 bg-ink" aria-hidden="true"><div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,rgba(119,196,224,0.18)_48%,rgba(119,196,224,0.18)_52%,transparent_52%)]" /><div className="absolute inset-0 flex items-center justify-center"><div className="text-center text-white"><span className="font-display text-7xl font-light text-sender-blue">+</span><p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/55">Group photograph to come</p></div></div></div><figcaption className="border-t border-ink/25 pt-6"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">The founding team</p><p className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">Three perspectives. One shared problem to solve.</p><p className="mt-5 max-w-lg leading-7 text-charcoal">Gideon, Nancy, and Francis bring different experiences to a shared ambition: make package movement feel simpler for the people who depend on it.</p></figcaption></figure>
      </Container>
    </Section>

    <Section aria-labelledby="video-title" className="bg-ink text-white">
      <Container><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-24"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-blue">The story behind Sender+</p><h2 id="video-title" className="mt-4 font-display text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl">Hear the story from one of our co-founders.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/65">Nancy will share the inspiration behind Sender+, the problem the founders observed, where the company is heading, and the broader vision for delivery in Ghana.</p></header><div className="aspect-video border border-white/20 bg-white/[0.04] p-4 sm:p-7" role="img" aria-label="Video placeholder for a future conversation with Sender+ Co-Founder Nancy Osei Bonsu"><div className="flex h-full flex-col items-center justify-center border border-dashed border-white/25 px-6 text-center"><span aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full border border-sender-blue text-2xl text-sender-blue">▶</span><p className="mt-6 max-w-md font-display text-2xl font-bold tracking-[-0.03em]">Watch Nancy share the story behind Sender+</p><p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/45">YouTube video coming soon</p></div></div></div></Container>
    </Section>

    <Section aria-labelledby="building-title" className="bg-white">
      <Container><div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-24"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">What we are building</p><h2 id="building-title" className="mt-4 font-display text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-7xl">Easier to begin. Easier to follow. Easier to complete.</h2></header><div className="max-w-xl border-t border-ink/25 pt-7 text-lg leading-8 text-charcoal"><p>Sender+ is building a technology-enabled delivery company designed to make package movement easier to initiate, easier to follow, and easier to complete.</p><p className="mt-6 font-display text-2xl font-bold leading-tight text-ink">We are starting by building strong delivery within regions, then growing the network across Ghana.</p></div></div></Container>
    </Section>

    <Section aria-labelledby="values-title" className="bg-canvas">
      <Container><div className="grid gap-12 lg:grid-cols-[0.48fr_1fr] lg:gap-24"><header className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">What guides us</p><h2 id="values-title" className="mt-4 font-display text-[clamp(4.5rem,11vw,9rem)] font-black leading-[0.78] tracking-[-0.075em] text-sender-red" aria-label="ACCESS">ACCESS</h2><p className="mt-8 max-w-sm text-lg leading-8 text-charcoal">Five values that shape how Sender+ is being built and how we intend to serve.</p></header><ol className="border-t-2 border-ink">{values.map(([number, title, copy]) => <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/20 py-7 sm:grid-cols-[4rem_0.65fr_1fr] sm:items-center sm:py-9"><span className="text-xs font-bold text-sender-red">{number}</span><h3 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] sm:text-3xl">{title}</h3><p className="col-start-2 max-w-lg text-sm leading-6 text-charcoal sm:col-start-auto sm:text-base sm:leading-7">{copy}</p></li>)}</ol></div></Container>
    </Section>

    <Section aria-labelledby="vision-title" className="relative overflow-hidden bg-sender-blue">
      <div aria-hidden="true" className="absolute -bottom-44 right-0 font-display text-[24rem] font-black leading-none text-white/20">+</div><Container className="relative"><p className="text-xs font-extrabold uppercase tracking-[0.18em]">The vision</p><div className="mt-4 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><h2 id="vision-title" className="max-w-5xl font-display text-6xl font-bold leading-[0.88] tracking-[-0.065em] sm:text-8xl">Building toward a more connected Ghana.</h2><div className="max-w-lg"><p className="text-lg leading-8 text-ink/75">Sender+ begins with focused regional delivery, with a broader ambition to help connect Ghana through a delivery network that grows thoughtfully over time.</p><p className="mt-8 font-display text-2xl font-bold leading-tight">Bridging Ghana One Package at a Time.</p></div></div></Container>
    </Section>

    <Section aria-labelledby="about-cta" className="bg-sender-red text-white"><Container className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/65">Keep moving</p><h2 id="about-cta" className="mt-4 max-w-4xl font-display text-6xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-8xl">There is more to the journey.</h2></div><div className="flex shrink-0 flex-wrap gap-3"><Button href="/send" variant="light">Send a Package</Button><Button href="/coverage" variant="secondary" className="border-white/40 text-white hover:border-white hover:bg-white hover:text-ink">Explore Coverage</Button></div></Container></Section>
  </>;
}
