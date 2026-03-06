import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-12 px-6 bg-brand-dark border-t border-brand-border text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md overflow-hidden relative border border-brand-cyan/20">
                        <Image
                            src="/logo.png"
                            alt="Mirai Stack Logo"
                            fill
                            className="object-cover bg-white"
                        />
                    </div>
                    Mirai Stack
                </Link>

                <p className="text-neutral-500">
                    © {new Date().getFullYear()} Mirai Stack. All rights reserved.
                </p>

                <div className="flex items-center gap-8 font-medium text-neutral-500">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="https://github.com/miraistack" target="_blank" className="hover:text-brand-cyan transition-colors">GitHub</Link>
                </div>
            </div>
        </footer>
    );
}
