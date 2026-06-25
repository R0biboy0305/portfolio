import React from "react";

/** Wrapper transparent pour le contenu principal, point d'extension pour des providers futurs. */
export default function LayoutClientShell({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
