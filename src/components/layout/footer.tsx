import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { primaryNavigation } from "@/content/site";

export function Footer() {
  return <footer className="bg-ink py-12 text-white sm:py-16">
    <Container><div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1fr_2fr]">
      <div><Link href="/" className="inline-block w-44 bg-white" aria-label="Sender+ home"><Image src="/brand/senderplus-logo.png" alt="Sender+" width={784} height={303} className="h-auto w-full" /></Link><p className="mt-4 max-w-xs text-sm leading-6 text-white/70">Bridging Ghana One Package at a Time.</p></div>
      <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-4 md:justify-end">{primaryNavigation.map((item) => <Link key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white">{item.label}</Link>)}</nav>
    </div><p className="pt-6 text-xs text-white/55">© {new Date().getFullYear()} Sender+. All rights reserved.</p></Container>
  </footer>;
}
