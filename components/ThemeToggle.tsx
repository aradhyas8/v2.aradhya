"use client";

import type { MouseEvent } from "react";

// Label and icon are picked by CSS from <html data-theme>, which the inline script in layout sets
// before paint, so server and client markup always match.

// TS 5.4's DOM lib predates the View Transitions API.
type ViewTransitionDoc = Document & {
  startViewTransition?: (update: () => void) => { ready: Promise<void> };
};

export default function ThemeToggle() {
  function toggle(e: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch {}
    };

    const doc = document as ViewTransitionDoc;
    if (!doc.startViewTransition) return apply();

    // Reduced motion keeps the browser's default short crossfade; otherwise the new theme
    // grows as a circle from the button.
    const transition = doc.startViewTransition(apply);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 500, easing: "cubic-bezier(0.77, 0, 0.175, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle}>
      {/* Both icons and both labels share one cell; CSS morphs between them on theme change. */}
      <span className="tt-icons" aria-hidden="true">
        <svg className="tt-moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></svg>
        <svg className="tt-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
      </span>
      <span className="tt-labels">
        <span className="theme-to-dark">Dark mode</span>
        <span className="theme-to-light">Light mode</span>
      </span>
    </button>
  );
}
