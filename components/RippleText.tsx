"use client";

import { useRef, type PointerEvent } from "react";

const wave: Keyframe[] = [
  { fontVariationSettings: '"wght" 800', transform: "none" },
  { fontVariationSettings: '"wght" 300', transform: "translateY(-7%)", offset: 0.45 },
  { fontVariationSettings: '"wght" 800', transform: "none" },
];
const bounce: Keyframe[] = [
  { transform: "none" },
  { transform: "translateY(-55%)", offset: 0.3 },
  { transform: "none", offset: 0.55 },
  { transform: "translateY(-14%)", offset: 0.72 },
  { transform: "none", offset: 0.86 },
  { transform: "none" },
];

// Splits text into letters that ripple (variable weight + lift) when a mouse enters. Played with
// WAAPI so it always runs to completion and never replays on leave. A trailing "." bounces.
// `rise` adds the one-time load entrance used by the name.
export default function RippleText({ lines, label, rise = false }: { lines: string[]; label: string; rise?: boolean }) {
  const busy = useRef(false);
  const total = lines.join("").length;
  const stagger = Math.min(35, 500 / total);
  let i = 0;

  function ripple(e: PointerEvent<HTMLSpanElement>) {
    if (e.pointerType !== "mouse" || busy.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    busy.current = true;
    const chars = Array.from(e.currentTarget.querySelectorAll<HTMLElement>(".ripple-char"));
    const runs = chars.map((el, n) =>
      el.classList.contains("ripple-dot")
        ? el.animate(bounce, { duration: 900, delay: n * stagger * 0.6 + 200, easing: "cubic-bezier(0.16, 1, 0.3, 1)" })
        : el.animate(wave, { duration: 700, delay: n * stagger, easing: "cubic-bezier(0.65, 0, 0.35, 1)" }),
    );
    Promise.all(runs.map((r) => r.finished)).finally(() => { busy.current = false; });
  }

  return (
    <span className="ripple" onPointerEnter={ripple}>
      <span className="sr-only">{label}</span>
      {lines.map((line, l) => (
        <span key={l} className="ripple-line" aria-hidden="true">
          {line.split("").map((ch, c) => {
            const dot = ch === "." && c === line.length - 1 && l === lines.length - 1;
            return (
              <span
                key={i}
                className={`ripple-char${dot ? " ripple-dot" : ""}${rise ? " name-char" : ""}`}
                style={{ "--i": i++ } as React.CSSProperties}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
