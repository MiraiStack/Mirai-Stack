import type { Metadata } from "next";
import { TermsClient } from "./page";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Read the terms and conditions governing the use of Mirai Stack.",
};

export default function TermsPage() {
    return <TermsClient />;
}
