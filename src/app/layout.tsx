import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Sender+", template: "%s | Sender+" },
  description: "Sender+ moves packages between locations within the same Ghanaian region.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="fixed left-4 top-3 z-50 -translate-y-20 bg-ink px-4 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0">Skip to content</a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
