---
name: Piccino bakery
description: Pop food poster in motion, now in the brand's real Instagram palette; the cookie is always bigger than the type.
colors:
  brown: "#6e3019"
  terra: "#b4552f"
  apricot: "#e8966a"
  sand: "#f3e3c6"
  cream: "#fff6ed"
  choco: "#3b1c11"
  crimson: "#7a1f2b"
  pista: "#b9c79a"
  rasp: "#a63a4f"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(5.5rem, 27.5vw, 22rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  display-sub:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 15vw, 11rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  value:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 1.6rem + 9vw, 10rem)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 7vw, 8rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  statement:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.2rem + 4.6vw, 5.6rem)"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.6rem + 4vw, 5.2rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  subhead:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 1.3rem + 4.4vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  lead:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 2vw, 2.4rem)"
    fontWeight: 650
    lineHeight: 1.1
  lead-sm:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 1rem + 1.6vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.95rem + 0.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 750
  nav:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 650
  brand:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    letterSpacing: "-0.02em"
  note:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  pill: "999px"
  tile: "18px"
  focus: "6px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  nav: "18px"
components:
  button-pill:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.choco}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.4em"
  flavour-slab-red-velvet:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.cream}"
  flavour-slab-pistacho:
    backgroundColor: "{colors.pista}"
    textColor: "{colors.choco}"
  flavour-slab-marroc:
    backgroundColor: "{colors.choco}"
    textColor: "{colors.sand}"
  flavour-slab-frambuesa:
    backgroundColor: "{colors.rasp}"
    textColor: "{colors.cream}"
  flavour-slab-clasica:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.choco}"
  feed-tile:
    rounded: "{rounded.tile}"
---

# Design System: Piccino bakery

## Overview

**Creative North Star: "The Pop Cookie Poster"**

Every section is a drenched field of warm bakery colour (chocolate-brown, terracotta, sand, cream), and a cut-out cookie photograph, larger than any word on screen, bleeds off its edge. The palette is taken from the brand's real Instagram, so it reads as baked goods and packaging rather than poster primaries. Type is one heavy variable grotesque set tight and huge; colour does the structuring, never lines or boxes. Panels are angled, cookies are tilted, nothing sits square.

Motion is physical: cookies are thrown in and settle on a spring, a classic gets bitten frame by frame as you scroll and drops real crumbs, the seal spins in. Everything resolves to a complete static poster under `prefers-reduced-motion`.

**Key Characteristics:**
- Full-bleed colour fields, one per section, edge to edge.
- Product cut-outs at 55-104vw, rotated (-16° to 18°), cropped by the viewport.
- One typeface, weights 550-800 (400 for body), negative tracking on everything display.
- Angled slabs (~8°) instead of borders or cards.

## Colors

A warm, food-derived palette: two browns and a terracotta as the brand fields, sand and cream as the lights, one apricot for accents on dark, and one colour per flavour.

### Primary
- **Cocoa Brown** (brown): hero and Instagram fields, the flavours title; theme-color. Carries sand and cream type.
- **Terracotta** (terra): the hero's angled panel, the bite section field, the red-velvet feed tile. Carries cream (never smaller than body size on it, see rules).

### Secondary
- **Apricot** (apricot): text on dark only: the third value word and the footer wordmark, both on chocolate.

### Tertiary (flavour accents)
- **Red Velvet Crimson** (crimson), **Pistachio Sage** (pista), **Raspberry** (rasp): used on their own flavour's slab or feed tile.

### Neutral
- **Sand** (sand): wordmark, pills, seal, manifesto field, clásica slab, text selection, first value word.
- **Cream** (cream): page background, flavours section, light text on dark and saturated fields.
- **Chocolate** (choco): body text on light fields, values and footer fields, marroc slab, seal ink, scrollbar, and the shadow tint (`rgb(29 10 6)`).

### Named Rules
**The One Field Rule.** Each section owns exactly one background colour; a new section changes colour rather than adding a box.

**The Apricot-On-Dark Rule.** Apricot is text on chocolate only (≈6.6:1). It is never a field and never text on light or terracotta (≈2.1:1 on terra).

**The No Terracotta Text On Dark Rule.** Terracotta on chocolate is ≈3.15:1, so terracotta never carries text on a dark field; use apricot there. Terracotta is a field: cream on terra is ≈4.6:1 (passes body size narrowly), sand on terra ≈3.9:1 (large bold type only, ≥24px bold, as with the sand wordmark over the hero panel).

**The Warm Contrast Rule.** Cream on brown ≈9.4:1, sand on brown ≈7.9:1, cream on crimson ≈9.5:1, cream on raspberry ≈5.9:1, chocolate on pistachio ≈8.6:1, chocolate on sand/cream ≈12-14:1. These pairings are the safe defaults for any size.

## Typography

**Display Font:** Bricolage Grotesque Variable (opsz axis, `font-optical-sizing: auto`), with ui-sans-serif / system-ui fallback.
**Body Font:** the same family.

**Character:** One chunky, slightly quirky grotesque doing everything from a 22rem wordmark to a 0.95rem note; contrast comes from size and weight, not from a second face.

### Hierarchy
- **Display** (800, clamp 5.5rem / 27.5vw / 22rem, 0.78-0.8): the "Piccino" wordmark in the hero; the footer wordmark uses the same voice at clamp 6rem / 33vw / 30rem (line-height 0.72) in apricot. Bleeds off the edge (`white-space: nowrap`).
- **Display-sub** (800, clamp 3rem / 15vw / 11rem, 0.8): "bakery" under the hero wordmark.
- **Value** (800, clamp 3.4rem to 10rem, 0.85): the three value words.
- **Headline** (800, clamp 3rem to 8rem, 0.88): section titles; Instagram title is the same voice, smaller (clamp 2.6rem to 6rem, 0.9).
- **Statement** (780, clamp 2.1rem to 5.6rem, 1.0, max 17ch): the manifesto, revealed word by word.
- **Title** (800, clamp 2.6rem to 5.2rem, 0.92): flavour names.
- **Subhead** (800, clamp 2.2rem to 5rem, 0.95): bite-step lines.
- **Lead** (650, clamp 1.5rem to 2.4rem, 1.1, max 14ch): hero line. **Lead-sm** (700, clamp 1.4rem to 2.2rem, 1.1, max 22ch): footer line; the bite "remate" (700, clamp 1.5rem to 2rem) uses the same voice.
- **Body** (400-550, clamp 1.0625rem to 1.25rem, 1.45, 26-32ch): flavour and value lines, manifesto sign (650, 1.15rem).
- **Label** (750, 1.05rem): pill buttons. **Nav** (650, 0.95rem): nav links. **Brand** (800, 1.15rem, -0.02em): nav wordmark. Sentence case, no tracking.
- **Note** (400, 0.95rem): Instagram handle line and footer credit.

### Named Rules
**The Tight Heavy Rule.** Anything at 2rem or larger is weight ≥ 780 with tracking -0.035em to -0.04em and line-height ≤ 1.0, with `text-wrap: balance` where it wraps. Exceptions that keep ≥ 650: lead lines (1.1 line-height).

## Layout

Stacked full-bleed sections, side padding `gutter` (16-48px). No container grid; copy is held by `ch` measures, while cookies are absolutely positioned and cropped by `overflow: clip`. Section padding is fluid, roughly 90-180px top. Breakpoints: 760px (flavour slabs go side by side, text max 40%) and 900px (hero recomposes: terracotta panel to the right half, red velvet centred and cropped at the bottom). Flavours alternate sides: odd rows text left and cookie right, even rows the reverse with right-aligned text. The bite section is a 420vh scroll track with a sticky 100svh stage; under reduced motion it collapses to one static frame. Section order and field colours: hero brown, manifesto sand, flavours cream, bite terra, values chocolate, Instagram brown, footer chocolate.

## Elevation & Depth

Depth is photographic, not structural. Cut-out cookies carry a soft two-layer drop shadow tinted chocolate (`drop-shadow(0 18px 22px rgb(29 10 6 / .32)) drop-shadow(0 4px 6px rgb(29 10 6 / .2))`); layering comes from z-stacking cookies over angled panels. Pills and feed tiles have a soft blurred shadow. No hard offset shadows.

### Named Rules
**The Shadow Belongs To Food Rule.** Shadows exist to make product and the few touchable things (pill, tile, seal) feel like objects; surfaces and fields are always flat. Shadow tint is the chocolate `rgb(29 10 6)`.

## Shapes

Flat colour planes cut at about 8° (the slab clip-path rises 14vw across the viewport, since tan 8° ≈ 0.14); consecutive slabs overlap by that rise so the angles interlock. Rotations everywhere: hero panel -8°, cookies -16° to 18°, seal -12°, feed tiles -3° to 2°. Fully round pills (999px) and a circular seal. No borders; the only rounded rectangles are the Instagram feed tiles (18px).

## Components

### Buttons
- **Shape:** full pill (999px).
- **Primary:** sand with chocolate text (≈12.2:1), 750 weight, padding 0.85em 1.4em, inline 20px stroked SVG icon, soft shadow `0 10px 24px -8px rgb(29 10 6 / .45)`. It is the only variant (`pill--sand`) and sits on brown and terra-adjacent fields.
- **Hover / Active:** lifts 2px and tilts -1.5° with a deeper shadow (220ms ease-out); press is 1px down and scale .98 (90ms). Focus: 3px currentColor outline, 4px offset.

### Flavour Slab (signature)
Full-width angled slab per flavour in its own colour, with a 92vw (mobile) / 54vw (desktop) cookie cropped off the opposite edge. Focusable (`tabindex=0`); hover/focus scales the cookie 1.07, rotates 4° and deepens its shadow (420ms). Choco dúo uses a hard sand/chocolate split (172° mobile, 100° desktop) instead of a flat colour.

### Seal
Sand circle with chocolate ring and text on a circular path ("SIMPLE · REAL · IRRESISTIBLE · INGREDIENTES REALES"), Piccino/BAKERY in the centre, rotated -12°, spring-spun in.

### Navigation
Slim row in the hero on brown: sand wordmark (800, -0.02em) left, three 650-weight links right in cream; underline on hover. No sticky bar, no mobile menu (links fit at 390px).

### Feed Tile
Square tile in a flavour colour (sand, raspberry, cream, chocolate, pistachio, terracotta), 18px radius, cookie at 86%, staggered rotation; hover scale 1.04. Illustrative only, labelled as an example account.

### Motion
anime.js. Entrance: `out(4)` timelines, spring settle (`bounce .28, 1150ms`) for thrown cookies, character stagger 38ms on the wordmark. CSS state transitions use `--ease-out` `cubic-bezier(0.16, 1, 0.3, 1)` at 220-420ms. Scroll-linked effects (hero parallax and seal spin, manifesto word reveal, flavour cookie settle, bite frames + crumbs) are driven by `onScroll`. Content hidden for entrance is revealed after 2.5s if the script fails.

## Do's and Don'ts

### Do:
- **Do** give every new section one full-bleed field from the palette and at least one cookie larger than its headline.
- **Do** crop and rotate product imagery past the viewport edge and give it the chocolate drop shadow.
- **Do** separate areas with colour changes and ~8° angled cuts.
- **Do** use apricot for text on chocolate and cream or sand for text on brown or terracotta.
- **Do** ship a static reduced-motion state that shows the final composition.
- **Do** keep flavour colours tied to their flavour.

### Don't:
- **Don't** draw borders, outlines or boxed cards around content; the feed tiles are the one rounded container.
- **Don't** set terracotta text on a dark field (≈3.15:1), or apricot on light or terracotta fields (≈2.1:1).
- **Don't** set sand text below large bold size on terracotta (≈3.9:1).
- **Don't** add a second typeface or set display type at weights below 780.
- **Don't** use hard offset shadows or grey/black shadows; shadows are soft and chocolate-tinted.
- **Don't** centre everything on cream with equal product cards; that is the category default this system rejects.
