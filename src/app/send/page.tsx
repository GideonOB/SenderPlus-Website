import type { Metadata } from "next";
import { AppBridge } from "@/components/sections/app-bridge";

export const metadata: Metadata = { title: "Send a Package", description: "Continue to the Sender+ app to send a package." };
export default function SendPage() { return <AppBridge destination="send" title="Where should we take it?" cta="Open Sender+ to Send" />; }
