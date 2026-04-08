"use client";

import {createContext, useState } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({children} : {children: React.ReactNode}) => {

    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}