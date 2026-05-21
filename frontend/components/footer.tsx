"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dandyland-black text-dandyland-cream py-16 cross-stitch-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="8" r="4" fill="#E8C840" />
                <circle cx="8" cy="16" r="4" fill="#B5CC5C" />
                <circle cx="24" cy="16" r="4" fill="#B5CC5C" />
                <circle cx="16" cy="24" r="4" fill="#E8C840" />
                <circle cx="16" cy="16" r="3" fill="#D4A843" />
              </svg>
              <span className="font-display text-xl">Dandyland</span>
            </div>
            <p className="font-sans text-sm text-dandyland-sage/70 leading-relaxed">
              Studio and farm of Dan Dutton. Somerset, Kentucky.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-dandyland-yellow mb-4">Explore</h4>
            <ul className="space-y-2">
              {["About", "Journey", "Works", "Dandyland"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-sans text-sm text-dandyland-sage/70 hover:text-dandyland-cream transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured on */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-dandyland-yellow mb-4">Featured On</h4>
            <ul className="space-y-2 font-sans text-sm text-dandyland-sage/70">
              <li>Kentucky Educational Television (KET)</li>
              <li>Kentucky Life</li>
              <li>J. B. Speed Art Museum</li>
              <li>21c Museum Hotels</li>
              <li>Berea College Art Museum</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dandyland-sage/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-dandyland-sage/50 tracking-wider">
            &copy; {new Date().getFullYear()} Dan Dutton. All rights reserved.
          </p>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-hand text-dandyland-yellow/60 text-sm"
          >
            Made with love at Dandyland 🌻
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
