'use client';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const slideTimer = useRef(null);

  // ✅ CHANGE 1: Slide 3 (Interior7.jpg - "Modern Interiors, Timeless Style") REMOVED
  const slides = [
    {
      img: '/interior1.jpg',
      tag: 'Interior Renovation',
      title: 'Elegant Interiors Crafted for You',
      desc: 'From false ceilings to full fit-outs — we transform every room into a masterpiece.',
    },
    {
      img: '/interior2.jpg',
      tag: 'Interior Renovation',
      title: 'Luxury Living Spaces Redefined',
      desc: 'Premium flooring, custom cabinetry, and designer finishes for your dream home.',
    },
    {
      img: '/pool4.webp',
      tag: 'Pool & Landscape',
      title: 'Stunning Pool & Outdoor Spaces',
      desc: 'Luxury pool construction and landscape design that brings your outdoor vision to life.',
    },
    {
      img: '/pool5.jpg',
      tag: 'Pool & Landscape',
      title: 'Create Your Private Oasis',
      desc: 'From infinity pools to resort-style landscapes — we build spaces you will love.',
    },
    {
      img: '/pool6.webp',
      tag: 'Pool & Landscape',
      title: 'Breathtaking Outdoor Living',
      desc: 'Night-lit landscapes, pergolas, and pools that make every evening unforgettable.',
    },
    {
      img: '/landscape3.jpg',
      tag: 'Landscape & Gardens',
      title: 'Lush Gardens & Green Spaces',
      desc: 'Professional landscaping, irrigation systems, and outdoor lighting for stunning gardens.',
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    slideTimer.current = setInterval(() => {
      setSlideIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(slideTimer.current);
  }, []);

  const goSlide = (i) => {
    setSlideIndex(i);
    clearInterval(slideTimer.current);
    slideTimer.current = setInterval(() => {
      setSlideIndex((n) => (n + 1) % slides.length);
    }, 4500);
  };

  // ✅ CHANGE 6: Mega dropdown - allServices with proper links mapping
  const allServicesLinks = [
    { label: 'Interior Renovation',      href: '/services/interior-renovation' },
    { label: 'Exterior Renovation',      href: '/services/exterior-renovation' },
    { label: 'Pool Construction',        href: '/services/exterior-renovation' },
    { label: 'Landscaping & Gardens',    href: '/services/exterior-renovation' },
    { label: 'Turnkey Solutions',        href: '/services/turnkey' },
    { label: 'Aluminum Work',            href: '/services/technical#aluminum' },
    { label: 'Pergola & Shade Structures', href: '/services/technical#pergola' },
    { label: 'Electrical Works',         href: '/services/technical#electrical' },
    { label: 'AC & Ducting',             href: '/services/technical#ac' },
    { label: 'Fencing & Gates',          href: '/services/technical#fencing' },
    { label: 'Waterproofing',            href: '/services/technical#waterproofing' },
    { label: 'Flooring & Tiling',        href: '/services/technical' },
    { label: 'Painting & Finishing',     href: '/services/technical' },
    { label: 'MEP Works',                href: '/services/technical' },
    { label: 'Plants Sale & Supply',     href: '/services/technical#irrigation' },
    { label: 'Irrigation Systems',       href: '/services/technical#irrigation' },
    { label: 'Outdoor Lighting',         href: '/services/technical' },
    { label: 'Civil Works',              href: '/services/technical#civil' },
  ];

  // For contact form select options
  const allServiceLabels = allServicesLinks.map((s) => s.label);

  // ✅ CHANGE 2: Service cards with proper internal links
  const serviceCards = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Interior Renovation',
      href: '/services/interior-renovation',
      desc: 'Complete interior transformation — flooring, ceilings, partitions, painting, and fit-outs tailored to your vision.',
      items: ['False Ceiling & Partitions', 'Flooring & Tiling', 'Interior Painting', 'Kitchen Fit-Out', 'Bathroom Renovation', 'Office Interior'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M2 9h20" />
        </svg>
      ),
      title: 'Exterior Renovation',
      href: '/services/exterior-renovation',
      desc: "Elevate your property's curb appeal with facade cladding, waterproofing, and structural upgrades.",
      items: ['Facade Cladding', 'Exterior Painting', 'Waterproofing', 'Roof Works', 'Structural Repairs', 'Gate & Fencing'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10" />
          <path d="M6 16c0 2.2 2.7 4 6 4s6-1.8 6-4" />
        </svg>
      ),
      title: 'Pool & Landscape',
      href: '/services/exterior-renovation',
      desc: 'Luxurious pool installations and lush landscape design — stunning outdoor spaces you will love.',
      items: ['Pool Construction', 'Pool Renovation', 'Pool Maintenance', 'Landscaping Design', 'Irrigation Systems', 'Outdoor Lighting'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      title: 'Turnkey Solutions',
      href: '/services/turnkey',
      desc: 'End-to-end project delivery from design to handover — one contract, one team, zero hassle.',
      items: ['Full Project Management', 'Design & Build', 'MEP Works', 'Civil Works', 'Fit-Out & Finishing', 'Post-Handover Support'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Aluminum Work',
      href: '/services/technical#aluminum',
      desc: 'Custom aluminum fabrication for doors, windows, cladding, partitions, and structural elements.',
      items: ['Aluminum Doors & Windows', 'Glass Facades', 'Curtain Walling', 'Aluminum Cladding', 'Skylights', 'Railings & Balustrades'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7" />
          <path d="M9 22V12h6v10" />
          <line x1="3" y1="22" x2="21" y2="22" />
          <path d="M12 2v3M12 9v3" />
        </svg>
      ),
      title: 'Pergola & Shade',
      href: '/services/technical#pergola',
      desc: 'Beautiful pergolas, shade structures, and outdoor canopies for ultimate outdoor comfort.',
      items: ['Wooden Pergolas', 'Aluminum Pergolas', 'Shade Sails', 'Louvered Roofs', 'Outdoor Canopies', 'Retractable Awnings'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Electrical Works',
      href: '/services/technical#electrical',
      desc: 'Safe and certified electrical installations, upgrades, and maintenance for residential and commercial.',
      items: ['Electrical Installation', 'Panel Upgrades', 'Lighting Design', 'Smart Home Wiring', 'CCTV & Security', 'Outdoor Lighting'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
        </svg>
      ),
      title: 'AC & Ducting',
      href: '/services/technical#ac',
      desc: 'Professional AC installation, maintenance, and ducting solutions for cool, comfortable spaces.',
      items: ['AC Installation', 'Duct Fabrication', 'AC Maintenance', 'Ventilation Systems', 'Chiller Systems', 'Air Quality Solutions'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: 'Fencing & Gates',
      href: '/services/technical#fencing',
      desc: 'Custom fencing and gate solutions for security, privacy, and aesthetic appeal.',
      items: ['Boundary Fencing', 'Automatic Gates', 'Wooden Fencing', 'Metal Railings', 'Pool Fencing', 'Security Barriers'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Waterproofing',
      href: '/services/technical#waterproofing',
      desc: 'Expert waterproofing solutions for roofs, basements, bathrooms, and foundations.',
      items: ['Roof Waterproofing', 'Basement Waterproofing', 'Bathroom Sealing', 'Terrace Waterproofing', 'Foundation Protection', 'Tank Waterproofing'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
          <line x1="2" y1="9" x2="22" y2="9" />
        </svg>
      ),
      title: 'Plants Sale & Supply',
      href: '/services/technical#irrigation',
      desc: 'Wide selection of indoor and outdoor plants, trees, and shrubs for homes and landscapes.',
      items: ['Indoor Plants', 'Outdoor Plants', 'Palm Trees', 'Garden Shrubs', 'Flower Plants', 'Seasonal Plants'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'Civil Works',
      href: '/services/technical#civil',
      desc: 'Structural and civil engineering works including foundations, blockwork, and concrete.',
      items: ['Foundation Works', 'Blockwork & Masonry', 'Concrete Works', 'Demolition', 'Retaining Walls', 'Pavement & Tiling'],
    },
  ];

  const whyUs = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Expert Team',
      desc: "Skilled professionals with years of hands-on experience in Dubai's construction industry.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      title: 'Turnkey Delivery',
      desc: 'We handle everything from design to final handover — no coordination headaches.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: 'Premium Quality',
      desc: 'Only the finest materials and finishes, meeting UAE building standards.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'On-Time Completion',
      desc: 'We respect your timeline and deliver projects on schedule, every time.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Transparent Pricing',
      desc: 'No hidden costs. Clear quotations and budget-friendly options for every project.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Warranty Backed',
      desc: 'All our work comes with workmanship warranty for your total peace of mind.',
    },
  ];

  const steps = [
    {
      n: '01',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z" />
        </svg>
      ),
      title: 'Free Consultation',
      desc: 'Call or message us. We listen to your requirements and understand your vision.',
    },
    {
      n: '02',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Site Survey & Quote',
      desc: 'Our experts visit your property and provide a detailed, transparent quotation.',
    },
    {
      n: '03',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        </svg>
      ),
      title: 'Design & Planning',
      desc: 'We present design options and finalize the project plan with your approval.',
    },
    {
      n: '04',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: 'Expert Execution',
      desc: 'Our skilled team gets to work, keeping you updated every step of the way.',
    },
    {
      n: '05',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      title: 'Handover & Support',
      desc: 'We deliver on time, walk you through the work, and provide after-care support.',
    },
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
        nav { position: sticky; top: 0; z-index: 200; background: var(--white); border-bottom: 1px solid var(--border); transition: box-shadow 0.3s; }
        nav.scrolled { box-shadow: 0 2px 20px rgba(90,122,30,0.1); }
        .nav-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .logo img { width: 50px; height: 50px; object-fit: contain; border-radius: 8px; }
        .logo-text .name { display: block; font-size: 14.5px; font-weight: 600; color: var(--green-deeper); line-height: 1.2; }
        .logo-text .sub { display: block; font-size: 10px; color: var(--muted); letter-spacing: 0.07em; text-transform: uppercase; }
        .nav-links { display: flex; align-items: center; gap: 0.1rem; list-style: none; }
        .nav-links > li { position: relative; }
        .nav-links > li > a, .nav-links > li > button { font-size: 13px; font-weight: 500; color: #333; text-decoration: none; padding: 7px 11px; border-radius: 6px; background: none; border: none; cursor: pointer; font-family: inherit; transition: background 0.2s, color 0.2s; display: flex; align-items: center; gap: 4px; white-space: nowrap; }
        .nav-links > li > a:hover, .nav-links > li > button:hover { background: rgba(155,193,76,0.1); color: var(--green-dark); }

        /* MEGA DROPDOWN */
        .mega-dropdown { position: absolute; top: calc(100% + 4px); left: 50%; transform: translateX(-50%) translateY(-8px); background: var(--white); border-radius: 14px; box-shadow: 0 16px 50px rgba(0,0,0,0.12); border: 1px solid var(--border); width: 680px; padding: 1.25rem; z-index: 300; opacity: 0; pointer-events: none; transition: opacity 0.2s, transform 0.2s; }
        .mega-dropdown.open { opacity: 1; transform: translateX(-50%) translateY(0); pointer-events: all; }
        .mega-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; }
        .mega-item { display: flex; align-items: center; gap: 8px; padding: 8px 10px; border-radius: 8px; font-size: 12.5px; color: #333; text-decoration: none; transition: background 0.15s; cursor: pointer; }
        .mega-item:hover { background: rgba(155,193,76,0.08); color: var(--green-dark); }
        .mega-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green-light); flex-shrink: 0; }

        .nav-cta { background: var(--green-light) !important; color: #fff !important; padding: 9px 18px !important; border-radius: 8px !important; font-weight: 600 !important; }
        .nav-cta:hover { background: var(--green-dark) !important; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; flex-shrink: 0; }
        .hamburger span { display: block; width: 24px; height: 2px; background: #333; border-radius: 2px; }
        .mobile-nav { display: none; flex-direction: column; background: var(--white); padding: 0.75rem 1.5rem 1.5rem; border-top: 1px solid var(--border); max-height: 80vh; overflow-y: auto; }
        .mobile-nav.open { display: flex; }
        .mobile-nav a { font-size: 14px; font-weight: 500; color: #333; text-decoration: none; padding: 9px 0; border-bottom: 1px solid #f0f0f0; }
        .mobile-nav a:hover { color: var(--green-dark); }
        .mobile-cta { margin-top: 12px; background: var(--green-light); color: #fff !important; text-align: center; padding: 13px; border-radius: 9px; font-weight: 600; border-bottom: none !important; }

        /* SLIDER */
        .slider { position: relative; width: 100%; height: clamp(480px, 80vh, 780px); overflow: hidden; }
        .slide { position: absolute; inset: 0; transition: opacity 0.9s ease; opacity: 0; }
        .slide.active { opacity: 1; }
        .slide img { width: 100%; height: 100%; object-fit: cover; }
        .slide-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 60%, transparent 100%); }
        .slide-content { position: absolute; bottom: 0; left: 0; right: 0; top: 0; display: flex; flex-direction: column; justify-content: center; padding: 0 clamp(1.5rem, 6vw, 6rem); max-width: 680px; }
        .slide-tag { display: inline-flex; align-items: center; gap: 7px; background: var(--green-light); color: #fff; font-size: 11px; font-weight: 600; padding: 5px 14px; border-radius: 100px; margin-bottom: 1rem; letter-spacing: 0.06em; text-transform: uppercase; width: fit-content; }
        .slide-content h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 5vw, 3.8rem); font-weight: 700; line-height: 1.1; color: #fff; margin-bottom: 1rem; }
        .slide-content p { font-size: clamp(14px, 2vw, 16px); color: rgba(255,255,255,0.85); line-height: 1.75; margin-bottom: 2rem; max-width: 500px; }
        .slide-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; }
        .btn-slide-primary { background: var(--green-light); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, transform 0.15s; }
        .btn-slide-primary:hover { background: var(--green-dark); transform: translateY(-2px); }
        .btn-slide-secondary { background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); color: #fff; padding: 13px 24px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.4); display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; }
        .btn-slide-secondary:hover { background: rgba(255,255,255,0.25); }
        .slide-dots { position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 10; }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.45); cursor: pointer; transition: background 0.3s, width 0.3s; border: none; }
        .dot.active { background: var(--green-light); width: 28px; border-radius: 4px; }
        .slide-arrows { position: absolute; top: 50%; transform: translateY(-50%); width: 100%; display: flex; justify-content: space-between; padding: 0 1rem; z-index: 10; pointer-events: none; }
        .slide-arrow { pointer-events: all; width: 42px; height: 42px; border-radius: 50%; background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.3); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
        .slide-arrow:hover { background: var(--green-light); }

        /* STATS BAR */
        .stats-bar { background: var(--green-dark); padding: 1.75rem; }
        .stats-inner { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; text-align: center; }
        .stat-icon { display: flex; justify-content: center; margin-bottom: 6px; opacity: 0.8; }
        .stat-num { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,4vw,2.8rem); font-weight: 700; color: #d4f095; line-height: 1; }
        .stat-lbl { font-size: 12px; color: rgba(255,255,255,0.72); margin-top: 4px; }

        /* SECTION COMMONS */
        section { padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .section-inner { max-width: 1280px; margin: 0 auto; }
        .section-tag { display: inline-block; font-size: 11px; font-weight: 600; color: var(--green-dark); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; padding: 4px 12px; background: rgba(122,158,48,0.1); border-radius: 100px; border: 1px solid rgba(122,158,48,0.25); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #1a1a1a; line-height: 1.15; margin-bottom: 0.85rem; }
        .section-sub { font-size: 15px; color: var(--muted); max-width: 540px; line-height: 1.7; }
        .section-header { margin-bottom: 2.5rem; }

        /* SERVICES GRID */
        .services-section { background: var(--white); }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: 1.25rem; }
        .service-card { background: var(--off-white); border: 1px solid rgba(155,193,76,0.18); border-radius: 16px; padding: 1.75rem; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--green-light), var(--green-dark)); transform: scaleX(0); transform-origin: left; transition: transform 0.3s; }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(90,122,30,0.1); border-color: rgba(155,193,76,0.35); }
        .service-card:hover::before { transform: scaleX(1); }
        .service-icon-wrap { width: 64px; height: 64px; background: rgba(155,193,76,0.12); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.1rem; color: var(--green-dark); }
        .service-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0.5rem; }
        .service-card h3 a { color: inherit; text-decoration: none; }
        .service-card h3 a:hover { color: var(--green-dark); }
        .service-card p { font-size: 13px; color: var(--muted); line-height: 1.7; margin-bottom: 1rem; }
        .service-items { list-style: none; display: flex; flex-direction: column; gap: 5px; }
        .service-items li { font-size: 12.5px; color: #444; display: flex; align-items: center; gap: 8px; }
        .service-items li::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--green-light); flex-shrink: 0; }
        .service-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 1rem; font-size: 13px; font-weight: 600; color: var(--green-dark); text-decoration: none; transition: gap 0.2s; }
        .service-link:hover { gap: 10px; }

        /* ABOUT */
        .about-section { background: var(--green-light); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .about-img-wrap { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 4/3; }
        .about-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .about-badge-float { position: absolute; bottom: 1.25rem; left: 1.25rem; background: var(--white); border-radius: 12px; padding: 10px 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); display: flex; align-items: center; gap: 10px; }
        .about-badge-float .num { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 700; color: var(--green-dark); }
        .about-badge-float .lbl { font-size: 11px; color: var(--muted); }
        .about-content { display: flex; flex-direction: column; gap: 1.1rem; }
        .about-section .section-tag { color: var(--green-deeper); background: rgba(255,255,255,0.3); border-color: rgba(255,255,255,0.4); }
        .about-section .section-title { color: #fff; }
        .about-content p { font-size: 15px; color: rgba(255,255,255,0.9); line-height: 1.8; }
        .about-features { display: flex; flex-direction: column; gap: 9px; margin: 0.25rem 0; }
        .about-feature { display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; border-radius: 10px; background: rgba(255,255,255,0.15); }
        .about-feature-icon { width: 40px; height: 40px; background: rgba(255,255,255,0.25); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #fff; }
        .about-feature-text strong { display: block; font-size: 13.5px; font-weight: 600; color: #fff; }
        .about-feature-text span { font-size: 12.5px; color: rgba(255,255,255,0.78); }
        .btn-white { background: #fff; color: var(--green-dark); padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s, box-shadow 0.15s; }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }

        /* WHY US */
        .whyus-section { background: var(--white); }
        .whyus-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: 1.25rem; }
        .why-card { background: var(--off-white); border: 1px solid rgba(155,193,76,0.15); border-radius: 14px; padding: 1.75rem; transition: border-color 0.2s, transform 0.2s; }
        .why-card:hover { border-color: rgba(155,193,76,0.4); transform: translateY(-2px); }
        .why-icon-wrap { width: 56px; height: 56px; background: rgba(155,193,76,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; color: var(--green-dark); }
        .why-card h4 { font-size: 16px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; }
        .why-card p { font-size: 13.5px; color: var(--muted); line-height: 1.65; }

        /* PROCESS */
        .process-section { background: var(--off-white); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .process-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap: 1.25rem; }
        .process-step { text-align: center; padding: 2rem 1.25rem; }
        .step-number { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 700; color: rgba(155,193,76,0.18); line-height: 1; margin-bottom: 0.4rem; }
        .step-icon { width: 60px; height: 60px; background: var(--green-light); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; }
        .process-step h4 { font-size: 15px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; }
        .process-step p { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* CTA BAND */
        .cta-band { background: var(--green-light); padding: 4rem 1.5rem; text-align: center; }
        .cta-band h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #fff; margin-bottom: 0.85rem; }
        .cta-band p { color: rgba(255,255,255,0.88); font-size: 15px; margin-bottom: 2rem; }
        .cta-btns { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
        .btn-cta-white { background: #fff; color: var(--green-dark); padding: 13px 28px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s, box-shadow 0.15s; }
        .btn-cta-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
        .btn-cta-outline { background: transparent; color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 2px solid rgba(255,255,255,0.6); transition: background 0.2s; }
        .btn-cta-outline:hover { background: rgba(255,255,255,0.12); }

        /* CONTACT */
        .contact-section { background: var(--white); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: start; }
        .contact-info { display: flex; flex-direction: column; gap: 1rem; }
        .contact-item { display: flex; align-items: flex-start; gap: 13px; padding: 14px; background: var(--off-white); border-radius: 12px; border: 1px solid var(--border); }
        .contact-icon { width: 44px; height: 44px; background: rgba(155,193,76,0.12); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--green-dark); }
        .contact-item strong { display: block; font-size: 12px; font-weight: 600; color: #1a1a1a; margin-bottom: 2px; }
        .contact-item a, .contact-item span { font-size: 13.5px; color: var(--muted); text-decoration: none; word-break: break-all; }
        .contact-item a:hover { color: var(--green-dark); }
        .contact-form { background: var(--off-white); border-radius: 16px; padding: 2rem; border: 1px solid var(--border); }
        .contact-form h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.7rem; font-weight: 700; color: #1a1a1a; margin-bottom: 1.25rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; }
        .form-group { display: flex; flex-direction: column; gap: 5px; margin-bottom: 0.85rem; }
        .form-group label { font-size: 12px; font-weight: 600; color: #444; letter-spacing: 0.03em; }
        .form-group input, .form-group select, .form-group textarea { padding: 11px 13px; border-radius: 9px; border: 1.5px solid rgba(155,193,76,0.2); background: var(--white); font-family: inherit; font-size: 13.5px; color: #333; outline: none; transition: border-color 0.2s; width: 100%; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--green-light); }
        .form-group textarea { resize: vertical; min-height: 100px; }
        .btn-submit { width: 100%; background: var(--green-light); color: #fff; padding: 13px; border-radius: 10px; font-size: 15px; font-weight: 600; border: none; cursor: pointer; font-family: inherit; transition: background 0.2s; }
        .btn-submit:hover { background: var(--green-dark); }

        /* FOOTER */
        footer { background: var(--green-dark); color: rgba(255,255,255,0.65); }
        .footer-main { max-width: 1280px; margin: 0 auto; padding: 3.5rem 1.5rem 2.5rem; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2.5rem; }
        .footer-brand p { font-size: 13px; line-height: 1.75; color: rgba(255,255,255,0.55); max-width: 240px; margin: 0.85rem 0 1.25rem; }
        .social-links { display: flex; gap: 8px; }
        .social-link { width: 36px; height: 36px; background: rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; color: rgba(255,255,255,0.65); transition: background 0.2s, color 0.2s; }
        .social-link:hover { background: rgba(255,255,255,0.2); color: #fff; }
        .footer-col h4 { font-size: 12px; font-weight: 600; color: #d4f095; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 0.85rem; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .footer-col ul li a { font-size: 12.5px; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
        .footer-col ul li a:hover { color: #d4f095; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding: 1.1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; max-width: 1280px; margin: 0 auto; font-size: 11.5px; flex-wrap: wrap; gap: 0.5rem; color: rgba(255,255,255,0.45); }

        /* FLOATING BUTTONS */
        .float-call { position: fixed; left: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: var(--green-light); color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(90,122,30,0.35); transition: transform 0.2s, background 0.2s; }
        .float-call:hover { transform: scale(1.1); background: var(--green-dark); }
        .float-wa { position: fixed; right: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(37,211,102,0.4); transition: transform 0.2s; }
        .float-wa:hover { transform: scale(1.1); }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .mega-dropdown { width: 500px; }
          .mega-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .about-grid { grid-template-columns: 1fr; gap: 2rem; }
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-main { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .footer-brand { grid-column: 1 / -1; }
          .slide-content { padding: 0 1.5rem; }
        }
        @media (max-width: 600px) {
          .topbar-left { display: none; }
          .topbar { justify-content: center; font-size: 11px; }
          .stats-inner { grid-template-columns: repeat(2,1fr); }
          .form-row { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: 1fr 1fr; }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .slide-arrows { display: none; }
        }
        @media (max-width: 480px) {
          .slide-btns { flex-direction: column; }
          .btn-slide-primary, .btn-slide-secondary { justify-content: center; }
          .cta-btns { flex-direction: column; align-items: center; }
          .btn-cta-white, .btn-cta-outline { width: 100%; justify-content: center; }
          .process-steps { grid-template-columns: 1fr; }
          .footer-main { grid-template-columns: 1fr; }
        }
        @media (max-width: 380px) {
          .logo-text .sub { display: none; }
          .stats-inner { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-left">
          <span className="topbar-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Dubai, UAE
          </span>
          <span className="topbar-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Mon–Sat: 8am–8pm
          </span>
        </div>
        <div className="topbar-right">
          <a href="tel:+971559747416">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z" />
            </svg>
            +971 55 974 7416
          </a>
          <a href="mailto:Info@allcaretechnicalservices.ae">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Info@allcaretechnicalservices.ae
          </a>
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
              <button onClick={() => setServicesOpen((v) => !v)}>Services ▾</button>
              {/* ✅ CHANGE 6: Mega dropdown with proper page links */}
              <div className={`mega-dropdown ${servicesOpen ? 'open' : ''}`}>
                <div className="mega-grid">
                  {allServicesLinks.map((s) => (
                    <a
                      href={s.href}
                      className="mega-item"
                      key={s.label}
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="mega-dot" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            {/* ✅ CHANGE 4: Nav links to actual pages */}
            <li><a href="/about">About Us</a></li>
            <li><a href="/process">Our Process</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a href="tel:+971559747416" className="nav-cta">Call Now</a>
            </li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          {allServicesLinks.map((s) => (
            <a href={s.href} key={s.label} onClick={() => setMenuOpen(false)}>{s.label}</a>
          ))}
          <a href="/about">About Us</a>
          <a href="/process">Our Process</a>
          <a href="/contact">Contact</a>
          <a href="tel:+971559747416" className="mobile-cta">Call Now — +971 55 974 7416</a>
        </div>
      </nav>

      {/* HERO SLIDER — Slide 3 removed */}
      <div className="slider">
        {slides.map((s, i) => (
          <div className={`slide ${i === slideIndex ? 'active' : ''}`} key={i}>
            <img src={s.img} alt={s.title} />
            <div className="slide-overlay" />
            <div className="slide-content">
              <div className="slide-tag">{s.tag}</div>
              <h1>{s.title}</h1>
              <p>{s.desc}</p>
              <div className="slide-btns">
                {/* ✅ CHANGE 5: CTA → /contact */}
                <a href="/contact" className="btn-slide-primary">
                  Get Free Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="/services" className="btn-slide-secondary">Our Services</a>
              </div>
            </div>
          </div>
        ))}
        <div className="slide-arrows">
          <button className="slide-arrow" onClick={() => goSlide((slideIndex - 1 + slides.length) % slides.length)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="slide-arrow" onClick={() => goSlide((slideIndex + 1) % slides.length)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
        <div className="slide-dots">
          {slides.map((_, i) => (
            <button key={i} className={`dot ${i === slideIndex ? 'active' : ''}`} onClick={() => goSlide(i)} />
          ))}
        </div>
      </div>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { number: '500+', label: 'Projects Completed', icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>) },
            { number: '10+', label: 'Years Experience', icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>) },
            { number: '4.9', label: 'Client Rating', icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>) },
            { number: '24/7', label: 'Support Available', icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z" /></svg>) },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-num">{s.number}</div>
              <div className="stat-lbl">{s.label}</div>
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
            {serviceCards.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon-wrap">{s.icon}</div>
                {/* ✅ CHANGE 2: Each service card title links to proper internal page */}
                <h3><a href={s.href}>{s.title}</a></h3>
                <p>{s.desc}</p>
                <ul className="service-items">
                  {s.items.map((item) => (<li key={item}>{item}</li>))}
                </ul>
                {/* ✅ CHANGE 5: "Get a Quote" → /contact */}
                <a href="/contact" className="service-link">
                  Get a Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
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
              <img src="/Interior7.jpg" alt="All Care Technical Services Interior" />
              <div className="about-badge-float">
                <span className="num">10+</span>
                <span className="lbl">Years in<br />Dubai</span>
              </div>
            </div>
            <div className="about-content">
              <span className="section-tag">About Us</span>
              <h2 className="section-title">Dubai&apos;s Trusted Renovation Partner</h2>
              <p>All Care Technical Services is a leading renovation and technical services company based in Dubai. We specialize in delivering high-quality interior and exterior renovation, pool construction, landscaping, and complete turnkey solutions.</p>
              <p>Our experienced team brings craftsmanship, attention to detail, and a commitment to excellence on every project — from small apartments to large commercial fit-outs.</p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div className="about-feature-text">
                    <strong>Licensed &amp; Insured</strong>
                    <span>Fully registered with Dubai Municipality and relevant authorities.</span>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                  </div>
                  <div className="about-feature-text">
                    <strong>Expert Workforce</strong>
                    <span>Skilled team of engineers, designers, and technicians.</span>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </div>
                  <div className="about-feature-text">
                    <strong>Client-First Approach</strong>
                    <span>We listen, plan, and execute with your vision at the center.</span>
                  </div>
                </div>
              </div>
              {/* ✅ CHANGE 5: "Contact Us Today" → /contact */}
              <a href="/contact" className="btn-white" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                Contact Us Today
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="whyus-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">The All Care Difference</h2>
            <p className="section-sub">We go beyond construction — we build lasting relationships and exceptional spaces.</p>
          </div>
          <div className="whyus-grid">
            {whyUs.map((w) => (
              <div className="why-card" key={w.title}>
                <div className="why-icon-wrap">{w.icon}</div>
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
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Our Simple Process</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>From first call to final handover — we make renovation stress-free.</p>
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
          <a href="tel:+971559747416" className="btn-cta-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z" />
            </svg>
            +971 55 974 7416
          </a>
          {/* ✅ CHANGE 5: CTA → /contact */}
          <a href="/contact" className="btn-cta-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Send Us a Message
          </a>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div>
              <span className="section-tag">Get In Touch</span>
              <h2 className="section-title">Let&apos;s Discuss Your Project</h2>
              <p className="section-sub" style={{ marginBottom: '1.75rem' }}>Contact us today for a free consultation and quotation. We are available 7 days a week.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z" />
                    </svg>
                  </div>
                  <div>
                    <strong>Phone / WhatsApp</strong>
                    <a href="tel:+971559747416">+971 55 974 7416</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:Info@allcaretechnicalservices.ae">Info@allcaretechnicalservices.ae</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <strong>Location</strong>
                    <span>Dubai, United Arab Emirates</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
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
                  {allServiceLabels.map((s) => (<option key={s}>{s}</option>))}
                </select>
              </div>
              <div className="form-group">
                <label>Project Details</label>
                <textarea placeholder="Tell us about your project..." />
              </div>
              <button className="btn-submit">Send Message</button>
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
                <span className="name" style={{ color: '#fff' }}>All Care Technical</span>
                <span className="sub" style={{ color: 'rgba(255,255,255,0.5)' }}>Services · Dubai</span>
              </div>
            </a>
            <p>Your trusted renovation and technical services partner in Dubai. Quality, integrity, and excellence on every project.</p>
            {/* ✅ CHANGE 3: Social links updated with correct URLs + TikTok + official WhatsApp SVG */}
            <div className="social-links">
              <a href="https://www.facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/allcaretechnical" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* TikTok icon */}
              <a href="https://www.tiktok.com/@all.care.technica" className="social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
                </svg>
              </a>
              {/* WhatsApp official SVG icon */}
              <a href="https://wa.me/971559747416" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ✅ CHANGE 4: Footer service links → proper internal pages */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/services">All Services</a></li>
              <li><a href="/services/interior-renovation">Interior Renovation</a></li>
              <li><a href="/services/exterior-renovation">Exterior Renovation</a></li>
              <li><a href="/services/exterior-renovation">Pool & Landscape</a></li>
              <li><a href="/services/turnkey">Turnkey Solutions</a></li>
              <li><a href="/services/technical">Technical Services</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Technical</h4>
            <ul>
              <li><a href="/services/technical#aluminum">Aluminum Work</a></li>
              <li><a href="/services/technical#pergola">Pergola & Shade</a></li>
              <li><a href="/services/technical#electrical">Electrical Works</a></li>
              <li><a href="/services/technical#ac">AC & Ducting</a></li>
              <li><a href="/services/technical#fencing">Fencing & Gates</a></li>
              <li><a href="/services/technical#waterproofing">Waterproofing</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/process">Our Process</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="tel:+971559747416">+971 55 974 7416</a></li>
              <li><a href="mailto:Info@allcaretechnicalservices.ae">Email Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 All Care Technical Services LLC. All rights reserved.</span>
          <span>Made with care in Dubai</span>
        </div>
      </footer>

      {/* FLOATING CALL BUTTON */}
      <a href="tel:+971559747416" className="float-call" aria-label="Call Us">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z" />
        </svg>
      </a>

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/971559747416" className="float-wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
