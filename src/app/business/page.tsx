import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "For Business", description: "Discover Sender+ for businesses, merchants, and online sellers." };
export default function BusinessPage() { return <PlaceholderPage eyebrow="Sender+ for Business" title="You sell it. We deliver it." description="The complete business experience is coming in a future website phase." />; }
