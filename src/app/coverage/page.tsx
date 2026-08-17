import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "Coverage", description: "Learn how Sender+ moves packages within the same Ghanaian region." };
export default function CoveragePage() { return <PlaceholderPage eyebrow="Coverage" title="Send anywhere in your region." description="Sender+ is designed for package movement between pickup and delivery locations within the same Ghanaian region. Verified coverage details will appear here." />; }
