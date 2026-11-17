import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAppUrl } from "@/lib/app-links";

export const metadata: Metadata = { title: "Send a Package", description: "Continue to the Sender+ app to send a package." };
export default function SendPage() {
  redirect(getAppUrl("send"));
}
