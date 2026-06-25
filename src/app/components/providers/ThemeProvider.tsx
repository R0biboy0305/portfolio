"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Fournit le thème clair/sombre à l'application via next-themes (attribut CSS class). */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
        </NextThemesProvider>
    );
}
