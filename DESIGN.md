---
name: Piccino bakery
description: Pop food poster in motion; the cookie is always bigger than the type.
colors:
  cobalt: "#1f3fd1"
  tomato: "#e63b2e"
  butter: "#ffd84d"
  cream: "#fff4e0"
  choco: "#3a2118"
  crimson: "#a3122a"
  pista: "#9db87a"
  rasp: "#d6204f"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(5.5rem, 27.5vw, 22rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 7vw, 8rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.6rem + 4vw, 5.2rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  statement:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.2rem + 4.6vw, 5.6rem)"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 2vw, 2.4rem)"
    fontWeight: 650
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
rounded:
  pill: "999px"
  tile: "18px"
  focus: "6px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  nav: "18px"
components:
  button-pill:
    backgroundColor: "{colors.butter}"
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
    textColor: "{colors.butter}"
  flavour-slab-frambuesa:
    backgroundColor: "{colors.rasp}"
    textColor: "{colors.cream}"
  flavour-slab-clasica:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.choco}"
  feed-tile:
    rounded: "{rounded.tile}"
---

# Design System: Piccino bakery

## Overview

**Creative North Star: "The Pop Cookie Poster"**

Every section is a drenched primary field, and a cut-out cookie photograph, larger than any word on screen, bleeds off its edge. Type is one heavy variable grotesque set tight and huge; colour does the structuring, never lines or boxes. Panels are angled, cookies are tilted, nothing sits square.

Motion is physical: cookies are thrown in and settle on a spring, a classic gets bitten frame by frame as you scroll and drops real crumbs, the seal spins in. Everything resolves to a complete static poster under `prefers-reduced-motion`.

**Key Characteristics:**
- Full-bleed colour fields, one per section, edge to edge.
- Product cut-outs at 55-104vw, rotated (-16° to 18°), cropped by the viewport.
- One typeface, weights 550-800, negative tracking on everything display.
- Angled slabs (~8°) instead of borders or cards.

## Colors

Saturated poster primaries over a warm cream and a dark chocolate, plus one flavour colour per cookie.

### Primary
- **Cobalt Ground** (cobalt): hero and Instagram fields; theme-color. Carries butter and cream type.
- **Tomato Field** (tomato): the hero's angled panel, the bite section, the "Irresistible." word and the footer wordmark.

### Secondary
- **Butter** (butter): wordmark, CTA pills, the seal, the manifesto field, the clásica slab; text selection.

### Tertiary (flavour accents)
- **Red Velvet Crimson** (crimson), **Pistachio Sage** (pista), **Raspberry** (rasp): used only on their own flavour's slab or feed tile.

### Neutral
- **Cream** (cream): page background, flavours section, light text on dark and saturated fields.
- **Chocolate** (choco): body text on light fields, values and footer fields, marroc slab, all shadow tint (`rgb(29 10 6)`).

### Named Rules
**The One Field Rule.** Each section owns exactly one background colour; a new section changes colour rather than adding a box.

**The Large-Only Tomato Rule.** Cream on tomato (≈3.8:1) and tomato on chocolate (≈3.6:1) are for large bold type only (≥24px bold). Body-size text goes on cobalt, chocolate, crimson, butter or cream.

## Typography

**Display Font:** Bricolage Grotesque Variable (opsz axis, `font-optical-sizing: auto`), with ui-sans-serif / system-ui fallback.
**Body Font:** the same family.

**Character:** One chunky, slightly quirky grotesque doing everything from a 22rem wordmark to a 0.95rem note; contrast comes from size and weight, not from a second face.

### Hierarchy
- **Display** (800, 25.5-27.5vw, 0.78-0.8): the "Piccino" wordmark in the hero and footer; allowed to bleed off the edge (`white-space: nowrap`).
- **Headline** (800, up to 8-10rem, 0.85-0.9): section titles and the three value words.
- **Title** (800, up to 5.2rem, 0.92): flavour names; bite-step lines use the same voice at up to 5rem.
- **Statement** (780, up to 5.6rem, 1.0, max 17ch): the manifesto, revealed word by word.
- **Lead** (650, up to 2.4rem, 1.1, max 14ch): hero line, footer line.
- **Body** (400-550, 1.0625-1.25rem fluid, 1.45, 26-32ch): flavour and value lines.
- **Label** (650-750, 0.95-1.05rem): nav links and pill buttons. Sentence case, no tracking.

### Named Rules
**The Tight Heavy Rule.** Anything at 2rem or larger is weight ≥ 780 with tracking -0.035em to -0.04em and line-height ≤ 1.0, with `text-wrap: balance`.

## Layout

Stacked full-bleed sections, side padding `gutter` (16-48px). No container grid; copy is held by `ch` measures, while cookies are absolutely positioned and cropped by `overflow: clip`. Section padding is fluid, roughly 90-180px top. Breakpoints: 760px (flavour slabs go side by side, text max 40%) and 900px (hero recomposes: tomato panel to the right half, red velvet centred and cropped at the bottom). Flavours alternate sides: odd rows text left and cookie right, even rows the reverse with right-aligned text. The bite section is a 420vh scroll track with a sticky 100svh stage; under reduced motion it collapses to one static frame.

## Elevation & Depth

Depth is photographic, not structural. Cut-out cookies carry a soft two-layer drop shadow tinted chocolate (`drop-shadow(0 18px 22px rgb(29 10 6 / .32)) drop-shadow(0 4px 6px rgb(29 10 6 / .2))`); layering comes from z-stacking cookies over angled panels. Pills and feed tiles have a soft blurred shadow. No hard offset shadows.

### Named Rules
**The Shadow Belongs To Food Rule.** Shadows exist to make product and the few touchable things (pill, tile, seal) feel like objects; surfaces and fields are always flat.

## Shapes

Flat colour planes cut at about 8° (the slab clip-path rises 14vw across the viewport, since tan 8° ≈ 0.14); consecutive slabs overlap by that rise so the angles interlock. Rotations everywhere: hero panel -8°, cookies -16° to 18°, seal -12°, feed tiles -3° to 2°. Fully round pills (999px) and a circular seal. No borders; the only rounded rectangles are the Instagram feed tiles (18px).

## Components

### Buttons
- **Shape:** full pill (999px).
- **Primary:** butter on choco text, 750 weight, padding 0.85em 1.4em, inline 20px stroked SVG icon, soft shadow `0 10px 24px -8px rgb(29 10 6 / .45)`.
- **Hover / Active:** lifts 2px and tilts -1.5° with a deeper shadow (220ms ease-out); press is 1px down and scale .98 (90ms). Focus: 3px currentColor outline, 4px offset.

### Flavour Slab (signature)
Full-width angled slab per flavour in its own colour, with a 92vw (mobile) / 54vw (desktop) cookie cropped off the opposite edge. Focusable (`tabindex=0`); hover/focus scales the cookie 1.07, rotates 4° and deepens its shadow (420ms). Choco dúo uses a hard butter/choco split (172° mobile, 100° desktop) instead of a flat colour.

### Seal
Butter circle with choco ring and text on a circular path ("SIMPLE · REAL · IRRESISTIBLE · INGREDIENTES REALES"), Piccino/BAKERY in the centre, rotated -12°, spring-spun in.

### Navigation
Slim row in the hero: butter wordmark (800, -0.02em) left, three 650-weight links right in cream; underline on hover. No sticky bar, no mobile menu (links fit at 390px).

### Feed Tile
Square tile in a flavour colour, 18px radius, cookie at 86%, staggered rotation; hover scale 1.04. Illustrative only, labelled as an example account.

### Motion
anime.js 4.5.0. Entrance: `out(4)` timelines, spring settle (`bounce .28, 1150ms`) for thrown cookies, character stagger 38ms on the wordmark. CSS state transitions use `--ease-out` `cubic-bezier(0.16, 1, 0.3, 1)` at 220-420ms. Scroll-linked effects (manifesto word reveal, bite frames + crumbs) are driven by `onScroll`. Content hidden for entrance is revealed after 2.5s if the script fails.

## Do's and Don'ts

### Do:
- **Do** give every new section one full-bleed field from the palette and at least one cookie larger than its headline.
- **Do** crop and rotate product imagery past the viewport edge and give it the chocolate drop shadow.
- **Do** separate areas with colour changes and ~8° angled cuts.
- **Do** ship a static reduced-motion state that shows the final composition.
- **Do** keep flavour colours tied to their flavour.

### Don't:
- **Don't** draw borders, outlines or boxed cards around content; the feed tiles are the one rounded container.
- **Don't** use body-size text on tomato (contrast below 4.5:1).
- **Don't** add a second typeface or set display type at weights below 780.
- **Don't** use hard offset shadows or grey/black shadows; shadows are soft and chocolate-tinted.
- **Don't** centre everything on cream with equal product cards; that is the category default this system rejects.
