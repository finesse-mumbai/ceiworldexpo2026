import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "CEI World Expo 2026",
  description: "CEI World Expo 2026 - Trade Show",
  icons: {
    icon: [
      { url: "/images/logo/192_192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo/512_512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo/192_192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
