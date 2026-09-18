---
name: MKDynamics
description: Energetic Belgian agency — night-blue immersive sections, logo gold accents, big Bricolage headlines, rounded tiles.
colors:
  night: "#040a24"
  navy: "#051654"
  navy-2: "#0c2378"
  paper: "#ffffff"
  paper-2: "#eef1f8"
  ink: "#0a1030"
  ink-2: "#4a5270"
  line: "#d9deea"
  line-navy: "#1f2d68"
  on-navy: "#ffffff"
  on-navy-2: "#b3bde3"
  gold: "#f2b233"
  gold-2: "#ffc95c"
  gold-ink: "#8a5a00"
  open-on-dark: "#6fdc9c"
  muted-dot: "#9aa1ad"
  success: "#1d7a46"
  danger: "#b42318"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.2rem + 6.2vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Bricolage Grotesque, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.3rem + 3.4vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.15
  prose-heading:
    fontFamily: "Bricolage Grotesque, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 1.6vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  subtitle:
    fontFamily: "Bricolage Grotesque, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  lead:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 0.8vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
  nav:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  small:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  md: "12px"
  lg: "16px"
  xl: "24px"
  "2xl": "32px"
  pill: "999px"
spacing:
  gutter-mobile: "20px"
  gutter: "40px"
  container: "1320px"
  section: "112px"
  section-mobile: "80px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 24px 0 28px"
  button-primary-hover:
    backgroundColor: "{colors.gold-2}"
  button-dark:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.pill}"
    height: "56px"
  button-ghost:
    textColor: "{colors.on-navy}"
    rounded: "{rounded.pill}"
    height: "56px"
  service-tile:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "32px"
  service-tile-cta:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.night}"
    rounded: "{rounded.xl}"
    padding: "32px"
  icon-badge:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.gold}"
    rounded: "{rounded.lg}"
    size: "56px"
  input:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  feature-card:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.2xl}"
    padding: "56px"
---

## Overview

A confident, human Belgian agency rather than a corporate consultancy. Pages open on immersive night-blue heroes (full-bleed photo under a night gradient), alternate with bright white sections, and close on a gold call-to-action band before a night footer. Gold from the atom logo is the energy: accent words in headlines, primary buttons, icons. The signature is the logo's atom brought to life: five service nodes orbiting the mark.

## Colors

- **Night (#040a24)** grounds heroes, the orbit section, value lists and the footer. **Navy** is the raised surface on night and on white (feature cards, icon badges, sidebar CTAs).
- **Gold (#f2b233)** is the accent: one key word per headline on dark grounds, primary buttons, icons, list bullets. On white, gold is never text: accent words get a gold marker underlay instead (the `Hl` component).
- White and paper-2 carry reading content; secondary text is ink-2 on light, on-navy-2 on dark.

## Typography

Bricolage Grotesque (bold, tight) for every heading, the wordmark and big numbers; Schibsted Grotesk for body and UI. Headlines are large and short with one accent word. Body 18px / 1.7, 68ch measure on reading pages.

## Layout

12-column grid in a 1320px container, 20/40px gutters, ~112px section rhythm. The fixed header floats transparent over the hero and turns night on scroll, so every page starts with a dark hero. Reading pages pair a sticky aside (table of contents, meta card, navy CTA card) with prose.

## Elevation & Depth

Mostly flat colour fields. One soft navy-tinted shadow lifts a service tile on hover; the orbit's core carries a faint gold glow.

## Shapes

Generous rounding: tiles 24px, feature cards 32px, inputs 12px, icon badges 16px, buttons and chips fully pill-shaped. Photos inside content are rounded 16–24px; hero photos are full-bleed.

## Components

- **Buttons**: pill, 56px, label + arrow; gold primary, navy dark, outlined ghost on dark. Arrow nudges on hover (fine pointers), press scales to 0.97.
- **Service tiles**: paper-2 rounded tile, navy icon badge with gold icon, bold title, summary, "Learn more"; the sixth tile is a gold "Not sure where to start?" CTA. Lifts 4px on hover.
- **Orbit** (signature): atom rings + dashed orbit around the logo mark; five service buttons rotate slowly (60s, linear), pause on hover/focus, auto-advance every 4.5s until the visitor picks one; the chosen service shows on the left. Static under reduced motion.
- **Hero stats**: three gold figures on a hairline (50+ projects, 5 disciplines, BE).
- **FAQ**: rounded paper-2 rows; the open row turns navy.
- **Status**: green dot "Open", grey dot "Closed".

## Do's and Don'ts

- Do give every headline one gold accent word (gold text on dark, gold marker on light).
- Do alternate night and white sections, and end every client-facing page on the gold band.
- Do keep motion orchestrated: headline line rise on load, orbit, scroll reveals; honour reduced motion.
- Don't put gold text on white, or use Tailwind opacity modifiers on the CSS-variable colours (they silently fail).
- Don't add eyebrow labels, gradient text, glassmorphism or hard offset shadows.
- Don't invent proof: no testimonials, client names or figures beyond PRODUCT.md.
