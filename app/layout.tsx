import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import PWAInstaller from "@/components/pwa-installer";
import { ThemeProvider } from "@/contexts/theme-context";
import ThemeToggle from "@/components/theme-toggle";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Garden - Dan Dutton",
  description: "An immersive gallery of flower paintings by Kentucky folk artist Dan Dutton",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "The Garden",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FBF7F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon-192.png" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider>
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <ThemeToggle />
          <PWAInstaller />
          <Script
            id="register-sw"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').then(
                      function(registration) {
                        console.log('Service Worker registered');
                      },
                      function(err) {
                        console.log('Service Worker registration failed: ', err);
                      }
                    );
                  });
                }
              `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

