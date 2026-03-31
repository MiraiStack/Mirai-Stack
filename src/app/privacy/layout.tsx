import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "View the privacy policy and data protection terms for Mirai Stack.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
