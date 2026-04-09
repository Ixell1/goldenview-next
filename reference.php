<?php
/**
 * Goldenview Homepage Template
 * Import this file into your WordPress theme: <?php include get_template_directory() . '/goldenview-homepage.php'; ?>
 * Or use as standalone page template with: Template Name: Goldenview Homepage
 */
?>
<!DOCTYPE html>
<html lang="sr" data-lang="sr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Goldenview Sokobanja | Apartmani sa bazenom i restoran</title>
  <meta name="description" content="Moderni apartmani sa bazenom, domaći restoran i mir koji zaslužujete. Ocena 9.9 na Booking-u. Rezervišite direktno za najbolju cenu. Sokobanja.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,500&display=swap" rel="stylesheet">
  <style>
    /* ===================== DESIGN TOKENS ===================== */
    :root {
      --cream:       #FAF8F4;
      --cream-2:     #F4F0E8;
      --white:       #FFFFFF;
      --ink:         #0F0E0C;
      --ink-80:      rgba(15,14,12,0.8);
      --gold:        #C9A84C;
      --gold-light:  #E8C87A;
      --gold-10:     rgba(201,168,76,0.10);
      --gold-15:     rgba(201,168,76,0.15);
      --muted:       #7A7570;
      --surface:     #F0EBE1;
      --dark:        #1A1815;
      --dark-80:     rgba(26,24,21,0.80);
      --border:      rgba(201,168,76,0.18);
      --r-sm:        12px;
      --r-md:        20px;
      --r-lg:        28px;
      --r-pill:      100px;
    }

    /* ===================== RESET ===================== */
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior:smooth; font-size:16px; }
    body {
      font-family:'Plus Jakarta Sans', sans-serif;
      background: var(--cream);
      color: var(--ink);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }
    img { display:block; max-width:100%; }
    a { text-decoration:none; color:inherit; }
    button { font-family:inherit; cursor:pointer; border:none; background:none; }

    /* ===================== SCROLLING GRADIENT BG ===================== */
    body::before {
      content:'';
      position:fixed;
      inset:0;
      z-index:-1;
      background:
        radial-gradient(ellipse 80% 60% at 10% 20%, rgba(201,168,76,0.07) 0%, transparent 60%),
        radial-gradient(ellipse 60% 80% at 90% 70%, rgba(201,168,76,0.05) 0%, transparent 60%),
        var(--cream);
      animation: bgShift 18s ease-in-out infinite alternate;
    }
    @keyframes bgShift {
      0%   { background-position: 10% 20%, 90% 70%; }
      100% { background-position: 20% 40%, 80% 50%; }
    }

    /* ===================== TYPOGRAPHY ===================== */
    .cursive {
      font-family:'Cormorant Garamond', serif;
      font-style:italic;
      font-weight:400;
      color:var(--gold);
    }
    .eyebrow {
      display:inline-block;
      font-size:0.75rem;
      font-weight:700;
      letter-spacing:0.12em;
      text-transform:uppercase;
      color:var(--gold);
      margin-bottom:0.85rem;
    }
    h1 { font-size:clamp(2.4rem, 6vw, 4rem); font-weight:800; letter-spacing:-0.025em; line-height:1.08; }
    h2 { font-size:clamp(1.9rem, 4vw, 3rem); font-weight:800; letter-spacing:-0.02em; line-height:1.12; }
    h3 { font-size:clamp(1.15rem, 2vw, 1.5rem); font-weight:700; line-height:1.25; }

    /* ===================== BUTTONS ===================== */
    .btn {
      display:inline-flex; align-items:center; justify-content:center; gap:0.5rem;
      padding:0.85rem 1.9rem; border-radius:var(--r-pill); font-weight:700;
      font-size:0.9rem; transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1);
      white-space:nowrap;
    }
    .btn-gold  { background:var(--gold); color:#fff; }
    .btn-gold:hover { background:var(--gold-light); transform:translateY(-2px); box-shadow:0 8px 24px rgba(201,168,76,0.35); }
    .btn-outline { background:transparent; color:var(--ink); border:2px solid var(--ink); }
    .btn-outline:hover { background:var(--ink); color:#fff; transform:translateY(-2px); }
    .btn-outline-white { background:transparent; color:#fff; border:2px solid rgba(255,255,255,0.6); }
    .btn-outline-white:hover { background:rgba(255,255,255,0.15); border-color:#fff; transform:translateY(-2px); }
    .btn-white { background:#fff; color:var(--ink); }
    .btn-white:hover { background:var(--surface); transform:translateY(-2px); box-shadow:0 8px 20px rgba(0,0,0,0.1); }

    /* ===================== LAYOUT ===================== */
    .container { max-width:1320px; margin:0 auto; padding:0 2rem; }
    .section-pad { padding:4.4rem 0; }

    /* ===================== SCROLL REVEAL ===================== */
    .reveal {
      opacity:0;
      transform:translateY(36px);
      transition:opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.34,1.56,0.64,1);
    }
    .reveal.revealed { opacity:1; transform:translateY(0); }
    .reveal-left  { opacity:0; transform:translateX(-36px); transition:opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.34,1.56,0.64,1); }
    .reveal-left.revealed { opacity:1; transform:translateX(0); }
    .reveal-right { opacity:0; transform:translateX(36px);  transition:opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.34,1.56,0.64,1); }
    .reveal-right.revealed { opacity:1; transform:translateX(0); }
    .delay-1 { transition-delay:0.1s; }
    .delay-2 { transition-delay:0.2s; }
    .delay-3 { transition-delay:0.32s; }
    .delay-4 { transition-delay:0.44s; }

    /* ===================== NAV ===================== */
    .nav {
      position:fixed; top:0; left:0; right:0; z-index:900;
      padding:1.4rem 2rem;
      display:flex; align-items:center; gap:2rem;
      transition:all 0.4s ease;
    }
    .nav.scrolled {
      background:rgba(250,248,244,0.88);
      backdrop-filter:blur(18px) saturate(1.4);
      -webkit-backdrop-filter:blur(18px) saturate(1.4);
      padding:0.9rem 2rem;
      box-shadow:0 2px 32px rgba(0,0,0,0.07);
      border-bottom:1px solid var(--border);
    }
    .nav-logo {
      display:flex; flex-direction:column; line-height:1; gap:1px;
      text-decoration:none;
    }
    .nav-logo-img { height:44px; width:auto; object-fit:contain; }
    .nav-links {
      display:flex; align-items:center; gap:0.25rem;
      list-style:none; margin-left:auto;
    }
    .nav-links a {
      font-size:0.82rem; font-weight:600; padding:0.45rem 0.85rem;
      border-radius:var(--r-pill); color:var(--ink-80);
      transition:all 0.25s;
    }
    .nav-links a:hover { color:var(--ink); background:var(--gold-10); }
    .nav-right { display:flex; align-items:center; gap:1rem; margin-left:1rem; }
    .nav-phone {
      font-size:0.85rem; font-weight:700; color:var(--ink);
      display:flex; align-items:center; gap:0.4rem;
      padding:0.45rem 0.85rem; border-radius:var(--r-pill);
      transition:all 0.25s;
    }
    .nav-phone:hover { color:var(--gold); }
    .lang-toggle { display:flex; gap:0.15rem; background:var(--surface); border-radius:var(--r-pill); padding:3px; }
    .lang-btn {
      font-size:0.72rem; font-weight:700; padding:0.3rem 0.75rem;
      border-radius:var(--r-pill); color:var(--muted); transition:all 0.2s; cursor:pointer;
    }
    .lang-btn.active { background:var(--ink); color:#fff; }
    .nav-cta { font-size:0.82rem; }
    .nav-hamburger { display:none; flex-direction:column; gap:5px; padding:6px; }
    .nav-hamburger span { display:block; width:22px; height:2px; background:var(--ink); border-radius:2px; transition:all 0.3s; }

    /* Mobile nav drawer */
    .mobile-nav {
      position:fixed; inset:0; background:var(--cream); z-index:800;
      transform:translateX(100%); transition:transform 0.4s cubic-bezier(0.16,1,0.3,1);
      display:flex; flex-direction:column; padding:6rem 2rem 3rem;
      gap:0.5rem;
    }
    .mobile-nav.open { transform:translateX(0); }
    .mobile-nav a { font-size:1.8rem; font-weight:800; padding:0.5rem 0; border-bottom:1px solid var(--border); }

    /* ===================== HERO ===================== */
    .hero {
      min-height:100svh;
      display:grid;
      grid-template-columns:1fr 55%;
      align-items:center;
      gap:2.5rem;
      padding:7rem 2rem 3rem;
      max-width:1320px;
      margin:0 auto;
    }
    .hero-content { position:relative; z-index:2; }
    .hero-badge-booking {
      display:inline-flex; align-items:center; gap:0.6rem;
      background:var(--dark); color:#fff;
      padding:0.5rem 1.1rem; border-radius:var(--r-pill);
      font-size:0.78rem; font-weight:700; margin-bottom:1.2rem;
      box-shadow:0 4px 16px rgba(0,0,0,0.15);
    }
    .hero-badge-booking .stars { color:var(--gold); letter-spacing:-1px; }
    .hero-badge-booking .score { color:var(--gold); font-size:1rem; }
    .hero-h1 { margin-bottom:1.2rem; }
    .hero-h1 .line2 { font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:300; color:var(--gold); font-size:1.15em; display:block; }
    .hero-sub {
      font-size:1.05rem; color:var(--muted); line-height:1.7;
      max-width:480px; margin-bottom:2rem;
    }
    .hero-btns { display:flex; gap:1rem; flex-wrap:wrap; margin-bottom:2.2rem; }
    .hero-trust {
      display:flex; align-items:center; gap:1.2rem;
      font-size:0.78rem; color:var(--muted); font-weight:500;
    }
    .hero-trust-dot { width:4px; height:4px; border-radius:50%; background:var(--gold); }

    .hero-image-wrap {
      position:relative; border-radius:var(--r-lg);
      overflow:visible; height:620px;
    }
    .hero-image-wrap img {
      width:100%; height:100%; object-fit:cover;
      border-radius:var(--r-lg);
    }
    /* Floating info cards on hero image */
    .hero-float {
      position:absolute; background:#fff; border-radius:var(--r-md);
      padding:0.75rem 1.1rem; box-shadow:0 8px 32px rgba(0,0,0,0.12);
      font-size:0.82rem; font-weight:700; white-space:nowrap;
      display:flex; align-items:center; gap:0.5rem;
      animation:floatUpDown 3.5s ease-in-out infinite;
      z-index:10;
    }
    .hero-float svg { color:var(--gold); flex-shrink:0; }
    .hero-float-1 { top:14%; left:-22px; animation-delay:0s; }
    .hero-float-2 { top:47%; right:-18px; animation-delay:0.8s; }
    .hero-float-3 { bottom:14%; left:-18px; animation-delay:1.6s; }
    @keyframes floatUpDown {
      0%,100% { transform:translateY(0); }
      50%      { transform:translateY(-10px); }
    }

    /* ===================== AVAILABILITY CHECKER ===================== */
    .availability-bar {
      background:#fff;
      border-radius:var(--r-lg);
      padding:2rem;
      box-shadow:0 12px 48px rgba(0,0,0,0.12);
      max-width:900px;
      margin:0 auto;
      margin-top:-60px;
      position:relative;
      z-index:10;
    }
    .availability-bar-grid {
      display:grid;
      grid-template-columns:1fr 1fr 1fr auto;
      gap:1.5rem;
      align-items:flex-end;
    }
    .availability-field {
      display:flex;
      flex-direction:column;
      gap:0.35rem;
    }
    .availability-field label {
      font-size:0.75rem;
      font-weight:700;
      text-transform:uppercase;
      letter-spacing:0.06em;
      color:var(--gold);
    }
    .availability-field input,
    .availability-field select {
      padding:0.75rem 1rem;
      border:1.5px solid var(--border);
      border-radius:var(--r-md);
      font-size:0.95rem;
      font-family:inherit;
      background:#fff;
      color:var(--ink);
      transition:all 0.2s;
    }
    .availability-field input:focus,
    .availability-field select:focus {
      outline:none;
      border-color:var(--gold);
      box-shadow:0 0 0 3px var(--gold-10);
    }
    .availability-cta {
      padding:0.85rem 2rem;
      font-size:0.9rem;
    }
    .nights-counter {
      text-align:center;
      margin-top:0.75rem;
      font-size:0.88rem;
      font-weight:700;
      color:var(--gold);
      min-height:1.4em;
    }
    /* Availability Modal */
    .avail-modal-overlay {
      position:fixed; inset:0; background:rgba(0,0,0,0.55); z-index:9998;
      display:flex; align-items:center; justify-content:center;
      opacity:0; pointer-events:none; transition:opacity 0.3s;
    }
    .avail-modal-overlay.open { opacity:1; pointer-events:all; }
    .avail-modal {
      background:#fff; border-radius:var(--r-lg); padding:2.5rem;
      max-width:460px; width:90%; box-shadow:0 24px 64px rgba(0,0,0,0.2);
      position:relative;
    }
    .avail-modal h3 { font-size:1.2rem; margin-bottom:0.3rem; }
    .avail-modal .avail-modal-sub { font-size:0.85rem; color:var(--muted); margin-bottom:1.5rem; line-height:1.5; }
    .avail-modal .avail-field { display:flex; flex-direction:column; gap:0.35rem; margin-bottom:1rem; }
    .avail-modal .avail-field label { font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--gold); }
    .avail-modal .avail-field input { padding:0.75rem 1rem; border:1.5px solid var(--border); border-radius:var(--r-md); font-size:0.95rem; font-family:inherit; }
    .avail-modal .avail-field input:focus { outline:none; border-color:var(--gold); box-shadow:0 0 0 3px var(--gold-10); }
    .avail-modal .avail-consent { display:flex; align-items:flex-start; gap:0.5rem; margin:1.2rem 0; }
    .avail-modal .avail-consent input[type="checkbox"] { margin-top:3px; accent-color:var(--gold); }
    .avail-modal .avail-consent label { font-size:0.72rem; color:var(--muted); line-height:1.45; cursor:pointer; }
    .avail-modal .avail-submit { width:100%; }
    .avail-modal .avail-close {
      position:absolute; top:1rem; right:1rem; width:32px; height:32px;
      border-radius:50%; background:var(--surface); display:flex; align-items:center; justify-content:center;
      cursor:pointer; font-size:1.1rem; color:var(--ink); transition:background 0.2s;
    }
    .avail-modal .avail-close:hover { background:var(--border); }
    .avail-modal .avail-success { text-align:center; padding:2rem 0; display:none; }
    .avail-modal .avail-success svg { color:var(--gold); margin-bottom:1rem; }
    .avail-modal .avail-success h3 { margin-bottom:0.5rem; }
    .avail-modal .avail-success p { font-size:0.88rem; color:var(--muted); line-height:1.6; }

    /* ===================== MARQUEE ===================== */
    .marquee-wrap {
      background:var(--dark); overflow:hidden;
      padding:0; margin:2rem 0;
      position:relative;
    }
    .marquee-wrap::before,
    .marquee-wrap::after {
      content:'';
      position:absolute; top:0; bottom:0; width:80px; z-index:2;
    }
    .marquee-wrap::before { left:0;  background:linear-gradient(to right, var(--dark), transparent); }
    .marquee-wrap::after  { right:0; background:linear-gradient(to left,  var(--dark), transparent); }
    .marquee-track {
      display:flex; width:max-content;
      animation:marqueeScroll 28s linear infinite;
      padding:1.4rem 0;
    }
    .marquee-track:hover { animation-play-state:paused; }
    .marquee-item {
      display:flex; align-items:center; gap:1.4rem;
      font-size:0.82rem; font-weight:700; letter-spacing:0.14em;
      text-transform:uppercase; color:rgba(255,255,255,0.55);
      padding:0 2rem; white-space:nowrap;
    }
    .marquee-dot { width:5px; height:5px; border-radius:50%; background:var(--gold); flex-shrink:0; }
    .marquee-item .highlight { color:var(--gold-light); }
    @keyframes marqueeScroll {
      0%   { transform:translateX(0); }
      100% { transform:translateX(-50%); }
    }

    /* ===================== VIDEO SECTION ===================== */
    .video-wrap {
      position:relative;
      padding-bottom:56.25%;
      height:0;
      overflow:hidden;
      border-radius:var(--r-lg);
      box-shadow:0 12px 40px rgba(0,0,0,0.1);
      margin-top:2rem;
    }
    .video-wrap iframe {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      border:none;
      border-radius:var(--r-lg);
    }

    /* ===================== ABOUT ===================== */
    .about-grid {
      display:grid; grid-template-columns:1fr 1fr;
      gap:4rem; align-items:center;
    }
    .about-images { position:relative; height:560px; }
    .about-img-main {
      position:absolute; top:0; left:0; width:78%; height:80%;
      border-radius:var(--r-lg); overflow:hidden;
      box-shadow:0 24px 64px rgba(0,0,0,0.12);
    }
    .about-img-main img { width:100%; height:100%; object-fit:cover; }
    .about-img-sec {
      position:absolute; bottom:0; right:0; width:54%; height:55%;
      border-radius:var(--r-lg); overflow:hidden;
      box-shadow:0 16px 48px rgba(0,0,0,0.14);
      border:4px solid var(--cream);
    }
    .about-img-sec img { width:100%; height:100%; object-fit:cover; }
    .about-blob {
      position:absolute; width:280px; height:280px;
      background:radial-gradient(circle, rgba(201,168,76,0.22), transparent 70%);
      border-radius:50%; top:15%; left:-8%; z-index:-1; filter:blur(30px);
    }
    .about-content h2 { margin:0.5rem 0 1.2rem; }
    .about-text { color:var(--muted); line-height:1.75; font-size:1rem; margin-bottom:1.8rem; }
    .stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem 2.5rem; margin-top:2rem; }
    .stat-item { padding-top:1.2rem; border-top:2px solid var(--border); }
    .stat-number { display:block; font-size:2.2rem; font-weight:800; color:var(--gold); line-height:1; margin-bottom:0.3rem; }
    .stat-label { font-size:0.82rem; color:var(--muted); font-weight:500; line-height:1.3; }

    /* ===================== SERVICES BENTO ===================== */
    .services-section { background:transparent; }
    .section-header { text-align:center; max-width:560px; margin:0 auto 2.4rem; }
    .section-header h2 { margin:0.4rem 0 0.8rem; }
    .section-header p { color:var(--muted); line-height:1.7; }

    .bento-grid {
      display:grid;
      grid-template-columns:1fr 1fr;
      grid-template-rows:320px 220px;
      gap:1.2rem;
      max-width:1100px; margin:0 auto;
    }
    .bento-card {
      position:relative; border-radius:var(--r-lg);
      overflow:hidden; cursor:pointer;
    }
    .bento-card:nth-child(1) { grid-row:1/3; }
    .bento-card img { width:100%; height:100%; object-fit:cover; transition:transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
    .bento-card:hover img { transform:scale(1.06); }
    .bento-overlay {
      position:absolute; inset:0;
      background:linear-gradient(to top, rgba(15,14,12,0.82) 0%, rgba(15,14,12,0.15) 55%, transparent 100%);
      display:flex; flex-direction:column; justify-content:flex-end;
      padding:1.8rem;
    }
    .bento-pill {
      display:inline-block; background:rgba(255,255,255,0.18);
      backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
      border:1px solid rgba(255,255,255,0.28);
      color:#fff; font-size:0.68rem; font-weight:700;
      letter-spacing:0.1em; text-transform:uppercase;
      padding:0.32rem 0.85rem; border-radius:var(--r-pill);
      margin-bottom:0.7rem; width:fit-content;
    }
    .bento-title { font-size:1.55rem; font-weight:800; color:#fff; margin-bottom:0.6rem; line-height:1.2; }
    .bento-card:nth-child(1) .bento-title { font-size:2rem; }
    .bento-link {
      color:var(--gold-light); font-size:0.82rem; font-weight:700;
      display:inline-flex; align-items:center; gap:0.4rem;
      transition:gap 0.25s;
    }
    .bento-link:hover { gap:0.75rem; }

    /* ===================== APARTMENTS ===================== */
    .apts-section { background:var(--surface); border-radius:2rem; margin:0 1.5rem; overflow:hidden; padding:4rem 2rem; }
    .apt-slider-wrap { position:relative; overflow:hidden; margin-top:2.5rem; }
    .apt-slider-track {
      display:flex; gap:1.5rem;
      transition:transform 0.55s cubic-bezier(0.16,1,0.3,1);
    }
    .apt-card {
      flex:0 0 calc(33.333% - 1rem);
      background:#fff; border-radius:var(--r-lg); overflow:hidden;
      box-shadow:0 4px 20px rgba(0,0,0,0.06);
      transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s;
    }
    .apt-card:hover { transform:translateY(-8px); box-shadow:0 20px 56px rgba(0,0,0,0.11); }
    .apt-img { height:220px; overflow:hidden; position:relative; }
    .apt-img img { width:100%; height:100%; object-fit:cover; transition:transform 0.6s ease; }
    .apt-card:hover .apt-img img { transform:scale(1.07); }
    .apt-badge {
      position:absolute; top:0.85rem; left:0.85rem;
      background:var(--dark); color:#fff;
      font-size:0.65rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;
      padding:0.3rem 0.75rem; border-radius:var(--r-pill);
    }
    .apt-body { padding:1.5rem; }
    .apt-body h3 { margin-bottom:0.3rem; font-size:1.15rem; }
    .apt-body h3 .cursive { font-size:1.05em; }
    .apt-meta { font-size:0.78rem; color:var(--muted); margin-bottom:1rem; }
    .apt-pills { display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1.2rem; }
    .apt-pill {
      background:var(--surface); color:var(--ink); font-size:0.7rem;
      font-weight:600; padding:0.28rem 0.72rem; border-radius:var(--r-pill);
    }
    .apt-footer {
      display:flex; align-items:center; justify-content:space-between;
      padding-top:1.1rem; border-top:1px solid var(--border);
    }
    .apt-price-wrap .price-from { font-size:0.68rem; color:var(--muted); display:block; }
    .apt-price-wrap .price-amount { font-size:1.25rem; font-weight:800; color:var(--gold); }
    .apt-cta { font-size:0.78rem; padding:0.55rem 1.2rem; }
    .apt-slider-nav {
      display:flex; justify-content:center; align-items:center;
      gap:1rem; margin-top:2rem;
    }
    .apt-slider-btn {
      width:44px; height:44px; border-radius:50%;
      background:#fff; border:1.5px solid var(--border);
      display:flex; align-items:center; justify-content:center;
      cursor:pointer; transition:all 0.3s;
      box-shadow:0 2px 8px rgba(0,0,0,0.06);
      color:#1B4332;
    }
    .apt-slider-btn svg { stroke:#1B4332; }
    .apt-slider-btn:hover { background:var(--gold); border-color:var(--gold); color:#fff; }
    .apt-slider-btn:hover svg { stroke:#fff; }
    .apt-detail-btn { display:block; text-align:center; margin-top:2.5rem; }
    .apt-detail-btn .btn { font-size:0.95rem; padding:1rem 2.5rem; }

    /* ===================== DESTINATION ===================== */
    .dest-section {
      background:var(--dark); border-radius:2rem;
      margin:0 1.5rem; overflow:hidden;
    }
    .dest-grid {
      display:grid; grid-template-columns:1fr 1fr;
      align-items:center; min-height:520px;
    }
    .dest-content { padding:5rem 4rem 5rem 3.5rem; }
    .dest-content .eyebrow { color:rgba(201,168,76,0.85); }
    .dest-content h2 { color:#fff; margin:0.5rem 0 1.2rem; }
    .dest-content h2 .cursive { color:var(--gold-light); }
    .dest-text { color:rgba(255,255,255,0.65); line-height:1.75; margin-bottom:2rem; }
    .dest-features { display:flex; flex-direction:column; gap:1.4rem; }
    .dest-feat { display:flex; gap:1rem; align-items:flex-start; }
    .dest-feat-icon {
      width:40px; height:40px; border-radius:50%;
      background:rgba(201,168,76,0.15); border:1px solid rgba(201,168,76,0.25);
      display:flex; align-items:center; justify-content:center;
      flex-shrink:0; color:var(--gold);
    }
    .dest-feat h4 { font-size:0.9rem; font-weight:700; color:#fff; margin-bottom:0.2rem; }
    .dest-feat p { font-size:0.82rem; color:rgba(255,255,255,0.55); line-height:1.5; }
    .dest-image { height:100%; min-height:520px; overflow:hidden; max-height:520px; }
    .dest-image img { width:100%; height:100%; object-fit:cover; max-height:520px; }

    /* ===================== BENEFITS ===================== */
    .benefits-grid {
      display:grid; grid-template-columns:repeat(4,1fr); gap:1.5rem;
      margin-top:3rem;
    }
    .benefit-card {
      background:#fff; border-radius:var(--r-lg); padding:2rem 1.5rem;
      text-align:center; box-shadow:0 4px 16px rgba(0,0,0,0.05);
      transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s;
    }
    .benefit-card:hover { transform:translateY(-7px); box-shadow:0 16px 40px rgba(0,0,0,0.09); }
    .benefit-icon {
      width:60px; height:60px; background:var(--gold-10);
      border:1.5px solid rgba(201,168,76,0.3);
      border-radius:50%; display:flex; align-items:center; justify-content:center;
      margin:0 auto 1.2rem; color:var(--gold);
    }
    .benefit-card h3 { font-size:1rem; margin-bottom:0.55rem; }
    .benefit-card p { font-size:0.83rem; color:var(--muted); line-height:1.6; }

    /* ===================== RESTAURANT ===================== */
    .rest-grid {
      display:grid; grid-template-columns:1fr 1fr;
      gap:4rem; align-items:center;
    }
    .rest-mosaic {
      display:grid; grid-template-columns:1fr 1fr;
      grid-template-rows:220px 220px; gap:1rem;
    }
    .rest-mosaic-item { border-radius:var(--r-md); overflow:hidden; }
    .rest-mosaic-item:first-child { grid-row:1/3; border-radius:var(--r-lg); }
    .rest-mosaic-item img { width:100%; height:100%; object-fit:cover; transition:transform 0.6s ease; }
    .rest-mosaic-item:hover img { transform:scale(1.06); }
    .rest-content h2 { margin:0.5rem 0 1.2rem; }
    .rest-content h2 .cursive { color:var(--gold); }
    .rest-text { color:var(--muted); line-height:1.75; margin-bottom:1.5rem; }
    .rest-tags { display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:2rem; }
    .rest-tag {
      background:var(--surface); color:var(--ink);
      font-size:0.75rem; font-weight:600; padding:0.4rem 0.9rem; border-radius:var(--r-pill);
    }

    /* ===================== TESTIMONIALS ===================== */
    .testi-section { background:var(--surface); border-radius:2rem; margin:0 1.5rem; padding:4rem 2rem; overflow:hidden; }
    .booking-authority {
      display:inline-flex; align-items:center; gap:1rem;
      background:#fff; border-radius:var(--r-md); padding:1rem 1.5rem;
      box-shadow:0 4px 20px rgba(0,0,0,0.07); margin:2rem auto 3rem;
      border:1px solid var(--border);
    }
    .booking-logo-text {
      font-size:1.1rem; font-weight:800; color:#003580; letter-spacing:-0.02em;
    }
    .booking-score-big { font-size:2.8rem; font-weight:800; color:var(--gold); line-height:1; }
    .booking-score-label { font-size:0.72rem; font-weight:600; color:var(--muted); }
    .booking-reviews { font-size:0.78rem; color:var(--muted); }
    .booking-divider { width:1px; height:48px; background:var(--border); }

    /* Carousel */
    .testi-carousel { position:relative; overflow:hidden; margin-top:2rem; }
    .testi-track {
      display:flex; gap:1.5rem;
      transition:transform 0.55s cubic-bezier(0.16,1,0.3,1);
    }
    .testi-card {
      flex:0 0 340px; background:#fff; border-radius:var(--r-lg);
      padding:2rem; box-shadow:0 6px 24px rgba(0,0,0,0.07);
    }
    .testi-stars { color:var(--gold); font-size:1rem; letter-spacing:2px; margin-bottom:0.8rem; }
    .testi-quote { font-size:0.92rem; color:var(--ink); line-height:1.7; font-style:italic; margin-bottom:1.4rem; }
    .testi-headline { font-size:0.75rem; font-weight:700; color:var(--gold); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:0.5rem; }
    .testi-author { font-weight:700; font-size:0.88rem; }
    .testi-meta { font-size:0.75rem; color:var(--muted); margin-top:0.15rem; }
    .testi-controls {
      display:flex; justify-content:center; align-items:center; gap:1rem; margin-top:2rem;
    }
    .testi-btn {
      width:44px; height:44px; border-radius:50%;
      background:#fff; border:1.5px solid var(--border);
      display:flex; align-items:center; justify-content:center;
      cursor:pointer; transition:all 0.3s;
      box-shadow:0 2px 8px rgba(0,0,0,0.06);
      color:#1B4332;
    }
    .testi-btn svg { stroke:#1B4332; }
    .testi-btn:hover { background:var(--gold); border-color:var(--gold); color:#fff; }
    .testi-btn:hover svg { stroke:#fff; }
    .testi-dots { display:flex; gap:0.5rem; }
    .testi-dot {
      width:8px; height:8px; border-radius:50%;
      background:var(--border); cursor:pointer; transition:all 0.3s;
    }
    .testi-dot.active { background:var(--gold); width:24px; border-radius:4px; }

    /* ===================== GALLERY SLIDER ===================== */
    .gallery-section { padding:5.5rem 0; }
    .gallery-slider-wrap { position:relative; overflow:hidden; border-radius:var(--r-lg); margin-top:3rem; }
    .gallery-slider-track {
      display:flex; gap:1rem;
      transition:transform 0.5s cubic-bezier(0.16,1,0.3,1);
    }
    .gallery-slide {
      flex:0 0 calc(33.333% - 0.67rem); border-radius:var(--r-md);
      overflow:hidden; aspect-ratio:3/4; cursor:pointer;
    }
    .gallery-slide img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; }
    .gallery-slide:hover img { transform:scale(1.06); }
    .gallery-nav {
      display:flex; justify-content:center; align-items:center;
      gap:1rem; margin-top:1.5rem;
    }
    .gallery-btn {
      width:44px; height:44px; border-radius:50%;
      background:#fff; border:1.5px solid var(--border);
      display:flex; align-items:center; justify-content:center;
      cursor:pointer; transition:all 0.3s;
      box-shadow:0 2px 8px rgba(0,0,0,0.06);
      color:#1B4332;
    }
    .gallery-btn svg { stroke:#1B4332; }
    .gallery-btn:hover { background:var(--gold); border-color:var(--gold); color:#fff; }
    .gallery-btn:hover svg { stroke:#fff; }
    .gallery-dots { display:flex; gap:0.5rem; }
    .gallery-dot {
      width:7px; height:7px; border-radius:50%;
      background:var(--border); cursor:pointer; transition:all 0.25s;
    }
    .gallery-dot.active { background:var(--gold); width:22px; border-radius:4px; }

    /* Lightbox */
    .lightbox {
      position:fixed; inset:0; background:rgba(0,0,0,0.92);
      z-index:9999; display:flex; align-items:center; justify-content:center;
      opacity:0; pointer-events:none; transition:opacity 0.3s;
    }
    .lightbox.open { opacity:1; pointer-events:all; }
    .lightbox img { max-width:90vw; max-height:90vh; border-radius:var(--r-md); object-fit:contain; }
    .lightbox-close {
      position:absolute; top:1.5rem; right:1.5rem;
      color:#fff; font-size:2rem; cursor:pointer; line-height:1;
      width:44px; height:44px; display:flex; align-items:center; justify-content:center;
      background:rgba(255,255,255,0.1); border-radius:50%;
    }

    /* ===================== CTA ===================== */
    .cta-section {
      position:relative; border-radius:2rem; overflow:hidden;
      margin:0 1.5rem; text-align:center; color:#fff; padding:4.8rem 2rem;
    }
    .cta-bg { position:absolute; inset:0; z-index:0; }
    .cta-bg img { width:100%; height:100%; object-fit:cover; }
    .cta-bg::after {
      content:''; position:absolute; inset:0;
      background:linear-gradient(135deg, rgba(15,14,12,0.72) 0%, rgba(26,24,21,0.58) 100%);
    }
    .cta-content { position:relative; z-index:2; max-width:640px; margin:0 auto; }
    .cta-content .eyebrow { color:var(--gold-light); }
    .cta-content h2 { color:#fff; margin:0.5rem 0 1.2rem; }
    .cta-content p { color:rgba(255,255,255,0.72); line-height:1.7; margin-bottom:2rem; }
    .cta-btns { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
    .cta-note { font-size:0.78rem; color:rgba(255,255,255,0.45); margin-top:1rem; }

    /* ===================== FOOTER ===================== */
    .footer {
      background:var(--dark); color:#fff;
      padding:5rem 2rem 2rem; position:relative; overflow:hidden;
    }
    .footer::before {
      content:'GOLDENVIEW'; position:absolute;
      top:50%; left:50%; transform:translate(-50%,-50%);
      font-size:14vw; font-weight:800; letter-spacing:0.04em;
      opacity:0.035; white-space:nowrap; z-index:0; pointer-events:none;
    }
    .footer-grid {
      display:grid; grid-template-columns:2fr 1fr 1fr 1.5fr; gap:3rem;
      max-width:1320px; margin:0 auto; position:relative; z-index:1;
      padding-bottom:3rem; border-bottom:1px solid rgba(255,255,255,0.07);
    }
    .footer-brand .footer-logo { height:52px; width:auto; margin-bottom:1rem; filter:brightness(1.1); }
    .footer-brand p { font-size:0.85rem; color:rgba(255,255,255,0.5); line-height:1.7; max-width:260px; }
    .footer-socials { display:flex; gap:0.75rem; margin-top:1.5rem; }
    .footer-social-btn {
      width:38px; height:38px; border-radius:50%;
      border:1px solid rgba(255,255,255,0.15); display:flex;
      align-items:center; justify-content:center;
      color:rgba(255,255,255,0.5); transition:all 0.25s;
    }
    .footer-social-btn:hover { border-color:var(--gold); color:var(--gold); }
    .footer-col h4 { font-size:0.72rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:var(--gold); margin-bottom:1.2rem; }
    .footer-col a, .footer-col p {
      display:block; font-size:0.85rem; color:rgba(255,255,255,0.5);
      margin-bottom:0.65rem; transition:color 0.2s; line-height:1.5;
    }
    .footer-col a:hover { color:#fff; }
    .footer-contact-row { display:flex; align-items:flex-start; gap:0.75rem; margin-bottom:0.9rem; }
    .footer-contact-icon { color:var(--gold); flex-shrink:0; margin-top:1px; }
    .footer-bottom {
      text-align:center; padding-top:2rem;
      font-size:0.78rem; color:rgba(255,255,255,0.28);
      position:relative; z-index:1; max-width:1320px; margin:0 auto;
    }

    /* ===================== FLOATING CTA BAR ===================== */
    .float-bar {
      position:fixed; bottom:1.5rem; right:1.5rem; z-index:800;
      display:flex; flex-direction:column; gap:0.75rem;
      opacity:0; pointer-events:none;
      transform:translateY(16px);
      transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);
    }
    .float-bar.visible { opacity:1; pointer-events:all; transform:translateY(0); }
    .float-btn {
      width:52px; height:52px; border-radius:50%;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 6px 20px rgba(0,0,0,0.18);
      transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
    }
    .float-btn:hover { transform:scale(1.1); }
    .float-wa  { background:#25D366; }
    .float-tel { background:var(--gold); }

    /* ===================== RESPONSIVE ===================== */
    @media (max-width:1024px) {
      .hero { grid-template-columns:1fr; padding:7rem 1.5rem 3rem; }
      .hero-image-wrap { height:420px; }
      .hero-float-1, .hero-float-2, .hero-float-3 { display:none; }
      .availability-bar-grid { grid-template-columns:1fr 1fr; }
      .availability-cta { grid-column:1/-1; }
      .about-grid { grid-template-columns:1fr; gap:3rem; }
      .about-images { height:380px; }
      .bento-grid { grid-template-rows:280px 200px; }
      .dest-grid { grid-template-columns:1fr; }
      .dest-image { min-height:320px; max-height:320px; }
      .benefits-grid { grid-template-columns:repeat(2,1fr); }
      .rest-grid { grid-template-columns:1fr; gap:3rem; }
      .footer-grid { grid-template-columns:1fr 1fr; }
      .apt-card { flex:0 0 calc(50% - 0.75rem); }
    }
    @media (max-width:768px) {
      .nav-links, .nav-cta, .nav-phone { display:none; }
      .nav-hamburger { display:flex; }
      .bento-grid { grid-template-columns:1fr; grid-template-rows:auto; gap:1rem; }
      .bento-card { height:260px; }
      .bento-card:nth-child(1) { grid-row:auto; height:320px; }
      .apt-card { flex:0 0 calc(100% - 0rem); }
      .benefits-grid { grid-template-columns:1fr 1fr; }
      .rest-mosaic { grid-template-columns:1fr; grid-template-rows:auto; }
      .rest-mosaic-item { height:200px; }
      .rest-mosaic-item:first-child { grid-row:auto; height:240px; }
      .availability-bar-grid { grid-template-columns:1fr; }
      .availability-cta { width:100%; }
      .footer-grid { grid-template-columns:1fr; gap:2rem; }
      .gallery-slide { flex:0 0 calc(80% - 0.5rem); }
      .apts-section, .dest-section, .testi-section, .cta-section { margin:0 0.75rem; }
    }
    @media (max-width:480px) {
      h1 { font-size:2.1rem; }
      h2 { font-size:1.65rem; }
      .benefits-grid { grid-template-columns:1fr; }
      .hero-btns { flex-direction:column; }
      .cta-btns { flex-direction:column; align-items:center; }
    }

    /* ===================== MOBILE TOUCH FIXES ===================== */
    /* Prevent zoom on double-tap for all slider buttons and interactive elements */
    .apt-slider-btn,
    .testi-btn,
    .gallery-btn,
    .apt-slider-wrap,
    .testi-carousel,
    .gallery-slider-wrap,
    .apt-card,
    .testi-card {
      touch-action: manipulation;
    }
    /* Slider tracks need pan-x for horizontal swipe */
    .apt-slider-track,
    .testi-track,
    .gallery-slider-track {
      touch-action: pan-x;
      -webkit-user-select: none;
      user-select: none;
    }

    /* ===================== RESPONSIVE VIDEO ===================== */
    .video-desktop { display:block; }
    .video-mobile { display:none; }
    @media (max-width:768px) {
      .video-desktop { display:none; }
      .video-mobile { display:block; }
    }

    /* Vertical video wrapper for mobile */
    .video-wrap-vertical {
      position:relative;
      padding-bottom:177.78%; /* 9:16 aspect ratio */
      height:0;
      overflow:hidden;
      border-radius:var(--r-lg);
      box-shadow:0 12px 40px rgba(0,0,0,0.1);
      margin-top:2rem;
      max-width:400px;
      margin-left:auto;
      margin-right:auto;
    }
    .video-wrap-vertical iframe {
      position:absolute;
      top:0; left:0;
      width:100%; height:100%;
      border:none;
      border-radius:var(--r-lg);
    }

    /* ===================== PROMO PACKAGES ===================== */
    .promo-section {
      padding:4.4rem 0 3rem;
    }
    .promo-grid {
      display:grid;
      grid-template-columns:repeat(3, 1fr);
      gap:1.5rem;
      margin-top:2.5rem;
    }
    .promo-card {
      position:relative;
      background:#fff;
      border-radius:var(--r-lg);
      overflow:hidden;
      box-shadow:0 8px 32px rgba(0,0,0,0.08);
      transition:transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s;
      display:flex;
      flex-direction:column;
    }
    .promo-card:hover {
      transform:translateY(-8px);
      box-shadow:0 20px 56px rgba(0,0,0,0.13);
    }
    .promo-img {
      position:relative;
      height:240px;
      overflow:hidden;
    }
    .promo-img img {
      width:100%; height:100%; object-fit:cover;
      transition:transform 0.6s ease;
    }
    .promo-card:hover .promo-img img {
      transform:scale(1.06);
    }
    /* Gradient overlay on image */
    .promo-img::after {
      content:'';
      position:absolute;
      inset:0;
      background:linear-gradient(to top, rgba(15,14,12,0.55) 0%, rgba(15,14,12,0.05) 50%, transparent 100%);
    }
    /* Date/period badge floating on image */
    .promo-period {
      position:absolute;
      top:1rem; left:1rem;
      background:rgba(255,255,255,0.95);
      backdrop-filter:blur(8px);
      -webkit-backdrop-filter:blur(8px);
      color:var(--ink);
      font-size:0.68rem;
      font-weight:700;
      letter-spacing:0.04em;
      padding:0.4rem 0.85rem;
      border-radius:var(--r-pill);
      z-index:2;
      box-shadow:0 2px 8px rgba(0,0,0,0.1);
    }
    /* Price badge floating bottom-right of image */
    .promo-price-badge {
      position:absolute;
      bottom:1rem; right:1rem;
      background:var(--gold);
      color:#fff;
      font-size:0.78rem;
      font-weight:800;
      padding:0.55rem 1.1rem;
      border-radius:var(--r-pill);
      z-index:2;
      box-shadow:0 4px 16px rgba(201,168,76,0.4);
      display:flex;
      align-items:center;
      gap:0.35rem;
    }
    .promo-price-badge .promo-price-label {
      font-weight:500;
      font-size:0.68rem;
      opacity:0.85;
    }
    .promo-body {
      padding:1.8rem 1.5rem 1.5rem;
      display:flex;
      flex-direction:column;
      flex:1;
    }
    .promo-body h3 {
      font-size:1.25rem;
      font-weight:800;
      margin-bottom:0.5rem;
      line-height:1.25;
    }
    .promo-body h3 .cursive {
      font-size:1.1em;
    }
    .promo-desc {
      font-size:0.88rem;
      color:var(--muted);
      line-height:1.65;
      margin-bottom:1.5rem;
    }
    .promo-divider {
      width:100%;
      height:1px;
      background:var(--border);
      margin-bottom:1.2rem;
    }
    .promo-includes {
      display:flex;
      flex-wrap:wrap;
      gap:0.5rem;
      margin-bottom:1.5rem;
    }
    .promo-include-tag {
      display:inline-flex;
      align-items:center;
      gap:0.3rem;
      background:var(--surface);
      color:var(--ink);
      font-size:0.72rem;
      font-weight:600;
      padding:0.3rem 0.7rem;
      border-radius:var(--r-pill);
    }
    .promo-include-tag svg {
      color:var(--gold);
      flex-shrink:0;
    }
    .promo-btns {
      display:flex;
      gap:0.75rem;
      margin-top:auto;
    }
    .promo-btns .btn {
      flex:1;
      font-size:0.8rem;
      padding:0.7rem 1rem;
      text-align:center;
    }
    .btn-dark-green {
      background:#1B4332;
      color:#fff;
    }
    .btn-dark-green:hover {
      background:#2D6A4F;
      transform:translateY(-2px);
      box-shadow:0 8px 24px rgba(27,67,50,0.35);
    }
    .btn-outline-green {
      background:transparent;
      color:#1B4332;
      border:2px solid #1B4332;
    }
    .btn-outline-green:hover {
      background:#1B4332;
      color:#fff;
      transform:translateY(-2px);
    }

    @media (max-width:1024px) {
      .promo-grid { grid-template-columns:1fr 1fr; }
    }
    @media (max-width:768px) {
      .promo-grid { grid-template-columns:1fr; max-width:440px; margin-left:auto; margin-right:auto; }
      .promo-img { height:220px; }
    }
  </style>
</head>
<body>

<!-- ============ NAVIGATION ============ -->
<nav class="nav" id="mainNav">
  <a href="/" class="nav-logo">
    <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/logo-goldenview.png" alt="Goldenview" class="nav-logo-img">
  </a>
  <ul class="nav-links">
    <li><a href="#o-nama" data-sr="O nama" data-en="About">O nama</a></li>
    <li><a href="#apartmani" data-sr="Apartmani" data-en="Apartments">Apartmani</a></li>
    <li><a href="#restoran" data-sr="Restoran" data-en="Restaurant">Restoran</a></li>
    <li><a href="#destinacija" data-sr="Destinacija" data-en="Destination">Destinacija</a></li>
    <li><a href="#galerija" data-sr="Galerija" data-en="Gallery">Galerija</a></li>
    <li><a href="#kontakt" data-sr="Kontakt" data-en="Contact">Kontakt</a></li>
  </ul>
  <div class="nav-right">
    <a href="tel:063604808" class="nav-phone" data-sr="063 / 604-808" data-en="063 / 604-808">063 / 604-808</a>
    <div class="lang-toggle">
      <button class="lang-btn active" data-lang="sr">SR</button>
      <button class="lang-btn" data-lang="en">EN</button>
    </div>
  </div>
  <button class="nav-hamburger" id="hamburger" onclick="toggleMobileNav()">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- Mobile Nav -->
<div class="mobile-nav" id="mobileNav">
  <a href="#o-nama"     onclick="toggleMobileNav()" data-sr="O nama"      data-en="About">O nama</a>
  <a href="#apartmani"  onclick="toggleMobileNav()" data-sr="Apartmani"   data-en="Apartments">Apartmani</a>
  <a href="#restoran"   onclick="toggleMobileNav()" data-sr="Restoran"    data-en="Restaurant">Restoran</a>
  <a href="#destinacija" onclick="toggleMobileNav()" data-sr="Destinacija" data-en="Destination">Destinacija</a>
  <a href="#galerija"   onclick="toggleMobileNav()" data-sr="Galerija"    data-en="Gallery">Galerija</a>
  <a href="tel:063604808" style="color:var(--gold); border-color:var(--gold);">063 / 604-808</a>
</div>

<!-- ============ HERO ============ -->
<section>
  <div class="hero">
    <!-- Left: Content -->
    <div class="hero-content">
      <div class="hero-badge-booking reveal">
        <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span class="score">9.9</span>
        <span style="opacity:0.6; font-weight:500; font-size:0.75rem;" data-sr="na Booking.com · 190+ recenzija" data-en="on Booking.com · 190+ reviews">na Booking.com &middot; 190+ recenzija</span>
      </div>
      <h1 class="hero-h1 reveal delay-1">
        <span data-sr="Vaš privatni kutak" data-en="Your private retreat">Va&#353; privatni kutak</span>
        <span class="line2" data-sr="mira u Sokobanji" data-en="in Sokobanja">mira u Sokobanji</span>
      </h1>
      <p class="hero-sub reveal delay-2"
         data-sr="Moderni apartmani sa bazenom, restoran sa domaćom kuhinjom i tišina koju zaslužujete — sve na jednom mestu, na 2,5 sata od Beograda."
         data-en="Modern apartments with pool, a restaurant serving homemade food, and the peace you deserve — all in one place, 2.5 hours from Belgrade.">
        Moderni apartmani sa bazenom, restoran sa doma&#263;om kuhinjom i ti&#353;ina koju zaslu&#382;ujete &mdash; sve na jednom mestu, na 2,5 sata od Beograda.
      </p>
      <div class="hero-btns reveal delay-3">
        <a href="tel:063604808" class="btn btn-gold"
           data-sr="Proveri dostupnost" data-en="Check availability">Proveri dostupnost</a>
        <a href="#apartmani" class="btn btn-outline"
           data-sr="Pogledaj apartmane" data-en="View apartments">Pogledaj apartmane</a>
      </div>
      <div class="hero-trust reveal delay-4">
        <span data-sr="Besplatan parking" data-en="Free parking">Besplatan parking</span>
        <div class="hero-trust-dot"></div>
        <span data-sr="Bazen za sve goste" data-en="Pool for all guests">Bazen za sve goste</span>
        <div class="hero-trust-dot"></div>
        <span data-sr="Direktna rezervacija" data-en="Book direct">Direktna rezervacija</span>
      </div>
    </div>

    <!-- Right: Image + floating cards -->
    <div class="hero-image-wrap reveal-right">
      <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/Hero-goldenview.webp"
           alt="Goldenview Spa &amp; Wellness">

      <div class="hero-float hero-float-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        <span data-sr="Moderan SPA" data-en="Modern SPAl">Moderan SPA</span>
      </div>
      <div class="hero-float hero-float-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span data-sr="Prostrani apartmani" data-en="Comfortable beds">Prostrani apartmani</span>
      </div>
      <div class="hero-float hero-float-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span data-sr="Restoran u objektu" data-en="On-site restaurant">Restoran u objektu</span>
      </div>
    </div>
  </div>

  <!-- AVAILABILITY CHECKER -->
  <div class="availability-bar reveal">
    <div class="availability-bar-grid">
      <div class="availability-field">
        <label data-sr="Prijava" data-en="Check-in">Prijava</label>
        <input type="date" id="checkInDate">
      </div>
      <div class="availability-field">
        <label data-sr="Odjava" data-en="Check-out">Odjava</label>
        <input type="date" id="checkOutDate">
      </div>
      <div class="availability-field">
        <label data-sr="Broj gostiju" data-en="Number of guests">Broj gostiju</label>
        <select id="guestCount">
          <option value="1" data-sr="1 gost" data-en="1 guest">1 gost</option>
          <option value="2" data-sr="2 gosta" data-en="2 guests" selected>2 gosta</option>
          <option value="3" data-sr="3 gosta" data-en="3 guests">3 gosta</option>
          <option value="4" data-sr="4 gosta" data-en="4 guests">4 gosta</option>
          <option value="5" data-sr="5 gostiju" data-en="5 guests">5 gostiju</option>
          <option value="6" data-sr="6 gostiju" data-en="6 guests">6 gostiju</option>
          <option value="7" data-sr="7 gostiju" data-en="7 guests">7 gostiju</option>
          <option value="8" data-sr="8 gostiju" data-en="8 guests">8 gostiju</option>
        </select>
      </div>
      <button class="btn btn-gold availability-cta" id="availCheckBtn"
         data-sr="Proveri dostupnost" data-en="Check availability">Proveri dostupnost</button>
    </div>
    <div class="nights-counter" id="nightsCounter"></div>
  </div>
</section>

<!-- Availability Modal -->
<div class="avail-modal-overlay" id="availModal">
  <div class="avail-modal">
    <div class="avail-close" id="availModalClose">&times;</div>
    <div id="availFormContent">
      <h3 data-sr="Proverite dostupnost" data-en="Check availability">Proverite dostupnost</h3>
      <p class="avail-modal-sub" data-sr="Ostavite vaše podatke i javićemo vam u najkraćem mogućem roku." data-en="Leave your details and we will get back to you as soon as possible.">Ostavite va&#353;e podatke i javi&#263;emo vam u najkra&#263;em mogu&#263;em roku.</p>
      <div id="availSummary" style="background:var(--surface); border-radius:var(--r-sm); padding:0.75rem 1rem; margin-bottom:1.2rem; font-size:0.85rem; color:var(--ink);"></div>
      <div class="avail-field">
        <label data-sr="Vaš email" data-en="Your email">Va&#353; email</label>
        <input type="email" id="availEmail" placeholder="email@primer.com">
      </div>
      <div class="avail-field">
        <label data-sr="Broj telefona" data-en="Phone number">Broj telefona</label>
        <input type="tel" id="availPhone" placeholder="063 / 123-4567">
      </div>
      <div class="avail-consent">
        <input type="checkbox" id="availConsent">
        <label for="availConsent" data-sr="Pristajem da me Goldenview kontaktira putem emaila ili broja telefona. Očekujte odgovor u najkraćem mogućem roku." data-en="I agree that Goldenview may contact me via email or phone number. Expect a response as soon as possible.">Pristajem da me Goldenview kontaktira putem emaila ili broja telefona. O&#269;ekujte odgovor u najkra&#263;em mogu&#263;em roku.</label>
      </div>
      <button class="btn btn-gold avail-submit" id="availSubmitBtn" data-sr="Pošalji upit" data-en="Send inquiry">Po&#353;alji upit</button>
    </div>
    <div class="avail-success" id="availSuccess">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <h3 data-sr="Hvala vam!" data-en="Thank you!">Hvala vam!</h3>
      <p data-sr="Vaš upit je poslat. Javićemo vam se u najkraćem mogućem roku." data-en="Your inquiry has been sent. We will get back to you as soon as possible.">Va&#353; upit je poslat. Javi&#263;emo vam se u najkra&#263;em mogu&#263;em roku.</p>
    </div>
  </div>
</div>

<!-- ============ MARQUEE ============ -->
<div class="marquee-wrap">
  <div class="marquee-track">
    <span class="marquee-item"><span class="highlight">GOLDENVIEW</span><span class="marquee-dot"></span>SOKOBANJA<span class="marquee-dot"></span>APARTMANI<span class="marquee-dot"></span>BAZEN<span class="marquee-dot"></span>RESTORAN<span class="marquee-dot"></span>DOMA&#262;A KUHINJA<span class="marquee-dot"></span>MIR I TI&#352;INA<span class="marquee-dot"></span></span>
    <span class="marquee-item"><span class="highlight">GOLDENVIEW</span><span class="marquee-dot"></span>SOKOBANJA<span class="marquee-dot"></span>APARTMANI<span class="marquee-dot"></span>BAZEN<span class="marquee-dot"></span>RESTORAN<span class="marquee-dot"></span>DOMA&#262;A KUHINJA<span class="marquee-dot"></span>MIR I TI&#352;INA<span class="marquee-dot"></span></span>
    <span class="marquee-item"><span class="highlight">GOLDENVIEW</span><span class="marquee-dot"></span>SOKOBANJA<span class="marquee-dot"></span>APARTMANI<span class="marquee-dot"></span>BAZEN<span class="marquee-dot"></span>RESTORAN<span class="marquee-dot"></span>DOMA&#262;A KUHINJA<span class="marquee-dot"></span>MIR I TI&#352;INA<span class="marquee-dot"></span></span>
    <span class="marquee-item"><span class="highlight">GOLDENVIEW</span><span class="marquee-dot"></span>SOKOBANJA<span class="marquee-dot"></span>APARTMANI<span class="marquee-dot"></span>BAZEN<span class="marquee-dot"></span>RESTORAN<span class="marquee-dot"></span>DOMA&#262;A KUHINJA<span class="marquee-dot"></span>MIR I TI&#352;INA<span class="marquee-dot"></span></span>
  </div>
</div>

<!-- ============ PROMO PACKAGES ============ -->
<section class="promo-section">
  <div class="container">
    <div class="section-header reveal">
      <span class="eyebrow" data-sr="Promo Paketi" data-en="Promo Packages">Promo Paketi</span>
      <h2>
        <span data-sr="Specijalne ponude" data-en="Special offers">Specijalne ponude</span><br>
        <span class="cursive" data-sr="za savršen odmor" data-en="for a perfect getaway">za savr&#353;en odmor</span>
      </h2>
    </div>
    <div class="promo-grid">

      <!-- Paket 1: Uskrs -->
      <div class="promo-card reveal">
        <div class="promo-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-1.jpg" alt="Uskrs u Goldenview">
          <div class="promo-period" data-sr="10 - 14. april 2026." data-en="April 10 - 14, 2026">10 - 14. april 2026.</div>
          <div class="promo-price-badge">
            <span class="promo-price-label" data-sr="od" data-en="from">od</span>
            <span data-sr="19000 rsd" data-en="Call us">19000 rsd"</span>
          </div>
        </div>
        <div class="promo-body">
          <h3>
            <span data-sr="Uskrs u" data-en="Easter at">Uskrs u</span>
            <span class="cursive">Goldenview</span>
          </h3>
          <p class="promo-desc" data-sr="Izaberite idealnu destinaciju za odmor tokom Uskrsa. Paket va&#382;i za 3 no&#263;i u periodu 10-14. april." data-en="Choose the ideal destination for your Easter holiday. Package valid for 3 nights, April 10-14.">
            Izaberite idealnu destinaciju za odmor tokom Uskrsa. Paket va&#382;i za 3 no&#263;i u periodu 10-14. april.
          </p>
          <div class="promo-divider"></div>
          <div class="promo-includes">
            <span class="promo-include-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span data-sr="3 noćenja" data-en="3 nights">3 no&#263;enja</span>
            </span>
            <span class="promo-include-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span data-sr="Bazen" data-en="Pool">Bazen</span>
            </span>
            <span class="promo-include-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span data-sr="Parking" data-en="Parking">Parking</span>
            </span>
          </div>
          <div class="promo-btns">
            <a href="#apartmani" class="btn btn-outline-green" data-sr="Saznaj vi&#353;e" data-en="Learn more">Saznaj vi&#353;e</a>
            <a href="tel:063604808" class="btn btn-dark-green" data-sr="Rezervi&#353;i odmah" data-en="Book now">Rezervi&#353;i odmah</a>
          </div>
        </div>
      </div>

      <!-- Paket 2: Prvi Maj -->
      <div class="promo-card reveal delay-1">
        <div class="promo-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-3.jpg" alt="Prvi maj u Goldenview">
          <div class="promo-period" data-sr="30. apr - 03. maj 2026." data-en="Apr 30 - May 03, 2026">30. apr - 03. maj 2026.</div>
          <div class="promo-price-badge">
            <span class="promo-price-label" data-sr="od" data-en="from">od</span>
            <span data-sr="22 000 rsd" data-en="Call us">22 000 rsd</span>
          </div>
        </div>
        <div class="promo-body">
          <h3>
            <span data-sr="Prvi maj u" data-en="May Day at">Prvi maj u</span>
            <span class="cursive">Goldenview</span>
          </h3>
          <p class="promo-desc" data-sr="Izaberite idealnu destinaciju za odmor tokom Prvomajskih praznika i provedite kvalitetno vreme sa dragim osobama. Paket va&#382;i za 3 no&#263;i u periodu 30.04-03.05.2026." data-en="Choose the ideal destination for your May Day holiday and spend quality time with loved ones. Package valid for 3 nights, Apr 30 - May 03, 2026.">
            Izaberite idealnu destinaciju za odmor tokom Prvomajskih praznika i provedite kvalitetno vreme sa dragim osobama. Paket va&#382;i za 3 no&#263;i u periodu 30.04-03.05.2026.
          </p>
          <div class="promo-divider"></div>
          <div class="promo-includes">
            <span class="promo-include-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span data-sr="3 noćenja" data-en="3 nights">3 no&#263;enja</span>
            </span>
            <span class="promo-include-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span data-sr="Bazen" data-en="Pool">Bazen</span>
            </span>
            <span class="promo-include-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span data-sr="Parking" data-en="Parking">Parking</span>
            </span>
          </div>
          <div class="promo-btns">
            <a href="#apartmani" class="btn btn-outline-green" data-sr="Saznaj vi&#353;e" data-en="Learn more">Saznaj vi&#353;e</a>
            <a href="tel:063604808" class="btn btn-dark-green" data-sr="Rezervi&#353;i odmah" data-en="Book now">Rezervi&#353;i odmah</a>
          </div>
        </div>
      </div>

      <!-- Paket 3: Produzi i ustedi -->
      <div class="promo-card reveal delay-2">
        <div class="promo-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/spa-1-scaled.webp" alt="Produzi i ustedi">
          <div class="promo-period" data-sr="Radnim danima &middot; 2 osobe" data-en="Weekdays &middot; 2 persons">Radnim danima &middot; 2 osobe</div>
          <div class="promo-price-badge">
            <span class="promo-price-label" data-sr="od" data-en="from">od</span>
            <span data-sr="18000 rsd" data-en="Call us">18 000 rsd</span>
          </div>
        </div>
        <div class="promo-body">
          <h3>
            <span data-sr="Produ&#382;i i" data-en="Stay longer &">Produ&#382;i i</span>
            <span class="cursive" data-sr="u&#353;tedi" data-en="save">u&#353;tedi</span>
          </h3>
          <p class="promo-desc" data-sr="Pravo je vreme za kratak predah tokom radnih dana u okviru na&#353;eg promo paketa. Cena se odnosi na 3 no&#263;enja radnim danima za 2 osobe." data-en="The perfect time for a short break during weekdays with our promo package. Price is for 3 nights on weekdays for 2 persons.">
            Pravo je vreme za kratak predah tokom radnih dana u okviru na&#353;eg promo paketa. Cena se odnosi na 3 no&#263;enja radnim danima za 2 osobe.
          </p>
          <div class="promo-divider"></div>
          <div class="promo-includes">
            <span class="promo-include-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span data-sr="3 noćenja" data-en="3 nights">3 no&#263;enja</span>
            </span>
            <span class="promo-include-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span data-sr="Bazen" data-en="Pool">Bazen</span>
            </span>
            <span class="promo-include-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span data-sr="Parking" data-en="Parking">Parking</span>
            </span>
          </div>
          <div class="promo-btns">
            <a href="#apartmani" class="btn btn-outline-green" data-sr="Saznaj vi&#353;e" data-en="Learn more">Saznaj vi&#353;e</a>
            <a href="tel:063604808" class="btn btn-dark-green" data-sr="Rezervi&#353;i odmah" data-en="Book now">Rezervi&#353;i odmah</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ============ VIDEO SECTION ============ -->
<section class="section-pad">
  <div class="container">
    <div class="section-header reveal">
      <span class="eyebrow" data-sr="Pogledajte video" data-en="Watch video">Pogledajte video</span>
      <h2>
        <span data-sr="Doživite atmosferu" data-en="Experience the atmosphere">Do&#382;ivite atmosferu</span><br>
        <span class="cursive" data-sr="pre dolaska" data-en="before you arrive">pre dolaska</span>
      </h2>
    </div>
    <!-- Desktop: horizontal video -->
    <div class="video-wrap reveal video-desktop">
      <iframe src="https://www.youtube.com/embed/N5dFkd2JIoo?autoplay=1&mute=1&loop=1&playlist=N5dFkd2JIoo&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3" allow="autoplay; encrypted-media" allowfullscreen loading="lazy" title="Goldenview video"></iframe>
    </div>
    <!-- Mobile: vertical video (shorts format) -->
    <div class="video-wrap-vertical reveal video-mobile">
      <iframe src="https://www.youtube.com/embed/Wva-CCJvxyc?autoplay=1&mute=1&loop=1&playlist=Wva-CCJvxyc&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3" allow="autoplay; encrypted-media" allowfullscreen loading="lazy" title="Goldenview video mobile"></iframe>
    </div>
  </div>
</section>


<!-- ============ ABOUT ============ -->
<section id="o-nama" class="section-pad">
  <div class="container">
    <div class="about-grid">
      <div class="about-images reveal-left">
        <div class="about-blob"></div>
        <div class="about-img-main">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-1.jpg" alt="Goldenview apartman">
        </div>
        <div class="about-img-sec">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-2.jpg" alt="Goldenview kuhinja i trpezarija">
        </div>
      </div>
      <div class="about-content reveal-right">
        <span class="eyebrow" data-sr="O nama" data-en="About us">O nama</span>
        <h2>
          <span data-sr="Mesto gde se odmor pravi" data-en="A stay designed">Mesto gde se odmor pravi</span><br>
          <span class="cursive" data-sr="po vašoj meri" data-en="around you">po va&#353;oj meri</span>
        </h2>
        <p class="about-text"
           data-sr="Goldenview nije tipičan smeštaj u Sokobanji. Zamislili smo ga kao mesto gde svaki gost ima dovoljno prostora, privatnosti i pažnje — bez onog osećaja da ste jedan od stotinu. Apartmani su potpuno novi, svaki opremljen kuhinjom, klima-uređajem, smart TV-om i terasom. Ispred vas je bazen za opuštanje, a u prizemlju restoran koji služi domaću hranu od svežih, lokalnih namirnica."
           data-en="Goldenview isn't your typical Sokobanja accommodation. We built it as a place where every guest gets enough space, privacy, and attention — without feeling like one of a hundred. Brand new apartments, each with a kitchen, AC, smart TV, and a terrace. A pool just for our guests. A restaurant serving fresh, local Serbian food.">
          Goldenview nije tipi&#269;an sme&#353;taj u Sokobanji. Zamislili smo ga kao mesto gde svaki gost ima dovoljno prostora, privatnosti i pa&#382;nje &mdash; bez onog ose&#263;aja da ste jedan od stotinu. Apartmani su potpuno novi, svaki opremljen kuhinjom, klima-ure&#273;ajem, smart TV-om i terasom. Ispred vas je bazen za opu&#353;tanje, a u prizemlju restoran koji slu&#382;i doma&#263;u hranu od sve&#382;ih, lokalnih namirnica.
        </p>
        <div class="stats-grid">
          <div class="stat-item reveal delay-1">
            <span class="stat-number counter" data-target="12">0</span>
            <span class="stat-label" data-sr="Tipova apartmana (32–51 m²)" data-en="Apartment types (32–51 m²)">Tipova apartmana (32&ndash;51 m&sup2;)</span>
          </div>
          <div class="stat-item reveal delay-2">
            <span class="stat-number counter" data-target="190">0</span>
            <span class="stat-label" data-sr="+ recenzija gostiju" data-en="+ guest reviews">+ recenzija gostiju</span>
          </div>
          <div class="stat-item reveal delay-3">
            <span class="stat-number">100%</span>
            <span class="stat-label" data-sr="Recenzija sa ocenom 10/10" data-en="Reviews rated 10/10">Recenzija sa ocenom 10/10</span>
          </div>
          <div class="stat-item reveal delay-4">
            <span class="stat-number">2.5h</span>
            <span class="stat-label" data-sr="Od Beograda" data-en="From Belgrade">Od Beograda</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ SERVICES BENTO ============ -->
<section class="section-pad services-section">
  <div class="container">
    <div class="section-header reveal">
      <span class="eyebrow" data-sr="Sve na jednom mestu" data-en="Everything in one place">Sve na jednom mestu</span>
      <h2 data-sr="Tri razloga zašto gosti dolaze ponovo" data-en="Three reasons guests keep coming back">Tri razloga za&#353;to gosti dolaze ponovo</h2>
    </div>
    <div class="bento-grid">
      <div class="bento-card reveal">
        <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-3.jpg" alt="Apartmani Goldenview">
        <div class="bento-overlay">
          <div class="bento-pill" data-sr="APARTMANI" data-en="APARTMENTS">APARTMANI</div>
          <div class="bento-title" data-sr="Prostor koji diše" data-en="Space to breathe">Prostor koji di&#353;e</div>
          <a href="#apartmani" class="bento-link" data-sr="Izaberi apartman →" data-en="Choose apartment →">Izaberi apartman &rarr;</a>
        </div>
      </div>
      <div class="bento-card reveal delay-2">
        <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/spa-1-scaled.webp" alt="Bazen Goldenview">
        <div class="bento-overlay">
          <div class="bento-pill" data-sr="WELLNESS & SPA" data-en="WELLNESS & SPA">WELLNESS &amp; SPA</div>
          <div class="bento-title" data-sr="Privatna oaza opuštanja" data-en="Private relaxation oasis">Privatna oaza opu&#353;tanja</div>
          <a href="#o-nama" class="bento-link" data-sr="Saznaj više →" data-en="Learn more →">Saznaj vi&#353;e &rarr;</a>
        </div>
      </div>
      <div class="bento-card reveal delay-3">
        <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/restoran-1-scaled.webp" alt="Restoran Goldenview">
        <div class="bento-overlay">
          <div class="bento-pill" data-sr="RESTORAN" data-en="RESTAURANT">RESTORAN</div>
          <div class="bento-title" data-sr="Ukusi koji se pamte" data-en="Flavours to remember">Ukusi koji se pamte</div>
          <a href="#restoran" class="bento-link" data-sr="Pogledaj meni →" data-en="View menu →">Pogledaj meni &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ APARTMENTS ============ -->
<section id="apartmani" class="apts-section">
  <div class="section-header reveal">
    <span class="eyebrow" data-sr="Smeštaj" data-en="Accommodation">Sme&#353;taj</span>
    <h2 data-sr="Izaberite apartman koji vam odgovara" data-en="Choose your perfect apartment">Izaberite apartman koji vam odgovara</h2>
    <p data-sr="Dvanaest apartmana — od kompaktnog studija do porodičnog duplex-a. Svi sa kuhinjom, klimom, smart TV-om i pristupom bazenu."
       data-en="Twelve apartments — from a compact studio to a family duplex. All with kitchen, AC, smart TV and pool access.">
      Dvanaest apartmana &mdash; od kompaktnog studija do porodi&#269;nog duplex-a. Svi sa kuhinjom, klimom, smart TV-om i pristupom bazenu.
    </p>
  </div>
  <div class="apt-slider-wrap container">
    <div class="apt-slider-track" id="aptTrack">
      <!-- A1 Duplex -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-2.jpg" alt="A1 Duplex">
          <span class="apt-badge">A1 Duplex</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">A1</span> Duplex</h3>
          <p class="apt-meta">42 m&sup2; &middot; <span data-sr="do 4 gosta" data-en="up to 4 guests">do 4 gosta</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsd</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- A2 Duplex -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-4.jpg" alt="A2 Duplex">
          <span class="apt-badge">A2 Duplex</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">A2</span> Duplex</h3>
          <p class="apt-meta">42 m&sup2; &middot; <span data-sr="do 4 gosta" data-en="up to 4 guests">do 4 gosta</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsd</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- B2 Jednosobni -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-5.jpg" alt="B2 Jednosobni">
          <span class="apt-badge" data-sr="B2 Jednosobni" data-en="B2 One-bedroom">B2 Jednosobni</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">B2</span> <span data-sr="Jednosobni" data-en="One-bedroom">Jednosobni</span></h3>
          <p class="apt-meta">35 m&sup2; &middot; <span data-sr="do 2 gosta" data-en="up to 2 guests">do 2 gosta</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsd</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- B3 Dvosobni -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-3.jpg" alt="B3 Dvosobni">
          <span class="apt-badge" data-sr="B3 Dvosobni" data-en="B3 Two-bedroom">B3 Dvosobni</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">B3</span> <span data-sr="Dvosobni" data-en="Two-bedroom">Dvosobni</span></h3>
          <p class="apt-meta">51 m&sup2; &middot; <span data-sr="do 5 gostiju" data-en="up to 5 guests">do 5 gostiju</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsd</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- B4 Studio -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-1.jpg" alt="B4 Studio">
          <span class="apt-badge">B4 Studio</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">B4</span> Studio</h3>
          <p class="apt-meta">32 m&sup2; &middot; <span data-sr="do 2 gosta" data-en="up to 2 guests">do 2 gosta</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsd</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- B5 Studio -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-2.jpg" alt="B5 Studio">
          <span class="apt-badge">B5 Studio</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">B5</span> Studio</h3>
          <p class="apt-meta">32 m&sup2; &middot; <span data-sr="do 2 gosta" data-en="up to 2 guests">do 2 gosta</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsd</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- B6 Dvosobni -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-4.jpg" alt="B6 Dvosobni">
          <span class="apt-badge" data-sr="B6 Dvosobni" data-en="B6 Two-bedroom">B6 Dvosobni</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">B6</span> <span data-sr="Dvosobni" data-en="Two-bedroom">Dvosobni</span></h3>
          <p class="apt-meta">49 m&sup2; &middot; <span data-sr="do 4 gosta" data-en="up to 4 guests">do 4 gosta</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsdt</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- B7 Jednosobni -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-5.jpg" alt="B7 Jednosobni">
          <span class="apt-badge" data-sr="B7 Jednosobni" data-en="B7 One-bedroom">B7 Jednosobni</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">B7</span> <span data-sr="Jednosobni" data-en="One-bedroom">Jednosobni</span></h3>
          <p class="apt-meta">35 m&sup2; &middot; <span data-sr="do 2 gosta" data-en="up to 2 guests">do 2 gosta</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsd</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- C2 Jednosobni -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-3.jpg" alt="C2 Jednosobni">
          <span class="apt-badge" data-sr="C2 Jednosobni" data-en="C2 One-bedroom">C2 Jednosobni</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">C2</span> <span data-sr="Jednosobni" data-en="One-bedroom">Jednosobni</span></h3>
          <p class="apt-meta">35 m&sup2; &middot; <span data-sr="do 2 gosta" data-en="up to 2 guests">do 2 gosta</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsd</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- C3 Jednosobni -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-1.jpg" alt="C3 Jednosobni">
          <span class="apt-badge" data-sr="C3 Jednosobni" data-en="C3 One-bedroom">C3 Jednosobni</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">C3</span> <span data-sr="Jednosobni" data-en="One-bedroom">Jednosobni</span></h3>
          <p class="apt-meta">35 m&sup2; &middot; <span data-sr="do 2 gosta" data-en="up to 2 guests">do 2 gosta</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsd</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- C4 Jednosobni -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-2.jpg" alt="C4 Jednosobni">
          <span class="apt-badge" data-sr="C4 Jednosobni" data-en="C4 One-bedroom">C4 Jednosobni</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive">C4</span> <span data-sr="Jednosobni" data-en="One-bedroom">Jednosobni</span></h3>
          <p class="apt-meta">35 m&sup2; &middot; <span data-sr="do 2 gosta" data-en="up to 2 guests">do 2 gosta</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">8300 rsd</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
      <!-- Placeholder 12th -->
      <div class="apt-card">
        <div class="apt-img">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-4.jpg" alt="Apartman">
          <span class="apt-badge" data-sr="Uskoro" data-en="Coming soon">Uskoro</span>
        </div>
        <div class="apt-body">
          <h3><span class="cursive" data-sr="Novi" data-en="New">Novi</span> <span data-sr="Apartman" data-en="Apartment">Apartman</span></h3>
          <p class="apt-meta">— m&sup2; &middot; <span data-sr="uskoro" data-en="coming soon">uskoro</span></p>
          <div class="apt-pills">
            <span class="apt-pill">WiFi</span><span class="apt-pill" data-sr="Klima" data-en="A/C">Klima</span>
            <span class="apt-pill">Smart TV</span><span class="apt-pill" data-sr="Kuhinja" data-en="Kitchen">Kuhinja</span>
            <span class="apt-pill" data-sr="Terasa" data-en="Terrace">Terasa</span>
          </div>
          <div class="apt-footer">
            <div class="apt-price-wrap">
              <span class="price-from" data-sr="Cena po noći" data-en="Price per night">Cena po no&#263;i</span>
              <span class="price-amount">kontakt</span>
            </div>
            <a href="tel:063604808" class="btn btn-gold apt-cta" data-sr="Rezerviši" data-en="Book">Rezervi&#353;i</a>
          </div>
        </div>
      </div>
    </div>
    <div class="apt-slider-nav">
      <button class="apt-slider-btn" id="aptPrev" aria-label="Previous">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="apt-slider-btn" id="aptNext" aria-label="Next">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  </div>
  <div class="apt-detail-btn">
    <a href="#apartmani" class="btn btn-gold" data-sr="Pogledaj detaljno" data-en="View details">Pogledaj detaljno</a>
  </div>
</section>

<!-- ============ DESTINATION ============ -->
<section id="destinacija" class="dest-section" style="margin-top:3rem;">
  <div class="dest-grid">
    <div class="dest-content">
      <span class="eyebrow" data-sr="Lokacija" data-en="Location">Lokacija</span>
      <h2>
        <span data-sr="Zeleno srce Srbije," data-en="Green heart of Serbia,">Zeleno srce Srbije,</span><br>
        <span class="cursive" data-sr="na dohvat ruke" data-en="within easy reach">na dohvat ruke</span>
      </h2>
      <p class="dest-text"
         data-sr="Sokobanja leži ušuškana između Ozrena i Rtnja, na obalama reke Moravice. Njene termalne vode koriste se za lečenje još od rimskog doba — a čist vazduh, bogat negativnim jonima, čini je jedinom vazdušnom banjom u jugoistočnoj Evropi."
         data-en="Sokobanja nestles between Ozren and Rtanj mountains, on the banks of the Moravica river. Its thermal waters have been used for healing since Roman times — and the air, rich in negative ions, makes it the only air spa in Southeast Europe.">
        Sokobanja le&#382;i u&#353;u&#353;kana izme&#273;u Ozrena i Rtnja, na obalama reke Moravice. Njene termalne vode koriste se za le&#269;enje jo&#353; od rimskog doba &mdash; a &#269;ist vazduh, bogat negativnim jonima, &#269;ini je jedinom vazdu&#353;nom banjom u jugoisto&#269;noj Evropi.
      </p>
      <div class="dest-features">
        <div class="dest-feat reveal">
          <div class="dest-feat-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h4 data-sr="5 minuta od centra" data-en="5 min from the center">5 minuta od centra</h4>
            <p data-sr="Blizina svega što vam treba, a opet mir i privatnost." data-en="Close to everything you need, yet peaceful and private.">Blizina svega &#353;to vam treba, a opet mir i privatnost.</p>
          </div>
        </div>
        <div class="dest-feat reveal delay-2">
          <div class="dest-feat-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <div>
            <h4 data-sr="Čist vazduh i termalna voda" data-en="Fresh air and thermal water">&#268;ist vazduh i termalna voda</h4>
            <p data-sr="Termalni izvori do 53°C, mineralne vode bogate sumporom i jodom." data-en="Thermal springs up to 53°C, mineral waters rich in sulphur and iodine.">Termalni izvori do 53&deg;C, mineralne vode bogate sumporom i jodom.</p>
          </div>
        </div>
        <div class="dest-feat reveal delay-3">
          <div class="dest-feat-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <div>
            <h4 data-sr="Priroda i avantura" data-en="Nature and adventure">Priroda i avantura</h4>
            <p data-sr="Sokograd, Ripaljka, Bovansko jezero — sve unutar 15 minuta." data-en="Sokograd, Ripaljka waterfall, Bovansko lake — all within 15 minutes.">Sokograd, Ripaljka, Bovansko jezero &mdash; sve unutar 15 minuta.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="dest-image reveal-right">
      <img src="https://www.vaucerisrbija.com/images/news/189/thumb/sokobanja-centar.jpg" alt="Sokobanja centar" style="max-height:520px; object-fit:cover;">
    </div>
  </div>
</section>

<!-- ============ BENEFITS ============ -->
<section class="section-pad">
  <div class="container">
    <div class="section-header reveal">
      <span class="eyebrow" data-sr="Zašto baš Goldenview" data-en="Why Goldenview">Za&#353;to ba&#353; Goldenview</span>
      <h2 data-sr="Ono što veliki hoteli ne mogu da vam pruže" data-en="What large hotels can't give you">Ono &#353;to veliki hoteli ne mogu da vam pru&#382;e</h2>
    </div>
    <div class="benefits-grid">
      <div class="benefit-card reveal">
        <div class="benefit-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <h3 data-sr="Boutique atmosfera" data-en="Boutique atmosphere">Boutique atmosfera</h3>
        <p data-sr="Novi apartmani 32–51 m² sa opremljenom kuhinjom i terasom. Bez hodnika sa stotinu vrata." data-en="New apartments 32–51 m² with equipped kitchen and terrace. No corridors with a hundred doors.">Novi apartmani 32&ndash;51 m&sup2; sa opremljenom kuhinjom i terasom. Bez hodnika sa stotinu vrata.</p>
      </div>
      <div class="benefit-card reveal delay-1">
        <div class="benefit-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
        </div>
        <h3 data-sr="Domaća kuhinja" data-en="Home-style kitchen">Doma&#263;a kuhinja</h3>
        <p data-sr="Doručak od lokalnih namirnica, specijaliteti srpske kuhinje, domaća vina. Hrana koju nećete naći u hotelskom bifeu." data-en="Breakfast from local ingredients, Serbian specialties, local wines. Food you won't find in a hotel buffet.">Doru&#269;ak od lokalnih namirnica, specijaliteti srpske kuhinje, doma&#263;a vina. Hrana koju ne&#263;ete na&#263;i u hotelskom bifeu.</p>
      </div>
      <div class="benefit-card reveal delay-2">
        <div class="benefit-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/><path d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4"/><path d="M2 22l4-6 4 3 4-5 4 4 4-3"/></svg>
        </div>
        <h3 data-sr="Pogled na Rtanj" data-en="View of Mt. Rtanj">Pogled na Rtanj</h3>
        <p data-sr="Zlatni pogled po kome nosimo ime — probudite se uz panoramu mistične piramide Rtnja pravo sa vaše terase." data-en="The golden view we're named after — wake up to the panorama of the mystical Rtanj pyramid right from your terrace.">Zlatni pogled po kome nosimo ime &mdash; probudite se uz panoramu misti&#269;ne piramide Rtnja pravo sa va&#353;e terase.</p>
      </div>
      <div class="benefit-card reveal delay-3">
        <div class="benefit-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        </div>
        <h3 data-sr="Besplatan parking" data-en="Free parking">Besplatan parking</h3>
        <p data-sr="Bez lutanja, bez doplate. Parkirajte i zaboravite na auto do odlaska." data-en="No searching, no extra charge. Park and forget about your car until departure.">Bez lutanja, bez doplate. Parkirajte i zaboravite na auto do odlaska.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ RESTAURANT ============ -->
<section id="restoran" class="section-pad">
  <div class="container">
    <div class="rest-grid">
      <div class="rest-mosaic reveal-left">
        <div class="rest-mosaic-item">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/restoran-1-scaled.webp" alt="Restoran Goldenview">
        </div>
        <div class="rest-mosaic-item">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/restoran-2-scaled.webp" alt="Restoran atmosfera">
        </div>
        <div class="rest-mosaic-item">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/restoran-3-scaled.webp" alt="Bar">
        </div>
        <div class="rest-mosaic-item">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/restoran-4-scaled.webp" alt="Hrana">
        </div>
      </div>
      <div class="rest-content reveal-right">
        <span class="eyebrow" data-sr="Kulinarstvo" data-en="Culinary">Kulinarstvo</span>
        <h2>
          <span data-sr="Gde se tradicija sreće" data-en="Where tradition meets">Gde se tradicija sre&#263;e</span><br>
          <span class="cursive" data-sr="sa ukusom" data-en="with taste">sa ukusom</span>
        </h2>
        <p class="rest-text"
           data-sr="U našem restoranu nećete naći hotelski bife. Naći ćete hranu koja se pravi sa pažnjom — od lokalnih namirnica, po receptima koji ovde žive generacijama. Doručak sa domaćim kajmakom. Ručak uz jelo koje ste uvek tražili repete. Večera na terasi dok sunce zalazi iza brda."
           data-en="In our restaurant you won't find a hotel buffet. You'll find food made with care — from local ingredients, following recipes that have lived here for generations. Breakfast with homemade kajmak. Lunch with dishes you always asked for seconds of. Dinner on the terrace as the sun sets behind the hills.">
          U na&#353;em restoranu ne&#263;ete na&#263;i hotelski bife. Na&#263;i &#263;ete hranu koja se pravi sa pa&#382;njom &mdash; od lokalnih namirnica, po receptima koji ovde &#382;ive generacijama. Doru&#269;ak sa doma&#263;im kajmakom. Ru&#269;ak uz jelo koje ste uvek tra&#382;ili repete. Ve&#269;era na terasi dok sunce zalazi iza brda.
        </p>
        <div class="rest-tags">
          <span class="rest-tag" data-sr="Domaći kajmak i sir" data-en="Homemade kajmak & cheese">Doma&#263;i kajmak i sir</span>
          <span class="rest-tag" data-sr="Posni meni" data-en="Lenten menu">Posni meni</span>
          <span class="rest-tag" data-sr="Vrhunski roštilj" data-en="Premium grill">Vrhunski ro&#353;tilj</span>
          <span class="rest-tag" data-sr="Sezonski meni" data-en="Seasonal menu">Sezonski meni</span>
        </div>
        <a href="Jelovnik.pdf" target="_blank" class="btn btn-gold"
           data-sr="Pogledaj jelovnik" data-en="View menu">Pogledaj jelovnik</a>
      </div>
    </div>
  </div>
</section>

<!-- ============ CULINARY VIDEO ============ -->
<section class="section-pad">
  <div class="container">
    <div class="section-header reveal">
      <span class="eyebrow" data-sr="Iz naše kuhinje" data-en="From our kitchen">Iz na&#353;e kuhinje</span>
      <h2>
        <span data-sr="Pogledajte kako nastaju" data-en="Watch how we create">Pogledajte kako nastaju</span><br>
        <span class="cursive" data-sr="ukusi Goldenview-a" data-en="Goldenview flavours">ukusi Goldenview-a</span>
      </h2>
    </div>
    <div class="video-wrap reveal">
      <iframe src="https://www.youtube.com/embed/FUzXlzyzhy0?autoplay=1&mute=1&loop=1&playlist=FUzXlzyzhy0&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3" allow="autoplay; encrypted-media" allowfullscreen loading="lazy" title="Culinary video"></iframe>
    </div>
  </div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section id="utisci" class="testi-section">
  <div class="section-header reveal">
    <span class="eyebrow" data-sr="Utisci gostiju" data-en="Guest reviews">Utisci gostiju</span>
    <h2 data-sr="Ocene naših gostiju govore sve" data-en="Our guest ratings speak for themselves">Ocene na&#353;ih gostiju govore sve</h2>
  </div>

  <!-- Booking Authority Badge -->
  <div style="display:flex; justify-content:center;">
    <div class="booking-authority reveal">
      <div>
        <div class="booking-logo-text">booking<span style="color:var(--gold);">.</span>com</div>
        <div class="booking-reviews" data-sr="190+ verifikovanih recenzija" data-en="190+ verified reviews">190+ verifikovanih recenzija</div>
      </div>
      <div class="booking-divider"></div>
      <div>
        <div class="booking-score-big">9.9</div>
        <div class="booking-score-label" data-sr="IZUZETNO" data-en="EXCEPTIONAL">IZUZETNO</div>
      </div>
      <div class="booking-divider"></div>
      <div>
        <div style="font-size:1.2rem; color:var(--gold);">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="booking-reviews" data-sr="5.0 ocena na Google-u" data-en="5.0 rating on Google">5.0 ocena na Google-u</div>
      </div>
    </div>
  </div>

  <div class="testi-carousel" id="testiCarousel">
    <div class="testi-track" id="testiTrack">
      <div class="testi-card">
        <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="testi-headline" data-sr="Prelep smeštaj za svaku preporuku" data-en="Beautiful accommodation">Prelep sme&#353;taj za svaku preporuku</div>
        <p class="testi-quote"
           data-sr="Sve nam se svidelo, smeštaj je za svaku preporuku naročito za porodice sa decom zbog prelepog bazena. Prelepo osmišljen, uredan i elegantan prostor. Jedan od najlepših smeštaja u Soko Banji!"
           data-en="Everything was wonderful, the accommodation is highly recommended especially for families with children because of the beautiful pool. Beautifully designed, tidy and elegant space. One of the most beautiful accommodations in Soko Banja!">
          Sve nam se svidelo, sme&#353;taj je za svaku preporuku naro&#269;ito za porodice sa decom zbog prelepog bazena. Prelepo osmi&#353;ljen, uredan i elegantan prostor. Jedan od najlep&#353;ih sme&#353;taja u Soko Banji!
        </p>
        <div class="testi-author">Sne&#382;ana</div>
        <div class="testi-meta" data-sr="Apartman sa pogledom · Porodica · jun 2025. · 10/10" data-en="Mountain view apt · Family · Jun 2025 · 10/10">Apartman sa pogledom &middot; Porodica &middot; jun 2025. &middot; 10/10</div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="testi-headline" data-sr="Izuzetan" data-en="Exceptional">Izuzetan</div>
        <p class="testi-quote"
           data-sr="Domaćini su toliko prijatni da smo se osećali kao da smo u svom objektu. O tišini, miru, čistoći, kao i celokupnom izgledu kompleksa — prelepo. Apsolutno sve preporuke, i po meni najbolji izbor za odsedanje u banji!"
           data-en="The hosts were so warm we felt like we were in our own place. The peace, cleanliness, and overall look of the complex — beautiful. Absolutely all recommendations, in my opinion the best choice for a stay in the spa town!">
          Doma&#263;ini su toliko prijatni da smo se ose&#263;ali kao da smo u svom objektu. O ti&#353;ini, miru, &#269;isto&#263;i, kao i celokupnom izgledu kompleksa &mdash; prelepo. Apsolutno sve preporuke, i po meni najbolji izbor za odsedanje u banji!
        </p>
        <div class="testi-author">Stefan</div>
        <div class="testi-meta" data-sr="Apartman sa bazenom · Par · maj 2024. · 10/10" data-en="Pool view apt · Couple · May 2024 · 10/10">Apartman sa bazenom &middot; Par &middot; maj 2024. &middot; 10/10</div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="testi-headline">Best place in Soko Banja</div>
        <p class="testi-quote">
          Everything was on the highest level. The hosts were super friendly, rooms were clean and comfy, facilities were beautiful. I really enjoyed every moment there. If you want to run away from a busy city — this is the right place.
        </p>
        <div class="testi-author">Miomir</div>
        <div class="testi-meta">Pool view apt &middot; Family &middot; Jul 2023 &middot; 10/10</div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="testi-headline" data-sr="Prelepo, bazen čist i topao" data-en="Beautiful, pool clean and warm">Prelepo, bazen &#269;ist i topao</div>
        <p class="testi-quote"
           data-sr="Čistoća celog objekta i unutra i spolja — sve je novo lepo čisto uredno. Bazen se čisti svako veče, voda je topla. Dvorište lepo uređeno i sasvim dovoljno mesta za odmor, sunčanje i druge aktivnosti."
           data-en="Cleanliness of the whole property inside and out — everything is new, clean and tidy. The pool is cleaned every evening, the water is warm. The yard is beautifully arranged with plenty of space for relaxation and sunbathing.">
          &#268;isto&#263;a celog objekta i unutra i spolja &mdash; sve je novo lepo &#269;isto uredno. Bazen se &#269;isti svako ve&#269;e, voda je topla. Dvori&#353;te lepo ure&#273;eno i sasvim dovoljno mesta za odmor, sun&#269;anje i druge aktivnosti.
        </p>
        <div class="testi-author">Sonja</div>
        <div class="testi-meta" data-sr="Studio King · Porodica · jul 2024. · 10/10" data-en="Studio King · Family · Jul 2024 · 10/10">Studio King &middot; Porodica &middot; jul 2024. &middot; 10/10</div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="testi-headline">Overall a great experience</div>
        <p class="testi-quote">
          The people we dealt with at the property were friendly and responsive. It was a pleasure to deal with them.
        </p>
        <div class="testi-author">Harding</div>
        <div class="testi-meta">2-bedroom apt &middot; Sep 2025 &middot; 10/10</div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="testi-headline" data-sr="Čist, potpuno nov apartman" data-en="Clean, brand new apartment">&#268;ist, potpuno nov apartman</div>
        <p class="testi-quote"
           data-sr="Čist, potpuno nov apartman, prvoklasno sređen sa prelepim pogledom na planine. Jako ljubazni i predusretljivi domaćini. Sve je bilo sjajno!"
           data-en="Clean, brand new apartment, first-class condition with a beautiful mountain view. Very friendly and attentive hosts. Everything was great!">
          &#268;ist, potpuno nov apartman, prvoklasno sre&#273;en sa prelepim pogledom na planine. Jako ljubazni i predusretljivi doma&#263;ini. Sve je bilo sjajno!
        </p>
        <div class="testi-author">Katarina</div>
        <div class="testi-meta" data-sr="Pogled na planinu · Par · feb 2024. · 10/10" data-en="Mountain view · Couple · Feb 2024 · 10/10">Pogled na planinu &middot; Par &middot; feb 2024. &middot; 10/10</div>
      </div>
    </div>
  </div>
  <div class="testi-controls" id="testiControls">
    <button class="testi-btn" id="testiPrev" aria-label="Previous testimonial">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <div class="testi-dots" id="testiDots"></div>
    <button class="testi-btn" id="testiNext" aria-label="Next testimonial">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
  </div>
</section>

<!-- ============ GALLERY ============ -->
<section id="galerija" class="gallery-section">
  <div class="container">
    <div class="section-header reveal">
      <span class="eyebrow" data-sr="Galerija" data-en="Gallery">Galerija</span>
      <h2 data-sr="Svaki detalj govori za sebe" data-en="Every detail speaks for itself">Svaki detalj govori <span class="cursive">za sebe</span></h2>
    </div>
    <div class="gallery-slider-wrap">
      <div class="gallery-slider-track" id="galleryTrack">
        <div class="gallery-slide" data-src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/bazen-1-scaled.webp">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/bazen-1-scaled.webp" alt="Goldenview bazen" loading="lazy">
        </div>
        <div class="gallery-slide" data-src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/spa-2-scaled.webp">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/spa-2-scaled.webp" alt="Spa tretman" loading="lazy">
        </div>
        <div class="gallery-slide" data-src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/restoran-1-scaled.webp">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/restoran-1-scaled.webp" alt="Restoran Goldenview" loading="lazy">
        </div>
        <div class="gallery-slide" data-src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-1.jpg">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-1.jpg" alt="Apartman Goldenview" loading="lazy">
        </div>
        <div class="gallery-slide" data-src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/spa-3.webp">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/spa-3.webp" alt="Wellness jacuzzi" loading="lazy">
        </div>
        <div class="gallery-slide" data-src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/restoran-3-scaled.webp">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/restoran-3-scaled.webp" alt="Restoran bar" loading="lazy">
        </div>
        <div class="gallery-slide" data-src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-3.jpg">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/apartman-3.jpg" alt="Apartman mansarda" loading="lazy">
        </div>
        <div class="gallery-slide" data-src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/bazen-2-scaled.webp">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/bazen-2-scaled.webp" alt="Goldenview kompleks" loading="lazy">
        </div>
        <div class="gallery-slide" data-src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/bazen-3-scaled.webp">
          <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/bazen-3-scaled.webp" alt="Spa bazen" loading="lazy">
        </div>
      </div>
    </div>
    <div class="gallery-nav">
      <button class="gallery-btn" id="galleryPrev" aria-label="Previous">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="gallery-dots" id="galleryDots"></div>
      <button class="gallery-btn" id="galleryNext" aria-label="Next">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  </div>
</section>

<!-- ============ CTA ============ -->
<section class="cta-section">
  <div class="cta-bg">
    <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/spa-1-scaled.webp" alt="">
  </div>
  <div class="cta-content">
    <span class="eyebrow" data-sr="Spreman za odmor?" data-en="Ready to unwind?">Spreman za odmor?</span>
    <h2 data-sr="Rezerviši sada i dobij najbolju cenu" data-en="Book now and get the best rate">Rezerviši sada i dobij najbolju cenu</h2>
    <p data-sr="Proveri dostupnost i rezerviši direktno — garantovana najbolja cena kada preskočiš posrednika." data-en="Check availability and book directly — guaranteed best rate when you skip the middleman.">Proveri dostupnost i rezerviši direktno &mdash; garantovana najbolja cena kada preskoči&#353; posrednika.</p>
    <div class="cta-btns">
      <a href="tel:063604808" class="btn btn-gold" data-sr="Proveri dostupnost i rezerviši →" data-en="Check availability & book →">Proveri dostupnost i rezervi&#353;i &rarr;</a>
    </div>
    <div class="cta-note" data-sr="Odgovaramo najkasnije do 1h." data-en="We respond within 1 hour.">Odgovaramo najkasnije do 1h.</div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer class="footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="https://udruzenjeradar.rs/wp-content/uploads/2026/03/logo-goldenview.png" alt="Goldenview" class="footer-logo">
      <p data-sr="Moderni apartmani sa bazenom, domaći restoran i mir koji zaslužujete." data-en="Modern apartments with pool, local restaurant, and the peace you deserve.">Moderni apartmani sa bazenom, doma&#263;i restoran i mir koji zaslu&#382;ujete.</p>
      <div class="footer-socials">
        <a href="https://instagram.com" class="footer-social-btn" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
        </a>
        <a href="https://facebook.com" class="footer-social-btn" aria-label="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM20 11h-5.551v-1.915c0-.466.094-.776.516-.776h2.469V6.6h-3.328c-3.165 0-3.833 2.592-3.833 4.215V11h-2v2h2v6h2.561v-6h2.738l.264-2z"/></svg>
        </a>
      </div>
    </div>
    <div class="footer-col">
      <h4 data-sr="SMEŠTAJ" data-en="ACCOMMODATION">SME&#352;TAJ</h4>
      <a href="#apartmani" data-sr="Apartmani" data-en="Apartments">Apartmani</a>
      <a href="#apartmani" data-sr="Cene" data-en="Pricing">Cene</a>
      <a href="#apartmani" data-sr="Povoljnosti" data-en="Amenities">Povoljnosti</a>
    </div>
    <div class="footer-col">
      <h4 data-sr="DOŽIVLJAJ" data-en="EXPERIENCE">DOŽILJAJ</h4>
      <a href="#restoran" data-sr="Restoran" data-en="Restaurant">Restoran</a>
      <a href="#o-nama" data-sr="Wellness & SPA" data-en="Wellness & SPA">Wellness &amp; SPA</a>
      <a href="#galerija" data-sr="Galerija" data-en="Gallery">Galerija</a>
    </div>
    <div class="footer-col">
      <h4 id="kontakt" data-sr="KONTAKT" data-en="CONTACT">KONTAKT</h4>
      <div class="footer-contact-row">
        <svg class="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <p>Sokobanja, Alekse Markišića 122</p>
      </div>
      <div class="footer-contact-row">
        <svg class="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        <a href="tel:063604808">063 / 604-808</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2025 Goldenview Sokobanja. Sva prava zadržana.</p>
  </div>
</footer>

<!-- Lightbox -->
<div class="lightbox" id="lightbox">
  <img id="lightboxImg" src="" alt="">
  <div class="lightbox-close" id="lightboxClose"></div>
</div>

<script>
// ---- LANGUAGE TOGGLE ----
function switchLang(lang) {
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll('[data-sr], [data-en]').forEach(el => {
    el.textContent = lang === 'sr' ? (el.dataset.sr || el.textContent) : (el.dataset.en || el.textContent);
  });
  localStorage.setItem('preferredLang', lang);
  updateNightsCounter();
}
const savedLang = localStorage.getItem('preferredLang') || 'sr';
switchLang(savedLang);
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.classList.toggle('active', btn.dataset.lang === savedLang);
  btn.addEventListener('click', () => {
    switchLang(btn.dataset.lang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b === btn));
  });
});

// ---- MOBILE NAV TOGGLE ----
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

// ---- NAV SCROLL EFFECT ----
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ---- REVEAL ON SCROLL ----
const revealElements = document.querySelectorAll('[class*="reveal"]');
const observerOptions = { threshold:0.1, rootMargin:'0px 0px -100px 0px' };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
revealElements.forEach(el => observer.observe(el));

// ---- COUNTER ANIMATION ----
const counters = document.querySelectorAll('.counter');
const observerCounter = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.dataset.target);
      let current = 0;
      const increment = target / 30;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) { counter.textContent = target; clearInterval(interval); }
        else { counter.textContent = Math.floor(current); }
      }, 30);
      observerCounter.unobserve(counter);
    }
  });
}, { threshold:0.5 });
counters.forEach(c => observerCounter.observe(c));

// ---- NIGHTS COUNTER ----
function updateNightsCounter() {
  const checkIn = document.getElementById('checkInDate').value;
  const checkOut = document.getElementById('checkOutDate').value;
  const counterEl = document.getElementById('nightsCounter');
  if (checkIn && checkOut) {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    if (diff > 0) {
      const lang = document.documentElement.dataset.lang;
      if (lang === 'en') {
        counterEl.textContent = diff + ' night' + (diff > 1 ? 's' : '');
      } else {
        let word = 'noći';
        if (diff === 1) word = 'noć';
        else if (diff >= 2 && diff <= 4) word = 'noći';
        else word = 'noći';
        counterEl.textContent = diff + ' ' + word;
      }
    } else {
      counterEl.textContent = '';
    }
  } else {
    counterEl.textContent = '';
  }
}
document.getElementById('checkInDate').addEventListener('change', updateNightsCounter);
document.getElementById('checkOutDate').addEventListener('change', updateNightsCounter);

// ---- AVAILABILITY MODAL ----
const availModal = document.getElementById('availModal');
const availCheckBtn = document.getElementById('availCheckBtn');
const availModalClose = document.getElementById('availModalClose');

availCheckBtn.addEventListener('click', () => {
  const checkIn = document.getElementById('checkInDate').value;
  const checkOut = document.getElementById('checkOutDate').value;
  const guests = document.getElementById('guestCount').value;
  const lang = document.documentElement.dataset.lang;
  const summaryEl = document.getElementById('availSummary');

  let summaryParts = [];
  if (checkIn) summaryParts.push((lang === 'sr' ? 'Prijava: ' : 'Check-in: ') + checkIn);
  if (checkOut) summaryParts.push((lang === 'sr' ? 'Odjava: ' : 'Check-out: ') + checkOut);
  summaryParts.push((lang === 'sr' ? 'Gosti: ' : 'Guests: ') + guests);
  const nightsText = document.getElementById('nightsCounter').textContent;
  if (nightsText) summaryParts.push(nightsText);
  summaryEl.textContent = summaryParts.join(' · ');

  document.getElementById('availFormContent').style.display = '';
  document.getElementById('availSuccess').style.display = 'none';
  availModal.classList.add('open');
});

availModalClose.addEventListener('click', () => availModal.classList.remove('open'));
availModal.addEventListener('click', e => { if (e.target === availModal) availModal.classList.remove('open'); });

document.getElementById('availSubmitBtn').addEventListener('click', () => {
  const email = document.getElementById('availEmail').value;
  const phone = document.getElementById('availPhone').value;
  const consent = document.getElementById('availConsent').checked;
  if (!email && !phone) { document.getElementById('availEmail').focus(); return; }
  if (!consent) { document.getElementById('availConsent').focus(); return; }
  document.getElementById('availFormContent').style.display = 'none';
  document.getElementById('availSuccess').style.display = 'block';
  setTimeout(() => availModal.classList.remove('open'), 3000);
});

// ---- TESTIMONIALS CAROUSEL (wrap-around, always full) ----
const testiTrack = document.getElementById('testiTrack');
const testiCards = Array.from(testiTrack.children);
let testiIdx = 0;
const TVIS = () => window.innerWidth < 768 ? 1 : 2;
const testiTotal = testiCards.length;

function buildTestiDots() {
  const pages = Math.ceil(testiTotal / TVIS());
  document.getElementById('testiDots').innerHTML = '';
  for (let i = 0; i < pages; i++) {
    const d = document.createElement('div');
    d.className = 'testi-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTesti(i));
    document.getElementById('testiDots').appendChild(d);
  }
}

function goTesti(idx) {
  const vis = TVIS();
  const pages = Math.ceil(testiTotal / vis);
  testiIdx = ((idx % pages) + pages) % pages;
  const cardW = testiCards[0].getBoundingClientRect().width + 24;
  testiTrack.style.transform = `translateX(-${testiIdx * vis * cardW}px)`;
  document.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === testiIdx));
}

buildTestiDots();
document.getElementById('testiPrev').addEventListener('click', () => goTesti(testiIdx - 1));
document.getElementById('testiNext').addEventListener('click', () => goTesti(testiIdx + 1));

let testiTimer = setInterval(() => goTesti(testiIdx + 1), 5000);
testiTrack.addEventListener('mouseenter', () => clearInterval(testiTimer));
testiTrack.addEventListener('mouseleave', () => { testiTimer = setInterval(() => goTesti(testiIdx + 1), 5000); });

// ---- APARTMENT SLIDER ----
const aptTrack = document.getElementById('aptTrack');
const aptCards = Array.from(aptTrack.children);
let aptIdx = 0;
const AVIS = () => window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

function goApt(idx) {
  const vis = AVIS();
  const maxIdx = aptCards.length - vis;
  aptIdx = Math.max(0, Math.min(idx, maxIdx));
  const cardW = aptCards[0].getBoundingClientRect().width + 24;
  aptTrack.style.transform = `translateX(-${aptIdx * cardW}px)`;
}

document.getElementById('aptPrev').addEventListener('click', () => goApt(aptIdx - 1));
document.getElementById('aptNext').addEventListener('click', () => goApt(aptIdx + 1));

// ---- GALLERY SLIDER ----
const galleryTrack = document.getElementById('galleryTrack');
const slides = Array.from(galleryTrack.children);
const galleryDotsWrap = document.getElementById('galleryDots');
let gIdx = 0;
const GVIS = () => window.innerWidth < 768 ? 1 : window.innerWidth < 1100 ? 2 : 3;

function buildGalleryDots() {
  const pages = Math.ceil(slides.length / GVIS());
  galleryDotsWrap.innerHTML = '';
  for (let i = 0; i < pages; i++) {
    const d = document.createElement('div');
    d.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goGallery(i));
    galleryDotsWrap.appendChild(d);
  }
}

function goGallery(idx) {
  const vis = GVIS();
  const pages = Math.ceil(slides.length / vis);
  gIdx = ((idx % pages) + pages) % pages;
  const slideW = slides[0].getBoundingClientRect().width + 16;
  galleryTrack.style.transform = `translateX(-${gIdx * vis * slideW}px)`;
  galleryDotsWrap.querySelectorAll('.gallery-dot').forEach((d, i) => d.classList.toggle('active', i === gIdx));
}
buildGalleryDots();
document.getElementById('galleryPrev').addEventListener('click', () => goGallery(gIdx - 1));
document.getElementById('galleryNext').addEventListener('click', () => goGallery(gIdx + 1));

// Gallery lightbox
slides.forEach(s => {
  s.addEventListener('click', () => {
    document.getElementById('lightboxImg').src = s.dataset.src;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
document.getElementById('lightboxClose').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
});
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) { e.currentTarget.classList.remove('open'); document.body.style.overflow = ''; }
});

// ---- TOUCH SWIPE SUPPORT FOR SLIDERS ----
function addSwipe(trackEl, goFn, getIdx) {
  let startX = 0, startY = 0, isDragging = false, moved = false;
  const threshold = 40;

  trackEl.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
    moved = false;
    trackEl.style.transition = 'none';
  }, { passive: true });

  trackEl.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    // If moving more horizontally than vertically, prevent scroll
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      moved = true;
      e.preventDefault();
    }
  }, { passive: false });

  trackEl.addEventListener('touchend', e => {
    if (!isDragging) return;
    isDragging = false;
    trackEl.style.transition = '';
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > threshold && moved) {
      if (dx < 0) goFn(getIdx() + 1); // swipe left = next
      else goFn(getIdx() - 1);        // swipe right = prev
    }
  }, { passive: true });

  // Prevent click on links/buttons after swipe
  trackEl.addEventListener('click', e => {
    if (moved) { e.preventDefault(); e.stopPropagation(); }
  }, true);
}

// Add swipe to apartment slider
addSwipe(aptTrack, goApt, () => aptIdx);

// Add swipe to testimonials slider
addSwipe(testiTrack, goTesti, () => testiIdx);

// Add swipe to gallery slider
addSwipe(galleryTrack, goGallery, () => gIdx);
</script>
</body>
</html>