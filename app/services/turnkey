'use client';
import { useState } from 'react';

export default function TurnkeyPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: 'Villa Renovation', desc: 'Complete villa transformation from design to handover — interior, exterior, pool, and landscape.' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>, title: 'Commercial Fit-Out', desc: 'Office, retail, and restaurant fit-outs delivered on time with zero disruption to your business.' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>, title: 'MEP Works', desc: 'Full mechanical, electrical, and plumbing solutions integrated into every turnkey project.' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>, title: 'Civil Works', desc: 'Foundations, blockwork, concrete, and all structural requirements handled in-house.' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: 'Design & Build', desc: 'From concept design and 3D visualization to full construction — one seamless process.' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>, title: 'Post-Handover Support', desc: 'Snagging, warranty support, and ongoing maintenance after project completion.' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root { --green:#7a9e30; --green-light:#9BC14C; --green-dark:#5a7a1e; --green-deeper:#3d5c10; --white:#ffffff; --off-white:#f8f9f5; --text:#222; --muted:#666; --border:rgba(155,193,76,0.2); }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background: var(--white); color: var(--text); overflow-x: hidden; }

        .topbar { background: var(--green-dark); color: rgba(255,255,255,0.85); font-size: 12px; padding: 7px 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
        .topbar-left { display: flex; align-items: center; gap: 1.25rem; }
        .topbar-right { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }
        .topbar-item { display: flex; align-items: center; gap: 6px; }
        .topbar a { color: #d4f095; text-decoration: none; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
        .topbar a:hover { text-decoration: underline; }

        nav { background: var(--white); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 200; box-shadow: 0 2px 12px rgba(90,122,30,0.07); }
        .nav-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .logo img { width: 50px; height: 50px; object-fit: contain; border-radius: 8px; }
        .logo-text .name { display: block; font-size: 14.5px; font-weight: 600; color: var(--green-deeper); line-height: 1.2; }
        .logo-text .sub { display: block; font-size: 10px; color: var(--muted); letter-spacing: 0.07em; text-transform: uppercase; }
        .nav-list { display: flex; align-items: center; gap: 0.1rem; list-style: none; }
        .nav-list li a { font-size: 13.5px; font-weight: 500; color: #333; text-decoration: none; padding: 7px 13px; border-radius: 6px; transition: background 0.2s, color 0.2s; display: block; }
        .nav-list li a:hover { background: rgba(155,193,76,0.1); color: var(--green-dark); }
        .nav-list li a.active { color: var(--green-dark); font-weight: 600; }
        .nav-cta-a { background: var(--green-light); color: #fff !important; padding: 9px 20px !important; border-radius: 8px !important; font-weight: 600 !important; }
        .nav-cta-a:hover { background: var(--green-dark) !important; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: #333; border-radius: 2px; }
        .mobile-nav { display: none; flex-direction: column; background: var(--white); padding: 0.75rem 1.5rem 1.5rem; border-top: 1px solid var(--border); }
        .mobile-nav.open { display: flex; }
        .mobile-nav a { font-size: 15px; font-weight: 500; color: #333; text-decoration: none; padding: 10px 0; border-bottom: 1px solid #f0f0f0; }
        .mob-cta { margin-top: 12px; background: var(--green-light); color: #fff !important; text-align: center; padding: 13px; border-radius: 9px; font-weight: 600; border-bottom: none !important; }

        /* HERO */
        .hero { background: linear-gradient(135deg, var(--green-deeper) 0%, #4a7a18 60%, #2d5c08 100%); padding: clamp(3.5rem,7vw,6rem) 1.5rem; text-align: center; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BC14C' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        .hero-content { position: relative; max-width: 700px; margin: 0 auto; }
        .breadcrumb { display: flex; align-items: center; gap: 8px; justify-content: center; margin-bottom: 1.25rem; flex-wrap: wrap; }
        .breadcrumb a { color: rgba(255,255,255,0.55); font-size: 13px; text-decoration: none; }
        .breadcrumb a:hover { color: #c8e88a; }
        .breadcrumb span { color: rgba(255,255,255,0.35); font-size: 12px; }
        .breadcrumb-active { color: #c8e88a; font-size: 13px; font-weight: 500; }
        .hero-badge { display: inline-flex; align-items: center; gap: 7px; background: rgba(155,193,76,0.18); border: 1px solid rgba(155,193,76,0.4); color: #c8e88a; font-size: 11px; font-weight: 600; padding: 5px 14px; border-radius: 100px; margin-bottom: 1.25rem; letter-spacing: 0.06em; text-transform: uppercase; }
        .hero-dot { width: 6px; height: 6px; background: var(--green-light); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.4rem,5.5vw,4.2rem); font-weight: 700; color: #fff; line-height: 1.08; margin-bottom: 1.25rem; }
        .hero h1 em { color: #c8e88a; font-style: normal; }
        .hero p { font-size: 16px; color: rgba(255,255,255,0.82); line-height: 1.8; margin-bottom: 2rem; max-width: 560px; margin-left: auto; margin-right: auto; }
        .hero-btns { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
        .btn-green { background: var(--green-light); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, transform 0.15s; }
        .btn-green:hover { background: var(--green-dark); transform: translateY(-2px); }
        .btn-outline-w { background: rgba(255,255,255,0.1); color: #fff; padding: 13px 22px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(255,255,255,0.35); transition: background 0.2s; }
        .btn-outline-w:hover { background: rgba(255,255,255,0.18); }

        .section-tag { display: inline-block; font-size: 11px; font-weight: 600; color: var(--green-dark); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; padding: 4px 12px; background: rgba(122,158,48,0.1); border-radius: 100px; border: 1px solid rgba(122,158,48,0.25); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #1a1a1a; line-height: 1.15; margin-bottom: 0.85rem; }
        .section-sub { font-size: 15px; color: var(--muted); line-height: 1.8; }

        /* WHAT IS TURNKEY */
        .what-section { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .what-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .what-inner p { font-size: 15.5px; color: var(--muted); line-height: 1.85; margin-bottom: 1rem; }
        .what-highlights { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; margin-top: 2rem; }
        .what-card { background: var(--off-white); border: 1px solid var(--border); border-radius: 14px; padding: 1.75rem; text-align: center; }
        .what-num { font-family: 'Cormorant Garamond', serif; font-size: 2.8rem; font-weight: 700; color: var(--green-light); line-height: 1; margin-bottom: 0.5rem; }
        .what-card h4 { font-size: 15px; font-weight: 600; color: #1a1a1a; margin-bottom: 4px; }
        .what-card p { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* SERVICES */
        .svc-section { background: var(--off-white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .svc-inner { max-width: 1100px; margin: 0 auto; }
        .svc-header { text-align: center; margin-bottom: 2.5rem; }
        .svc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px,1fr)); gap: 1.5rem; }
        .svc-card { background: var(--white); border: 1px solid rgba(155,193,76,0.15); border-radius: 16px; padding: 2rem; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; position: relative; overflow: hidden; }
        .svc-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--green-light), var(--green-dark)); transform: scaleX(0); transform-origin: left; transition: transform 0.3s; }
        .svc-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(90,122,30,0.1); border-color: rgba(155,193,76,0.3); }
        .svc-card:hover::before { transform: scaleX(1); }
        .svc-icon { width: 58px; height: 58px; background: rgba(155,193,76,0.1); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.1rem; color: var(--green-dark); }
        .svc-card h3 { font-size: 17px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; }
        .svc-card p { font-size: 13.5px; color: var(--muted); line-height: 1.7; }

        /* BANNER */
        .banner { position: relative; height: clamp(300px,42vw,500px); overflow: hidden; display: flex; align-items: center; }
        .banner img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .banner-ov { position: absolute; inset: 0; background: linear-gradient(to right, rgba(61,92,16,0.92) 0%, rgba(61,92,16,0.5) 55%, rgba(61,92,16,0.08) 100%); }
        .banner-content { position: relative; padding: 0 clamp(1.5rem,6vw,6rem); max-width: 600px; }
        .banner-content .section-tag { color: #c8e88a; background: rgba(155,193,76,0.2); border-color: rgba(155,193,76,0.35); }
        .banner-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,5vw,3.2rem); font-weight: 700; color: #fff; line-height: 1.1; margin-bottom: 1rem; }
        .banner-content p { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.75; margin-bottom: 1.75rem; }
        .banner-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; }
        .btn-white { background: #fff; color: var(--green-deeper); padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s; }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-outline-white { background: transparent; color: #fff; padding: 13px 22px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(255,255,255,0.45); transition: background 0.2s; }
        .btn-outline-white:hover { background: rgba(255,255,255,0.12); }

        /* PROCESS */
        .process { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .process-inner { max-width: 1100px; margin: 0 auto; }
        .process-header { text-align: center; margin-bottom: 2.5rem; }
        .process-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap: 1.25rem; }
        .p-step { text-align: center; padding: 2rem 1.25rem; background: var(--off-white); border-radius: 16px; border: 1px solid var(--border); }
        .p-num { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 700; color: rgba(155,193,76,0.15); line-height: 1; }
        .p-icon { width: 56px; height: 56px; background: var(--green-light); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0.5rem auto 1rem; }
        .p-step h4 { font-size: 15px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; }
        .p-step p { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* CTA */
        .cta-band { background: var(--green-deeper); padding: 3.5rem 1.5rem; text-align: center; }
        .cta-band h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.6rem); font-weight: 700; color: #fff; margin-bottom: 0.85rem; }
        .cta-band p { color: rgba(255,255,255,0.8); font-size: 15px; margin-bottom: 2rem; }
        .cta-btns { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
        .btn-cta-w { background: #fff; color: var(--green-deeper); padding: 13px 28px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s; }
        .btn-cta-w:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-cta-g { background: var(--green-light); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; }
        .btn-cta-g:hover { background: var(--green-dark); }

        footer { background: var(--green-dark); color: rgba(255,255,255,0.65); }
        .footer-main { max-width: 1280px; margin: 0 auto; padding: 3rem 1.5rem 2rem; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2.5rem; }
        .footer-brand p { font-size: 13px; line-height: 1.75; color: rgba(255,255,255,0.55); max-width: 240px; margin: 0.85rem 0 1.25rem; }
        .social-links { display: flex; gap: 8px; }
        .social-link { width: 34px; height: 34px; background: rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; color: rgba(255,255,255,0.65); transition: background 0.2s; }
        .social-link:hover { background: rgba(255,255,255,0.2); color: #fff; }
        .footer-col h4 { font-size: 12px; font-weight: 600; color: #d4f095; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 0.85rem; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .footer-col ul li a { font-size: 12.5px; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
        .footer-col ul li a:hover { color: #d4f095; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; max-width: 1280px; margin: 0 auto; font-size: 11.5px; flex-wrap: wrap; gap: 0.5rem; color: rgba(255,255,255,0.45); }
        .float-call { position: fixed; left: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: var(--green-light); color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(90,122,30,0.35); transition: transform 0.2s, background 0.2s; }
        .float-call:hover { transform: scale(1.1); background: var(--green-dark); }
        .float-wa { position: fixed; right: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(37,211,102,0.4); transition: transform 0.2s; }
        .float-wa:hover { transform: scale(1.1); }

        @media (max-width: 900px) {
          .nav-list { display: none; }
          .hamburger { display: flex; }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
          .what-highlights { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .topbar-left { display: none; }
          .topbar { justify-content: center; }
          .process-steps { grid-template-columns: 1fr 1fr; }
          .footer-main { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .hero-btns, .cta-btns, .banner-btns { flex-direction: column; align-items: center; }
          .btn-green, .btn-outline-w, .btn-white, .btn-outline-white, .btn-cta-w, .btn-cta-g { width: 100%; justify-content: center; }
          .process-steps { grid-template-columns: 1fr; }
          .footer-main { grid-template-columns: 1fr; }
        }
        @media (max-width: 380px) { .logo-text .sub { display: none; } }
      `}</style>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-left">
          <span className="topbar-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Dubai, UAE</span>
          <span className="topbar-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Mon-Sat: 8am-8pm</span>
        </div>
        <div className="topbar-right">
          <a href="tel:+971559747416"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg> +971 55 974 7416</a>
          <a href="mailto:Info@allcaretechnicalservices.ae"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> Info@allcaretechnicalservices.ae</a>
        </div>
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="/" className="logo"><img src="/logo.jpg" alt="All Care" /><div className="logo-text"><span className="name">All Care Technical</span><span className="sub">Services - Dubai</span></div></a>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/services" className="active">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/process">Our Process</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="tel:+971559747416" className="nav-cta-a">Call Now</a></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Menu"><span /><span /><span /></button>
        </div>
        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/services">All Services</a>
          <a href="/services/interior-renovation">Interior Renovation</a>
          <a href="/services/exterior-renovation">Exterior Renovation</a>
          <a href="/about">About Us</a>
          <a href="/process">Our Process</a>
          <a href="/#contact">Contact</a>
          <a href="tel:+971559747416" className="mob-cta">Call Now - +971 55 974 7416</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="breadcrumb">
            <a href="/">Home</a><span>&gt;</span>
            <a href="/services">Services</a><span>&gt;</span>
            <span className="breadcrumb-active">Turnkey Solutions</span>
          </div>
          <div className="hero-badge"><div className="hero-dot" /> One Team. One Contract. Zero Hassle.</div>
          <h1>Complete Project Delivery From <em>Start to Finish</em></h1>
          <p>We manage your entire project from concept design to final handover. One contract, one team, one point of contact - delivering your vision with zero stress.</p>
          <div className="hero-btns">
            <a href="/#contact" className="btn-green">Get Free Quote <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="btn-outline-w"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* WHAT IS TURNKEY */}
      <section className="what-section">
        <div className="what-inner">
          <span className="section-tag">What is Turnkey?</span>
          <h2 className="section-title">One Solution. Complete Peace of Mind.</h2>
          <p>A turnkey project means we handle everything - design, permits, materials, construction, MEP, finishing, and handover. You get a single contract, a single point of contact, and a finished space ready to use.</p>
          <p>No coordination headaches, no multiple contractors, no delays. Just one team delivering your complete vision from day one to the final key.</p>
          <div className="what-highlights">
            <div className="what-card">
              <div className="what-num">1</div>
              <h4>One Contract</h4>
              <p>Single agreement covering all works from design to completion.</p>
            </div>
            <div className="what-card">
              <div className="what-num">1</div>
              <h4>One Team</h4>
              <p>All trades managed by one experienced project team.</p>
            </div>
            <div className="what-card">
              <div className="what-num">0</div>
              <h4>Zero Hassle</h4>
              <p>No coordination stress. We handle everything for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="svc-section">
        <div className="svc-inner">
          <div className="svc-header">
            <span className="section-tag">What We Cover</span>
            <h2 className="section-title">Turnkey Services Included</h2>
            <p className="section-sub" style={{margin:'0 auto',maxWidth:'520px'}}>Everything your project needs - managed, delivered, and guaranteed by All Care.</p>
          </div>
          <div className="svc-grid">
            {services.map(s => (
              <div className="svc-card" key={s.title}>
                <div className="svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <div className="banner">
        <img src="/Interior7.jpg" alt="Turnkey Renovation" onError={e => { e.currentTarget.style.display='none'; }} />
        <div className="banner-ov" />
        <div className="banner-content">
          <span className="section-tag">End to End</span>
          <h2>From Empty Shell to Move-In Ready</h2>
          <p>Whether it is a brand new villa, a commercial space, or a full renovation - we deliver your project ready to use with nothing left for you to worry about.</p>
          <div className="banner-btns">
            <a href="/#contact" className="btn-white">Start Your Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            <a href="/services" className="btn-outline-white">All Services</a>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <section className="process">
        <div className="process-inner">
          <div className="process-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Our Turnkey Process</h2>
          </div>
          <div className="process-steps">
            {[
              {n:'01',icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12"/></svg>,title:'Consultation',desc:'We discuss your vision, budget, and timeline.'},
              {n:'02',icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,title:'Design & Plan',desc:'3D visuals, material selection, and full planning.'},
              {n:'03',icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>,title:'Fixed Quote',desc:'One transparent price covering all works.'},
              {n:'04',icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,title:'Build & Deliver',desc:'Expert execution across all trades.'},
              {n:'05',icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,title:'Handover',desc:'Final walkthrough, keys, and after-care.'},
            ].map(p => (<div className="p-step" key={p.n}><div className="p-num">{p.n}</div><div className="p-icon">{p.icon}</div><h4>{p.title}</h4><p>{p.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <h2>Ready for a Turnkey Project?</h2>
        <p>One call is all it takes. Free consultation, transparent pricing, expert delivery.</p>
        <div className="cta-btns">
          <a href="tel:+971559747416" className="btn-cta-w"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg> +971 55 974 7416</a>
          <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="btn-cta-g"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> WhatsApp Us</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="logo"><img src="/logo.jpg" alt="All Care" /><div className="logo-text"><span className="name" style={{color:'#fff'}}>All Care Technical</span><span className="sub" style={{color:'rgba(255,255,255,0.5)'}}>Services - Dubai</span></div></a>
            <p>Your trusted renovation and technical services partner in Dubai.</p>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://www.instagram.com/allcaretechnical" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://www.tiktok.com/@all.care.technica" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
              <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/process">Our Process</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/services/interior-renovation">Interior Renovation</a></li>
              <li><a href="/services/exterior-renovation">Exterior Renovation</a></li>
              <li><a href="/services/turnkey">Turnkey Solutions</a></li>
              <li><a href="/services">Pool Construction</a></li>
              <li><a href="/services">Landscaping</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+971559747416">+971 55 974 7416</a></li>
              <li><a href="mailto:Info@allcaretechnicalservices.ae">Info@allcaretechnicalservices.ae</a></li>
              <li><a href="https://wa.me/971559747416">WhatsApp Us</a></li>
              <li><a href="#">Dubai, UAE</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>@ 2025 All Care Technical Services LLC. All rights reserved.</span>
          <span>Made with care in Dubai</span>
        </div>
      </footer>

      {/* FLOATING */}
      <a href="tel:+971559747416" className="float-call" aria-label="Call"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg></a>
      <a href="https://wa.me/971559747416" className="float-wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
    </>
  );
}
