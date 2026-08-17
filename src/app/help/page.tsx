import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "Help", description: "Find help and support information for Sender+." };
export default function HelpPage() { return <PlaceholderPage eyebrow="Help" title="How can we help?" description="Verified support and contact options will appear here when they are configured." />; }
