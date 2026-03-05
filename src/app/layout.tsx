import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mirai Stack — Software Engineering & Architecture Studio",
    description: "We engineer scalable websites, platforms, and automation systems—built with clean architecture, modern UI, and production-grade delivery.",
    metadataBase: new URL("https://miraistack.co.za"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Mirai Stack — Software Engineering & Architecture Studio",
        description: "We engineer scalable websites, platforms, and automation systems—built with clean architecture, modern UI, and production-grade delivery.",
        url: "https://miraistack.co.za",
        siteName: "Mirai Stack",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "Mirai Stack",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mirai Stack — Software Engineering & Architecture Studio",
        description: "We engineer scalable websites, platforms, and automation systems—built with clean architecture, modern UI, and production-grade delivery.",
        images: ["/og.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
