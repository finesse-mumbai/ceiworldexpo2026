import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});


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
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
