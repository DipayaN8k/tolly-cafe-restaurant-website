/* =========================================================
   Tolly Café — behaviour
   ========================================================= */
(() => {
  "use strict";

  /* ---------- settings: change these when needed ---------- */
  const WHATSAPP_NUMBER = "918276847112"; // owner's WhatsApp, country code + number, digits only
  const FACEBOOK_URL = "https://www.facebook.com/TollyCafeGolfClub/"; // footer link; leave "" to hide it

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) document.documentElement.classList.add("js-motion");
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const SVGNS = "http://www.w3.org/2000/svg";
  const rupee = (n) => "₹" + n.toLocaleString("en-IN");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } }
  };

  /* ---------- toast ---------- */
  const toastEl = $("#toast");
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-on"), 3200);
  }

  /* ---------- direct WhatsApp links ---------- */
  $$("[data-wa]").forEach((a) => {
    a.href = waLink(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noopener";
  });
  $$("[data-wa-ask]").forEach((a) => {
    a.href = waLink("Hi Tolly Café! Do you have ");
    a.target = "_blank";
    a.rel = "noopener";
  });
  if (FACEBOOK_URL) { const fb = $("#fb-link"); fb.href = FACEBOOK_URL; fb.hidden = false; }
  $("#year").textContent = new Date().getFullYear();

  /* =========================================================
     Lanterns
     ========================================================= */
  function lanternMarkup(x, y, s, drop) {
    return `<g class="lt" transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${s})">
      <g class="lt__sway">
        <g class="lt__glowwrap"><circle class="lt__glow" cx="0" cy="40" r="78" fill="url(#g-glow)" style="animation-duration:${(2.4 + Math.random() * 2).toFixed(2)}s;animation-delay:-${(Math.random() * 3).toFixed(2)}s"/></g>
        <path d="M0 ${-drop} V9" stroke="#0a1a19" stroke-width="2"/>
        <circle cx="0" cy="7" r="5" fill="none" stroke="#0a1a19" stroke-width="2"/>
        <path d="M-9 13 H9 L14 22 H-14Z" fill="#0a1a19"/>
        <ellipse cx="0" cy="40" rx="14" ry="18" fill="#2b2214"/>
        <ellipse class="lt__globe" cx="0" cy="40" rx="14" ry="18" fill="url(#g-globe)"/>
        <path class="lt__flame" d="M0 31 C4 37 4 44 0 47 C-4 44 -4 37 0 31Z" fill="#fff6dc"/>
        <path d="M-15 22 V58 M15 22 V58" stroke="#0a1a19" stroke-width="2.4"/>
        <rect x="-17" y="56" width="34" height="8" rx="2" fill="#0a1a19"/>
      </g>
    </g>`;
  }

  // a sagging wire with lanterns hanging off it; returns the lantern elements in order
  function buildString(group, x0, x1, y, sag, count, scale, strokeW) {
    const cx = (x0 + x1) / 2, cy = y + sag * 2;
    const pt = (u) => ({
      x: (1 - u) ** 2 * x0 + 2 * u * (1 - u) * cx + u * u * x1,
      y: (1 - u) ** 2 * y + 2 * u * (1 - u) * cy + u * u * y
    });
    let html = `<path d="M${x0} ${y} Q${cx} ${cy} ${x1} ${y}" fill="none" stroke="#0a1a19" stroke-width="${strokeW}"/>`;
    for (let i = 0; i < count; i++) {
      const u = 0.1 + (0.8 * i) / (count - 1);
      const p = pt(u);
      html += lanternMarkup(p.x, p.y, scale, 4 + ((i * 7) % 3) * 6);
    }
    group.innerHTML = html;
    const lts = $$(".lt", group);
    if (!reduceMotion) {
      lts.forEach((lt) => {
        const sway = $(".lt__sway", lt);
        const a = document.createElementNS(SVGNS, "animateTransform");
        const amp = (1.2 + Math.random() * 1.6).toFixed(2);
        a.setAttribute("attributeName", "transform");
        a.setAttribute("type", "rotate");
        a.setAttribute("values", `-${amp};${amp};-${amp}`);
        a.setAttribute("dur", `${(4.5 + Math.random() * 3).toFixed(2)}s`);
        a.setAttribute("begin", `-${(Math.random() * 4).toFixed(2)}s`);
        a.setAttribute("repeatCount", "indefinite");
        a.setAttribute("calcMode", "spline");
        a.setAttribute("keySplines", ".45 0 .55 1;.45 0 .55 1");
        sway.appendChild(a);
      });
    }
    return lts;
  }

  function lightInOrder(lanterns, startDelay, step, done) {
    if (reduceMotion) { lanterns.forEach((l) => l.classList.add("is-lit")); done && done(); return; }
    lanterns.forEach((l, i) => setTimeout(() => l.classList.add("is-lit"), startDelay + i * step));
    done && setTimeout(done, startDelay + lanterns.length * step);
  }

  /* ---------- hero: the real lane, lights coming on ---------- */
  const hero = $(".hero");
  const scene = $(".hero__scene");
  const heroImg = $(".hero__photo img");
  if (heroImg) {
  const start = () => requestAnimationFrame(() => {
    hero.classList.add("is-in");
    setTimeout(() => hero.classList.add("is-lit"), reduceMotion ? 0 : 500);
  });
  if (heroImg.complete) start();
  else { heroImg.addEventListener("load", start, { once: true }); heroImg.addEventListener("error", start, { once: true }); setTimeout(start, 1800); }

  // pointer parallax on the photo and the lights
  const photoLayer = $(".hero__photo"), bokeh = $(".hero__bokeh");
  let px = 0, py = 0, tx = 0, ty = 0, rafP = 0;
  function parallaxTick() {
    px += (tx - px) * 0.06;
    py += (ty - py) * 0.06;
    photoLayer.style.transform = `translate(${(px * 12).toFixed(2)}px, ${(py * 8).toFixed(2)}px)`;
    if (bokeh) bokeh.style.transform = `translate(${(px * 24).toFixed(2)}px, ${(py * 14).toFixed(2)}px)`;
    rafP = Math.abs(tx - px) + Math.abs(ty - py) > 0.001 ? requestAnimationFrame(parallaxTick) : 0;
  }
  if (finePointer && !reduceMotion) {
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      tx = -((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = -((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!rafP) rafP = requestAnimationFrame(parallaxTick);
    });
  }

  // scroll: walk in under the sign
  const heroContent = $(".hero__content");
  let ticking = false;
  function onHeroScroll() {
    ticking = false;
    const p = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
    if (p >= 1) return;
    scene.style.transform = `scale(${(1 + p * 0.25).toFixed(4)})`;
    heroContent.style.opacity = (1 - p * 1.4).toFixed(3);
    heroContent.style.transform = `translateY(${(p * -40).toFixed(1)}px)`;
  }
  if (!reduceMotion) {
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onHeroScroll); } }, { passive: true });
  }
  }

  /* ---------- events page: a string of lanterns lights up on arrival ---------- */
  const evSvg = $("#ev-lanterns");
  if (evSvg) {
    const g = document.createElementNS(SVGNS, "g");
    evSvg.appendChild(g);
    lightInOrder(buildString(g, -30, 1230, 2, 52, 11, 0.7, 1.6), 300, 160);
  }

  /* ---------- footer: the last lanterns ---------- */
  const footSvg = $("#foot-lanterns");
  const footG = document.createElementNS(SVGNS, "g");
  footSvg.appendChild(footG);
  const footLts = buildString(footG, -20, 1220, 4, 46, 9, 0.62, 1.6);
  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) { lightInOrder(footLts, 150, 170); obs.disconnect(); }
  }, { threshold: 0.4 }).observe(footSvg);

  /* =========================================================
     Nav
     ========================================================= */
  const nav = $("#nav");
  const toggle = $(".nav__toggle");
  const drawer = $("#drawer");
  const setSolid = () => nav.classList.toggle("is-solid", window.scrollY > 40 || !drawer.hidden);
  setSolid();
  window.addEventListener("scroll", setSolid, { passive: true });
  function setDrawer(open) {
    drawer.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    setSolid();
  }
  toggle.addEventListener("click", () => setDrawer(drawer.hidden));
  $$("a", drawer).forEach((a) => a.addEventListener("click", () => setDrawer(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !drawer.hidden) { setDrawer(false); toggle.focus(); } });

  const onThisPage = (a) => a.pathname === location.pathname || (/\/(index\.html)?$/.test(a.pathname) && /\/(index\.html)?$/.test(location.pathname));
  const navLinks = $$(".nav__links a").filter((a) => a.hash && onThisPage(a));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("is-active", a.hash === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  navLinks.forEach((a) => { const t = document.getElementById(a.hash.slice(1)); if (t) spy.observe(t); });

  /* =========================================================
     The way in: route that draws as you scroll
     ========================================================= */
  const route = $("#route");
  if (route) {
  const stops = $$(".stop", route);
  function onRoute() {
    const r = route.getBoundingClientRect();
    const mark = window.innerHeight * 0.6;
    const p = Math.min(Math.max((mark - r.top) / (r.height - 40), 0), 1);
    route.style.setProperty("--p", p.toFixed(4));
    stops.forEach((s) => s.classList.toggle("is-on", s.getBoundingClientRect().top + 18 < mark));
  }
  if (reduceMotion) { route.style.setProperty("--p", 1); stops.forEach((s) => s.classList.add("is-on")); }
  else {
    let rt = false;
    window.addEventListener("scroll", () => { if (!rt) { rt = true; requestAnimationFrame(() => { rt = false; onRoute(); }); } }, { passive: true });
    onRoute();
  }
  }


  /* =========================================================
     "Why Tollygunge keeps coming back": card motion
     ========================================================= */
  const bento = $(".bento");
  if (bento) {
    const tiles = $$(".tile", bento);
    tiles.forEach((t, i) => {
      t.style.setProperty("--i", i);
      const shine = document.createElement("span");
      shine.className = "tile__shine";
      shine.setAttribute("aria-hidden", "true");
      t.appendChild(shine);
    });
    // reveal when the grid scrolls into view
    if (reduceMotion) bento.classList.add("is-in");
    else new IntersectionObserver((en, obs) => {
      if (en[0].isIntersecting) { bento.classList.add("is-in"); obs.disconnect(); }
    }, { threshold: 0.18 }).observe(bento);

    // desktop: tilt and spotlight follow the cursor
    if (finePointer && !reduceMotion) {
      tiles.forEach((t) => {
        const big = t.classList.contains("tile--a") || t.classList.contains("tile--f");
        const amp = big ? 0.5 : 1;
        t.addEventListener("pointermove", (e) => {
          const r = t.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
          t.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
          t.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
          t.style.setProperty("--rx", `${((0.5 - y) * 8 * amp).toFixed(2)}deg`);
          t.style.setProperty("--ry", `${((x - 0.5) * 10 * amp).toFixed(2)}deg`);
        });
        t.addEventListener("pointerleave", () => { t.style.setProperty("--rx", "0deg"); t.style.setProperty("--ry", "0deg"); });
      });
    }

    // phones: the grid becomes a swipeable carousel with position dots
    const dots = document.createElement("div");
    dots.className = "bento__dots";
    dots.setAttribute("role", "group");
    dots.setAttribute("aria-label", "Choose a card");
    dots.innerHTML = tiles.map((t, i) => `<button type="button" aria-label="Show card ${i + 1}: ${esc($("h4", t).textContent)}"></button>`).join("");
    bento.after(dots);
    const dotBtns = $$("button", dots);
    dotBtns.forEach((b, i) => b.addEventListener("click", () => {
      const t = tiles[i];
      bento.scrollTo({ left: t.offsetLeft - (bento.clientWidth - t.offsetWidth) / 2, behavior: reduceMotion ? "auto" : "smooth" });
    }));
    const setActive = (i) => {
      dotBtns.forEach((b, k) => b.setAttribute("aria-current", String(k === i)));
      tiles.forEach((t, k) => t.classList.toggle("is-side", k !== i));
    };
    const carousel = window.matchMedia("(max-width: 640px)");
    let io;
    const watch = () => {
      if (io) io.disconnect();
      tiles.forEach((t) => t.classList.remove("is-side"));
      if (!carousel.matches) return;
      io = new IntersectionObserver((en) => {
        en.forEach((e) => { if (e.isIntersecting) setActive(tiles.indexOf(e.target)); });
      }, { root: bento, threshold: 0.6 });
      tiles.forEach((t) => io.observe(t));
      setActive(0);
    };
    carousel.addEventListener("change", watch);
    watch();
  }

  /* ---------- the way in: start the walk when it comes into view ---------- */
  const way = $("#way");
  if (way) {
    if (reduceMotion) way.classList.add("is-go");
    else new IntersectionObserver((en, obs) => { if (en[0].isIntersecting) { way.classList.add("is-go"); obs.disconnect(); } }, { threshold: 0.4 }).observe(way);
  }

  /* =========================================================
     Menu
     ========================================================= */
  if ($("#menu-panel")) {
  const MENU = window.TOLLY_MENU || [];
  const QUOTES = window.TOLLY_DISH_QUOTES || {};
  const byKey = new Map();
  MENU.forEach((cat) => cat.items.forEach((it, i) => byKey.set(`${cat.id}:${i}`, { ...it, key: `${cat.id}:${i}`, cat })));
  const priceText = (p) => (p == null ? "Ask us" : rupee(p));

  const PHOTOS = window.TOLLY_PHOTOS || {};
  const byNameAll = new Map([...byKey.values()].map((it) => [it.n, it]));

  // the menu, folded into eight tabs; "popular" dishes get photo cards
  const TABS = [
    { id: "favourites", label: "House favourites", short: "Favourites", icon: "M16 5l3.2 6.6 7.3 1-5.3 5.1 1.3 7.2L16 21.5l-6.5 3.4 1.3-7.2-5.3-5.1 7.3-1z",
      blurb: "The dishes guests mention most in their Google reviews.", cats: [],
      popular: ["Chinese Combo for Two", "Lavish Aamish Combo", "Fish Finger", "Chicken Wings (8 pc)", "Chicken Pasta in White Sauce", "Shorshe Ilish", "Cake with Kheer (Rabri Cake)", "Fruit Salad"] },
    { id: "combos", label: "Combos & thalis", short: "Combos & thalis", icon: "M4 17h24a12 12 0 0 1-24 0zM9 17a7 4 0 0 1 14 0",
      blurb: "Shareable combos for two, Bengali thalis, luchi-paratha plates and family portions.", cats: ["combos", "bong", "luchi", "family"],
      popular: ["Chinese Combo for Two", "Lavish Aamish Combo", "Rice + Dal + Bhaji + Veg + Fish Curry + Salad + Pickle", "Luchi (5 pc) + Aloo Dum"] },
    { id: "chinese", label: "Kolkata-Chinese", short: "Chinese", icon: "M6 14h20a10 10 0 0 1-20 0zM12 4l4 10M20 4l-2 10",
      blurb: "Tangra-style fried rice, Hakka chow, saucy starters and momo.", cats: ["chinese", "momo"],
      popular: ["Chilli Chicken", "Chicken Hakka Chow", "Mixed Fried Rice", "Chicken Steam Momo"] },
    { id: "bengali", label: "Bengali kitchen", short: "Bengali", icon: "M4 18c4-6 10-8 16-6l6-4-1 7c1 1 1 3 0 4l1 7-6-4c-6 2-12 0-16-4z",
      blurb: "Fish, meat and niramish curries cooked light on spice, with rice and breads.", cats: ["aamish", "niramish", "staples"],
      popular: ["Shorshe Ilish", "Chingri Malaikari", "Bhetki Paturi", "Mutton Curry"] },
    { id: "north", label: "North Indian", short: "North Indian", icon: "M6 15h20l-2 9H8zM10 15c0-4 3-7 6-7s6 3 6 7",
      blurb: "Paneer, dal and chole with roti or rice.", cats: ["north"],
      popular: ["Paneer Butter Masala", "Palak Paneer", "Rajma", "Chole"] },
    { id: "snacks", label: "Snacks & breakfast", short: "Snacks", icon: "M5 20l11-13 11 13zM9 20v4h14v-4",
      blurb: "Fried-to-order snacks, sandwiches, salads, omelettes, toast and pancakes.", cats: ["snacks", "sandwich", "breakfast"],
      popular: ["Fish Finger", "Chicken Wings (8 pc)", "CLT Club Sandwich", "Pancake with Honey"] },
    { id: "dessert", label: "Desserts", short: "Desserts", icon: "M9 14h14l-3 12h-8zM10 14a6 6 0 0 1 12 0",
      blurb: "Homely Bengali sweets alongside café classics.", cats: ["dessert"],
      popular: ["Cake with Kheer (Rabri Cake)", "Fruit Salad", "Brownie with Ice Cream", "Caramel Pudding"] },
    { id: "drinks", label: "Coffee & drinks", short: "Drinks", icon: "M7 11h15v8a6 6 0 0 1-6 6h-3a6 6 0 0 1-6-6zM22 13h2a3 3 0 0 1 0 6h-2M12 4c-1 2 1 3 0 5",
      blurb: "Hot coffee, frappes, iced teas and mocktails.", cats: ["drinks"],
      popular: ["Cappuccino", "Cold Coffee", "Hot Chocolate", "Mocktails"] }
  ];
  MENU.forEach((c) => { if (!TABS.some((t) => t.cats.includes(c.id))) TABS[TABS.length - 1].cats.push(c.id); });
  const tabItems = (t) => t.cats.length ? MENU.filter((c) => t.cats.includes(c.id)).flatMap((c) => c.items.map((_, i) => byKey.get(`${c.id}:${i}`))) : t.popular.map((n) => byNameAll.get(n)).filter(Boolean);

  const markOf = (it) => `<span class="mark ${it.veg ? "mark--veg" : "mark--nonveg"}" aria-hidden="true"></span>`;
  const srName = (it) => `<span class="visually-hidden">, ${it.veg ? "vegetarian" : "non-vegetarian"}, ${priceText(it.p)}</span>`;
  const addBtn = (it) => `<button class="add" type="button" data-add="${it.key}" aria-label="Add ${esc(it.n)} to my list">+</button>`;

  function plateCard(it, withQuote) {
    const showTag = it.fav && !withQuote;
    const img = PHOTOS[it.n];
    const q = QUOTES[it.n];
    const text = withQuote && q ? `<p class="plate__quote">“${esc(q[0])}”</p>` : `<p class="plate__desc">${esc(it.d || it.cat.blurb)}</p>`;
    return `<li class="plate">
      <button class="plate__open" type="button" data-open="${it.key}">
        <span class="plate__img">${img ? `<img src="${esc(img)}" alt="" loading="lazy" decoding="async" width="260" height="260">` : ""}</span>
        ${showTag ? '<span class="plate__tag">House favourite</span>' : ""}
        <span class="plate__name">${esc(it.card || it.n)}${srName(it)}</span>
        ${text}
      </button>
      <div class="plate__foot">${markOf(it)}<span class="plate__price${it.p == null ? " is-ask" : ""}">${priceText(it.p)}</span>${addBtn(it)}</div>
    </li>`;
  }
  function itemRow(it) {
    return `<li class="item">
      <button class="item__btn" type="button" data-open="${it.key}">
        ${markOf(it)}
        <span class="item__name">${esc(it.n)}${srName(it)}</span>
        <span class="item__dots" aria-hidden="true"></span>
        <span class="item__price${it.p == null ? " item__price--ask" : ""}" aria-hidden="true">${priceText(it.p)}</span>
      </button>
      ${addBtn(it)}
    </li>`;
  }
  // groups a list of dishes under their original menu-card headings
  function groupedList(items) {
    const groups = [];
    items.forEach((it) => {
      const head = it.g ? `${it.cat.name}: ${it.g}` : it.cat.name;
      let g = groups[groups.length - 1];
      if (!g || g.head !== head) groups.push((g = { head, cat: it.cat, sub: it.g, items: [] }));
      g.items.push(it);
    });
    return groups.map((g) => `<div class="mgroup">
      <h4 class="mgroup__head">${esc(g.sub ? g.sub : g.cat.name)}${g.sub ? "" : ` <span>${esc(g.cat.plain)}</span>`}</h4>
      <ul class="items">${g.items.map(itemRow).join("")}</ul>
    </div>`).join("");
  }

  const tabsEl = $("#menu-tabs"), panel = $("#menu-panel");
  const searchInput = $("#menu-search"), vegOnly = $("#veg-only");
  let activeTab = "favourites";
  tabsEl.innerHTML = TABS.map((t) => `<button class="mtab" type="button" role="tab" id="tab-${t.id}" aria-controls="menu-panel" aria-selected="false" tabindex="-1" data-tab="${t.id}">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="${t.icon}"/></svg><span>${esc(t.short)}</span><em>${tabItems(t).length}</em>
    </button>`).join("");
  const tabBtns = $$(".mtab", tabsEl);

  function renderPanel(animate) {
    const q = searchInput.value.trim().toLowerCase();
    const veg = vegOnly.checked;
    const keep = (it) => !veg || it.veg;
    let html;
    if (q) {
      const hits = [...byKey.values()].filter((it) => keep(it) && `${it.n} ${it.d || ""} ${it.g || ""} ${it.cat.name} ${it.cat.plain}`.toLowerCase().includes(q));
      const withPhoto = hits.filter((it) => PHOTOS[it.n]).slice(0, 4);
      html = `<div class="panel__intro"><h3>Results for “${esc(searchInput.value.trim())}”</h3><p>${hits.length} dish${hits.length === 1 ? "" : "es"}${veg ? ", vegetarian only" : ""}</p></div>`
        + (hits.length
          ? (withPhoto.length ? `<ul class="plates">${withPhoto.map((it) => plateCard(it)).join("")}</ul>` : "") + `<div class="panel__list">${groupedList(hits)}</div>`
          : `<p class="panel__empty">Nothing matches that. Try a shorter word, or <a href="${waLink("Hi Tolly Café! Do you have ")}" target="_blank" rel="noopener">ask us on WhatsApp</a>.</p>`);
      tabBtns.forEach((b) => b.setAttribute("aria-selected", "false"));
    } else {
      const t = TABS.find((x) => x.id === activeTab);
      const popular = t.popular.map((n) => byNameAll.get(n)).filter((it) => it && keep(it));
      const rest = t.cats.length ? tabItems(t).filter((it) => keep(it) && !t.popular.includes(it.n)) : [];
      html = `<div class="panel__intro"><h3>${esc(t.label)}</h3><p>${esc(t.blurb)} <strong>${tabItems(t).length} dishes.</strong></p></div>`
        + (popular.length ? `<ul class="plates">${popular.map((it) => plateCard(it, t.id === "favourites")).join("")}</ul>` : "")
        + (rest.length ? `<div class="panel__list">${groupedList(rest)}</div>` : "")
        + (!popular.length && !rest.length ? `<p class="panel__empty">No vegetarian dishes in this section. Switch off Veg only to see them.</p>` : "");
      tabBtns.forEach((b) => {
        const on = b.dataset.tab === activeTab;
        b.setAttribute("aria-selected", String(on));
        b.tabIndex = on ? 0 : -1;
      });
      panel.setAttribute("aria-labelledby", "tab-" + activeTab);
    }
    panel.innerHTML = html;
    if (animate && !reduceMotion) { panel.classList.remove("is-swap"); void panel.offsetWidth; panel.classList.add("is-swap"); }
    if (typeof syncAddButtons === "function") syncAddButtons();
  }
  function selectTab(id, focus) {
    activeTab = id;
    if (searchInput.value) searchInput.value = "";
    renderPanel(true);
    const b = tabBtns.find((x) => x.dataset.tab === id);
    tabsEl.scrollTo({ left: b.offsetLeft - 16, behavior: reduceMotion ? "auto" : "smooth" });
    if (focus) b.focus();
  }
  tabsEl.addEventListener("click", (e) => { const b = e.target.closest(".mtab"); if (b) selectTab(b.dataset.tab); });
  tabsEl.addEventListener("keydown", (e) => {
    const i = TABS.findIndex((t) => t.id === activeTab);
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: TABS.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    selectTab(TABS[(next + TABS.length) % TABS.length].id, true);
  });
  let st;
  searchInput.addEventListener("input", () => { clearTimeout(st); st = setTimeout(() => renderPanel(false), 140); });
  vegOnly.addEventListener("change", () => renderPanel(true));

  /* ---------- occasion planner ---------- */
  const PLANS = [
    { id: "friends", label: "Adda with friends", dishes: ["Chinese Combo for Two", "Chinese Combo for Two", "Chicken Wings (8 pc)"],
      when: "Evenings after 6, when the yard lights are on.", tip: "Coming as a big group? Message ahead and we'll join tables in the yard." },
    { id: "date", label: "A date for two", dishes: ["Chinese Combo for Two", "Hot Chocolate", "Cake with Kheer (Rabri Cake)"],
      when: "After sundown.", tip: "Ask for a table out in the yard." },
    { id: "family", label: "Family lunch", dishes: ["Lavish Aamish Combo", "Rice + Dal + Bhaji + Veg + Fish Curry + Salad + Pickle", "Fruit Salad"],
      when: "Lunch, from 12 noon.", tip: "The fruit salad is big enough for three." },
    { id: "parents", label: "Taking the parents", dishes: ["Rice + Dal + Bhaji + Veg + Chicken Curry + Salad + Pickle", "Shukto", "Payesh"],
      when: "Afternoons are quieter.", tip: "Everything is cooked light on spice, the way it's made at home." },
    { id: "karaoke", label: "Karaoke night", dishes: ["Chinese Combo for Two", "Mocktails", "Chicken Lollipop (6 pc)"],
      when: "Evenings.", tip: "Message us to check which evenings the mic is out." },
    { id: "veg", label: "All-veg table", dishes: ["Chilli Paneer", "Veg Hakka Chow", "Kaanch Kolar Kofta", "Malpua with Kheer"],
      when: "Any time we're open.", tip: "Switch on Veg only in the menu to see everything else." }
  ];
  const byName = byNameAll;
  const plannerChips = $("#planner-chips"), plannerOut = $("#planner-out");
  plannerChips.innerHTML = PLANS.map((pl) => `<button type="button" data-plan="${pl.id}" aria-pressed="false">${esc(pl.label)}</button>`).join("");
  function showPlan(id) {
    const pl = PLANS.find((x) => x.id === id);
    const dishes = pl.dishes.map((n) => byName.get(n)).filter(Boolean);
    const total = dishes.every((it) => it.p != null) ? dishes.reduce((a, it) => a + it.p, 0) : 0; // only when every dish has a price
    $$("button", plannerChips).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.plan === id)));
    const msg = `Hi Tolly Café! We're planning: ${pl.label}.\nWe'd like:\n${dishes.map((it) => `• ${it.n}`).join("\n")}\n\nCan we book a table for ___ people on ___?`;
    plannerOut.innerHTML = `<dl class="plan">
      <div><dt>Order</dt><dd><ul>${dishes.map((it) => `<li>${esc(it.n)}</li>`).join("")}</ul></dd></div>
      <div><dt>When to come</dt><dd>${esc(pl.when)}</dd></div>
      <div><dt>Good to know</dt><dd>${esc(pl.tip)}${total ? ` Around ${rupee(total)} for the table.` : ""}</dd></div>
      <div class="plan__ctas">
        <button class="btn btn--lantern btn--sm" type="button" data-plan-add="${pl.id}">Add these to my list</button>
        <a class="btn btn--ghost btn--sm" href="${waLink(msg)}" target="_blank" rel="noopener">Send this plan on WhatsApp</a>
      </div>
    </dl>`;
  }
  plannerChips.addEventListener("click", (e) => { const b = e.target.closest("[data-plan]"); if (b) showPlan(b.dataset.plan); });
  plannerOut.addEventListener("click", (e) => {
    const b = e.target.closest("[data-plan-add]");
    if (!b) return;
    PLANS.find((x) => x.id === b.dataset.planAdd).dishes.forEach((n) => { const it = byName.get(n); if (it) list[it.key] = (list[it.key] || 0) + 1; });
    saveList();
    toast(`Added to your list. ${countItems()} items in it now.`);
  });
  showPlan("friends");

  /* =========================================================
     Dish details
     ========================================================= */
  const dish = $("#dish");
  let dishKey = null;
  function openDish(key, opener) {
    const it = byKey.get(key);
    if (!it) return;
    dishKey = key;
    $("#dish-cat").textContent = it.cat.plain + (it.g ? `, ${it.g}` : "");
    $("#dish-name").textContent = it.n;
    const dImg = $("#dish-img");
    dImg.hidden = !PHOTOS[it.n];
    if (PHOTOS[it.n]) { dImg.src = PHOTOS[it.n].replace("w=520&h=520", "w=900&h=560"); dImg.alt = it.n; }
    $("#dish-mark").className = "mark " + (it.veg ? "mark--veg" : "mark--nonveg");
    $("#dish-type").textContent = it.veg ? "Vegetarian" : "Contains egg, fish or meat";
    $("#dish-price").textContent = it.p == null ? "Price on request" : rupee(it.p);
    $("#dish-desc").textContent = it.d || it.cat.blurb;
    const q = QUOTES[it.n];
    $("#dish-quote").hidden = !q;
    if (q) { $("#dish-quote-text").textContent = `“${q[0]}”`; $("#dish-quote-by").textContent = `${q[1]}, on Google`; }
    $("#dish-ask").href = waLink(`Hi Tolly Café! I'd like to ask about the ${it.n}${it.p != null ? ` (${rupee(it.p)})` : ""}. Is it available today?`);
    updateDishAdd();
    dish.returnEl = opener;
    dish.showModal();
  }
  function updateDishAdd() {
    const n = list[dishKey] || 0;
    $("#dish-add").textContent = n ? `Add another (${n} in list)` : "Add to my list";
  }
  $("#dish-add").addEventListener("click", () => { addToList(dishKey); updateDishAdd(); });

  $$("dialog.sheet").forEach((d) => {
    d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
    $$("[data-close]", d).forEach((b) => b.addEventListener("click", () => d.close()));
    d.addEventListener("close", () => { if (d.returnEl && document.contains(d.returnEl)) d.returnEl.focus(); });
  });

  /* =========================================================
     My list → WhatsApp
     ========================================================= */
  let list = store.get("tolly-list", {});
  Object.keys(list).forEach((k) => { if (!byKey.has(k)) delete list[k]; });
  const pill = $("#tray-pill");
  const tray = $("#tray");

  function addToList(key) {
    list[key] = (list[key] || 0) + 1;
    saveList();
    const it = byKey.get(key);
    toast(`Added ${it.n}. ${countItems()} in your list.`);
    pill.classList.remove("is-bump"); void pill.offsetWidth; pill.classList.add("is-bump");
  }
  const countItems = () => Object.values(list).reduce((a, b) => a + b, 0);
  const sumList = () => Object.entries(list).reduce((a, [k, q]) => a + (byKey.get(k).p || 0) * q, 0);
  function saveList() { store.set("tolly-list", list); renderList(); }

  function listMessage() {
    const mode = ($("input[name=mode]:checked", tray) || {}).value || "Dine-in";
    const lines = Object.entries(list).map(([k, q]) => {
      const it = byKey.get(k);
      return `• ${q} × ${it.n}${it.p != null ? ` (${rupee(it.p * q)})` : " (price to confirm)"}`;
    });
    let msg = `Hi Tolly Café! I'd like to order for ${mode.toLowerCase()}:\n\n${lines.join("\n")}\n\nEstimated total: ${rupee(sumList())}`;
    if (mode === "Home delivery") msg += "\nDelivery address: ";
    else if (mode === "Dine-in") msg += "\nWe'll be coming at: ";
    else msg += "\nPick-up time: ";
    return msg;
  }

  function renderList() {
    const n = countItems();
    pill.hidden = n === 0;
    $("#tray-count").textContent = n;
    $("#tray-total").textContent = n ? rupee(sumList()) : "";
    $("#tray-sum").textContent = rupee(sumList());
    $("#tray-empty").hidden = n > 0;
    $(".tray__foot", tray).hidden = n === 0;
    pill.setAttribute("aria-label", `My list: ${n} item${n === 1 ? "" : "s"}, ${rupee(sumList())}. Open to review and send.`);
    $("#tray-items").innerHTML = Object.entries(list).map(([k, q]) => {
      const it = byKey.get(k);
      return `<li>
        <span class="mark ${it.veg ? "mark--veg" : "mark--nonveg"}" aria-hidden="true"></span>
        <span class="t-name">${esc(it.n)}</span>
        <span class="qty"><button type="button" data-dec="${k}" aria-label="Remove one ${esc(it.n)}">−</button><span aria-label="Quantity">${q}</span><button type="button" data-inc="${k}" aria-label="Add one ${esc(it.n)}">+</button></span>
        <span class="t-price">${it.p != null ? rupee(it.p * q) : "Ask"}</span>
      </li>`;
    }).join("");
    $("#tray-send").href = waLink(listMessage());
    syncAddButtons();
  }
  function syncAddButtons() {
    $$(".add[data-add]").forEach((b) => {
      const q = list[b.dataset.add] || 0;
      b.classList.toggle("is-added", q > 0);
      b.textContent = q > 0 ? String(q) : "+";
    });
  }
  pill.addEventListener("click", () => { tray.returnEl = pill; tray.showModal(); });
  tray.addEventListener("change", () => { $("#tray-send").href = waLink(listMessage()); });
  $("#tray-items").addEventListener("click", (e) => {
    const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]");
    if (inc) list[inc.dataset.inc]++;
    if (dec) { const k = dec.dataset.dec; if (--list[k] <= 0) delete list[k]; }
    if (inc || dec) saveList();
  });
  $("#tray-clear").addEventListener("click", () => { list = {}; saveList(); toast("List cleared."); tray.close(); });

  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) { addToList(add.dataset.add); return; }
    const open = e.target.closest("[data-open]");
    if (open) openDish(open.dataset.open, open);
  });
  renderList();
  renderPanel(false);
  }

  /* =========================================================
     Photo gallery: shows only the photos that exist in /photos
     ========================================================= */
  (async function gallery() {
    const section = $("#gallery");
    const prints = $("#gal-prints");
    const strip = $("#gal-strip");
    const entries = window.TOLLY_GALLERY || [];
    if (!entries.length) return;

    // ask the server which files exist (cheap HEAD requests); on file:// just try them all
    const exists = await Promise.all(entries.map((g) =>
      location.protocol === "file:" ? true
        : fetch(g.src, { method: "HEAD", cache: "no-cache" }).then((r) => r.ok && /^image\//.test(r.headers.get("content-type") || "image/")).catch(() => false)
    ));
    const photos = entries.filter((_, i) => exists[i]);
    if (!photos.length) return;

    prints.innerHTML = photos.map((g, i) => `<li class="print${g.wide ? " print--wide" : ""}">
      <svg class="print__wire" viewBox="0 0 100 36" preserveAspectRatio="none" aria-hidden="true"><path d="M0 1 Q50 46 100 1"/></svg>
      <span class="print__peg" aria-hidden="true"></span>
      <button class="print__frame" type="button" data-photo="${i}" aria-label="View larger: ${esc(g.caption)}">
        <span class="print__photo"><img src="${esc(g.src)}" alt="${esc(g.alt || g.caption)}" loading="lazy" decoding="async" width="${g.wide ? 1250 : 960}" height="1000"></span>
        <span class="print__cap">${esc(g.caption)}</span>
      </button>
    </li>`).join("");
    section.hidden = false;
    $$("[data-gal-link]").forEach((a) => (a.hidden = false));

    // a photo that fails to load is taken off the string
    $$(".print img", prints).forEach((img) => img.addEventListener("error", () => {
      img.closest(".print").remove();
      if (!prints.children.length) section.hidden = true;
      updateNav();
    }));

    // arrow buttons
    const navBtns = $$("[data-gal]", section);
    function updateNav() {
      const max = strip.scrollWidth - strip.clientWidth - 2;
      navBtns[0].disabled = strip.scrollLeft <= 2;
      navBtns[1].disabled = strip.scrollLeft >= max;
    }
    navBtns.forEach((b) => b.addEventListener("click", () => {
      strip.scrollBy({ left: Number(b.dataset.gal) * strip.clientWidth * 0.8, behavior: reduceMotion ? "auto" : "smooth" });
    }));
    strip.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);
    updateNav();

    // drag to scroll with a mouse (touch already scrolls natively)
    let drag = null, moved = false;
    strip.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      drag = { x: e.clientX, left: strip.scrollLeft };
      moved = false;
    });
    window.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (!moved && Math.abs(dx) > 6) { moved = true; strip.classList.add("is-dragging"); }
      if (moved) strip.scrollLeft = drag.left - dx;
    });
    window.addEventListener("pointerup", () => {
      if (!drag) return;
      drag = null;
      setTimeout(() => strip.classList.remove("is-dragging"), 0);
    });

    // lightbox
    const lb = $("#lightbox"), lbImg = $("#lb-img"), lbCap = $("#lb-cap"), lbCount = $("#lb-count");
    let current = 0;
    function show(i) {
      const list = $$(".print__frame", prints);
      current = (i + list.length) % list.length;
      const g = photos[Number(list[current].dataset.photo)];
      lbImg.classList.add("is-swapping");
      const swap = () => {
        lbImg.src = g.src;
        lbImg.alt = g.alt || g.caption;
        lbCap.textContent = g.caption;
        lbCount.textContent = `${current + 1} of ${list.length}`;
        lbImg.classList.remove("is-swapping");
      };
      reduceMotion || !lb.open ? swap() : setTimeout(swap, 150);
      $$("[data-lb]", lb).forEach((b) => (b.hidden = list.length < 2));
    }
    prints.addEventListener("click", (e) => {
      const f = e.target.closest(".print__frame");
      if (!f || strip.classList.contains("is-dragging")) return;
      show($$(".print__frame", prints).indexOf(f));
      lb.returnEl = f;
      lb.showModal();
    });
    $$("[data-lb]", lb).forEach((b) => b.addEventListener("click", () => show(current + Number(b.dataset.lb))));
    $("[data-close]", lb).addEventListener("click", () => lb.close());
    lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("lightbox__fig")) lb.close(); });
    lb.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") show(current + 1);
      if (e.key === "ArrowLeft") show(current - 1);
    });
    lb.addEventListener("close", () => { if (lb.returnEl && document.contains(lb.returnEl)) lb.returnEl.focus(); });
    let sx = null;
    lb.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") sx = e.clientX; });
    lb.addEventListener("pointerup", (e) => {
      if (sx === null) return;
      const dx = e.clientX - sx;
      sx = null;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    });
  })();

  /* =========================================================
     Reviews rail
     ========================================================= */
  const reviews = $("#reviews");
  if (reviews) {
  if (!reduceMotion) {
    $$(".rail__track", reviews).forEach((t) => {
      [...t.children].forEach((li) => { const c = li.cloneNode(true); c.setAttribute("aria-hidden", "true"); t.appendChild(c); });
    });
  }
  const pauseBtn = $(".rail__pause");
  pauseBtn.addEventListener("click", () => {
    const paused = reviews.classList.toggle("is-paused");
    pauseBtn.setAttribute("aria-pressed", String(paused));
    pauseBtn.textContent = paused ? "Play reviews" : "Pause reviews";
  });
  }

  /* =========================================================
     Reservation form → WhatsApp
     ========================================================= */
  const form = $("#reserve-form");
  if (form) {
  const fName = $("#f-name"), fWhat = $("#f-what"), fDate = $("#f-date"), fTime = $("#f-time"), fPeople = $("#f-people"), fNote = $("#f-note");
  const pad = (n) => String(n).padStart(2, "0");
  const today = new Date();
  const todayISO = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
  fDate.min = todayISO;
  const label12 = (h, m) => `${((h + 11) % 12) + 1}:${pad(m)} ${h < 12 ? "am" : "pm"}`;
  for (let mins = 12 * 60; mins <= 21 * 60 + 30; mins += 30) {
    const h = Math.floor(mins / 60), m = mins % 60;
    const o = new Option(h === 12 && m === 0 ? "12:00 noon" : label12(h, m), label12(h, m));
    if (h === 19 && m === 30) o.selected = true;
    fTime.add(o);
  }
  $$(".stepper button").forEach((b) => b.addEventListener("click", () => {
    const v = Math.min(200, Math.max(1, (parseInt(fPeople.value, 10) || 1) + parseInt(b.dataset.step, 10)));
    fPeople.value = v;
  }));

  $$("[data-occasion]").forEach((a) => a.addEventListener("click", () => {
    fWhat.value = a.dataset.occasion === "Office or catering order" ? "Office or catering order" : a.dataset.occasion;
    setTimeout(() => fName.focus({ preventScroll: true }), reduceMotion ? 0 : 700);
  }));

  function setErr(input, errEl, bad) {
    input.setAttribute("aria-invalid", bad ? "true" : "false");
    if (bad) input.setAttribute("aria-describedby", errEl.id); else input.removeAttribute("aria-describedby");
    errEl.hidden = !bad;
  }
  fName.addEventListener("blur", () => { if (fName.value.trim()) setErr(fName, $("#err-name"), false); });
  fDate.addEventListener("change", () => setErr(fDate, $("#err-date"), !fDate.value || fDate.value < todayISO));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const badName = !fName.value.trim();
    const badDate = !fDate.value || fDate.value < todayISO;
    setErr(fName, $("#err-name"), badName);
    setErr(fDate, $("#err-date"), badDate);
    if (badName || badDate) { (badName ? fName : fDate).focus(); return; }
    const d = new Date(fDate.value + "T00:00:00");
    const dateText = d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
    const msg = [
      "Hi Tolly Café!",
      `I'd like to ask about: ${fWhat.value}`,
      "",
      `Name: ${fName.value.trim()}`,
      `Date: ${dateText}`,
      `Time: ${fTime.value}`,
      `People: ${fPeople.value}`,
      fNote.value.trim() ? `Note: ${fNote.value.trim()}` : null,
      "",
      "Is there availability?"
    ].filter((l) => l !== null).join("\n");
    const url = waLink(msg);
    const w = window.open(url, "_blank", "noopener");
    if (!w) window.location.href = url;
    toast("Opening WhatsApp with your message…");
  });

  // links from other pages can pick the occasion: visit.html?for=Karaoke%20evening#enquire
  const wanted = new URLSearchParams(location.search).get("for");
  if (wanted && [...fWhat.options].some((o) => o.value === wanted)) fWhat.value = wanted;
  }

  /* =========================================================
     Open now? (Kolkata time)
     ========================================================= */
  (function openStatus() {
    const el = $("#open-status") || document.createElement("p");
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
    const close = day === 0 ? 21 * 60 + 30 : 22 * 60, open = 12 * 60;
    const closeText = day === 0 ? "9:30 pm" : "10 pm";
    let text, color;
    if (mins >= open && mins < close) {
      text = close - mins <= 45 ? `Open now, closing soon at ${closeText}` : `Open now, until ${closeText} tonight`;
      color = "#2f7d32";
    } else {
      text = mins < open ? "Closed right now. Opens today at 12 noon" : "Closed for the night. Opens tomorrow at 12 noon";
      color = "#c7302a";
    }
    el.textContent = text;
    el.style.setProperty("--st", color);
    const heroHours = $("#hero-hours");
    if (heroHours) heroHours.textContent = mins >= open && mins < close ? `Open now, until ${closeText}` : `Opens ${mins < open ? "today" : "tomorrow"} at 12 noon`;
  })();

  /* =========================================================
     Floating WhatsApp: hide over the hero, menu, form and footer
     ========================================================= */
  const fab = $(".fab");
  const hideFor = new Set();
  const fabObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => { en.isIntersecting ? hideFor.add(en.target) : hideFor.delete(en.target); });
    fab.classList.toggle("is-hidden", hideFor.size > 0);
  }, { rootMargin: "-35% 0px -35% 0px" });
  [hero, $(".phead"), $(".ehero"), $("#menu"), $("#enquire"), $("#foot")].filter(Boolean).forEach((el) => fabObs.observe(el));
})();
