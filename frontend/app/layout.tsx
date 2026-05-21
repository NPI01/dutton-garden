import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "Dan Dutton — Artist at Dandyland",
  description:
    "Multidisciplinary artist Dan Dutton works at the crossroads of painting, sculpture, opera, and dance from his studio and farm Dandyland in Somerset, Kentucky.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A0E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-dandyland-white overflow-x-hidden font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
