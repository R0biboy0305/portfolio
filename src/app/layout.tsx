import React from "react";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import LayoutClientShell from "@/app/components/Layout/LayoutClientShell";
import { ThemeProvider } from "@/app/components/providers/ThemeProvider";
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
        <html lang="fr" className={cn(poppins.variable, "font-sans overflow-x-hidden")} suppressHydrationWarning>
        <body className="bg-first-color flex flex-col transition-colors duration-300 overflow-x-hidden w-full max-w-full">
            <ThemeProvider>
                <Header />
                <main className="relative flex-1 min-h-screen pt-24 overflow-x-hidden">
                    <LayoutClientShell>{children}</LayoutClientShell>
                </main>
                <Footer />
            </ThemeProvider>
        </body>
        </html>
    );
}
