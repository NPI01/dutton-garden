"use client";

/**
 * A yellow dashed trail that wanders from one section name to the next in
 * the Studio's wayfinding list — a path you could walk.
 *
 * The grid reflows (4 → 2 → 1 columns), so the curve is measured from the
 * live positions of the labels rather than hardcoded: it finds every
 * [data-journey-node], groups them into rows, and walks them boustrophedon
 * (left→right, then right→left) so the trail never jumps back across the
 * page. The dashes march along the path, and a small seed of light travels
 * it. Purely decorative — hidden from assistive tech, still under
 * prefers-reduced-motion.
 */

import { useEffect, useRef, useState } from "react";

type Pt = { x: number; y: number };

/** A smooth curve through the points (Catmull-Rom expressed as cubics). */
function buildPath(pts: Pt[]): string {
  if (pts.length < 2) return "";
  const k = 0.9; // curve tension
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1.x + ((p2.x - p0.x) / 6) * k;
    const c1y = p1.y + ((p2.y - p0.y) / 6) * k;
    const c2x = p2.x - ((p3.x - p1.x) / 6) * k;
    const c2y = p2.y - ((p3.y - p1.y) / 6) * k;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

export default function JourneyPath() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [d, setD] = useState("");
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const host = hostRef.current;
    const parent = host?.parentElement;
    if (!host || !parent) return;

    const measure = () => {
      const pr = parent.getBoundingClientRect();
      // Don't bake in a degenerate path if we're measured before layout
      // (or while the pane has no size) — wait for a real box.
      if (pr.width < 1) return;
      const nodes = Array.from(
        parent.querySelectorAll<HTMLElement>("[data-journey-node]")
      );
      if (nodes.length < 2) return;

      // Anchor just above each label, so the trail arcs over the names.
      const raw: Pt[] = nodes.map((n) => {
        const r = n.getBoundingClientRect();
        return {
          x: r.left - pr.left + r.width / 2,
          y: r.top - pr.top - 12,
        };
      });

      // Group into rows (labels sharing roughly the same baseline).
      const rows: Pt[][] = [];
      for (const p of [...raw].sort((a, b) => a.y - b.y)) {
        const row = rows[rows.length - 1];
        if (row && Math.abs(row[0].y - p.y) < 40) row.push(p);
        else rows.push([p]);
      }

      // Walk each row, alternating direction, and add a gentle meander so
      // the trail curves rather than running flat across the row.
      const ordered: Pt[] = [];
      rows.forEach((row, ri) => {
        const sorted = row.sort((a, b) => a.x - b.x);
        const dir = ri % 2 === 0 ? sorted : sorted.reverse();
        dir.forEach((p, pi) => {
          ordered.push({ x: p.x, y: p.y + (pi % 2 === 0 ? -10 : 12) });
        });
      });

      setD(buildPath(ordered));
      setBox({ w: pr.width, h: pr.height });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(parent);
    // Backstops: a viewport change, and fonts landing late (both shift the
    // label positions the curve is drawn through).
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  if (!d) return <div ref={hostRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />;

  return (
    <div
      ref={hostRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox={`0 0 ${box.w} ${box.h}`}
        fill="none"
        preserveAspectRatio="none"
      >
        {/* A faint continuous trace, so the trail reads even between dashes */}
        <path d={d} stroke="#f5c63c" strokeOpacity="0.16" strokeWidth="1.5" />
        {/* The marching dashes */}
        <path
          className="journey-dash"
          d={d}
          stroke="#f5c63c"
          strokeOpacity="0.75"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="9 13"
        />
      </svg>

      {/* A seed of light, travelling the path */}
      <span className="journey-seed" style={{ offsetPath: `path("${d}")` } as React.CSSProperties} />

      <style jsx>{`
        .journey-seed {
          position: absolute;
          top: 0;
          left: 0;
          width: 7px;
          height: 7px;
          margin: -3.5px 0 0 -3.5px;
          border-radius: 9999px;
          background: #f5c63c;
          box-shadow: 0 0 10px 2px rgba(245, 198, 60, 0.55);
          offset-rotate: 0deg;
          animation: journey-travel 26s linear infinite;
        }
        @keyframes journey-travel {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .journey-seed { display: none; }
        }
      `}</style>

      <style jsx global>{`
        .journey-dash {
          animation: journey-march 1.8s linear infinite;
        }
        @keyframes journey-march {
          to { stroke-dashoffset: -22; }
        }
        @media (prefers-reduced-motion: reduce) {
          .journey-dash { animation: none; }
        }
      `}</style>
    </div>
  );
}
