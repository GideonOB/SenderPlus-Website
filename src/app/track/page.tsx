import type { Metadata } from "next";
import { AppBridge } from "@/components/sections/app-bridge";

export const metadata: Metadata = { title: "Track a Package", description: "Continue to the Sender+ app to track a package." };
export default function TrackPage() { return <AppBridge destination="track" title="Keep up with your package." cta="Track in Sender+" />; }
