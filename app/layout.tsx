import type { Metadata, Viewport } from "next";
import "./globals.css";
import { vank, spectral, caveat } from "./fonts";
import { SITE } from "@/lib/site";
import { SoundProvider } from "@/contexts/sound-context";
import SiteChrome from "@/components/site-chrome";
import PWAInstaller from "@/components/pwa-installer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE.name,
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#241a12",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${vank.variable} ${spectral.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-soil text-cream">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SoundProvider>
          <SiteChrome>{children}</SiteChrome>
          <PWAInstaller />
        </SoundProvider>
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('/sw.js').catch(function () {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
