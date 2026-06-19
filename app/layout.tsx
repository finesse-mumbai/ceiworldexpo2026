import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CEI 2026 Landing Page",
  description: "CEI World Expo 2026 - Trade Show",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
