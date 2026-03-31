import type { Metadata } from "next";
import { PrivacyClient } from "./page";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "View the privacy policy and data protection terms for Mirai Stack.",
};

export default function PrivacyPage() {
    return <PrivacyClient />;
}
