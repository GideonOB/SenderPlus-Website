import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAppUrl } from "@/lib/app-links";

export const metadata: Metadata = { title: "Track a Package", description: "Continue to the Sender+ app to track a package." };
export default function TrackPage() {
  redirect(getAppUrl("track"));
}
