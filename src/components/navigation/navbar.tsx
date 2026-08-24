import Link from "next/link";
import { Container } from "@/components/ui/container";
import { primaryNavigation } from "@/content/site";
import { MobileNavigation } from "./mobile-navigation";

export function Navbar() {
  return <header className="sticky top-0 z-40 border-b border-ink/10 bg-canvas/95 backdrop-blur-sm">
    <Container className="relative flex h-20 items-center justify-between">
      <Link href="/" className="font-display text-2xl font-extrabold tracking-[-0.06em]" aria-label="Sender+ home"><span className="text-[#087a9d]">SEN</span><span className="text-sender-red">DER</span><span className="text-[#087a9d]">+</span></Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
        {primaryNavigation.map((item) => <Link key={item.href} href={item.href} className="text-sm font-semibold text-charcoal transition-colors hover:text-ink">{item.label}</Link>)}
      </nav>
      <div className="hidden items-center gap-3 md:flex"><Link href="/track" className="px-3 py-2 text-sm font-bold">Track</Link><Link href="/send" className="rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sender-red">Send a Package</Link></div>
      <MobileNavigation />
    </Container>
  </header>;
}
