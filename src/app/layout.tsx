import React from "react";
import { ThemeProvider } from "@/app/context/ThemeContext";
import "./globals.css";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import LayoutClientShell from "@/app/components/layout/LayoutClientShell";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body className="bg-first-color flex flex-col">
        <ThemeProvider>
            <Header />
            <main className="relative flex-1 min-h-screen">
                <LayoutClientShell>{children}</LayoutClientShell>
            </main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}
