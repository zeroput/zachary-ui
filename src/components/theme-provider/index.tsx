import React, { useEffect } from "react";

function ThemeProvider({
  primaryColor = "#000",
  children,
}: ThemeProviderProps) {
  useEffect(() => {
    document.body.style.setProperty("--color-primary", primaryColor);
  }, [primaryColor]);

  return <>{children}</>;
}

export default ThemeProvider;

export interface ThemeProviderProps {
  primaryColor?: string;
  children: React.ReactNode;
}