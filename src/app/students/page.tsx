import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "For Students",
  description: "Discover Sender+ for students moving packages, bags, and belongings within their region.",
};

export default function StudentsPage() {
  return <>
    <section className="bg-ink py-16 text-white sm:py-24 lg:py-28">
      <Container>
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sender-blue">Sender+ for Students</p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-8xl">Campus life is busy enough.<br /><span className="text-sender-blue">Getting your package shouldn’t be.</span></h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72">Sender+ is being built to make moving packages and belongings between pickup points, home, and campus more convenient.</p>
      </Container>
    </section>

    <Section aria-labelledby="legon-story-title" className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <header>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">The student problem</p>
            <h2 id="legon-story-title" className="mt-4 font-display text-4xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-6xl">Something can be in Accra—and still feel far away.</h2>
          </header>
          <div className="max-w-2xl text-lg leading-8 text-charcoal lg:pt-8">
            <p>For a University of Ghana student at Legon, collecting a package from Circle or central Accra is not only a time problem. It can mean crossing the city, finding the pickup point, and carrying everything back to campus.</p>
            <p className="mt-6">A round trip can easily cost around GHS 130 or more, especially when carrying foodstuffs or other bulky items makes an Uber or similar ride necessary. Public transport may be inconvenient or impractical when the package is clothing, boxes, luggage, or several heavy items.</p>
            <p className="mt-6 font-semibold text-ink">These are grounded examples of the student experience that inspired Sender+—not fixed fares or national statistics.</p>
          </div>
        </div>

        <div className="mt-14 border-y border-ink/20 lg:mt-20">
          <div className="grid border-b border-ink/20 py-8 sm:grid-cols-[0.42fr_0.58fr] sm:items-end sm:py-10">
            <p className="font-display text-5xl font-bold tracking-[-0.055em] text-sender-red sm:text-7xl">2½–3 hours</p>
            <p className="mt-3 max-w-lg text-lg leading-7 text-charcoal sm:mt-0">just to collect something already in Accra.</p>
          </div>
          <div className="grid border-b border-ink/20 py-8 sm:grid-cols-[0.42fr_0.58fr] sm:items-end sm:py-10">
            <p className="font-display text-5xl font-bold tracking-[-0.055em] text-sender-blue sm:text-7xl">GHS 130+</p>
            <p className="mt-3 max-w-lg text-lg leading-7 text-charcoal sm:mt-0">a round trip can reach this range in some scenarios when an Uber becomes necessary.</p>
          </div>
          <div className="grid py-8 sm:grid-cols-[0.42fr_0.58fr] sm:items-end sm:py-10">
            <p className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl">Bags. Boxes.<br />Foodstuffs.</p>
            <p className="mt-3 max-w-lg text-lg leading-7 text-charcoal sm:mt-0">the last few kilometres can become the hardest part.</p>
          </div>
        </div>
      </Container>
    </Section>

    <Section aria-labelledby="semester-title" className="overflow-hidden bg-sender-blue">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em]">Start of semester</p>
            <h2 id="semester-title" className="mt-4 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">You made it to Accra.<br /><span className="text-white">Your bags shouldn’t become the next journey.</span></h2>
          </div>
          <div className="max-w-xl text-lg leading-8 text-ink/80">
            <p>Students return from across Ghana with foodstuffs from home, boxes, bags, personal belongings, and school supplies. When an intercity bus ends the trip at Circle or another Accra terminal, getting several heavy items to Legon creates an awkward final leg.</p>
            <p className="mt-6 font-display text-2xl font-bold leading-8 text-ink">Get yourself back to campus. Your items should have a simpler way to complete the journey.</p>
            <p className="mt-6">Sender+ is being built to make this final leg simpler—so students can focus on getting back to campus while their items are moved more conveniently.</p>
          </div>
        </div>
      </Container>
    </Section>

    <Section aria-labelledby="student-cta-title" className="bg-canvas">
      <Container className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sender-red">Move with less friction</p><h2 id="student-cta-title" className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl">From a package to a semester’s worth of belongings.</h2></div>
        <Button href="/send" className="shrink-0">Send a Package</Button>
      </Container>
    </Section>
  </>;
}
