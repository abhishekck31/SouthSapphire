import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — STUDIO/M",
  description:
    "Get in touch with STUDIO/M. Whether you're a brand planning a campaign or a creator seeking representation, we respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
