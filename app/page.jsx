'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services = [
    {
      icon: '🏠',
      title: 'Interior Renovation',
      desc: 'Complete interior transformation — flooring, ceilings, partitions, painting, fit-outs, and more tailored to your vision.',
      items: ['False Ceiling & Partitions', 'Flooring & Tiling', 'Interior Painting', 'Kitchen Fit-Out', 'Bathroom Renovation', 'Office Interior'],
    },
    {
      icon: '🏗️',
      title: 'Exterior Renovation',
      desc: "Elevate your property's curb appeal with expert exterior works, facade cladding, waterproofing, and structural upgrades.",
      items: ['Facade Cladding', 'Exterior Painting', 'Waterproofing', 'Roof Works', 'Structural Repairs', 'Gate & Fencing'],
    },
    {
      icon: '🏊',
      title: 'Pool & Landscape',
      desc: 'From luxurious pool installations to lush landscape design — we create stunning outdoor spaces you will love.',
      items: ['Pool Construction', 'Pool Renovation', 'Pool Maintenance', 'Landscaping Design', 'Irrigation Systems', 'Outdoor Lighting'],
    },
    {
      icon: '🔑',
      title: 'Turnkey Solutions',
      desc: 'End-to-end project delivery from design to handover — one contract, one team, zero hassle.',
      items: ['Full Project Management', 'Design & Build', 'MEP Works', 'Civil Works', 'Fit-Out & Finishing', 'Post-Handover Support'],
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '4.9★', label: 'Client Rating' },
    { number: '24/7', label: 'Support Available' },
  ];

  const whyUs = [
    { icon: '🎯', title: 'Expert Team', desc: "Skilled professionals with years of hands-on experience in Dubai's construction industry." },
    { icon: '📋', title: 'Turnkey Delivery', desc: 'We handle everything from design to final handover — no coordination headaches.' },
    { icon: '💎', title: 'Premium Quality', desc: 'Only the finest materials and finishes, meeting UAE building standards.' },
    { icon: '⏱️', title: 'On-Time Completion', desc: 'We respect your timeline and deliver projects on schedule, every time.' },
    { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden costs. Clear quotations and budget-friendly options for every project.' },
    { icon: '🛡️', title: 'Warranty Backed', desc: 'All our work comes with workmanship warranty for your total peace of mind.' },
  ];

  const steps = [
    { n: '01', icon: '📞', title: 'Free Consultation', desc: 'Call or message us. We listen to your requirements and understand your vision.' },
    { n: '02', icon: '📐', title: 'Site Survey & Quote', desc: 'Our experts visit your property and provide a detailed, transparent quotation.' },
    { n: '03', icon: '🎨', title: 'Design & Planning', desc: 'We present design options and finalize the project plan with your approval.' },
    { n: '04', icon: '🔨', title: 'Expert Execution', desc: 'Our skilled team gets to work, keeping you updated every step of the way.' },
    { n: '05', icon: '🏠', title: 'Handover & Support', desc: 'We deliver on time, walk you through the work, and provide after-care support.' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --green: #7a9e30;
          --green-light: #9BC14C;
          --green-dark: #5a7a1e;
          --black: #0f1409;
          --dark: #1a1f0e;
          --text: #2a2f18;
          --muted: #6b7260;
          --bg: #f7f5f0;
          --bg2: #f0ede6;
          --white: #ffffff;
        }

        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background: var(--bg); color: var(--text); overflow-x: hidden; }

        /* TOPBAR */
        .topbar { background: var(--dark); color: #ccc; font-size: 12.5px; padding: 7px 2rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
        .topbar a { color: var(--green-light); text-decoration: none; }
        .topbar a:hover { text-decoration: underline; }
        .topbar-left, .topbar-right { display: flex; align-items: center; gap: 1.5rem; }

        /* NAV */
        nav { position: sticky; top: 0; z-index: 200; background: rgba(247,245,240,0.97); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(122,158,48,0.15); transition: box-shadow 0.3s; }
        nav.scrolled { box-shadow: 0 4px 24px rgba(15,20,9,0.1); }
        .nav-inner { max-width: 1280px; margin: 0 auto; padding: 0 2rem; height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
        .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .logo img { width: 52px; height: 52px; object-fit: contain; border-radius: 8px; background: #fff; padding: 3px; }
        .logo-text .name { display: block; font-size: 15px; font-weight: 600; color: var(--black); line-height: 1.2; }
        .logo-text .sub { display: block; font-size: 10px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; }
        .nav-links { display: flex; align-items: center; gap: 0.25rem; list-style: none; }
        .nav-links > li { position: relative; }
        .nav-links > li > a, .nav-links > li > button { font-size: 13.5px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 14px; border-radius: 6px; background: none; border: none; cursor: pointer; font-family: inherit; transition: background 0.2s, color 0.2s; display: flex; align-items: center; gap: 4px; }
        .nav-links > li > a:hover, .nav-links > li > button:hover { background: rgba(122,158,48,0.1); color: var(--green-dark); }
        .dropdown { position: absolute; top: calc(100% + 8px); left: 0; background: var(--white); border-radius: 12px; box-shadow: 0 20px 60px rgba(15,20,9,0.15); border: 1px solid rgba(122,158,48,0.12); min-width: 220px; padding: 8px; z-index: 300; opacity: 0; transform: translateY(-8px); pointer-events: none; transition: opacity 0.2s, transform 0.2s; }
        .dropdown.open { opacity: 1; transform: translateY(0); pointer-events: all; }
        .dropdown a { display: block; padding: 9px 14px; border-radius: 7px; font-size: 13px; color: var(--text); text-decoration: none; transition: background 0.15s, color 0.15s; }
        .dropdown a:hover { background: rgba(122,158,48,0.08); color: var(--green-dark); }
        .nav-cta { background: var(--green-light) !important; color: #fff !important; padding: 9px 20px !important; border-radius: 8px !important; font-weight: 600 !important; }
        .nav-cta:hover { background: var(--green-dark) !important; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: var(--text); border-radius: 2px; }
        .mobile-nav { display: none; flex-direction: column; gap: 4px; background: var(--white); padding: 1rem 1.5rem 1.5rem; border-top: 1px solid rgba(122,158,48,0.12); }
        .mobile-nav.open { display: flex; }
        .mobile-nav a { font-size: 15px; font-weight: 500; color: var(--text); text-decoration: none; padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.05); }
        .mobile-nav a:hover { color: var(--green-dark); }
        .mobile-cta { margin-top: 10px; background: var(--green-light); color: #fff !important; text-align: center; padding: 12px; border-radius: 9px; font-weight: 600; border-bottom: none !important; }

        /* HERO */
        .hero { min-height: 90vh; background: linear-gradient(135deg, var(--dark) 0%, #2a3515 50%, #1a2a0a 100%); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; padding: 5rem 2rem; }
        .hero::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BC14C' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        .hero-content { position: relative; text-align: center; max-width: 800px; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(155,193,76,0.15); border: 1px solid rgba(155,193,76,0.3); color: var(--green-light); font-size: 12px; font-weight: 500; padding: 6px 16px; border-radius: 100px; margin-bottom: 1.5rem; letter-spacing: 0.05em; text-transform: uppercase; animation: fadeUp 0.6s ease both; }
        .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 700; line-height: 1.05; color: #fff; margin-bottom: 1.5rem; animation: fadeUp 0.6s 0.1s ease both; }
        .hero h1 em { color: var(--green-light); font-style: normal; }
        .hero p { font-size: 17px; color: rgba(255,255,255,0.72); max-width: 560px; margin: 0 auto 2.5rem; line-height: 1.75; animation: fadeUp 0.6s 0.2s ease both; }
        .hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; animation: fadeUp 0.6s 0.3s ease both; }
        .btn-primary { background: var(--green-light); color: #fff; padding: 14px 30px; border-radius: 10px; font-size: 15px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, transform 0.15s; }
        .btn-primary:hover { background: var(--green-dark); transform: translateY(-2px); }
        .btn-secondary { background: transparent; color: #fff; padding: 14px 30px; border-radius: 10px; font-size: 15px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(255,255,255,0.3); transition: border-color 0.2s, background 0.2s; }
        .btn-secondary:hover { border-color: var(--green-light); background: rgba(155,193,76,0.1); }
        .hero-scroll { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 6px; color: rgba(255,255,255,0.4); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
        .scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, rgba(155,193,76,0.8), transparent); animation: scrollPulse 2s infinite; }
        @keyframes scrollPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }

        /* STATS */
        .stats-bar { background: var(--green-dark); padding: 2rem; }
        .stats-inner { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; text-align: center; }
        .stat-item { color: #fff; }
        .stat-number { font-family: 'Cormorant Garamond', serif; font-size: 2.8rem; font-weight: 700; color: var(--green-light); line-height: 1; }
        .stat-label { font-size: 13px; color: rgba(255,255,255,0.75); margin-top: 4px; }

        /* SECTION COMMONS */
        section { padding: 5rem 2rem; }
        .section-inner { max-width: 1280px; margin: 0 auto; }
        .section-tag { display: inline-block; font-size: 11px; font-weight: 600; color: var(--green-dark); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; padding: 4px 12px; background: rgba(122,158,48,0.1); border-radius: 100px; border: 1px solid rgba(122,158,48,0.2); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; color: var(--black); line-height: 1.15; margin-bottom: 1rem; }
        .section-sub { font-size: 16px; color: var(--muted); max-width: 560px; line-height: 1.7; }
        .section-header { margin-bottom: 3rem; }

        /* SERVICES */
        .services-section { background: var(--bg2); }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
        .service-card { background: var(--white); border: 1px solid rgba(122,158,48,0.1); border-radius: 16px; padding: 2rem; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--green-light), var(--green-dark)); transform: scaleX(0); transform-origin: left; transition: transform 0.3s; }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(15,20,9,0.1); border-color: rgba(122,158,48,0.25); }
        .service-card:hover::before { transform: scaleX(1); }
        .service-icon-wrap { width: 52px; height: 52px; background: rgba(155,193,76,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 1.25rem; }
        .service-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 700; color: var(--black); margin-bottom: 0.6rem; }
        .service-card p { font-size: 13.5px; color: var(--muted); line-height: 1.7; margin-bottom: 1.25rem; }
        .service-items { list-style: none; display: flex; flex-direction: column; gap: 6px; }
        .service-items li { font-size: 13px; color: var(--text); display: flex; align-items: center; gap: 8px; }
        .service-items li::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--green-light); flex-shrink: 0; }
        .service-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 1.25rem; font-size: 13px; font-weight: 600; color: var(--green-dark); text-decoration: none; transition: gap 0.2s; }
        .service-link:hover { gap: 10px; }

        /* ABOUT */
        .about-section { background: var(--white); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .about-img-wrap { position: relative; border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; background: linear-gradient(135deg, var(--dark) 0%, #2a3515 100%); display: flex; align-items: center; justify-content: center; }
        .about-img-placeholder { display: flex; flex-direction: column; align-items: center; gap: 1rem; color: rgba(255,255,255,0.5); text-align: center; padding: 2rem; }
        .about-img-placeholder .big-icon { font-size: 64px; }
        .about-badge-float { position: absolute; bottom: 1.5rem; left: 1.5rem; background: var(--white); border-radius: 12px; padding: 12px 18px; box-shadow: 0 8px 30px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 10px; }
        .about-badge-float .num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 700; color: var(--green-dark); }
        .about-badge-float .lbl { font-size: 12px; color: var(--muted); }
        .about-content { display: flex; flex-direction: column; gap: 1.25rem; }
        .about-content p { font-size: 15px; color: var(--muted); line-height: 1.8; }
        .about-features { display: flex; flex-direction: column; gap: 10px; margin: 0.5rem 0; }
        .about-feature { display: flex; align-items: flex-start; gap: 12px; padding: 12px; border-radius: 10px; background: var(--bg); }
        .about-feature-icon { width: 36px; height: 36px; background: rgba(155,193,76,0.15); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
        .about-feature-text strong { display: block; font-size: 14px; font-weight: 600; color: var(--black); }
        .about-feature-text span { font-size: 13px; color: var(--muted); }

        /* WHY US */
        .whyus-section { background: var(--dark); }
        .whyus-section .section-title { color: #fff; }
        .whyus-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; }
        .why-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(155,193,76,0.12); border-radius: 14px; padding: 1.75rem; transition: background 0.2s, border-color 0.2s; }
        .why-card:hover { background: rgba(155,193,76,0.07); border-color: rgba(155,193,76,0.3); }
        .why-icon { font-size: 28px; margin-bottom: 1rem; }
        .why-card h4 { font-size: 16px; font-weight: 600; color: #fff; margin-bottom: 6px; }
        .why-card p { font-size: 13.5px; color: rgba(255,255,255,0.55); line-height: 1.65; }

        /* PROCESS */
        .process-section { background: var(--bg2); }
        .process-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
        .process-step { text-align: center; padding: 2rem 1.5rem; }
        .step-number { font-family: 'Cormorant Garamond', serif; font-size: 4rem; font-weight: 700; color: rgba(155,193,76,0.12); line-height: 1; margin-bottom: 0.5rem; }
        .step-icon { width: 56px; height: 56px; background: var(--green-light); border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 1rem; box-shadow: 0 8px 24px rgba(155,193,76,0.3); }
        .process-step h4 { font-size: 16px; font-weight: 600; color: var(--black); margin-bottom: 6px; }
        .process-step p { font-size: 13.5px; color: var(--muted); line-height: 1.6; }

        /* CTA BAND */
        .cta-band { background: linear-gradient(135deg, var(--green-dark) 0%, var(--green) 100%); padding: 4rem 2rem; text-align: center; }
        .cta-band h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; color: #fff; margin-bottom: 1rem; }
        .cta-band p { color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 2rem; }
        .cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .btn-white { background: #fff; color: var(--green-dark); padding: 13px 28px; border-radius: 10px; font-size: 15px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s, box-shadow 0.15s; }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .btn-outline-white { background: transparent; color: #fff; padding: 13px 28px; border-radius: 10px; font-size: 15px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 2px solid rgba(255,255,255,0.5); transition: border-color 0.2s, background 0.2s; }
        .btn-outline-white:hover { border-color: #fff; background: rgba(255,255,255,0.1); }

        /* CONTACT */
        .contact-section { background: var(--white); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
        .contact-item { display: flex; align-items: flex-start; gap: 14px; padding: 16px; background: var(--bg); border-radius: 12px; border: 1px solid rgba(122,158,48,0.1); }
        .contact-icon { width: 42px; height: 42px; background: rgba(155,193,76,0.12); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .contact-item strong { display: block; font-size: 13px; font-weight: 600; color: var(--black); margin-bottom: 2px; }
        .contact-item a, .contact-item span { font-size: 14px; color: var(--muted); text-decoration: none; }
        .contact-item a:hover { color: var(--green-dark); }
        .contact-form { background: var(--bg); border-radius: 16px; padding: 2rem; border: 1px solid rgba(122,158,48,0.12); }
        .contact-form h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 700; color: var(--black); margin-bottom: 1.25rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 1rem; }
        .form-group label { font-size: 12.5px; font-weight: 600; color: var(--text); letter-spacing: 0.03em; }
        .form-group input, .form-group select, .form-group textarea { padding: 11px 14px; border-radius: 9px; border: 1.5px solid rgba(122,158,48,0.18); background: var(--white); font-family: inherit; font-size: 14px; color: var(--text); outline: none; transition: border-color 0.2s; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--green-light); }
        .form-group textarea { resize: vertical; min-height: 100px; }
        .btn-submit { width: 100%; background: var(--green-light); color: #fff; padding: 13px; border-radius: 10px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; font-family: inherit; transition: background 0.2s; }
        .btn-submit:hover { background: var(--green-dark); }

        /* FOOTER */
        footer { background: var(--black); color: rgba(255,255,255,0.65); }
        .footer-main { max-width: 1280px; margin: 0 auto; padding: 4rem 2rem 3rem; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; }
        .footer-brand p { font-size: 13.5px; line-height: 1.75; color: rgba(255,255,255,0.5); max-width: 260px; margin: 1rem 0 1.5rem; }
        .social-links { display: flex; gap: 10px; }
        .social-link { width: 36px; height: 36px; background: rgba(255,255,255,0.07); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; text-decoration: none; color: rgba(255,255,255,0.6); transition: background 0.2s, color 0.2s; }
        .social-link:hover { background: var(--green-light); color: #fff; }
        .footer-col h4 { font-size: 13px; font-weight: 600; color: #fff; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 1rem; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .footer-col ul li a { font-size: 13px; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
        .footer-col ul li a:hover { color: var(--green-light); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.07); padding: 1.25rem 2rem; display: flex; align-items: center; justify-content: space-between; max-width: 1280px; margin: 0 auto; font-size: 12px; flex-wrap: wrap; gap: 0.5rem; }

        /* WHATSAPP */
        .wa-float { position: fixed; bottom: 1.75rem; right: 1.75rem; z-index: 500; width: 54px; height: 54px; border-radius: 50%; background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 26px; text-decoration: none; box-shadow: 0 6px 24px rgba(37,211,102,0.4); transition: transform 0.2s, box-shadow 0.2s; }
        .wa-float:hover { transform: scale(1.1); box-shadow: 0 10px 32px rgba(37,211,102,0.5); }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .about-grid, .contact-grid { grid-template-columns: 1fr; }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .footer-main { grid-template-columns: 1fr; }
          .topbar { justify-content: center; font-size: 11px; }
          .topbar-left { display: none; }
        }
      `}</style>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-left">
          <span>📍 Dubai, UAE</span>
          <span>🕐 Mon–Sat: 8am – 8pm</span>
        </div>
        <div className="topbar-right">
          <a href="tel:+971559747416">📞 +971 55 974 7416</a>
          <a href="mailto:Info@allcaretechnicalservices.ae">✉ Info@allcaretechnicalservices.ae</a>
        </div>
      </div>

      {/* NAV */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/logo.jpg" alt="All Care Technical Services" />
            <div className="logo-text">
              <span className="name">All Care Technical</span>
              <span className="sub">Services · Dubai</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li>
              <button onClick={() => setServicesOpen(v => !v)}>Services ▾</button>
              <div className={`dropdown ${servicesOpen ? 'open' : ''}`}>
                <a href="#services">Interior Renovation</a>
                <a href="#services">Exterior Renovation</a>
                <a href="#services">Pool &amp; Landscape</a>
                <a href="#services">Turnkey Solutions</a>
              </div>
            </li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="tel:+971559747416" className="nav-cta">📞 Call Now</a></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="#services">Interior Renovation</a>
          <a href="#services">Exterior Renovation</a>
          <a href="#services">Pool &amp; Landscape</a>
          <a href="#services">Turnkey Solutions</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="tel:+971559747416" className="mobile-cta">📞 +971 55 974 7416</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🏆 Dubai&apos;s Premier Renovation Experts</div>
          <h1>Transform Your Space<br />Into Something <em>Extraordinary</em></h1>
          <p>From interior renovations to stunning pools and landscapes — All Care Technical Services delivers turnkey excellence across Dubai.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get Free Quote →</a>
            <a href="#services" className="btn-secondary">Our Services</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          Scroll
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-sub">Comprehensive renovation and technical services delivered by expert teams across Dubai.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-items">
                  {s.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href="#contact" className="service-link">Get a Quote →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-img-wrap">
              <div className="about-img-placeholder">
                <span className="big-icon">🏗️</span>
                <span style={{color:'rgba(255,255,255,0.4)', fontSize:'14px'}}>All Care Technical Services</span>
              </div>
              <div className="about-badge-float">
                <span className="num">10+</span>
                <span className="lbl">Years in<br />Dubai</span>
              </div>
            </div>
            <div className="about-content">
              <span className="section-tag">About Us</span>
              <h2 className="section-title">Dubai&apos;s Trusted Renovation Partner</h2>
              <p>All Care Technical Services is a leading renovation and technical services company based in Dubai. We specialize in delivering high-quality interior and exterior renovation, pool construction, landscaping, and complete turnkey solutions.</p>
              <p>Our experienced team of professionals brings craftsmanship, attention to detail, and a commitment to excellence on every project — from small apartments to large commercial fit-outs.</p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">✅</div>
                  <div className="about-feature-text">
                    <strong>Licensed &amp; Insured</strong>
                    <span>Fully registered with Dubai Municipality and relevant authorities.</span>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">👷</div>
                  <div className="about-feature-text">
                    <strong>Expert Workforce</strong>
                    <span>Skilled team of engineers, designers, and technicians.</span>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">🤝</div>
                  <div className="about-feature-text">
                    <strong>Client-First Approach</strong>
                    <span>We listen, plan, and execute with your vision at the center.</span>
                  </div>
                </div>
              </div>
              <a href="#contact" className="btn-primary" style={{alignSelf:'flex-start', marginTop:'0.5rem'}}>Contact Us Today →</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="whyus-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag" style={{color:'var(--green-light)', borderColor:'rgba(155,193,76,0.3)', background:'rgba(155,193,76,0.1)'}}>Why Choose Us</span>
            <h2 className="section-title">The All Care Difference</h2>
            <p className="section-sub" style={{color:'rgba(255,255,255,0.6)'}}>We go beyond construction — we build lasting relationships and exceptional spaces.</p>
          </div>
          <div className="whyus-grid">
            {whyUs.map((w) => (
              <div className="why-card" key={w.title}>
                <div className="why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section" id="process">
        <div className="section-inner">
          <div className="section-header" style={{textAlign:'center'}}>
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Our Simple Process</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>From first call to final handover — we make renovation stress-free.</p>
          </div>
          <div className="process-steps">
            {steps.map((step) => (
              <div className="process-step" key={step.n}>
                <div className="step-number">{step.n}</div>
                <div className="step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <h2>Ready to Transform Your Space?</h2>
        <p>Get a free consultation and quote from our renovation experts today.</p>
        <div className="cta-btns">
          <a href="tel:+971559747416" className="btn-white">📞 +971 55 974 7416</a>
          <a href="#contact" className="btn-outline-white">Send Us a Message</a>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div>
              <span className="section-tag">Get In Touch</span>
              <h2 className="section-title">Let&apos;s Discuss Your Project</h2>
              <p className="section-sub" style={{marginBottom:'2rem'}}>Contact us today for a free consultation and quotation. We are available 7 days a week.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <strong>Phone / WhatsApp</strong>
                    <a href="tel:+971559747416">+971 55 974 7416</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:Info@allcaretechnicalservices.ae">Info@allcaretechnicalservices.ae</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <strong>Location</strong>
                    <span>Dubai, United Arab Emirates</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🕐</div>
                  <div>
                    <strong>Working Hours</strong>
                    <span>Monday – Saturday: 8:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Request a Free Quote</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+971 xx xxx xxxx" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Service Required</label>
                <select>
                  <option value="">Select a service</option>
                  <option>Interior Renovation</option>
                  <option>Exterior Renovation</option>
                  <option>Pool &amp; Landscape</option>
                  <option>Turnkey Solutions</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Project Details</label>
                <textarea placeholder="Tell us about your project..." />
              </div>
              <button className="btn-submit">Send Message →</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src="/logo.jpg" alt="All Care Technical Services" />
              <div className="logo-text">
                <span className="name" style={{color:'#fff'}}>All Care Technical</span>
                <span className="sub" style={{color:'rgba(255,255,255,0.4)'}}>Services · Dubai</span>
              </div>
            </a>
            <p>Your trusted renovation and technical services partner in Dubai. Quality, integrity, and excellence on every project.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">f</a>
              <a href="#" className="social-link" aria-label="Instagram">in</a>
              <a href="#" className="social-link" aria-label="WhatsApp">W</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Interior Renovation</a></li>
              <li><a href="#services">Exterior Renovation</a></li>
              <li><a href="#services">Pool &amp; Landscape</a></li>
              <li><a href="#services">Turnkey Solutions</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+971559747416">+971 55 974 7416</a></li>
              <li><a href="mailto:Info@allcaretechnicalservices.ae">Info@allcaretechnicalservices.ae</a></li>
              <li><a href="#">Dubai, UAE</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 All Care Technical Services LLC. All rights reserved.</span>
          <span>Made with ❤️ in Dubai</span>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/971559747416" className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        💬
      </a>
    </>
  );
}
