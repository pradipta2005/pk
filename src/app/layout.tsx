import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title: "Pradipta Khan| Data Scientist & Analytics Engineer",
  description: "An ultra-premium, storytelling portfolio for a Data Scientist. Golden Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased bg-obsidian text-ivory overflow-x-hidden selection:bg-gold selection:text-obsidian`}
      >
        <Preloader />
        <CustomCursor />
        {/* ScrollProgress removed in favor of Navbar integration */}
        <SmoothScroll />

        {/* Global Noise Texture for Cinematic Film Grain Feel */}
        <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-[9999] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        {children}
      </body>
    </html>
  );
}
