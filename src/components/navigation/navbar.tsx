import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export function Navbar() {
  return <header className="sticky top-0 z-40 border-b border-ink/10 bg-canvas/95 backdrop-blur-sm">
    <Container className="relative flex h-20 items-center">
      <Link href="/" className="block w-[9.25rem] shrink-0 sm:w-[10.5rem]" aria-label="Sender+ home"><Image src="/brand/senderplus-logo.png" alt="Sender+" width={784} height={303} priority className="h-auto w-full" /></Link>
      <div className="ml-7 hidden lg:block xl:ml-10"><DesktopNavigation /></div>
      <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex xl:gap-3"><Link href="/track" className="whitespace-nowrap border-b border-ink/25 px-3 py-2 text-sm font-bold transition-colors duration-200 hover:border-sender-blue hover:text-ink">Track</Link><Link href="/send" className="whitespace-nowrap rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sender-red">Send a Package</Link></div>
      <MobileNavigation />
    </Container>
  </header>;
}
