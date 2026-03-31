import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Read the terms and conditions governing the use of Mirai Stack.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
