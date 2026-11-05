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
    fontSize: "clamp(0.875rem, 0.75rem + 0.4vw, 0.95rem)"
    fontWeight: 650
  brand:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    letterSpacing: "-0.02em"
  wordmark-note:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.85rem + 0.6vw, 1.35rem)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  remate:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2rem)"
    fontWeight: 700
  note:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  pill: "999px"
  round: "50%"
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
  social-button:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.choco}"
    rounded: "{rounded.round}"
    size: "48px"
---

# Design System: Piccino bakery

## Overview

**Creative North Star: "The Pop Cookie Poster"**

Every section is a drenched field of warm bakery colour (chocolate-brown, terracotta, sand, cream), and a cut-out cookie photograph, larger than any word on screen, bleeds off its edge. The palette is taken from the brand's real Instagram, so it reads as baked goods and packaging rather than poster primaries. Type is one heavy variable grotesque set tight and huge; colour does the structuring, never lines or boxes. Panels are angled, cookies are tilted, nothing sits square.

Motion is physical: cookies are thrown in and settle on a spring, letters rise one by one, a classic gets bitten frame by frame as you scroll and drops real crumbs, the seal pops in. Everything resolves to a complete static poster under `prefers-reduced-motion`.

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
- **Apricot** (apricot): text on dark only: the third value word the footer wordmark and the footer social-button hover, all on chocolate.

### Tertiary (flavour accents)
- **Red Velvet Crimson** (crimson), **Pistachio Sage** (pista), **Raspberry** (rasp): used on their own flavour's slab or feed tile.

### Neutral
- **Sand** (sand): wordmark, pills, seal, manifesto field, clásica slab, text selection, first value word.
- **Cream** (cream): page background, flavours section, light text on dark and saturated fields.
- **Chocolate** (choco): body text on light fields, values and footer fields, marroc slab, seal ink, scrollbar, the `html` background (so overscroll never flashes a light edge), and the shadow tint (`rgb(29 10 6)`).

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
- **Display** (800, clamp 5.5rem / 27.5vw / 22rem, 0.78-0.8): the "Piccino" wordmark in the hero; the footer wordmark uses the same voice at clamp 6rem / 33vw / 30rem (line-height 0.72) in apricot, cropped at the bottom of the footer. Bleeds off the edge (`white-space: nowrap`).
- **Display-sub** (800, clamp 3rem / 15vw / 11rem, 0.8): "bakery" under the hero wordmark; from 900px it is clamp 4rem / 10vw / 10rem and the wordmark is 25.5vw (0.78). In landscape phones both follow height: wordmark min(21vw, 31svh), "bakery" min(10vw, 15svh).
- **Wordmark note** (650, clamp 1rem / 0.85rem + 0.6vw / 1.35rem, 1.2, -0.01em): the line under the hero wordmark; 0.95rem in landscape phones.
- **Value** (800, clamp 3.4rem to 10rem, 0.85): the three value words.
- **Headline** (800, clamp 3rem to 8rem, 0.88): section titles; Instagram title is the same voice, smaller (clamp 2.6rem / 1.4rem + 5vw / 6rem, 0.9).
- **Statement** (780, clamp 2.1rem to 5.6rem, 1.0, max 17ch): the manifesto, revealed word by word.
- **Title** (800, clamp 2.6rem to 5.2rem, 0.92): flavour names.
- **Subhead** (800, clamp 2.2rem to 5rem, 0.95): bite-step lines.
- **Lead** (650, clamp 1.5rem to 2.4rem, 1.1, max 14ch): hero line. **Lead-sm** (700, clamp 1.4rem to 2.2rem, 1.1, max 22ch): footer line; the bite **Remate** (700, clamp 1.5rem / 1.1rem + 1.4vw / 2rem; 1.05rem in landscape phones) uses the same voice. In landscape phones the hero line becomes clamp 1.15rem / 4.8svh / 1.5rem and bite steps clamp 1.5rem / 9svh / 2.6rem.
- **Body** (400-550, clamp 1.0625rem to 1.25rem, 1.45, 26-32ch): flavour and value lines, manifesto sign (650, 1.15rem).
- **Label** (750, 1.05rem): pill buttons and footer column headings (sentence case, sand, no eyebrow styling). **Nav** (650, clamp 0.875rem / 0.75rem + 0.4vw / 0.95rem; small phones sit at 0.875rem): nav links. **Brand** (800, 1.15rem, 1rem under 360px, -0.02em): nav wordmark; the footer logo uses the same 1.15rem (no small-phone step). Sentence case, no tracking.
- **Note** (400, 0.95rem): Instagram handle line, footer column text and the footer legal row.

### Seal-internal sizes
The seal text (14.5 ring text, 25 "Piccino", 10 "BAKERY" sub) is set in SVG viewBox units inside a 200x200 seal, so it scales with the seal and is not a screen-px size; it is not part of the ramp above.

### Named Rules
**The Tight Heavy Rule.** Anything at 2rem or larger is weight ≥ 780 with tracking -0.035em to -0.04em and line-height ≤ 1.0, with `text-wrap: balance` where it wraps. Exceptions that keep ≥ 650: lead lines (1.1 line-height).

## Layout

Stacked full-bleed sections, side padding `gutter` (16-48px). No container grid; copy is held by `ch` measures, while cookies are absolutely positioned and cropped by `overflow: clip`. Section padding is fluid, roughly 90-180px top. Breakpoints: 760px (flavour slabs go side by side, text max 40%) and 900px (hero recomposes: terracotta panel to the right half, red velvet centred and cropped at the bottom). Flavours alternate sides: odd rows text left and cookie right, even rows the reverse with right-aligned text. The bite section is a 420svh scroll track with a sticky stage of 100dvh (100svh as fallback), and its top edge interlocks with the last flavour slab through a terracotta wedge (`::before`, same ~8° cut) that leaves a 10px cream line; under reduced motion it collapses to one static frame. Landscape phones (max-height 520px, landscape) get a recomposed hero and bite stage sized by svh. Crumbs re-place themselves on resize.

**Touch and pointer.** Nav links are at least 44px tall. Hover effects (pill, nav underline, flavour cookie, feed tile) apply only under `(hover: hover) and (pointer: fine)`; on touch they never stick. Reduced motion collapses everything to the static poster. Section order and field colours: hero brown, manifesto sand, flavours cream, bite terra, values chocolate, Instagram brown, footer chocolate. `html` is chocolate with `overscroll-behavior-y: none`.

**Footer.** Classic footer on chocolate: a 3-column grid from 760px (1.5fr / 1fr / 1fr; stacked below) with brand block, "Explorar" links and "Pedidos" info, then a legal row, then the giant apricot wordmark cropped at the bottom edge.

## Elevation & Depth

Depth is photographic, not structural. Cut-out cookies carry one soft drop shadow tinted chocolate (`--shadow-cookie: drop-shadow(0 16px 20px rgb(29 10 6 / .3))`); a single blur pass, because the former two-layer shadow dropped frames on scroll (measured with 4x CPU throttling). Flavour and bite cookie wrappers declare `will-change: transform`, which removed the remaining dropped frames. Only the flavour hover state keeps a deeper two-layer shadow. Layering comes from z-stacking cookies over angled panels. Pills and feed tiles have a soft blurred shadow. No hard offset shadows.

### Named Rules
**The Shadow Belongs To Food Rule.** Shadows exist to make product and the few touchable things (pill, tile, seal) feel like objects; surfaces and fields are always flat. Shadow tint is the chocolate `rgb(29 10 6)`.

## Shapes

Flat colour planes cut at about 8° (the slab clip-path rises 14vw across the viewport, since tan 8° ≈ 0.14); consecutive slabs overlap by that rise so the angles interlock. Rotations everywhere: hero panel -8°, cookies -16° to 18°, seal -12°, feed tiles -3° to 2°. Fully round pills (999px), a circular seal and round 48px social buttons. No borders except one: the footer legal row has a 1px hairline top rule (cream at 22%). The only rounded rectangles are the Instagram feed tiles (18px).

## Components

### Buttons
- **Shape:** full pill (999px).
- **Primary:** sand with chocolate text (≈12.2:1), 750 weight, padding 0.85em 1.4em, inline 20px stroked SVG icon, soft shadow `0 10px 24px -8px rgb(29 10 6 / .45)`. It is the only variant (`pill--sand`) and sits on brown and terra-adjacent fields.
- **Hover / Active:** lifts 2px and tilts -1.5° with a deeper shadow (220ms ease-out); press is 1px down and scale .98 (90ms). Focus: 3px currentColor outline, 4px offset.

### Flavour Slab (signature)
Full-width angled slab per flavour in its own colour, with a 92vw (mobile) / 54vw (desktop) cookie cropped off the opposite edge. Focusable (`tabindex=0`); a tap on touch or pen plays an anime.js spring pop (scale and rotate, chosen by `pointerType`); hover (fine pointers only) and focus scale the cookie 1.07, rotates 4° and deepens its shadow (420ms). Choco dúo uses a hard sand/chocolate split (172° mobile, 100° desktop) instead of a flat colour.

### Seal
Sand circle with chocolate ring and text on a circular path ("SIMPLE · REAL · IRRESISTIBLE · INGREDIENTES REALES"), Piccino/BAKERY in the centre, rotated -12°, pops in with a CSS spring and spins with the hero scroll.

### Navigation
Slim row in the hero on brown: sand wordmark (800, -0.02em) left, three 650-weight links right in cream (Sabores, La mordida, "Catálogo y precios", a placeholder whose " y precios" part shows from 520px); underline on hover (fine pointers only); every link has a 44px minimum touch height. No sticky bar, no mobile menu (links fit at 390px).

### Feed Tile
Square tile in a flavour colour (sand, raspberry, cream, chocolate, pistachio, terracotta), 18px radius, cookie at 86%, staggered rotation; hover scale 1.04 (fine pointers only); a tap plays the spring pop. Illustrative only, labelled as an example account.

### Footer Social Button
Round 48px sand button with a 22px stroked chocolate icon; hover (fine pointers only) turns apricot and lifts 2px with a -4° tilt, press scales .94. Instagram is real; WhatsApp, TikTok and Facebook are placeholders (`data-placeholder`, no jump to top). Footer column links keep a 44px touch height; the legal row sits under a 1px cream-22% hairline.

### Bite Section
Frames swap instantly (opacity 0/1, no crossfade, which showed the whole cookie through the bite hole) with a short squash/nudge away from the bite (70ms out, spring back); the last bite shrinks and fades the cookie. Crumbs fall from each bite and re-place on resize.

### Motion
Two layers. The hero entrance is pure CSS keyframes declared inside `prefers-reduced-motion: no-preference`: letters rise one by one (38ms stagger), cookies fly in on a spring easing built as CSS `linear()` (`--settle`, 1150ms) and the seal pops (`--pop`, 900ms); the `linear()` curves sit behind `@supports` with `--ease-out` as fallback. anime.js (skipped under reduced motion) keeps the scroll-linked work: hero parallax and seal spin, manifesto word reveal (words start at 0.62 opacity so contrast stays at least 3:1), flavour cookie settle, the bite section, and the tap pop. CSS state transitions use `--ease-out` `cubic-bezier(0.16, 1, 0.3, 1)` at 220-420ms. Touch and pen taps on flavour cookies and feed tiles trigger a spring pop (`bounce .6, 560ms`). Images ship as AVIF with WebP fallback in two widths (480 and original) through `<picture>`.

## Do's and Don'ts

### Do:
- **Do** give every new section one full-bleed field from the palette and at least one cookie larger than its headline.
- **Do** crop and rotate product imagery past the viewport edge and give it the chocolate drop shadow.
- **Do** separate areas with colour changes and ~8° angled cuts.
- **Do** use apricot for text on chocolate and cream or sand for text on brown or terracotta.
- **Do** ship a static reduced-motion state that shows the final composition.
- **Do** keep flavour colours tied to their flavour.

### Don't:
- **Don't** draw borders, outlines or boxed cards around content; the feed tiles are the one rounded container and the footer legal hairline is the one rule line.
- **Don't** set terracotta text on a dark field (≈3.15:1), or apricot on light or terracotta fields (≈2.1:1).
- **Don't** set sand text below large bold size on terracotta (≈3.9:1).
- **Don't** add a second typeface or set display type at weights below 780.
- **Don't** use hard offset shadows or grey/black shadows; shadows are soft and chocolate-tinted.
- **Don't** centre everything on cream with equal product cards; that is the category default this system rejects.
