"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstaller() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setTimeout(() => setShow(true), 6000);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const install = async () => {
    if (!deferred) return;
    deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && deferred && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="fixed bottom-5 right-5 z-[60] max-w-xs"
          role="dialog"
          aria-label="Install Dandyland"
        >
          <div className="grain rounded-sm border border-tobacco/50 bg-loam p-5 shadow-lift">
            <p className="font-display text-2xl text-cream">Keep Dandyland close</p>
            <p className="mt-2 text-sm text-cream/70">
              Add it to your home screen — it opens straight into the studio, and
              works even off the road.
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={install}
                className="rounded-full bg-bloomgold px-4 py-2 text-sm font-medium text-soil transition-opacity hover:opacity-90"
              >
                Install
              </button>
              <button
                onClick={() => setShow(false)}
                className="rounded-full px-4 py-2 text-sm text-cream/60 transition-colors hover:text-cream"
              >
                Not now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
