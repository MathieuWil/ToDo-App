"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {mounted ? children : null}
    </ThemeProvider>
  );
}
