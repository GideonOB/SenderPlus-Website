import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "About", description: "Learn about Sender+, a Ghanaian technology-enabled package delivery company." };
export default function AboutPage() { return <PlaceholderPage eyebrow="About Sender+" title="Built in Ghana. Built for how Ghana moves." description="Our complete company story will be developed in a future website phase." />; }
