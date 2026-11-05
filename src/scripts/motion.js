import { animate, onScroll, spring, stagger, splitText, utils } from 'animejs';

window.__piccino = true;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// Enlaces todavía sin destino (catálogo, redes pendientes): no saltan al tope de la página al tocarlos.
document.addEventListener('click', (e) => { if (e.target.closest('[data-placeholder]')) e.preventDefault(); });

if (!reduce) {
  // La entrada del hero es CSS puro (global.css): arranca en el primer cuadro sin esperar a este archivo.
  heroScroll();
  manifesto();
  saboresSettle();
  bite();
  tapPop();
  warmBite();
}

/* Al bajar, cada cookie del hero se va a su propia velocidad y el sello gira con el scroll. */
function heroScroll() {
  const cookies = $$('.hero__cookie');
  const seal = $('[data-seal]');
  onScroll({
    target: '[data-hero]', enter: 'top top', leave: 'top bottom',
    onUpdate: (self) => {
      const p = self.progress;
      cookies.forEach((c) => { c.style.translate = `0 ${-p * +c.dataset.depth * 220}px`; });
      seal.style.rotate = `${-12 + p * 140}deg`;
    },
  });
}

/* Manifiesto: las palabras se encienden con el scroll; una choco dúo cruza la sección. */
function manifesto() {
  const words = splitText('[data-split]', { words: true }).words;
  animate(words, {
    opacity: [0.62, 1], ease: 'linear', delay: stagger(60),
    autoplay: onScroll({ target: '[data-split]', enter: '85% top', leave: '45% bottom', sync: 0.25 }),
  });
  animate('[data-cross]', {
    x: ['-75vw', '0vw'], rotate: [-50, 18], ease: 'linear',
    autoplay: onScroll({ target: '.manifesto', enter: 'bottom top', leave: 'top bottom', sync: 0.3 }),
  });
}

/* Sabores: cada cookie llega torcida y se acomoda en su lugar a medida que la tarjeta entra. */
function saboresSettle() {
  $$('[data-settle]').forEach((el) => {
    const dir = +el.dataset.settle;
    animate(el, {
      y: ['22%', '0%'], x: [`${dir * 10}%`, '0%'], rotate: [dir * 22, 0], scale: [0.86, 1],
      ease: 'out(3)',
      autoplay: onScroll({ target: el.closest('[data-sabor]'), enter: 'bottom top', leave: '55% top', sync: 0.35 }),
    });
  });
}

/* Precarga en reposo los fotogramas de la mordida y las migas (son lazy): así el cambio de foto nunca llega a un hueco sin cargar. */
function warmBite() {
  const warm = () => $$('[data-frame], [data-crumb]').forEach((i) => { i.loading = 'eager'; i.decode?.().catch(() => {}); });
  (window.requestIdleCallback || ((f) => setTimeout(f, 1500)))(warm, { timeout: 4000 });
}

/* Tacto: sin hover no hay micro-zoom, así que un toque en una cookie o ficha la hace "saltar" con resorte. */
function tapPop() {
  const pop = (el, dir, big) => animate(el, {
    scale: [{ to: big, duration: 130, ease: 'out(3)' }, { to: 1, ease: spring({ bounce: 0.6, duration: 560 }) }],
    rotate: [{ to: dir * 5, duration: 130, ease: 'out(3)' }, { to: 0, ease: spring({ bounce: 0.6, duration: 560 }) }],
  });
  // Por tipo de puntero y no por tipo de equipo: una notebook táctil usa hover con el mouse y pop con el dedo.
  const touched = (e) => e.pointerType === 'touch' || e.pointerType === 'pen';
  $$('[data-sabor]').forEach((card) => {
    const img = $('.sabor__img', card), dir = +$('[data-settle]', card).dataset.settle;
    card.addEventListener('click', (e) => touched(e) && pop(img, -dir, 1.1));
  });
  $$('.post').forEach((post, i) => post.addEventListener('click', (e) => touched(e) && pop(post, i % 2 ? 1 : -1, 1.08)));
}

/* La mordida: el scroll muerde la clásica; cada mordisco cambia de fotograma y tira migas que caen debajo. */
function bite() {
  const section = $('[data-bite-section]');
  const stage = $('.mordida__stage', section);
  const cookie = $('[data-bite-cookie]', section);
  const frames = $$('[data-frame]', section);
  const crumbs = $$('[data-crumb]', section);
  const steps = $$('.mordida__step', section);
  const remate = $('[data-remate]', section);
  // Centro de cada mordisco en la foto (0–1), igual que en el generador de fotogramas; el último es "se la comió toda".
  const centers = [[0.9, 0.24], [0.08, 0.42], [0.68, 0.94], [0.5, 0.5]];
  const thresholds = [0.14, 0.34, 0.54, 0.78];
  const total = centers.length;
  let count = 0;

  const showFrame = (n) => frames.forEach((f, k) => { f.style.opacity = k === Math.min(n, frames.length - 1) ? '1' : '0'; });

  // Medidas de layout (no cambian con rotate/scale de la animación). Las migas guardan dónde cayeron como
  // fracción de la cookie, para reubicarlas si cambia el tamaño (rotar el celular, redimensionar la ventana).
  const landed = new Map();
  const box = () => ({ x: cookie.offsetLeft, y: cookie.offsetTop, w: cookie.offsetWidth, h: cookie.offsetHeight });
  const placeCrumb = (crumb) => {
    const f = landed.get(crumb), r = box();
    utils.set(crumb, { x: r.x + f.fx * r.w, y: r.y + f.fy * r.w });
  };

  const burst = (i) => {
    const r = box();
    const last = i === total - 1;
    const x0 = r.x + centers[i][0] * r.w;
    const y0 = r.y + centers[i][1] * r.h;
    const floor = r.y + r.h;
    crumbs.slice(i * 3, i * 3 + 3).forEach((crumb) => {
      const spread = r.w * (last ? 0.45 : 0.18);
      const sx = last ? x0 + utils.random(-r.w / 3, r.w / 3) : x0;
      const sy = last ? y0 + utils.random(-r.w / 3, r.w / 3) : y0;
      const tx = sx + utils.random(-spread, spread);
      const ty = floor - utils.random(-10, 40);
      landed.set(crumb, { fx: (tx - r.x) / r.w, fy: (ty - r.y) / r.w });
      animate(crumb, {
        opacity: { to: 1, duration: 60 },
        x: { from: sx, to: tx, ease: 'out(2)', duration: 900 },
        y: [
          { from: sy, to: sy - utils.random(30, 90), ease: 'out(2)', duration: 260 },
          { to: ty, ease: 'in(2)', duration: 520 },
        ],
        rotate: { from: 0, to: utils.random(-260, 260), duration: 900 },
      });
    });
  };

  const biteIn = (i) => {
    if (i === total - 1) {
      animate(cookie, { scale: [1, 0.35], opacity: [1, 0], duration: 360, ease: 'in(2)' });
    } else {
      // Cambio instantáneo de foto (sin fundido: un fundido deja ver la cookie entera a través del hueco) y un
      // golpe de achatamiento que se aleja del mordisco, como si te tiraran de la cookie al morderla.
      showFrame(i + 1);
      const dx = (0.5 - centers[i][0]) * 18, dy = (0.5 - centers[i][1]) * 18;
      const back = spring({ bounce: 0.4, duration: 460 });
      animate(cookie, {
        x: [{ to: dx, duration: 70, ease: 'out(2)' }, { to: 0, ease: back }],
        y: [{ to: dy, duration: 70, ease: 'out(2)' }, { to: 0, ease: back }],
        scale: [{ to: 0.96, duration: 70, ease: 'out(2)' }, { to: 1, ease: back }],
        rotate: [{ to: dx * 0.12, duration: 70, ease: 'out(2)' }, { to: 0, ease: back }],
      });
    }
    burst(i);
  };

  const biteOut = (i) => {
    if (i === total - 1) animate(cookie, { scale: 1, opacity: 1, duration: 300, ease: 'out(3)' });
    else showFrame(i);
    animate(crumbs.slice(i * 3, i * 3 + 3), { opacity: 0, duration: 200 });
  };

  const setCount = (n) => {
    while (count < n) biteIn(count++);
    while (count > n) biteOut(--count);
    steps.forEach((s) => s.classList.toggle('is-on', +s.dataset.step === n));
    remate.classList.toggle('is-on', n === total);
  };

  let raf = 0;
  addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => crumbs.slice(0, count * 3).forEach((c) => landed.has(c) && placeCrumb(c)));
  });

  onScroll({
    target: section, enter: 'top top', leave: 'bottom bottom',
    onUpdate: (self) => setCount(thresholds.filter((t) => self.progress >= t).length),
  });
}
