import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const orderQuestions = [
  "Order received.",
  "Who’s delivering it?",
  "Has it left?",
  "Where is it now?",
  "Has the customer received it?",
];

const sellers = [
  "WhatsApp sellers",
  "Instagram sellers",
  "Local shops",
  "Online stores",
  "Entrepreneurs",
  "SMEs",
];

const orderJourney = [
  ["01", "Customer places the order.", "The sale begins through a chat, a shop, a referral, or an online storefront."],
  ["02", "The business prepares the package.", "The item is packed and made ready to move."],
  ["03", "Sender+ handles the delivery journey.", "The package moves from your business towards your customer."],
  ["04", "The order reaches the customer.", "The sale ends with the experience of receiving it."],
] as const;

const brandExperience = [
  ["Convenient", "A practical way to move an order after the customer says yes."],
  ["Visible", "A clearer package journey for the people sending and receiving."],
  ["Professional", "A more considered handoff from your business to your customer."],
  ["Customer-focused", "Delivery coordination shaped around care for the recipient experience."],
] as const;

const useCases = [
  ["Social commerce", "An order starts in a WhatsApp chat or Instagram DM. The seller needs a practical way to move it without personally managing every kilometre."],
  ["Local retail", "A customer buys from a shop and wants the package delivered elsewhere in the same supported region."],
  ["Repeat orders", "A growing merchant is handling more customer deliveries and wants a simpler, more consistent process."],
  ["Direct to customer", "A business wants the experience from dispatch to handoff to feel as considered as the sale."],
  ["Small-business fulfilment", "An entrepreneur needs more attention for selling, sourcing, producing, and serving, not coordinating every package movement."],
] as const;

const attention = ["Serving customers", "Sourcing products", "Managing inventory", "Marketing", "Creating content", "Fulfilling new orders", "Growing the business"];

const help = [
  ["Pickup to delivery", "Move a prepared package from your business to its recipient within a supported area."],
  ["A clearer journey", "Stay closer to the delivery instead of piecing together the story yourself."],
  ["Less coordination", "Spend less attention arranging each individual package movement."],
  ["A considered handoff", "Give the recipient an experience that reflects the care behind the order."],
] as const;

const businessJourney = [
  ["01", "Prepare the order.", "Package the item and get it ready to move."],
  ["02", "Start the delivery.", "Share the pickup and destination through Sender+."],
  ["03", "Follow the journey.", "Stay closer to the package as it moves."],
  ["04", "Customer receives it.", "The order reaches its recipient."],
] as const;

export const metadata: Metadata = {
  title: "For Business",
  description: "A practical delivery experience for Ghanaian online sellers, shops, entrepreneurs, and growing businesses.",
};

export default function BusinessPage() {
  return <>
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24 lg:py-28">
      <div aria-hidden="true" className="absolute -right-10 -top-28 select-none font-display text-[22rem] font-black leading-none text-white/[0.025] sm:text-[34rem]">+</div>
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sender-blue">Sender+ for Business</p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.7rem,9vw,8.8rem)] font-bold leading-[0.9] tracking-[-0.07em]">You sell it.<br /><span className="text-sender-red">We deliver it.</span></h1>
          </div>
          <div className="max-w-xl border-t border-white/20 pt-7 lg:mb-2 lg:justify-self-end">
            <p className="text-lg leading-8 text-white/72">Sender+ helps online sellers, shops, entrepreneurs, and growing businesses move customer orders more conveniently within supported areas.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button href="/send" className="bg-sender-red hover:bg-white hover:text-ink">Send a Package</Button><Button href="/track" variant="secondary" className="border-white/35 text-white hover:border-white hover:bg-white hover:text-ink">Track a Package</Button></div>
          </div>
        </div>
      </Container>
    </section>

    <Section aria-labelledby="half-job-title" className="overflow-hidden bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">After the yes</p><h2 id="half-job-title" className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl">The sale is only half the job.</h2><div className="mt-8 max-w-lg space-y-5 text-base leading-7 text-charcoal sm:text-lg sm:leading-8"><p>For many growing businesses, the work does not stop when a customer places an order.</p><p>Someone still has to arrange pickup, coordinate delivery, answer questions, follow the package, and make sure it reaches the customer.</p><p className="font-bold text-ink">That delivery experience becomes part of the business too.</p></div></header>
          <ol className="border-t border-ink/20">{orderQuestions.map((question, index) => <li key={question} className={`group grid grid-cols-[2.5rem_1fr] items-center border-b border-ink/20 py-5 sm:grid-cols-[4rem_1fr] sm:py-7 ${index === 0 ? "text-sender-red" : "text-ink"}`}><span className="text-xs font-bold">0{index + 1}</span><p className="font-display text-[clamp(1.65rem,4vw,3.7rem)] font-bold uppercase leading-none tracking-[-0.045em] transition-transform duration-200 group-hover:translate-x-2">{question}</p></li>)}</ol>
        </div>
      </Container>
    </Section>

    <Section aria-labelledby="business-happens-title" className="bg-canvas">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Made for real commerce</p><h2 id="business-happens-title" className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl xl:text-7xl"><span className="lg:block">Built for the way </span><span className="lg:whitespace-nowrap">business happens.</span></h2></header><div className="max-w-xl self-end text-lg leading-8 text-charcoal"><p>Many businesses receive orders through social media, messaging, referrals, direct contact, or an online storefront.</p><p className="mt-6 font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-ink">However the order starts, the next question is the same:<br /><span className="text-sender-red">How does it get to the customer?</span></p></div></div>
        <ul className="mt-14 grid grid-cols-2 border-l border-t border-ink/20 sm:grid-cols-3 lg:mt-20">{sellers.map((seller, index) => <li key={seller} className="group min-h-32 border-b border-r border-ink/20 p-4 sm:min-h-40 sm:p-6"><span className="text-[0.65rem] font-bold text-sender-red">0{index + 1}</span><p className="mt-8 font-display text-lg font-bold uppercase leading-tight tracking-[-0.02em] transition-colors group-hover:text-sender-red sm:text-2xl">{seller}</p></li>)}</ul>
      </Container>
    </Section>

    <Section aria-labelledby="order-journey-title" className="bg-ink text-white">
      <Container><header className="max-w-5xl"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-blue">The gap after checkout</p><h2 id="order-journey-title" className="mt-4 font-display text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">From “I want this”<br /><span className="text-sender-blue">to “It has arrived.”</span></h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">Sender+ helps bridge the distance between confirming an order and getting it into the customer’s hands.</p></header>
      <ol className="mt-14 border-t border-white/20 lg:mt-20">{orderJourney.map(([number, title, copy], index) => <li key={number} className={`grid gap-4 border-b border-white/20 py-7 sm:grid-cols-[5rem_1fr] lg:grid-cols-[6rem_1fr_0.8fr] lg:items-center lg:py-9 ${index % 2 ? "lg:pl-24" : ""}`}><span className="text-xs font-bold text-sender-blue">{number}</span><h3 className="font-display text-2xl font-bold tracking-[-0.035em] sm:text-3xl">{title}</h3><p className="max-w-md text-sm leading-6 text-white/60 sm:col-start-2 lg:col-start-auto">{copy}</p></li>)}</ol></Container>
    </Section>

    <Section aria-labelledby="brand-title" className="bg-sender-blue">
      <Container><div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em]">The customer remembers the handoff</p><h2 id="brand-title" className="mt-4 max-w-3xl font-display text-6xl font-bold leading-[1.02] tracking-[-0.06em] sm:text-8xl">Delivery is part of your brand.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-ink/75">Customers do not always separate the product from the experience of receiving it. A smooth handoff can make the entire business feel more professional.</p></header><div className="divide-y divide-ink/25 border-y border-ink/25">{brandExperience.map(([title, copy], index) => <article key={title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-6 sm:grid-cols-[3.5rem_0.55fr_1fr] sm:items-center"><span className="text-xs font-bold">0{index + 1}</span><h3 className="font-display text-xl font-bold sm:text-2xl">{title}</h3><p className="col-start-2 text-sm leading-6 text-ink/70 sm:col-start-auto">{copy}</p></article>)}</div></div></Container>
    </Section>

    <Section aria-labelledby="use-cases-title" className="bg-white">
      <Container><div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20"><header className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Real business use cases</p><h2 id="use-cases-title" className="mt-4 font-display text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-6xl">One order at a time. Then the next.</h2></header><div className="border-t border-ink/20">{useCases.map(([title, copy], index) => <article key={title} className="grid gap-5 border-b border-ink/20 py-8 sm:grid-cols-[4rem_0.65fr_1fr] sm:items-start sm:py-10"><span className="text-xs font-bold text-sender-red">0{index + 1}</span><h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-[-0.03em]">{title}</h3><p className="text-base leading-7 text-charcoal sm:col-start-auto">{copy}</p></article>)}</div></div></Container>
    </Section>

    <Section aria-labelledby="time-title" className="overflow-hidden bg-canvas">
      <Container><div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">The hidden cost</p><h2 id="time-title" className="mt-4 max-w-4xl font-display text-6xl font-bold leading-[0.88] tracking-[-0.065em] sm:text-8xl">Your time belongs <span className="text-sender-red">in the business.</span></h2></div><p className="max-w-xl text-lg leading-8 text-charcoal">Every pickup you arrange and every delivery question you chase takes attention from the work that moves the business forward.</p></div>
      <div className="mt-14 grid gap-10 border-t border-ink/20 pt-8 lg:mt-20 lg:grid-cols-[1fr_1fr] lg:gap-24"><p className="font-display text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">You started the business to sell.<br /><span className="text-charcoal/45">Not to spend the day coordinating riders.</span></p><ul className="grid grid-cols-2 gap-x-6">{attention.map((item) => <li key={item} className="border-b border-ink/20 py-3 text-sm font-bold sm:text-base">{item}</li>)}</ul></div></Container>
    </Section>

    <Section aria-labelledby="helps-title" className="bg-white">
      <Container><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">How Sender+ helps</p><h2 id="helps-title" className="mt-4 font-display text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-7xl">A simpler way to move the order.</h2></header><div className="grid border-l border-t border-ink/20 sm:grid-cols-2">{help.map(([title, copy], index) => <article key={title} className="min-h-56 border-b border-r border-ink/20 p-6 sm:min-h-64 sm:p-8"><span className="text-xs font-bold text-sender-red">0{index + 1}</span><h3 className="mt-10 font-display text-2xl font-bold tracking-[-0.03em]">{title}</h3><p className="mt-3 text-sm leading-6 text-charcoal">{copy}</p></article>)}</div></div></Container>
    </Section>

    <Section aria-labelledby="workflow-title" className="bg-canvas">
      <Container><div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-24"><header><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Business delivery journey</p><h2 id="workflow-title" className="mt-4 font-display text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-6xl">Ready. Moving. Received.</h2></header><ol className="border-t-2 border-ink">{businessJourney.map(([number, title, copy]) => <li key={number} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/20 py-6 sm:grid-cols-[4rem_0.7fr_1fr] sm:items-center"><span className="text-xs font-bold text-sender-red">{number}</span><h3 className="font-display text-2xl font-bold tracking-[-0.03em]">{title}</h3><p className="col-start-2 max-w-md text-sm leading-6 text-charcoal sm:col-start-auto">{copy}</p></li>)}</ol></div></Container>
    </Section>

    <Section aria-labelledby="grow-title" className="relative overflow-hidden bg-sender-red text-white">
      <div aria-hidden="true" className="absolute -bottom-52 -right-12 font-display text-[26rem] font-black leading-none text-black/10">+</div>
      <Container className="relative"><div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/65">Keep your attention forward</p><h2 id="grow-title" className="mt-4 max-w-5xl font-display text-6xl font-bold leading-[0.87] tracking-[-0.065em] sm:text-8xl lg:text-9xl">Grow the business.<br /><span className="text-ink">Not the delivery headache.</span></h2></div><p className="max-w-lg border-t border-white/35 pt-6 text-lg leading-8 text-white/80 lg:justify-self-end">Sender+ is built to help merchants spend more time selling, serving customers, and building their businesses instead of personally coordinating every package movement.</p></div></Container>
    </Section>

    <Section aria-labelledby="business-cta-title" className="bg-ink text-white">
      <Container><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-blue">Start with the next order</p><h2 id="business-cta-title" className="mt-4 max-w-4xl font-display text-6xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-8xl">Your next order has somewhere to go.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-white/65">Start a delivery with Sender+ and keep your attention where it belongs: on the business.</p></div><div className="flex flex-wrap gap-3"><Button href="/send" className="bg-sender-blue text-ink hover:bg-white">Send a Package</Button><Button href="/track" variant="secondary" className="border-white/35 text-white hover:border-white hover:bg-white hover:text-ink">Track a Package</Button></div></div></Container>
    </Section>
  </>;
}
