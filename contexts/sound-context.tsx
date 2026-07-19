"use client";

/**
 * Global sound preference. Audio never plays until the visitor turns it on
 * (accessibility + autoplay policy). The preference persists locally so the
 * choice carries between pages, but it always starts silent on first load.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type SoundContextValue = {
  soundOn: boolean;
  toggleSound: () => void;
  setSound: (on: boolean) => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

const STORAGE_KEY = "dandyland-sound";

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundOn, setSoundOn] = useState(false);

  // Restore a prior "on" choice only after mount (never autoplay on SSR).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY) === "on") {
      setSoundOn(true);
    }
  }, []);

  const setSound = useCallback((on: boolean) => {
    setSoundOn(on);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, on ? "on" : "off");
    }
  }, []);

  const toggleSound = useCallback(() => setSound(!soundOn), [soundOn, setSound]);

  return (
    <SoundContext.Provider value={{ soundOn, toggleSound, setSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within a SoundProvider");
  return ctx;
}
