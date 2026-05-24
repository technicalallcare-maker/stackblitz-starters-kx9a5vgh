'use client';
import { useState } from 'react';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const values = [
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title: 'Excellence', desc: 'We pursue perfection in every project — from the materials we select to the final finish we deliver.' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: 'Integrity', desc: 'Honest pricing, transparent communication, and a commitment to doing what is right — always.' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Client First', desc: 'Every decision we make is guided by what is best for our clients. Your satisfaction is our success.' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Reliability', desc: 'We deliver on our promises. On time, on budget, and to the highest standard — every single time.' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Safety', desc: 'We follow all Dubai safety regulations and maintain the highest standards on every job site.' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: 'Innovation', desc: 'We stay ahead of trends, adopting the latest techniques, materials, and design innovations.' },
  ];

  const milestones = [
    { year: '2014', title: 'Company Founded', desc: 'All Care Technical Services was established in Dubai with a team of 5 dedicated professionals.' },
    { year: '2016', title: 'First 100 Projects', desc: 'Reached 100 completed projects milestone, expanding our services to include pool construction.' },
    { year: '2018', title: 'Expanded Services', desc: 'Launched landscape, aluminum, and MEP divisions — becoming a true one-stop renovation company.' },
    { year: '2020', title: 'Team of 50+', desc: 'Grew to 50+ skilled professionals. Opened our dedicated plant nursery division.' },
    { year: '2022', title: '300+ Projects', desc: 'Surpassed 300 completed projects. Expanded into large-scale commercial and villa community works.' },
    { year: '2024', title: '500+ Projects', desc: 'Today we have completed 500+ projects across Dubai with a 4.9-star client satisfaction rating.' },
  ];

  const testimonials = [
    { name: 'Ahmad Al Mansouri', role: 'Villa Owner, Palm Jumeirah', rating: 5, text: 'All Care transformed our entire villa — interior, exterior, and pool area. The quality of work was exceptional and they delivered on time. I highly recommend them to anyone in Dubai looking for a reliable renovation company.' },
    { name: 'Sarah Johnson', role: 'Property Developer, Business Bay', rating: 5, text: 'We have used All Care for multiple commercial fit-outs across Dubai. Their professionalism, attention to detail, and transparent pricing make them our go-to renovation partner. Outstanding team and results.' },
    { name: 'Khalid Al Farhan', role: 'Homeowner, Arabian Ranches', rating: 5, text: 'The landscaping and pool project they completed at our villa exceeded all expectations. Beautiful work, skilled team, and great communication throughout. Will definitely use them again for our next project.' },
    { name: 'Priya Sharma', role: 'Restaurant Owner, JBR', rating: 5, text: 'All Care did a complete fit-out of our restaurant and the result was stunning. They understood our vision perfectly and executed everything to the highest standard. Our customers constantly compliment the interior.' },
    { name: 'Mohammed Al Rasheed', role: 'Real Estate Manager, DIFC', rating: 5, text: 'Reliable, skilled, and professional. All Care handled the renovation of 12 apartments for us — all delivered on schedule and to a very high standard. Their turnkey approach made the entire process stress-free.' },
    { name: 'Emma Williams', role: 'Homeowner, Jumeirah', rating: 5, text: 'From the initial consultation to the final handover, the experience was smooth and professional. Our bathroom and kitchen renovation looks absolutely beautiful. Thank you All Care for the wonderful work.' },
  ];

  const certifications = [
    { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Dubai Municipality Licensed', desc: 'Fully registered and approved contractor with Dubai Municipality.' },
    { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Fully Insured', desc: 'Comprehensive public liability insurance covering all our projects and operations.' },
    { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>, title: 'Valid Trade License', desc: 'Valid UAE trade license covering all renovation, construction, and technical services.' },
    { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>, title: 'Quality Certified', desc: 'ISO-aligned quality management systems ensuring consistent excellence across all projects.' },
  ];

  // ✅ Mosaic images — 6 images, no labels
  const mosaicImages = [
    { src: '/Luxury_Interior.jpg', alt: 'Luxury Interior Dubai' },
    { src: '/pool_construction.jpeg', alt: 'Pool Construction Dubai' },
    { src: '/about2.webp', alt: 'Villa Pool Dubai' },
    { src: '/maxresdefault_2_.jpg', alt: 'Interior Living Space' },
    { src: '/pool_and_outdoor.jpg', alt: 'Pool and Outdoor' },
    { src: '/about3.jpg', alt: 'Outdoor Living Dubai' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --green: #7a9e30; --green-light: #9BC14C; --green-dark: #5a7a1e; --green-deeper: #3d5c10;
          --white: #ffffff; --off-white: #f8f9f5; --text: #222; --muted: #666; --border: rgba(155,193,76,0.2);
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background: var(--white); color: var(--text); overflow-x: hidden; }

        /* TOPBAR */
        .topbar { background: var(--green-dark); color: rgba(255,255,255,0.85); font-size: 12px; padding: 7px 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
        .topbar-left { display: flex; align-items: center; gap: 1.25rem; }
        .topbar-right { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }
        .topbar-item { display: flex; align-items: center; gap: 6px; }
        .topbar a { color: #d4f095; text-decoration: none; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
        .topbar a:hover { text-decoration: underline; }

        /* NAV */
        nav { background: var(--white); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 200; box-shadow: 0 2px 12px rgba(90,122,30,0.07); }
        .nav-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .logo img { width: 50px; height: 50px; object-fit: contain; border-radius: 8px; }
        .logo-text .name { display: block; font-size: 14.5px; font-weight: 600; color: var(--green-deeper); line-height: 1.2; }
        .logo-text .sub { display: block; font-size: 10px; color: var(--muted); letter-spacing: 0.07em; text-transform: uppercase; }
        .nav-list { display: flex; align-items: center; gap: 0.1rem; list-style: none; }
        .nav-list li a { font-size: 13.5px; font-weight: 500; color: #333; text-decoration: none; padding: 7px 13px; border-radius: 6px; transition: background 0.2s, color 0.2s; display: block; }
        .nav-list li a:hover { background: rgba(155,193,76,0.1); color: var(--green-dark); }
        .nav-list li a.active { color: var(--green-dark); font-weight: 600; background: rgba(155,193,76,0.08); }
        .nav-cta-a { background: var(--green-light); color: #fff !important; padding: 9px 20px !important; border-radius: 8px !important; font-weight: 600 !important; }
        .nav-cta-a:hover { background: var(--green-dark) !important; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; flex-shrink: 0; }
        .hamburger span { display: block; width: 24px; height: 2px; background: #333; border-radius: 2px; }
        .mobile-nav { display: none; flex-direction: column; background: var(--white); padding: 0.75rem 1.5rem 1.5rem; border-top: 1px solid var(--border); }
        .mobile-nav.open { display: flex; }
        .mobile-nav a { font-size: 15px; font-weight: 500; color: #333; text-decoration: none; padding: 10px 0; border-bottom: 1px solid #f0f0f0; }
        .mobile-nav a:hover { color: var(--green-dark); }
        .mob-cta { margin-top: 12px; background: var(--green-light); color: #fff !important; text-align: center; padding: 13px; border-radius: 9px; font-weight: 600; border-bottom: none !important; }

        /* HERO */
        .hero {
          position: relative;
          width: 100%;
          min-height: clamp(500px, 75vh, 800px);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,16,6,0.96) 0%, rgba(10,16,6,0.65) 40%, rgba(10,16,6,0.2) 100%);
        }
        .hero-overlay2 {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(61,92,16,0.45) 0%, transparent 60%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: clamp(2.5rem,5vw,4rem) clamp(1.5rem,6vw,6rem);
          max-width: 820px;
          padding-bottom: clamp(2rem,4vw,3.5rem);
        }
        .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 1.25rem; flex-wrap: wrap; }
        .breadcrumb a { color: rgba(255,255,255,0.55); font-size: 13px; text-decoration: none; transition: color 0.2s; }
        .breadcrumb a:hover { color: #c8e88a; }
        .breadcrumb span { color: rgba(255,255,255,0.35); font-size: 12px; }
        .breadcrumb-active { color: #c8e88a; font-size: 13px; font-weight: 500; }
        .hero-badge { display: inline-flex; align-items: center; gap: 7px; background: rgba(155,193,76,0.18); border: 1px solid rgba(155,193,76,0.4); color: #c8e88a; font-size: 11px; font-weight: 600; padding: 5px 14px; border-radius: 100px; margin-bottom: 1.25rem; letter-spacing: 0.06em; text-transform: uppercase; }
        .hero-dot { width: 6px; height: 6px; background: var(--green-light); border-radius: 50%; animation: pulse 2s infinite; flex-shrink: 0; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.4rem,5.5vw,4.5rem); font-weight: 700; color: #fff; line-height: 1.08; margin-bottom: 1.25rem; }
        .hero h1 em { color: #c8e88a; font-style: normal; }
        .hero p { font-size: 15.5px; color: rgba(255,255,255,0.8); line-height: 1.8; margin-bottom: 2rem; max-width: 560px; }
        .hero-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; }
        .btn-green { background: var(--green-light); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, transform 0.15s; }
        .btn-green:hover { background: var(--green-dark); transform: translateY(-2px); }
        .btn-outline-w { background: rgba(255,255,255,0.1); color: #fff; padding: 13px 22px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(255,255,255,0.35); transition: background 0.2s; }
        .btn-outline-w:hover { background: rgba(255,255,255,0.18); }

        /* HERO STATS BAR */
        .hero-stats-bar {
          position: relative;
          z-index: 2;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(12px);
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          border-top: 3px solid var(--green-light);
        }
        .hstat { flex: 1; min-width: 120px; padding: 1.25rem 1.5rem; text-align: center; border-right: 1px solid rgba(155,193,76,0.12); }
        .hstat:last-child { border-right: none; }
        .hstat-num { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 700; color: var(--green-dark); line-height: 1; }
        .hstat-lbl { font-size: 11px; color: var(--muted); margin-top: 3px; white-space: nowrap; }

        /* SECTION COMMONS */
        .section-tag { display: inline-block; font-size: 11px; font-weight: 600; color: var(--green-dark); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; padding: 4px 12px; background: rgba(122,158,48,0.1); border-radius: 100px; border: 1px solid rgba(122,158,48,0.25); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #1a1a1a; line-height: 1.15; margin-bottom: 0.85rem; }
        .section-sub { font-size: 15px; color: var(--muted); line-height: 1.8; }

        /* STORY */
        .story-section { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .story-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .story-content { display: flex; flex-direction: column; gap: 1.25rem; }
        .story-content p { font-size: 15.5px; color: var(--muted); line-height: 1.85; }
        .story-content p strong { color: var(--green-deeper); font-weight: 600; }
        .story-link { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--green-dark); text-decoration: none; padding: 11px 22px; border: 1.5px solid var(--green-light); border-radius: 9px; margin-top: 0.5rem; transition: background 0.2s, color 0.2s; width: fit-content; }
        .story-link:hover { background: var(--green-light); color: #fff; }

        /* ✅ ABOUT SECTION - 3 images grid */
        .story-media { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .story-img-big { grid-column: 1 / -1; border-radius: 16px; overflow: hidden; height: 280px; }
        .story-img-big img { width: 100%; height: 100%; object-fit: cover; }
        .story-img-sm { border-radius: 12px; overflow: hidden; height: 180px; }
        .story-img-sm img { width: 100%; height: 100%; object-fit: cover; }

        /* STATS BAND */
        .stats-band { background: var(--green-dark); padding: 2.5rem 1.5rem; }
        .stats-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(6,1fr); gap: 1rem; text-align: center; }
        .stat-item { color: #fff; }
        .stat-icon { display: flex; justify-content: center; margin-bottom: 8px; opacity: 0.7; }
        .stat-num { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,3vw,2.6rem); font-weight: 700; color: #c8e88a; line-height: 1; }
        .stat-lbl { font-size: 11.5px; color: rgba(255,255,255,0.68); margin-top: 5px; }

        /* MISSION VISION */
        .mv-section { background: var(--off-white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .mv-inner { max-width: 1280px; margin: 0 auto; }
        .mv-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-top: 2.5rem; }
        .mv-card { border-radius: 20px; padding: 2.5rem; position: relative; overflow: hidden; }
        .mv-card.mission { background: var(--green-deeper); }
        .mv-card.vision { background: var(--green-dark); }
        .mv-card.approach { background: var(--green-light); }
        .mv-icon { width: 60px; height: 60px; background: rgba(255,255,255,0.15); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem; color: #fff; }
        .mv-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 700; color: #fff; margin-bottom: 0.85rem; }
        .mv-card p { font-size: 14.5px; color: rgba(255,255,255,0.82); line-height: 1.8; }
        .mv-card::before { content: ''; position: absolute; bottom: -20px; right: -20px; width: 100px; height: 100px; border-radius: 50%; background: rgba(255,255,255,0.05); }

        /* ✅ BANNER 1 — Our Work Speaks (about_page_last_section.jpg) */
        .banner1 { position: relative; height: clamp(320px,44vw,540px); overflow: hidden; display: flex; align-items: center; }
        .banner1 img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .banner1-ov { position: absolute; inset: 0; background: linear-gradient(to right, rgba(61,92,16,0.92) 0%, rgba(61,92,16,0.55) 55%, rgba(61,92,16,0.08) 100%); }
        .banner1-content { position: relative; padding: 0 clamp(1.5rem,6vw,6rem); max-width: 640px; }
        .banner1-content .section-tag { color: #c8e88a; background: rgba(155,193,76,0.2); border-color: rgba(155,193,76,0.35); }
        .banner1-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,5vw,3.4rem); font-weight: 700; color: #fff; line-height: 1.1; margin-bottom: 1rem; }
        .banner1-content p { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.75; margin-bottom: 1.75rem; max-width: 480px; }
        .banner-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; }
        .btn-white { background: #fff; color: var(--green-deeper); padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s, box-shadow 0.15s; }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-outline-white { background: transparent; color: #fff; padding: 13px 22px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(255,255,255,0.45); transition: background 0.2s; }
        .btn-outline-white:hover { background: rgba(255,255,255,0.12); }

        /* VALUES */
        .values-section { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .values-inner { max-width: 1280px; margin: 0 auto; }
        .values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap: 1.5rem; margin-top: 2.5rem; }
        .value-card { background: var(--off-white); border: 1px solid rgba(155,193,76,0.15); border-radius: 16px; padding: 2rem; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; position: relative; overflow: hidden; }
        .value-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--green-light), var(--green-dark)); transform: scaleX(0); transform-origin: left; transition: transform 0.3s; }
        .value-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(90,122,30,0.1); border-color: rgba(155,193,76,0.3); }
        .value-card:hover::before { transform: scaleX(1); }
        .value-icon { width: 58px; height: 58px; background: rgba(155,193,76,0.1); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.1rem; color: var(--green-dark); }
        .value-card h3 { font-size: 17px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; }
        .value-card p { font-size: 13.5px; color: var(--muted); line-height: 1.7; }

        /* TIMELINE */
        .timeline-section { background: var(--off-white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .timeline-inner { max-width: 860px; margin: 0 auto; }
        .timeline-header { text-align: center; margin-bottom: 3rem; }
        .timeline { position: relative; display: flex; flex-direction: column; gap: 0; padding-left: 120px; }
        .timeline::before { content: ''; position: absolute; left: 100px; top: 12px; bottom: 12px; width: 2px; background: linear-gradient(to bottom, var(--green-light), var(--green-dark)); }
        .timeline-item { position: relative; padding-bottom: 2.5rem; padding-left: 2rem; }
        .timeline-item:last-child { padding-bottom: 0; }
        .timeline-year { position: absolute; left: -120px; top: 4px; width: 90px; text-align: right; }
        .timeline-year span { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 700; color: var(--green-dark); }
        .timeline-dot { position: absolute; left: -10px; top: 8px; width: 16px; height: 16px; border-radius: 50%; background: var(--green-light); border: 3px solid var(--off-white); box-shadow: 0 0 0 2px var(--green-light); flex-shrink: 0; }
        .timeline-content { background: var(--white); border-radius: 12px; padding: 1.25rem 1.5rem; border: 1px solid var(--border); }
        .timeline-content h4 { font-size: 16px; font-weight: 600; color: #1a1a1a; margin-bottom: 4px; }
        .timeline-content p { font-size: 13.5px; color: var(--muted); line-height: 1.65; }

        /* ✅ MOSAIC — No labels, 6 images from uploaded files */
        .mosaic-section { background: var(--off-white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .mosaic-inner { max-width: 1280px; margin: 0 auto; }
        .mosaic-header { text-align: center; margin-bottom: 2.5rem; }
        .mosaic-grid { display: grid; grid-template-columns: repeat(6,1fr); grid-template-rows: repeat(3, 200px); gap: 1rem; }
        .mosaic-item { border-radius: 14px; overflow: hidden; position: relative; background: linear-gradient(135deg, var(--green-deeper), #4a7a18); }
        .mosaic-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; display: block; }
        .mosaic-item:hover img { transform: scale(1.05); }
        .mosaic-item:nth-child(1) { grid-column: span 3; grid-row: span 2; }
        .mosaic-item:nth-child(2) { grid-column: span 3; }
        .mosaic-item:nth-child(3) { grid-column: span 3; }
        .mosaic-item:nth-child(4) { grid-column: span 2; }
        .mosaic-item:nth-child(5) { grid-column: span 2; }
        .mosaic-item:nth-child(6) { grid-column: span 2; }
        .mosaic-ph { width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.2); }

        /* CERTIFICATIONS */
        .cert-section { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .cert-inner { max-width: 1100px; margin: 0 auto; }
        .cert-header { text-align: center; margin-bottom: 2.5rem; }
        .cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap: 1.5rem; }
        .cert-card { background: var(--off-white); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; text-align: center; transition: border-color 0.2s, transform 0.2s; }
        .cert-card:hover { border-color: rgba(155,193,76,0.4); transform: translateY(-3px); }
        .cert-icon { width: 64px; height: 64px; background: rgba(155,193,76,0.12); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: var(--green-dark); }
        .cert-card h4 { font-size: 15px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; }
        .cert-card p { font-size: 13px; color: var(--muted); line-height: 1.65; }

        /* TESTIMONIALS */
        .testimonials-section { background: var(--green-deeper); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .testimonials-inner { max-width: 1280px; margin: 0 auto; }
        .testimonials-header { text-align: center; margin-bottom: 2.5rem; }
        .testimonials-header .section-tag { color: #c8e88a; background: rgba(155,193,76,0.2); border-color: rgba(155,193,76,0.35); }
        .testimonials-header .section-title { color: #fff; }
        .testimonials-header .section-sub { color: rgba(255,255,255,0.7); margin: 0 auto; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px,1fr)); gap: 1.5rem; }
        .testi-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 18px; padding: 2rem; display: flex; flex-direction: column; gap: 1.1rem; transition: background 0.2s, border-color 0.2s; }
        .testi-card:hover { background: rgba(255,255,255,0.1); border-color: rgba(155,193,76,0.35); }
        .testi-stars { display: flex; gap: 3px; }
        .testi-star { color: #f5c518; font-size: 16px; }
        .testi-text { font-size: 14px; color: rgba(255,255,255,0.82); line-height: 1.8; font-style: italic; flex: 1; }
        .testi-text::before { content: '"'; font-size: 28px; color: var(--green-light); line-height: 0; vertical-align: -10px; margin-right: 4px; }
        .testi-author { display: flex; align-items: center; gap: 12px; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); }
        .testi-avatar { width: 44px; height: 44px; border-radius: 50%; background: rgba(155,193,76,0.25); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #c8e88a; font-size: 18px; font-weight: 700; font-family: 'Cormorant Garamond', serif; }
        .testi-name { font-size: 14px; font-weight: 600; color: #fff; }
        .testi-role { font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 2px; }

        /* SERVICES LINKS */
        .services-link-section { background: var(--off-white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .sl-inner { max-width: 1280px; margin: 0 auto; }
        .sl-header { text-align: center; margin-bottom: 2.5rem; }
        .sl-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px,1fr)); gap: 1rem; }
        .sl-card { background: var(--white); border: 1px solid rgba(155,193,76,0.18); border-radius: 14px; padding: 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.75rem; text-align: center; text-decoration: none; color: var(--text); transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s; }
        .sl-card:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(90,122,30,0.1); border-color: rgba(155,193,76,0.35); }
        .sl-icon { width: 50px; height: 50px; background: rgba(155,193,76,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--green-dark); }
        .sl-card span { font-size: 13px; font-weight: 600; color: #1a1a1a; }
        .sl-card small { font-size: 11px; color: var(--muted); }

        /* BANNER 2 */
        .banner2 { position: relative; height: clamp(320px,44vw,540px); overflow: hidden; display: flex; align-items: center; justify-content: flex-end; }
        .banner2 img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .banner2-ov { position: absolute; inset: 0; background: linear-gradient(to left, rgba(61,92,16,0.92) 0%, rgba(61,92,16,0.5) 55%, transparent 100%); }
        .banner2-content { position: relative; padding: 0 clamp(1.5rem,6vw,6rem); max-width: 620px; text-align: right; }
        .banner2-content .section-tag { color: #c8e88a; background: rgba(155,193,76,0.2); border-color: rgba(155,193,76,0.35); }
        .banner2-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,5vw,3.4rem); font-weight: 700; color: #fff; line-height: 1.1; margin-bottom: 1rem; }
        .banner2-content p { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.75; margin-bottom: 1.75rem; }
        .banner2-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; justify-content: flex-end; }

        /* CONTACT */
        .contact-section { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .contact-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .contact-left { display: flex; flex-direction: column; gap: 1.25rem; }
        .contact-left p { font-size: 15px; color: var(--muted); line-height: 1.8; }
        .contact-items { display: flex; flex-direction: column; gap: 1rem; margin-top: 0.5rem; }
        .contact-item { display: flex; align-items: flex-start; gap: 13px; padding: 14px; background: var(--off-white); border-radius: 12px; border: 1px solid var(--border); }
        .contact-icon { width: 44px; height: 44px; background: rgba(155,193,76,0.12); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--green-dark); }
        .contact-item strong { display: block; font-size: 12px; font-weight: 600; color: #1a1a1a; margin-bottom: 2px; }
        .contact-item a, .contact-item span { font-size: 13.5px; color: var(--muted); text-decoration: none; word-break: break-all; }
        .contact-item a:hover { color: var(--green-dark); }
        .contact-form { background: var(--off-white); border-radius: 16px; padding: 2rem; border: 1px solid var(--border); }
        .contact-form h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.7rem; font-weight: 700; color: #1a1a1a; margin-bottom: 1.25rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; }
        .form-group { display: flex; flex-direction: column; gap: 5px; margin-bottom: 0.85rem; }
        .form-group label { font-size: 12px; font-weight: 600; color: #444; }
        .form-group input, .form-group select, .form-group textarea { padding: 11px 13px; border-radius: 9px; border: 1.5px solid rgba(155,193,76,0.2); background: var(--white); font-family: inherit; font-size: 13.5px; color: #333; outline: none; transition: border-color 0.2s; width: 100%; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--green-light); }
        .form-group textarea { resize: vertical; min-height: 100px; }
        .btn-submit { width: 100%; background: var(--green-light); color: #fff; padding: 13px; border-radius: 10px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; font-family: inherit; transition: background 0.2s; }
        .btn-submit:hover { background: var(--green-dark); }

        /* CTA */
        .cta-band { background: var(--green-light); padding: 4rem 1.5rem; text-align: center; }
        .cta-band h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #fff; margin-bottom: 0.85rem; }
        .cta-band p { color: rgba(255,255,255,0.88); font-size: 15px; margin-bottom: 2rem; }
        .cta-btns { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
        .btn-cta-w { background: #fff; color: var(--green-deeper); padding: 13px 28px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s, box-shadow 0.15s; }
        .btn-cta-w:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-cta-g { background: var(--green-deeper); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; }
        .btn-cta-g:hover { background: var(--green-dark); }

        /* FOOTER */
        footer { background: var(--green-dark); color: rgba(255,255,255,0.65); }
        .footer-main { max-width: 1280px; margin: 0 auto; padding: 3.5rem 1.5rem 2.5rem; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2.5rem; }
        .footer-brand p { font-size: 13px; line-height: 1.75; color: rgba(255,255,255,0.55); max-width: 240px; margin: 0.85rem 0 1.25rem; }
        .social-links { display: flex; gap: 8px; flex-wrap: wrap; }
        .social-link { width: 36px; height: 36px; background: rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; color: rgba(255,255,255,0.65); transition: background 0.2s; }
        .social-link:hover { background: rgba(255,255,255,0.2); color: #fff; }
        .footer-col h4 { font-size: 12px; font-weight: 600; color: #d4f095; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 0.85rem; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .footer-col ul li a { font-size: 12.5px; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
        .footer-col ul li a:hover { color: #d4f095; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding: 1.1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; max-width: 1280px; margin: 0 auto; font-size: 11.5px; flex-wrap: wrap; gap: 0.5rem; color: rgba(255,255,255,0.45); }

        /* FLOATING */
        .float-call { position: fixed; left: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: var(--green-light); color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(90,122,30,0.35); transition: transform 0.2s, background 0.2s; }
        .float-call:hover { transform: scale(1.1); background: var(--green-dark); }
        .float-wa { position: fixed; right: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(37,211,102,0.4); transition: transform 0.2s; }
        .float-wa:hover { transform: scale(1.1); }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .stats-inner { grid-template-columns: repeat(3,1fr); }
          .mosaic-grid { grid-template-columns: repeat(3,1fr); grid-template-rows: repeat(4,180px); }
          .mosaic-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
          .mosaic-item:nth-child(n+2) { grid-column: span 1; }
        }
        @media (max-width: 900px) {
          .nav-list { display: none; }
          .hamburger { display: flex; }
          .story-inner { grid-template-columns: 1fr; gap: 2rem; }
          .mv-grid { grid-template-columns: 1fr; }
          .contact-inner { grid-template-columns: 1fr; gap: 2rem; }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
          .banner2-content { text-align: left; }
          .banner2-ov { background: linear-gradient(to right, rgba(61,92,16,0.92) 0%, rgba(61,92,16,0.5) 55%, transparent 100%); }
          .banner2 { justify-content: flex-start; }
          .banner2-btns { justify-content: flex-start; }
          .mosaic-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
          .mosaic-item { aspect-ratio: 4/3; }
          .mosaic-item:nth-child(1) { grid-column: span 2; grid-row: span 1; }
        }
        @media (max-width: 700px) {
          .timeline { padding-left: 90px; }
          .timeline::before { left: 70px; }
          .timeline-year { left: -90px; width: 62px; }
          .timeline-year span { font-size: 1rem; }
          .hstat { min-width: 80px; padding: 1rem; }
          .hstat-num { font-size: 1.5rem; }
        }
        @media (max-width: 600px) {
          .topbar-left { display: none; }
          .topbar { justify-content: center; font-size: 11px; }
          .stats-inner { grid-template-columns: repeat(2,1fr); }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .story-media { grid-template-columns: 1fr; }
          .story-img-big { height: 220px; }
          .mosaic-grid { grid-template-columns: 1fr; }
          .mosaic-item:nth-child(1) { grid-column: span 1; }
          .hero-stats-bar { flex-wrap: wrap; }
          .hstat { min-width: 50%; border-bottom: 1px solid rgba(155,193,76,0.1); }
        }
        @media (max-width: 480px) {
          .hero-btns, .cta-btns, .banner-btns, .banner2-btns { flex-direction: column; align-items: stretch; }
          .btn-green, .btn-outline-w, .btn-white, .btn-outline-white, .btn-cta-w, .btn-cta-g { justify-content: center; }
          .footer-main { grid-template-columns: 1fr; }
          .timeline { padding-left: 70px; }
          .timeline::before { left: 50px; }
          .timeline-year { left: -70px; width: 44px; }
          .timeline-year span { font-size: 0.85rem; }
        }
        @media (max-width: 380px) { .logo-text .sub { display: none; } }
      `}</style>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-left">
          <span className="topbar-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Dubai, UAE
          </span>
          <span className="topbar-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Mon–Sat: 8am–8pm
          </span>
        </div>
        <div className="topbar-right">
          <a href="tel:+971559747416">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>
            +971 55 974 7416
          </a>
          <a href="mailto:Info@allcaretechnicalservices.ae">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Info@allcaretechnicalservices.ae
          </a>
        </div>
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/logo.jpg" alt="All Care Technical Services" />
            <div className="logo-text">
              <span className="name">All Care Technical</span>
              <span className="sub">Services · Dubai</span>
            </div>
          </a>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li style={{position:'relative'}} onMouseEnter={e => e.currentTarget.querySelector('.mega').style.display='grid'} onMouseLeave={e => e.currentTarget.querySelector('.mega').style.display='none'}>
              <a href="/services">Services &#9662;</a>
              <div className="mega" style={{display:'none',position:'absolute',top:'100%',left:'-200px',background:'#fff',borderRadius:'12px',boxShadow:'0 20px 60px rgba(0,0,0,0.12)',padding:'1.5rem 2rem',gridTemplateColumns:'1fr 1fr 1fr',gap:'0.5rem 2rem',minWidth:'680px',zIndex:300,border:'1px solid rgba(155,193,76,0.15)'}}>
                {[
                  { href:'/services/interior-renovation', label:'Interior Renovation' },
                  { href:'/services/exterior-renovation', label:'Exterior Renovation' },
                  { href:'/services/exterior-renovation', label:'Pool Construction' },
                  { href:'/services/exterior-renovation', label:'Landscaping & Gardens' },
                  { href:'/services/turnkey', label:'Turnkey Solutions' },
                  { href:'/services/technical#aluminum', label:'Aluminum Work' },
                  { href:'/services/technical#pergola', label:'Pergola & Shade' },
                  { href:'/services/technical#electrical', label:'Electrical Works' },
                  { href:'/services/technical#ac', label:'AC & Ducting' },
                  { href:'/services/technical#fencing', label:'Fencing & Gates' },
                  { href:'/services/technical#waterproofing', label:'Waterproofing' },
                  { href:'/services/technical', label:'Flooring & Tiling' },
                  { href:'/services/technical', label:'Painting & Finishing' },
                  { href:'/services/technical', label:'MEP Works' },
                  { href:'/services/technical#irrigation', label:'Plants Sale & Supply' },
                  { href:'/services/technical#irrigation', label:'Irrigation Systems' },
                  { href:'/services/technical', label:'Outdoor Lighting' },
                  { href:'/services/technical#civil', label:'Civil Works' },
                ].map(s => (
                  <a key={s.label} href={s.href} style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}>
                    <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />
                    {s.label}
                  </a>
                ))}
              </div>
            </li>
            <li><a href="/about" className="active">About Us</a></li>
            <li><a href="/process">Our Process</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="tel:+971559747416" className="nav-cta-a">Call Now</a></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/services/interior-renovation">Interior Renovation</a>
          <a href="/services/exterior-renovation">Exterior Renovation</a>
          <a href="/services/turnkey">Turnkey Solutions</a>
          <a href="/services/technical">Technical Services</a>
          <a href="/about">About Us</a>
          <a href="/process">Our Process</a>
          <a href="/contact">Contact</a>
          <a href="tel:+971559747416" className="mob-cta">Call Now — +971 55 974 7416</a>
        </div>
      </nav>

      {/* ✅ HERO — orig.jpg as background */}
      <section className="hero">
        <img src="/orig.jpg" alt="All Care Technical Services Dubai" className="hero-img" />
        <div className="hero-overlay" />
        <div className="hero-overlay2" />
        <div className="hero-content">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span className="breadcrumb-active">About Us</span>
          </div>
          <div className="hero-badge"><div className="hero-dot" /> Trusted Since 2014 · Dubai UAE</div>
          <h1>Building Dubai&apos;s Finest Spaces — One Project at a <em>Time</em></h1>
          <p>All Care Technical Services is Dubai&apos;s trusted renovation and technical services company. For over 10 years we have transformed homes, villas, offices, and outdoor spaces across the UAE with craftsmanship, integrity, and passion.</p>
          <div className="hero-btns">
            <a href="#story" className="btn-green">
              Our Story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="/services" className="btn-outline-w">Our Services</a>
          </div>
        </div>
        <div className="hero-stats-bar">
          {[
            { num:'10+', lbl:'Years in Dubai' },
            { num:'500+', lbl:'Projects Done' },
            { num:'50+', lbl:'Team Members' },
            { num:'20+', lbl:'Services' },
            { num:'4.9★', lbl:'Client Rating' },
            { num:'24/7', lbl:'Support' },
          ].map(s => (
            <div className="hstat" key={s.lbl}>
              <div className="hstat-num">{s.num}</div>
              <div className="hstat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="story-section" id="story">
        <div className="story-inner">
          <div className="story-content">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">From a Small Team to Dubai&apos;s Most Trusted Name</h2>
            <p>All Care Technical Services was founded in <strong>2014</strong> with a simple but powerful mission — to deliver renovation and technical services that Dubai residents and businesses could truly rely on. We started as a small team of five dedicated professionals with a shared passion for quality craftsmanship.</p>
            <p>Over the years we have grown into a full-service company with <strong>50+ skilled professionals</strong>, covering everything from interior and exterior renovation to pool construction, landscaping, electrical works, AC ducting, aluminum fabrication, and plant supply.</p>
            <p>Today, with <strong>500+ completed projects</strong> across Dubai — from luxury villas in Palm Jumeirah to corporate offices in DIFC — we are proud to be the company that Dubai trusts for all renovation and technical needs.</p>
            <p>Our growth has been built on one foundation — <strong>the trust of our clients</strong>. Every project we complete is a testament to our commitment to quality, transparency, and delivering exactly what we promise.</p>
            <a href="/services" className="story-link">
              Explore Our Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
          {/* ✅ About section — 3 images: about1.webp (big), about2.webp, about3.jpg */}
          <div className="story-media">
            <div className="story-img-big">
              <img src="/about1.webp" alt="All Care Technical Services Project" />
            </div>
            <div className="story-img-sm">
              <img src="/about2.webp" alt="All Care Technical Services Work" />
            </div>
            <div className="story-img-sm">
              <img src="/about3.jpg" alt="All Care Technical Services Dubai" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <div className="stats-band">
        <div className="stats-inner">
          {[
            { num:'2014', lbl:'Founded', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> },
            { num:'500+', lbl:'Projects', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
            { num:'50+', lbl:'Professionals', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
            { num:'20+', lbl:'Services', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
            { num:'4.9★', lbl:'Rating', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
            { num:'24/7', lbl:'Support', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg> },
          ].map(s => (
            <div className="stat-item" key={s.lbl}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION VISION */}
      <section className="mv-section">
        <div className="mv-inner">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">Our Mission, Vision &amp; Approach</h2>
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
              <h3>Our Mission</h3>
              <p>To deliver exceptional renovation and technical services that transform spaces, exceed client expectations, and set the standard for quality and reliability across Dubai. Every project is completed with the same passion, precision, and professionalism — regardless of size or budget.</p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
              <h3>Our Vision</h3>
              <p>To become the leading renovation and technical services company in the UAE — known not just for what we build, but for how we build it. We envision a future where every Dubai home and business can access world-class renovation services with total confidence.</p>
            </div>
            <div className="mv-card approach">
              <div className="mv-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
              <h3>Our Approach</h3>
              <p>We treat every project as if it were our own home. From the first consultation to the final handover, we prioritize clear communication, honest pricing, and delivering work that we are genuinely proud of. We never cut corners — your trust is worth more than any shortcut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ BANNER 1 — about_page_last_section.jpg */}
      <div className="banner1">
        <img src="/about_page_last_section.jpg" alt="All Care Projects Dubai" />
        <div className="banner1-ov" />
        <div className="banner1-content">
          <span className="section-tag">Our Work Speaks</span>
          <h2>500+ Projects Across Dubai — and Counting</h2>
          <p>From Palm Jumeirah villas to Business Bay offices — every project in our portfolio is a story of transformation, quality, and client satisfaction.</p>
          <div className="banner-btns">
            <a href="/services" className="btn-white">
              View Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="/contact" className="btn-outline-white">Get Free Quote</a>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <section className="values-section">
        <div className="values-inner">
          <span className="section-tag">What Drives Us</span>
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-sub">The principles that guide every decision, every project, and every interaction at All Care Technical Services.</p>
          <div className="values-grid">
            {values.map(v => (
              <div className="value-card" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="timeline-inner">
          <div className="timeline-header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">10 Years of Growth &amp; Excellence</h2>
            <p className="section-sub" style={{margin:'0 auto', textAlign:'center'}}>From a small startup to Dubai&apos;s trusted renovation company — our story of growth.</p>
          </div>
          <div className="timeline">
            {milestones.map(m => (
              <div className="timeline-item" key={m.year}>
                <div className="timeline-year"><span>{m.year}</span></div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ MOSAIC — 6 images, NO labels/text overlays */}
      <section className="mosaic-section">
        <div className="mosaic-inner">
          <div className="mosaic-header">
            <span className="section-tag">Our Projects</span>
            <h2 className="section-title">A Glimpse of Our Work</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>A selection of completed projects showcasing our range of services and quality across Dubai.</p>
          </div>
          <div className="mosaic-grid">
            {mosaicImages.map((item, i) => (
              <div className="mosaic-item" key={i}>
                <img
                  src={item.src}
                  alt={item.alt}
                  onError={e => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="mosaic-ph" style={{display:'none'}}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                {/* ✅ NO mosaic-label — text removed as requested */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="cert-section">
        <div className="cert-inner">
          <div className="cert-header">
            <span className="section-tag">Our Credentials</span>
            <h2 className="section-title">Licensed, Certified &amp; Insured</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>We operate with full compliance to UAE regulations — giving you complete confidence and peace of mind.</p>
          </div>
          <div className="cert-grid">
            {certifications.map(c => (
              <div className="cert-card" key={c.title}>
                <div className="cert-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <div className="testimonials-header">
            <span className="section-tag">Client Reviews</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-sub">Real feedback from real clients — the trust of Dubai&apos;s homeowners, developers, and businesses.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div className="testi-card" key={t.name}>
                <div className="testi-stars">
                  {[...Array(t.rating)].map((_, i) => <span className="testi-star" key={i}>★</span>)}
                </div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES LINKS */}
      <section className="services-link-section">
        <div className="sl-inner">
          <div className="sl-header">
            <span className="section-tag">Explore More</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Discover the full range of renovation and technical services we offer across Dubai.</p>
          </div>
          <div className="sl-grid">
            {[
              { href:'/services/interior-renovation', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label:'Interior Renovation', sub:'Ceilings, Flooring, Fit-Outs' },
              { href:'/services/exterior-renovation', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 9h20"/></svg>, label:'Exterior Renovation', sub:'Facade, Waterproofing' },
              { href:'/services/exterior-renovation', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10"/></svg>, label:'Pool Construction', sub:'Design & Build' },
              { href:'/services/exterior-renovation', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12C12 12 7 9 7 4a5 5 0 0 1 10 0c0 5-5 8-5 8z"/></svg>, label:'Landscaping', sub:'Gardens & Outdoor' },
              { href:'/services/technical#electrical', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, label:'Electrical Works', sub:'Installation & Maintenance' },
              { href:'/services/technical#ac', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/></svg>, label:'AC & Ducting', sub:'Installation & Service' },
              { href:'/services/technical#pergola', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7"/><path d="M9 22V12h6v10"/><line x1="3" y1="22" x2="21" y2="22"/></svg>, label:'Pergola & Shade', sub:'Outdoor Structures' },
              { href:'/services/turnkey', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>, label:'Turnkey Solutions', sub:'Full Project Delivery' },
              { href:'/services/technical#aluminum', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>, label:'Aluminum Work', sub:'Doors, Windows, Cladding' },
              { href:'/services/technical#fencing', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, label:'Fencing & Gates', sub:'Security & Style' },
            ].map(s => (
              <a href={s.href} className="sl-card" key={s.label}>
                <div className="sl-icon">{s.icon}</div>
                <span>{s.label}</span>
                <small>{s.sub}</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER 2 */}
      <div className="banner2">
        <img src="/pool6.webp" alt="All Care Technical Services" onError={e => { e.currentTarget.style.display='none'; }} />
        <div className="banner2-ov" />
        <div className="banner2-content">
          <span className="section-tag">Start Today</span>
          <h2>Your Perfect Space is Waiting</h2>
          <p>Whether it is a dream villa renovation, a sparkling new pool, or a full office fit-out — All Care Technical Services is ready to make it happen.</p>
          <div className="banner2-btns">
            <a href="/contact" className="btn-white">
              Get Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-left">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let&apos;s Work Together</h2>
            <p>Ready to start your project? Contact us today for a free consultation and quotation — no obligation, completely free.</p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg></div>
                <div><strong>Phone / WhatsApp</strong><a href="tel:+971559747416">+971 55 974 7416</a></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
                <div><strong>Email</strong><a href="mailto:Info@allcaretechnicalservices.ae">Info@allcaretechnicalservices.ae</a></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div><strong>Location</strong><span>Dubai, United Arab Emirates</span></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <div><strong>Working Hours</strong><span>Monday – Saturday: 8:00 AM – 8:00 PM</span></div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <div className="form-row">
              <div className="form-group"><label>Full Name</label><input type="text" placeholder="Your name" /></div>
              <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="+971 xx xxx xxxx" /></div>
            </div>
            <div className="form-group"><label>Email Address</label><input type="email" placeholder="your@email.com" /></div>
            <div className="form-group">
              <label>Service Required</label>
              <select>
                <option value="">Select a service</option>
                <option>Interior Renovation</option>
                <option>Exterior Renovation</option>
                <option>Pool Construction</option>
                <option>Landscaping</option>
                <option>Electrical Works</option>
                <option>AC & Ducting</option>
                <option>Turnkey Solutions</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group"><label>Message</label><textarea placeholder="Tell us about your project..." /></div>
            <button className="btn-submit">Send Message</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <h2>Ready to Transform Your Space?</h2>
        <p>Contact All Care Technical Services today — free consultation, transparent pricing, expert delivery.</p>
        <div className="cta-btns">
          <a href="tel:+971559747416" className="btn-cta-w">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>
            +971 55 974 7416
          </a>
          <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="btn-cta-g">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src="/logo.jpg" alt="All Care Technical Services" />
              <div className="logo-text">
                <span className="name" style={{color:'#fff'}}>All Care Technical</span>
                <span className="sub" style={{color:'rgba(255,255,255,0.5)'}}>Services · Dubai</span>
              </div>
            </a>
            <p>Your trusted renovation and technical services partner in Dubai. Founded 2014. Quality, integrity, and excellence on every project.</p>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/allcaretechnical" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@all.care.technica" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/></svg>
              </a>
              <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/process">Our Process</a></li>
              <li><a href="/services">All Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/services/interior-renovation">Interior Renovation</a></li>
              <li><a href="/services/exterior-renovation">Exterior Renovation</a></li>
              <li><a href="/services/exterior-renovation">Pool & Landscape</a></li>
              <li><a href="/services/turnkey">Turnkey Solutions</a></li>
              <li><a href="/services/technical">Technical Services</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+971559747416">+971 55 974 7416</a></li>
              <li><a href="mailto:Info@allcaretechnicalservices.ae">Info@allcaretechnicalservices.ae</a></li>
              <li><a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></li>
              <li><a href="/contact">Get Free Quote</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 All Care Technical Services LLC. All rights reserved.</span>
          <span>Made with care in Dubai</span>
        </div>
      </footer>

      {/* FLOATING */}
      <a href="tel:+971559747416" className="float-call" aria-label="Call Us">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>
      </a>
      <a href="https://wa.me/971559747416" className="float-wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
      </a>
    </>
  );
}
