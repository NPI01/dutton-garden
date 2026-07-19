"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { MAIN_NAV, SECONDARY_NAV, SITE } from "@/lib/site";
import SoundToggle from "@/components/sound-toggle";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer on route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/studio" ? pathname === href : pathname.startsWith(href);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "border-b border-cream/10 bg-soil/90 backdrop-blur-md"
            : "bg-gradient-to-b from-soil/70 to-transparent"
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 md:px-8"
        >
          <Link href="/studio" className="group flex flex-col leading-none">
            <span className="font-display text-2xl text-cream md:text-[1.7rem]">
              {SITE.name}
            </span>
            <span className="kicker text-[0.55rem] text-cream/45 transition-colors group-hover:text-bloomgold">
              Dan Dutton
            </span>
          </Link>

          {/* Desktop main nav */}
          <ul className="hidden items-center gap-7 lg:flex">
            {MAIN_NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={clsx(
                      "text-[0.82rem] uppercase tracking-[0.16em] transition-colors",
                      active ? "text-bloomgold" : "text-cream/75 hover:text-cream"
                    )}
                  >
                    {item.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-bloomgold"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <SoundToggle />
            <Link
              href="/garden"
              className="text-[0.7rem] uppercase tracking-label text-cream/55 transition-colors hover:text-cream"
            >
              Return to Garden
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative h-9 w-9 lg:hidden"
          >
            <span
              className={clsx(
                "absolute left-1.5 right-1.5 top-2.5 h-px bg-cream transition-transform duration-300",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={clsx(
                "absolute left-1.5 right-1.5 top-4.5 h-px bg-cream transition-opacity duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "absolute bottom-2.5 left-1.5 right-1.5 h-px bg-cream transition-transform duration-300",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-aged/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="grain fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-loam px-8 pb-10 pt-24 lg:hidden"
              role="dialog"
              aria-label="Menu"
            >
              <ul className="flex flex-col">
                {MAIN_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-baseline justify-between border-b border-cream/10 py-4"
                    >
                      <span className="font-display text-3xl text-cream">
                        {item.label}
                      </span>
                      {item.note && (
                        <span className="font-hand text-lg text-bloomgold/80">
                          {item.note}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {SECONDARY_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm uppercase tracking-label text-cream/70"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/garden"
                    className="text-sm uppercase tracking-label text-cream/70"
                  >
                    Garden
                  </Link>
                </li>
              </ul>
              <div className="mt-8">
                <SoundToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
