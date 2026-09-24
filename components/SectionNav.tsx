"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
];

// Marks the section in view and slides a rust marker to it: a bar beside the link on desktop,
// an underline in the mobile row (see .section-nav in portfolio.css).
export default function SectionNav({
  archive = false,
  counts,
}: {
  archive?: boolean;
  counts?: { work: number; experience: number };
}) {
  const [active, setActive] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (archive) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [archive]);

  // Position the marker from the active link's box; re-measure on resize (row vs column layout).
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const place = () => {
      const link = nav.querySelector<HTMLElement>('[aria-current="location"]');
      nav.dataset.marker = link ? "on" : "off";
      if (!link) return;
      nav.style.setProperty("--mx", `${link.offsetLeft}px`);
      nav.style.setProperty("--my", `${link.offsetTop}px`);
      nav.style.setProperty("--mw-n", String(link.offsetWidth));
      nav.style.setProperty("--mh", `${link.offsetHeight}px`);
    };
    place();
    addEventListener("resize", place);
    return () => removeEventListener("resize", place);
  }, [active]);

  return (
    <nav className="identity-nav section-nav" aria-label="Portfolio sections" ref={navRef}>
      {sections.map((s) => (
        <a key={s.id} href={archive ? `/#${s.id}` : `#${s.id}`} aria-current={active === s.id ? "location" : undefined}>
          {s.label}
          {counts && s.id in counts ? (
            <span className="nav-count">{String(counts[s.id as keyof typeof counts]).padStart(2, "0")}</span>
          ) : null}
        </a>
      ))}
      <span className="nav-marker" aria-hidden="true" />
    </nav>
  );
}
