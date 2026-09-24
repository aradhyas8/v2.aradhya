# Aradhya Singh — Portfolio Design

## Intent
A software developer's portfolio for hiring teams and collaborators. Shipped work leads; experience and contact remain easy to reach. No unsupported metrics or decorative claims.

## Direction
- Genre: restrained modern-minimal with an editorial reading rhythm.
- Homepage: work feed beside a stationary identity rail. Hushfield leads as a feature card staged on its own rainy-café photo (slow drift) with one full phone that autoplays through Home, Places, Inside a place, Listening every 3.5s; a click advances; hovering (mouse only) enlarges the whole phone 1.3x and pauses autoplay; the Hushfield card sits above the project grid (z-index) so the enlarged phone overlaps the cards rather than sliding under them. No step markers, captions, or fake audio indicators. Then a 2-column card grid: PageMind, QueryIO (in development), Paperrow, Serverus, v2.aradhya (previous portfolio, real screenshot), For The Horses (1st prize, yuHacks 2022). Cards carry a code-drawn sketch, name, one description, and a link; no stack lines. Experience is a timeline without a connecting line: date, rust dot, company, title, bullets, stack line. Then About: a one-line statement beside a facts list, and an inverse contact panel.
- Archive: the same rail and typography with a compact chronological project index.
- Navigation: text-only side rail on desktop, an inline row on smaller screens.
- Footer: "© year name" only; the rail carries identity and socials.

## Visual system
- Warm cream paper background with dark charcoal ink and terracotta rust-orange accent. Dark theme: warm near-black paper, cream ink, lifted rust accent; defaults to light until the top-right "Dark mode / Light mode" toggle stores a choice (localStorage "theme").
- Bricolage Grotesque (800) for display headings and the identity title; IBM Plex Sans for body and navigation; IBM Plex Mono (12px) for tech-stack lines only.
- Type sizes come only from tokens.css (--text-xs/sm/base/md/lg/xl/display). Uppercase is reserved for the identity name and 12px meta labels; project, company, and section names are sentence case.
- Hairlines organize rows. No glow, glass, fake device chrome, generic metric cards, or ornamental pills.
- Tokens live in tokens.css; page and archive styles live in app/portfolio.css.
- Identity rail (minimal): name (letters rise in on load; ripple on mouse enter via RippleText/WAAPI), one-line intro, Résumé link, section nav with item counts and a sliding rust marker, and unboxed GitHub / LinkedIn / Email icon links pinned to the rail bottom (lift on hover, press on click). No clock, status, or boxed panels. On short screens (<780px tall) the rail stops being sticky.
- One-shot reveals (RevealObserver sets data-inview; hidden start states only when JS ran and motion is allowed): section heading rules draw left to right; the About highlight sweeps from ink to rust; timeline dots fill with a small pop as each role enters. On touch devices (hover: none) each project sketch plays once when its card scrolls into view. The contact email reuses the name ripple (RippleText). The theme toggle morphs moon/sun (rotate + fade) and crossfades its label.
- Motion: the Hushfield card is the one authored loop (backdrop drift, blurred screen crossfade, equalizer). Theme switch reveals the new theme as a circle from the toggle (View Transitions). Hover effects and sketch playback only on fine pointers; keyboard focus also plays sketches. Press feedback scale(0.97) on buttons, 0.99 on cards. Copy button crossfades to "Copied" with a drawn tick. Reduced motion removes movement and keeps colour changes and a plain theme fade.

## Content rules
- Lead with the product, the contribution, and a real destination.
- Feature shipped work only; unshipped projects go in the one-line "In progress" list. Breadth belongs in the archive.
- The résumé carries role detail. The homepage keeps experience scannable.
- Do not invent impact claims, testimonials, dates, or project metrics.

## Responsive behavior
- Desktop: sticky identity rail and work feed.
- Tablet/phone: identity becomes a compact header; images and copy stack without horizontal scroll.
- Check 320, 375, 414, 768, and desktop widths. Keep a skip link, useful alt text, and visible focus.

## Exports

tokens.css is the live source of truth. These are portable references; the project currently uses Tailwind 3.

### CSS tokens

The palette core is below; tokens.css also contains the live spacing, type, and timing values.

    :root {
      --color-paper: oklch(94% 0.018 81);
      --color-paper-2: oklch(90% 0.023 81);
      --color-visual: oklch(19% 0.018 52);
      --color-ink: oklch(19% 0.018 52);
      --color-muted: oklch(42% 0.018 52);
      --color-rule: oklch(75% 0.018 81);
      --color-accent: oklch(55% 0.18 33);
      --color-focus: oklch(55% 0.18 33);
      --font-display-face: var(--font-display), system-ui, sans-serif;
      --font-body-face: var(--font-body), system-ui, sans-serif;
    }

### Tailwind v4 theme reference

    @theme {
      --color-paper: oklch(17% 0.006 330);
      --color-paper-2: oklch(21% 0.006 330);
      --color-visual: oklch(25% 0.007 330);
      --color-ink: oklch(95% 0.008 80);
      --color-muted: oklch(73% 0.008 75);
      --color-rule: oklch(39% 0.008 330);
      --color-accent: oklch(82% 0.045 165);
      --color-focus: oklch(85% 0.06 165);
      --font-display: "Space Grotesk", system-ui, sans-serif;
      --font-body: "Inter", system-ui, sans-serif;
    }

### DTCG tokens.json reference

    {
      "color": {
        "paper": { "$value": "oklch(17% 0.006 330)", "$type": "color" },
        "paper-2": { "$value": "oklch(21% 0.006 330)", "$type": "color" },
        "visual": { "$value": "oklch(25% 0.007 330)", "$type": "color" },
        "ink": { "$value": "oklch(95% 0.008 80)", "$type": "color" },
        "muted": { "$value": "oklch(73% 0.008 75)", "$type": "color" },
        "rule": { "$value": "oklch(39% 0.008 330)", "$type": "color" },
        "accent": { "$value": "oklch(82% 0.045 165)", "$type": "color" },
        "focus": { "$value": "oklch(85% 0.06 165)", "$type": "color" }
      },
      "font": {
        "display": { "$value": "Space Grotesk, system-ui, sans-serif", "$type": "fontFamily" },
        "body": { "$value": "Inter, system-ui, sans-serif", "$type": "fontFamily" }
      }
    }

### shadcn/ui variable reference

These values map the semantic palette to shadcn roles; they are not loaded by the current homepage.

    :root {
      --background: 17% 0.006 330;
      --foreground: 95% 0.008 80;
      --card: 21% 0.006 330;
      --card-foreground: 95% 0.008 80;
      --primary: 82% 0.045 165;
      --primary-foreground: 17% 0.006 330;
      --muted: 25% 0.007 330;
      --muted-foreground: 73% 0.008 75;
      --border: 39% 0.008 330;
      --ring: 85% 0.06 165;
    }
