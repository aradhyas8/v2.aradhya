"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const screens = [
  { src: "home", alt: "Hushfield home screen: “Still awake?” with a rainy café ready to resume" },
  { src: "explore", alt: "Hushfield places for sleep, with fireside and waterfall soundscapes" },
  { src: "detail", alt: "Corner Table, Rain Outside: the café murmur, rain, and ventilation layers inside the place" },
  { src: "playback", alt: "Hushfield playback for Corner Table, Rain Outside, with master volume" },
];

const INTERVAL = 3500;

// Autoplays through the screens; a click advances and restarts the timer. Autoplay pauses while
// the phone is hovered (it enlarges for a closer look), when off-screen, when the tab is hidden,
// and never runs under reduced motion.
export default function HushfieldScreens() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || hovered || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % screens.length);
    }, INTERVAL);
    return () => clearTimeout(t);
  }, [index, visible, hovered]);

  return (
    <div className="hf-screens">
      <button
        ref={ref}
        type="button"
        className="hf-phone"
        onClick={() => setIndex((i) => (i + 1) % screens.length)}
        onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        aria-label="Show next Hushfield screen"
      >
        {screens.map((s, i) => (
          <Image
            key={s.src}
            src={`/static/Images/hushfield/${s.src}.jpg`}
            width={946}
            height={2048}
            sizes="400px"
            priority={i === 0}
            alt={i === index ? s.alt : ""}
            aria-hidden={i !== index}
            className="hf-screen"
            data-state={i === index ? "active" : i === (index - 1 + screens.length) % screens.length ? "prev" : "idle"}
          />
        ))}
      </button>
    </div>
  );
}
