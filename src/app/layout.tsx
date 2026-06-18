import React from "react";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import LayoutClientShell from "@/app/components/Layout/LayoutClientShell";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-sans",
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={cn(poppins.variable, "font-sans")}>
        <body className="bg-first-color flex flex-col">
            <Header />
            <main className="relative flex-1 min-h-screen pt-24">
                <LayoutClientShell>{children}</LayoutClientShell>
            </main>
            <Footer />
        </body>
        </html>
    );
}
