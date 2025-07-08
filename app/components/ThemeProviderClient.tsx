"use client";

import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {/* On n’affiche les enfants que quand on est sûr d’être monté côté client */}
      {mounted ? children : null}
    </ThemeProvider>
  );
}
