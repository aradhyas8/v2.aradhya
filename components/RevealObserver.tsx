"use client";

import { useEffect } from "react";

// Marks each [data-reveal] element with data-inview once it scrolls into view. CSS keys the
// one-shot reveals (heading rules, highlight sweep, timeline dots, touch sketches) off that.
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.setAttribute("data-inview", "");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -15% 0px", threshold: 0.4 },
    );
    document.querySelectorAll("[data-reveal]:not([data-inview])").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
