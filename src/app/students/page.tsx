import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "For Students", description: "Discover Sender+ for students moving and receiving packages within their region." };
export default function StudentsPage() { return <PlaceholderPage eyebrow="Sender+ for Students" title="Campus life is busy enough. Getting your package shouldn’t be." description="The complete student experience is coming in a future website phase." />; }
