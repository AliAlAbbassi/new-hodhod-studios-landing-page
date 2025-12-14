import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keeping Geist as it is a good modern sans
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CONTENT } from "@/lib/content";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: CONTENT.startupTitle + " | " + CONTENT.hero.headline,
  description: CONTENT.hero.subheadline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen flex flex-col bg-background font-sans",
          "bg-dot-pattern bg-noise"
        )}
      >
        <Navbar />
        <main className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
