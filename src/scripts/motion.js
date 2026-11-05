import { animate, createTimeline, onScroll, spring, stagger, splitText, utils } from 'animejs';

window.__piccino = true;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

if (!reduce) {
  heroEntrance();
  heroScroll();
  manifesto();
  saboresSettle();
  bite();
}

/* Hero: las cookies entran desde fuera de pantalla y se acomodan con peso. */
function heroEntrance() {
  const chars = splitText('.wordmark__big', { chars: { wrap: 'clip' } }).chars;
  const settle = spring({ bounce: 0.28, duration: 1150 });
  const [rv, pi, ma] = $$('.hero__cookie');

  createTimeline({ defaults: { ease: 'out(4)' } })
    .add('.hero__panel', { opacity: { to: 1, duration: 200 }, x: { from: '45vw' }, duration: 900 }, 0)
    .add('.wordmark', { opacity: { to: 1, duration: 1 } }, 80)
    .add(chars, { y: { from: '105%' }, rotate: { from: 8 }, duration: 760, delay: stagger(38) }, 80)
    .add('.wordmark__small', { y: { from: '0.5em' }, opacity: { from: 0 }, duration: 600 }, 380)
    .add(rv, { opacity: { to: 1, duration: 120 }, x: { from: '-70vw' }, y: { from: '35vh' }, rotate: { from: -70 }, ease: settle }, 260)
    .add(pi, { opacity: { to: 1, duration: 120 }, x: { from: '60vw' }, y: { from: '-45vh' }, rotate: { from: 80 }, ease: settle }, 400)
    .add(ma, { opacity: { to: 1, duration: 120 }, x: { from: '55vw' }, y: { from: '45vh' }, rotate: { from: -55 }, ease: settle }, 520)
    .add('.seal', { opacity: { to: 1, duration: 150 }, scale: { from: 0.2 }, rotate: { from: -120 }, ease: spring({ bounce: 0.45, duration: 900 }) }, 900)
    .add($$('.hero__copy [data-enter="tag"]'), { opacity: { to: 1 }, y: { from: 18 }, duration: 650, delay: stagger(90) }, 820);
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
    opacity: [0.16, 1], ease: 'linear', delay: stagger(60),
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

/* La mordida: el scroll muerde la clásica; cada mordisco tira migas que caen debajo. */
function bite() {
  const section = $('[data-bite-section]');
  const stage = $('.mordida__stage', section);
  const cookie = $('[data-bite-cookie]', section);
  const bites = $$('.bite', section);
  const crumbs = $$('[data-crumb]', section);
  const steps = $$('.mordida__step', section);
  const remate = $('[data-remate]', section);
  const thresholds = [0.14, 0.34, 0.54, 0.78];
  let count = 0;

  const biteCenter = (i) => {
    const c = bites[i].querySelector('circle');
    const r = cookie.getBoundingClientRect();
    const s = stage.getBoundingClientRect();
    return {
      x: r.left - s.left + (c.cx.baseVal.value / 100) * r.width,
      y: r.top - s.top + (c.cy.baseVal.value / 100) * r.height,
      floor: r.bottom - s.top,
      w: r.width,
    };
  };

  const biteIn = (i) => {
    const last = i === bites.length - 1;
    animate(bites[i], { scale: [last ? 0 : 0.5, 1], duration: last ? 420 : 200, ease: 'out(3)' });
    animate(cookie, { rotate: [i % 2 ? 5 : -5, 0], scale: [0.95, 1], ease: spring({ bounce: 0.55, duration: 520 }) });
    // shortcut: las migas se ubican en px al momento del mordisco; si cambia el tamaño de ventana quedan corridas hasta el próximo mordisco.
    const o = biteCenter(i);
    crumbs.slice(i * 3, i * 3 + 3).forEach((crumb) => {
      const spread = last ? o.w * 0.45 : o.w * 0.18;
      const sx = last ? o.x + utils.random(-o.w / 3, o.w / 3) : o.x;
      const sy = last ? o.y + utils.random(-o.w / 3, o.w / 3) : o.y;
      animate(crumb, {
        opacity: { to: 1, duration: 60 },
        x: { from: sx, to: sx + utils.random(-spread, spread), ease: 'out(2)', duration: 900 },
        y: [
          { from: sy, to: sy - utils.random(30, 90), ease: 'out(2)', duration: 260 },
          { to: o.floor - utils.random(-10, 40), ease: 'in(2)', duration: 520 },
        ],
        rotate: { from: 0, to: utils.random(-260, 260), duration: 900 },
      });
    });
  };

  const biteOut = (i) => {
    animate(bites[i], { scale: 0, duration: 180, ease: 'in(2)' });
    animate(crumbs.slice(i * 3, i * 3 + 3), { opacity: 0, duration: 200 });
  };

  const setCount = (n) => {
    while (count < n) biteIn(count++);
    while (count > n) biteOut(--count);
    steps.forEach((s) => s.classList.toggle('is-on', +s.dataset.step === n));
    remate.classList.toggle('is-on', n === bites.length);
  };

  onScroll({
    target: section, enter: 'top top', leave: 'bottom bottom',
    onUpdate: (self) => setCount(thresholds.filter((t) => self.progress >= t).length),
  });
}
