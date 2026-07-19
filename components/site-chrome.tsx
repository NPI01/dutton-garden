"use client";

import { usePathname } from "next/navigation";
import { isImmersive } from "@/lib/site";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

/**
 * Decides whether a route wears the global chrome. The Gate ("/") and the
 * Garden Walk ("/garden") are immersive and frame themselves; everything
 * else gets the persistent navigation and footer.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const immersive = isImmersive(pathname);

  if (immersive) {
    return <main id="main">{children}</main>;
  }

  return (
    <>
      <Navigation />
      <main id="main" className="relative">
        {children}
      </main>
      <Footer />
    </>
  );
}
