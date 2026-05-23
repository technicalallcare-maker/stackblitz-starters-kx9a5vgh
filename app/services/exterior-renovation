'use client';
import { useState } from 'react';

export default function ExteriorRenovationPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState('all');

  const galleryCats = [
    { id: 'all', label: 'All Projects' },
    { id: 'facade', label: 'Facades' },
    { id: 'roof', label: 'Roofing' },
    { id: 'paint', label: 'Painting' },
    { id: 'waterproof', label: 'Waterproofing' },
    { id: 'driveway', label: 'Driveways' },
  ];

  const galleryImages = [
    { id:1, cat:'facade', src:'/exterior1.jpg', title:'Villa Facade Cladding', loc:'Palm Jumeirah' },
    { id:2, cat:'facade', src:'/exterior2.jpg', title:'Modern Facade Upgrade', loc:'Dubai Hills' },
    { id:3, cat:'paint', src:'/exterior3.jpg', title:'Full Exterior Painting', loc:'Arabian Ranches' },
    { id:4, cat:'roof', src:'/exterior4.jpg', title:'Roof Waterproofing', loc:'Jumeirah' },
    { id:5, cat:'waterproof', src:'/exterior5.jpg', title:'Terrace Waterproofing', loc:'Business Bay' },
    { id:6, cat:'driveway', src:'/exterior6.jpg', title:'Driveway Tiling', loc:'Mirdif' },
    { id:7, cat:'facade', src:'/exterior7.jpg', title:'Commercial Facade', loc:'DIFC' },
    { id:8, cat:'paint', src:'/exterior8.jpg', title:'Villa Exterior Repaint', loc:'Springs' },
    { id:9, cat:'roof', src:'/exterior9.jpg', title:'Roof Insulation', loc:'Damac Hills' },
    { id:10, cat:'waterproof', src:'/exterior10.jpg', title:'Basement Waterproofing', loc:'JVC' },
    { id:11, cat:'driveway', src:'/exterior11.jpg', title:'Interlock Driveway', loc:'Meadows' },
    { id:12, cat:'facade', src:'/exterior12.jpg', title:'Stone Cladding', loc:'Emirates Hills' },
  ];

  const filteredGallery = activeGallery === 'all' ? galleryImages : galleryImages.filter(g => g.cat === activeGallery);

  const subServices = [
    {
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 9h20"/><path d="M12 17v4"/></svg>,
      title: 'Facade Cladding & Renovation',
      desc: 'Transform the look of your property with premium facade cladding solutions. We work with stone, aluminum, GRC, and composite materials to create stunning, modern exteriors that last.',
      features: ['Stone Cladding', 'Aluminum Cladding', 'GRC Panels', 'Composite Cladding', 'Curtain Wall Systems', 'Ventilated Facades', 'Facade Cleaning', 'Heritage Restoration'],
      img: '/exterior1.jpg',
    },
    {
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6.5"/><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>,
      title: 'Exterior Painting',
      desc: 'Expert exterior painting using weather-resistant, UV-protective paints that keep your property looking fresh for years. We prepare every surface meticulously before applying premium finishes.',
      features: ['Full Exterior Repaint', 'Weather-Resistant Paints', 'UV Protection Coatings', 'Texture Finishes', 'Color Consultation', 'Power Washing Prep', 'Anti-Mold Treatment', 'Touch-Up Services'],
      img: '/exterior2.jpg',
    },
    {
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Waterproofing',
      desc: 'Protect your property from water damage with our certified waterproofing systems. We use premium membranes and coatings for roofs, terraces, basements, and swimming pools.',
      features: ['Roof Waterproofing', 'Terrace Waterproofing', 'Basement Waterproofing', 'Bathroom Waterproofing', 'Swimming Pool Sealing', 'Foundation Protection', 'Expansion Joint Sealing', 'Leak Repair'],
      img: '/exterior3.jpg',
    },
    {
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7"/><path d="M3 9v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"/></svg>,
      title: 'Roof Works & Insulation',
      desc: 'Complete roofing solutions including repairs, replacements, insulation, and weatherproofing. We ensure your roof protects your property in every season.',
      features: ['Roof Repair', 'Roof Replacement', 'Thermal Insulation', 'Metal Roofing', 'Roof Tiling', 'Skylight Installation', 'Gutter Systems', 'Roof Coatings'],
      img: '/exterior4.jpg',
    },
    {
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
      title: 'Structural Repairs',
      desc: 'From cracked walls and damaged concrete to foundation repairs and reinforcement — our structural team ensures your property is safe, sound, and built to last.',
      features: ['Crack Repair', 'Concrete Restoration', 'Foundation Repair', 'Wall Reinforcement', 'Column Repair', 'Beam Strengthening', 'Corrosion Treatment', 'Structural Assessment'],
      img: '/exterior5.jpg',
    },
    {
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
      title: 'Driveway & Outdoor Tiling',
      desc: 'Create beautiful, durable driveways and outdoor areas with our expert tiling and interlock paving services. We work with natural stone, porcelain, and interlocking pavers.',
      features: ['Interlock Paving', 'Natural Stone Tiling', 'Porcelain Outdoor Tiles', 'Driveway Design', 'Pathway Tiling', 'Pool Surrounds', 'Patio Tiling', 'Outdoor Steps'],
      img: '/exterior6.jpg',
    },
    {
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
      title: 'Fencing, Gates & Boundaries',
      desc: 'Secure and beautify your property with custom fencing, automatic gates, boundary walls, and decorative railings designed to complement your exterior aesthetic.',
      features: ['Automatic Gates', 'Boundary Fencing', 'Metal Railings', 'Wooden Fencing', 'Glass Balustrades', 'Security Barriers', 'Decorative Gates', 'Electric Gate Motors'],
      img: '/exterior7.jpg',
    },
    {
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>,
      title: 'Outdoor Lighting',
      desc: 'Enhance your exterior with professional outdoor lighting — from garden and pathway lights to facade uplighting and security lighting that transforms your property at night.',
      features: ['Facade Uplighting', 'Garden Lighting', 'Pathway Lights', 'Security Lighting', 'Landscape Spotlights', 'Bollard Lights', 'Smart Lighting', 'Solar Lights'],
      img: '/exterior8.jpg',
    },
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
        .hero { position: relative; min-height: clamp(500px,75vh,780px); overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; }
        .hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .hero-ov { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,16,6,0.95) 0%, rgba(10,16,6,0.5) 45%, rgba(10,16,6,0.15) 100%); }
        .hero-ov2 { position: absolute; inset: 0; background: linear-gradient(to right, rgba(61,92,16,0.5) 0%, transparent 60%); }
        .hero-content { position: relative; z-index: 2; padding: clamp(2.5rem,5vw,4rem) clamp(1.5rem,6vw,6rem); max-width: 800px; padding-bottom: clamp(2rem,4vw,3.5rem); }
        .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 1.25rem; flex-wrap: wrap; }
        .breadcrumb a { color: rgba(255,255,255,0.55); font-size: 13px; text-decoration: none; }
        .breadcrumb a:hover { color: #c8e88a; }
        .breadcrumb span { color: rgba(255,255,255,0.35); font-size: 12px; }
        .breadcrumb-active { color: #c8e88a; font-size: 13px; font-weight: 500; }
        .hero-badge { display: inline-flex; align-items: center; gap: 7px; background: rgba(155,193,76,0.18); border: 1px solid rgba(155,193,76,0.4); color: #c8e88a; font-size: 11px; font-weight: 600; padding: 5px 14px; border-radius: 100px; margin-bottom: 1.25rem; letter-spacing: 0.06em; text-transform: uppercase; }
        .hero-dot { width: 6px; height: 6px; background: var(--green-light); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.4rem,6vw,4.8rem); font-weight: 700; color: #fff; line-height: 1.06; margin-bottom: 1.25rem; }
        .hero h1 em { color: #c8e88a; font-style: normal; }
        .hero p { font-size: 16px; color: rgba(255,255,255,0.82); line-height: 1.8; margin-bottom: 2rem; max-width: 560px; }
        .hero-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; }
        .btn-green { background: var(--green-light); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, transform 0.15s; }
        .btn-green:hover { background: var(--green-dark); transform: translateY(-2px); }
        .btn-wa { background: rgba(37,211,102,0.15); color: #25D366; padding: 13px 24px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(37,211,102,0.4); transition: background 0.2s; }
        .btn-wa:hover { background: rgba(37,211,102,0.25); }
        .hero-stats-bar { position: relative; z-index: 2; background: rgba(255,255,255,0.97); backdrop-filter: blur(12px); display: flex; justify-content: center; flex-wrap: wrap; border-top: 3px solid var(--green-light); }
        .hstat { flex: 1; min-width: 120px; padding: 1.25rem 1.5rem; text-align: center; border-right: 1px solid rgba(155,193,76,0.12); }
        .hstat:last-child { border-right: none; }
        .hstat-num { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 700; color: var(--green-dark); line-height: 1; }
        .hstat-lbl { font-size: 11px; color: var(--muted); margin-top: 3px; white-space: nowrap; }

        .section-tag { display: inline-block; font-size: 11px; font-weight: 600; color: var(--green-dark); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; padding: 4px 12px; background: rgba(122,158,48,0.1); border-radius: 100px; border: 1px solid rgba(122,158,48,0.25); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #1a1a1a; line-height: 1.15; margin-bottom: 0.85rem; }
        .section-sub { font-size: 15px; color: var(--muted); line-height: 1.8; }

        /* INTRO */
        .intro { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .intro-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .intro-content { display: flex; flex-direction: column; gap: 1.25rem; }
        .intro-content p { font-size: 15.5px; color: var(--muted); line-height: 1.85; }
        .intro-content p strong { color: var(--green-deeper); font-weight: 600; }
        .intro-media { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .intro-img-big { grid-column: 1 / -1; border-radius: 16px; overflow: hidden; height: 280px; background: linear-gradient(135deg, var(--green-deeper), #4a7a18); }
        .intro-img-big img { width: 100%; height: 100%; object-fit: cover; }
        .intro-img-sm { border-radius: 12px; overflow: hidden; height: 180px; background: linear-gradient(135deg, #4a7a18, var(--green-dark)); }
        .intro-img-sm img { width: 100%; height: 100%; object-fit: cover; }
        .intro-features { display: flex; flex-direction: column; gap: 10px; margin-top: 0.5rem; }
        .intro-feat { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 500; color: #1a1a1a; }
        .intro-feat-icon { width: 32px; height: 32px; background: rgba(155,193,76,0.12); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--green-dark); }

        /* SUB SERVICES */
        .sub-section { background: var(--off-white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .sub-inner { max-width: 1280px; margin: 0 auto; }
        .sub-header { text-align: center; margin-bottom: 3rem; }
        .sub-grid { display: flex; flex-direction: column; gap: 4rem; }
        .sub-item { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .sub-item.reverse { direction: rtl; }
        .sub-item.reverse > * { direction: ltr; }
        .sub-img-wrap { border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; background: linear-gradient(135deg, var(--green-deeper), #4a7a18); position: relative; }
        .sub-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .sub-img-wrap:hover img { transform: scale(1.04); }
        .sub-img-label { position: absolute; top: 1rem; left: 1rem; background: var(--green-light); color: #fff; font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 100px; }
        .sub-content { display: flex; flex-direction: column; gap: 1rem; }
        .sub-icon-wrap { width: 60px; height: 60px; background: rgba(155,193,76,0.1); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: var(--green-dark); }
        .sub-content h3 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.5rem,3vw,2.1rem); font-weight: 700; color: #1a1a1a; line-height: 1.15; }
        .sub-content p { font-size: 15px; color: var(--muted); line-height: 1.8; }
        .sub-features { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
        .sub-feat { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: #444; }
        .sub-feat::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--green-light); flex-shrink: 0; }
        .sub-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--green-dark); text-decoration: none; padding: 10px 20px; border: 1.5px solid var(--green-light); border-radius: 8px; margin-top: 0.5rem; transition: background 0.2s, color 0.2s; width: fit-content; }
        .sub-link:hover { background: var(--green-light); color: #fff; }

        /* BANNER 1 */
        .banner1 { position: relative; height: clamp(320px,46vw,560px); overflow: hidden; display: flex; align-items: center; }
        .banner1 img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .banner1-ov { position: absolute; inset: 0; background: linear-gradient(to right, rgba(61,92,16,0.92) 0%, rgba(61,92,16,0.5) 55%, rgba(61,92,16,0.08) 100%); }
        .banner1-content { position: relative; padding: 0 clamp(1.5rem,6vw,6rem); max-width: 640px; }
        .banner1-content .section-tag { color: #c8e88a; background: rgba(155,193,76,0.2); border-color: rgba(155,193,76,0.35); }
        .banner1-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,5vw,3.4rem); font-weight: 700; color: #fff; line-height: 1.1; margin-bottom: 1rem; }
        .banner1-content p { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.75; margin-bottom: 1.75rem; max-width: 480px; }
        .banner-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; }
        .btn-white { background: #fff; color: var(--green-deeper); padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s; }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-outline-white { background: transparent; color: #fff; padding: 13px 22px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(255,255,255,0.45); transition: background 0.2s; }
        .btn-outline-white:hover { background: rgba(255,255,255,0.12); }

        /* GALLERY */
        .gallery { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .gallery-inner { max-width: 1280px; margin: 0 auto; }
        .gallery-header { text-align: center; margin-bottom: 2rem; }
        .gallery-filter { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2.5rem; }
        .gal-btn { padding: 7px 18px; border-radius: 100px; border: 1.5px solid var(--border); background: transparent; font-size: 13px; font-weight: 500; color: var(--muted); cursor: pointer; font-family: inherit; transition: all 0.2s; }
        .gal-btn:hover { border-color: var(--green-light); color: var(--green-dark); }
        .gal-btn.active { background: var(--green-light); border-color: var(--green-light); color: #fff; font-weight: 600; }
        .gallery-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; }
        .gal-item { border-radius: 12px; overflow: hidden; position: relative; aspect-ratio: 4/3; background: linear-gradient(135deg, var(--green-deeper), #4a7a18); cursor: pointer; }
        .gal-item:nth-child(5n+1) { grid-column: span 2; aspect-ratio: 16/9; }
        .gal-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .gal-item:hover img { transform: scale(1.06); }
        .gal-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%); opacity: 0; transition: opacity 0.3s; }
        .gal-item:hover .gal-overlay { opacity: 1; }
        .gal-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 1rem; transform: translateY(8px); transition: transform 0.3s; }
        .gal-item:hover .gal-info { transform: translateY(0); }
        .gal-info h4 { font-size: 14px; font-weight: 600; color: #fff; }
        .gal-info p { font-size: 12px; color: rgba(255,255,255,0.75); display: flex; align-items: center; gap: 4px; margin-top: 2px; }
        .gal-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; color: rgba(255,255,255,0.3); }
        .gal-ph svg { opacity: 0.25; }
        .gal-ph span { font-size: 11px; }

        /* BANNER 2 */
        .banner2 { position: relative; height: clamp(320px,46vw,560px); overflow: hidden; display: flex; align-items: center; justify-content: flex-end; }
        .banner2 img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .banner2-ov { position: absolute; inset: 0; background: linear-gradient(to left, rgba(61,92,16,0.92) 0%, rgba(61,92,16,0.5) 55%, transparent 100%); }
        .banner2-content { position: relative; padding: 0 clamp(1.5rem,6vw,6rem); max-width: 620px; text-align: right; }
        .banner2-content .section-tag { color: #c8e88a; background: rgba(155,193,76,0.2); border-color: rgba(155,193,76,0.35); }
        .banner2-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,5vw,3.4rem); font-weight: 700; color: #fff; line-height: 1.1; margin-bottom: 1rem; }
        .banner2-content p { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.75; margin-bottom: 1.75rem; }
        .banner2-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; justify-content: flex-end; }

        /* MOSAIC */
        .mosaic { background: var(--off-white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .mosaic-inner { max-width: 1280px; margin: 0 auto; }
        .mosaic-header { text-align: center; margin-bottom: 2.5rem; }
        .mosaic-grid { display: grid; grid-template-columns: repeat(6,1fr); grid-template-rows: repeat(3,200px); gap: 1rem; }
        .mosaic-item { border-radius: 14px; overflow: hidden; position: relative; background: linear-gradient(135deg, var(--green-deeper), #4a7a18); }
        .mosaic-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .mosaic-item:hover img { transform: scale(1.05); }
        .mosaic-item:nth-child(1) { grid-column: span 3; grid-row: span 2; }
        .mosaic-item:nth-child(2) { grid-column: span 3; }
        .mosaic-item:nth-child(3) { grid-column: span 3; }
        .mosaic-item:nth-child(4) { grid-column: span 2; }
        .mosaic-item:nth-child(5) { grid-column: span 2; }
        .mosaic-item:nth-child(6) { grid-column: span 2; }
        .mosaic-label { position: absolute; bottom: 0.75rem; left: 0.75rem; background: rgba(61,92,16,0.85); color: #fff; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 6px; }
        .mosaic-ph { width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.2); }

        /* WHY US */
        .whyus { background: var(--green-light); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .whyus-inner { max-width: 1280px; margin: 0 auto; }
        .whyus-header { margin-bottom: 2.5rem; }
        .whyus .section-tag { color: var(--green-deeper); background: rgba(255,255,255,0.25); border-color: rgba(255,255,255,0.35); }
        .whyus .section-title { color: #fff; }
        .whyus .section-sub { color: rgba(255,255,255,0.82); }
        .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px,1fr)); gap: 1.25rem; }
        .why-card { background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.22); border-radius: 14px; padding: 1.75rem; transition: background 0.2s; }
        .why-card:hover { background: rgba(255,255,255,0.22); }
        .why-icon { width: 52px; height: 52px; background: rgba(255,255,255,0.22); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; color: #fff; }
        .why-card h4 { font-size: 16px; font-weight: 600; color: #fff; margin-bottom: 6px; }
        .why-card p { font-size: 13.5px; color: rgba(255,255,255,0.78); line-height: 1.65; }

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
        .cta-band { background: var(--green-deeper); padding: 4rem 1.5rem; text-align: center; }
        .cta-band h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #fff; margin-bottom: 0.85rem; }
        .cta-band p { color: rgba(255,255,255,0.8); font-size: 15px; margin-bottom: 2rem; }
        .cta-btns { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
        .btn-cta-w { background: #fff; color: var(--green-deeper); padding: 13px 28px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s; }
        .btn-cta-w:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-cta-g { background: var(--green-light); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; }
        .btn-cta-g:hover { background: var(--green-dark); }

        footer { background: var(--green-dark); color: rgba(255,255,255,0.65); }
        .footer-main { max-width: 1280px; margin: 0 auto; padding: 3.5rem 1.5rem 2.5rem; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2.5rem; }
        .footer-brand p { font-size: 13px; line-height: 1.75; color: rgba(255,255,255,0.55); max-width: 240px; margin: 0.85rem 0 1.25rem; }
        .social-links { display: flex; gap: 8px; }
        .social-link { width: 36px; height: 36px; background: rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; color: rgba(255,255,255,0.65); transition: background 0.2s; }
        .social-link:hover { background: rgba(255,255,255,0.2); color: #fff; }
        .footer-col h4 { font-size: 12px; font-weight: 600; color: #d4f095; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 0.85rem; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .footer-col ul li a { font-size: 12.5px; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
        .footer-col ul li a:hover { color: #d4f095; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding: 1.1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; max-width: 1280px; margin: 0 auto; font-size: 11.5px; flex-wrap: wrap; gap: 0.5rem; color: rgba(255,255,255,0.45); }
        .float-call { position: fixed; left: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: var(--green-light); color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(90,122,30,0.35); transition: transform 0.2s, background 0.2s; }
        .float-call:hover { transform: scale(1.1); background: var(--green-dark); }
        .float-wa { position: fixed; right: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(37,211,102,0.4); transition: transform 0.2s; }
        .float-wa:hover { transform: scale(1.1); }

        @media (max-width: 1100px) {
          .mosaic-grid { grid-template-columns: repeat(3,1fr); grid-template-rows: repeat(4,180px); }
          .mosaic-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
          .mosaic-item:nth-child(n+2) { grid-column: span 1; }
        }
        @media (max-width: 900px) {
          .nav-list { display: none; }
          .hamburger { display: flex; }
          .intro-inner { grid-template-columns: 1fr; gap: 2rem; }
          .sub-item { grid-template-columns: 1fr; gap: 1.5rem; }
          .sub-item.reverse { direction: ltr; }
          .gallery-grid { grid-template-columns: repeat(2,1fr); }
          .gal-item:nth-child(5n+1) { grid-column: span 1; aspect-ratio: 4/3; }
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
        @media (max-width: 600px) {
          .topbar-left { display: none; }
          .topbar { justify-content: center; }
          .gallery-grid { grid-template-columns: 1fr; }
          .gal-item:nth-child(5n+1) { grid-column: span 1; }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .process-steps { grid-template-columns: 1fr 1fr; }
          .sub-features { grid-template-columns: 1fr; }
          .intro-media { grid-template-columns: 1fr; }
          .intro-img-big { height: 200px; }
          .mosaic-grid { grid-template-columns: 1fr; }
          .mosaic-item:nth-child(1) { grid-column: span 1; }
          .hero-stats-bar { flex-wrap: wrap; }
          .hstat { min-width: 50%; border-bottom: 1px solid rgba(155,193,76,0.1); }
        }
        @media (max-width: 480px) {
          .hero-btns, .cta-btns, .banner-btns, .banner2-btns { flex-direction: column; align-items: stretch; }
          .btn-green, .btn-wa, .btn-white, .btn-outline-white, .btn-cta-w, .btn-cta-g { justify-content: center; }
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
        <img src="/pool6.webp" alt="Exterior Renovation Dubai" className="hero-img" onError={e => { e.currentTarget.style.opacity='0'; }} />
        <div className="hero-ov" />
        <div className="hero-ov2" />
        <div className="hero-content">
          <div className="breadcrumb">
            <a href="/">Home</a><span>></span>
            <a href="/services">Services</a><span>></span>
            <span className="breadcrumb-active">Exterior Renovation</span>
          </div>
          <div className="hero-badge"><div className="hero-dot" /> Expert Exterior Renovation Dubai</div>
          <h1>Elevate Your Property From the <em>Outside In</em></h1>
          <p>From facade cladding and exterior painting to waterproofing, roofing, and structural repairs - All Care delivers premium exterior renovation services across Dubai with lasting quality.</p>
          <div className="hero-btns">
            <a href="/#contact" className="btn-green">Get Free Quote <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="btn-wa"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> WhatsApp Us</a>
          </div>
        </div>
        <div className="hero-stats-bar">
          {[{num:'300+',lbl:'Exterior Projects'},{num:'10+',lbl:'Years Experience'},{num:'4.9*',lbl:'Client Rating'},{num:'24/7',lbl:'Support'}].map(s => (
            <div className="hstat" key={s.lbl}><div className="hstat-num">{s.num}</div><div className="hstat-lbl">{s.lbl}</div></div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="intro-inner">
          <div className="intro-content">
            <span className="section-tag">About This Service</span>
            <h2 className="section-title">Dubai&apos;s Exterior Renovation Specialists</h2>
            <p>Your property&apos;s exterior is its first impression. At All Care Technical Services, we specialize in transforming tired, worn exteriors into stunning, weather-resistant facades that protect your investment and elevate your curb appeal.</p>
            <p>From <strong>facade cladding and painting</strong> to <strong>waterproofing, roofing, and structural repairs</strong> - our experienced team delivers exterior renovation solutions that are built to withstand Dubai&apos;s harsh climate while looking exceptional for years to come.</p>
            <div className="intro-features">
              {[
                { t: 'Licensed & Insured', i: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
                { t: 'Weather-Resistant Materials', i: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
                { t: 'Full Workmanship Warranty', i: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
                { t: 'Minimal Disruption Guarantee', i: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
              ].map(f => (
                <div className="intro-feat" key={f.t}><div className="intro-feat-icon">{f.i}</div>{f.t}</div>
              ))}
            </div>
          </div>
          <div className="intro-media">
            <div className="intro-img-big"><img src="/pool5.jpg" alt="Exterior Work" onError={e => { e.currentTarget.style.display='none'; }} /></div>
            <div className="intro-img-sm"><img src="/landscape3.jpg" alt="Outdoor" onError={e => { e.currentTarget.style.display='none'; }} /></div>
            <div className="intro-img-sm"><img src="/pool6.webp" alt="Exterior" onError={e => { e.currentTarget.style.display='none'; }} /></div>
          </div>
        </div>
      </section>

      {/* SUB SERVICES */}
      <section className="sub-section">
        <div className="sub-inner">
          <div className="sub-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Our Exterior Renovation Services</h2>
            <p className="section-sub" style={{margin:'0 auto',textAlign:'center',maxWidth:'560px'}}>Comprehensive exterior solutions - from facade upgrades to structural repairs, all built to last in Dubai&apos;s climate.</p>
          </div>
          <div className="sub-grid">
            {subServices.map((s, i) => (
              <div className={`sub-item ${i % 2 !== 0 ? 'reverse' : ''}`} key={s.title}>
                <div className="sub-img-wrap">
                  <img src={s.img} alt={s.title} onError={e => { e.currentTarget.style.display='none'; }} />
                  <span className="sub-img-label">Exterior Renovation</span>
                </div>
                <div className="sub-content">
                  <div className="sub-icon-wrap">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="sub-features">{s.features.map(f => <span className="sub-feat" key={f}>{f}</span>)}</div>
                  <a href="/#contact" className="sub-link">Get a Quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER 1 */}
      <div className="banner1">
        <img src="/landscape3.jpg" alt="Exterior Projects" onError={e => { e.currentTarget.style.display='none'; }} />
        <div className="banner1-ov" />
        <div className="banner1-content">
          <span className="section-tag">Built to Last</span>
          <h2>Exteriors That Withstand Dubai&apos;s Toughest Conditions</h2>
          <p>We use only weather-resistant, UV-protective materials and proven techniques that keep your property looking stunning year after year.</p>
          <div className="banner-btns">
            <a href="/#contact" className="btn-white">Start Your Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            <a href="tel:+971559747416" className="btn-outline-white">+971 55 974 7416</a>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <section className="gallery">
        <div className="gallery-inner">
          <div className="gallery-header">
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">Exterior Project Gallery</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Browse our portfolio of completed exterior renovation projects across Dubai.</p>
          </div>
          <div className="gallery-filter">
            {galleryCats.map(c => (<button key={c.id} className={`gal-btn ${activeGallery === c.id ? 'active' : ''}`} onClick={() => setActiveGallery(c.id)}>{c.label}</button>))}
          </div>
          <div className="gallery-grid">
            {filteredGallery.map(img => (
              <div className="gal-item" key={img.id}>
                <img src={img.src} alt={img.title} onError={e => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling.style.display='flex'; }} />
                <div className="gal-ph" style={{display:'none'}}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Image Coming Soon</span></div>
                <div className="gal-overlay" />
                <div className="gal-info"><h4>{img.title}</h4><p><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> {img.loc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER 2 */}
      <div className="banner2">
        <img src="/Interior7.jpg" alt="Exterior Renovation" onError={e => { e.currentTarget.style.display='none'; }} />
        <div className="banner2-ov" />
        <div className="banner2-content">
          <span className="section-tag">Inside & Out</span>
          <h2>Need Interior Renovation Too?</h2>
          <p>We offer complete interior and exterior renovation under one roof. One team, one contract, zero hassle.</p>
          <div className="banner2-btns">
            <a href="/services/interior-renovation" className="btn-white">View Interior Services <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            <a href="/services" className="btn-outline-white">All Services</a>
          </div>
        </div>
      </div>

      {/* MOSAIC */}
      <section className="mosaic">
        <div className="mosaic-inner">
          <div className="mosaic-header">
            <span className="section-tag">Project Showcase</span>
            <h2 className="section-title">More Exterior Transformations</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>A closer look at the quality and craftsmanship we bring to every exterior project.</p>
          </div>
          <div className="mosaic-grid">
            {[
              {src:'/pool5.jpg', label:'Pool & Exterior'},
              {src:'/pool4.webp', label:'Outdoor Living'},
              {src:'/landscape3.jpg', label:'Landscaping'},
              {src:'/interior1.jpg', label:'Full Renovation'},
              {src:'/pool6.webp', label:'Pool Surrounds'},
              {src:'/interior2.jpg', label:'Complete Project'},
            ].map((item, i) => (
              <div className="mosaic-item" key={i}>
                <img src={item.src} alt={item.label} onError={e => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling.style.display='flex'; }} />
                <div className="mosaic-ph" style={{display:'none'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div>
                <span className="mosaic-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="whyus">
        <div className="whyus-inner">
          <div className="whyus-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">The All Care Exterior Advantage</h2>
            <p className="section-sub">We go beyond surface-level renovation - we build exteriors that protect, perform, and impress.</p>
          </div>
          <div className="why-grid">
            {[
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title:'Premium Materials', desc:'Weather-resistant, UV-protective materials built for Dubai climate.'},
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title:'On-Time Delivery', desc:'We respect your timeline and deliver every project on schedule.'},
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title:'Fixed Pricing', desc:'Transparent quotes with no hidden costs or surprise charges.'},
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title:'Warranty Backed', desc:'Full workmanship warranty on all exterior renovation works.'},
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, title:'Expert Team', desc:'Skilled tradespeople with years of exterior renovation experience.'},
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3"/></svg>, title:'24/7 Support', desc:'Available round the clock for emergencies and queries.'},
            ].map(w => (<div className="why-card" key={w.title}><div className="why-icon">{w.icon}</div><h4>{w.title}</h4><p>{w.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="process-inner">
          <div className="process-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Our Exterior Renovation Process</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>A smooth, transparent process from start to finish.</p>
          </div>
          <div className="process-steps">
            {[
              {n:'01',icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3"/></svg>,title:'Free Consultation',desc:'Call or WhatsApp us to discuss your exterior project.'},
              {n:'02',icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,title:'Site Survey',desc:'Our team visits your property and assesses the scope.'},
              {n:'03',icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>,title:'Fixed Quote',desc:'Detailed proposal with materials, timeline, and pricing.'},
              {n:'04',icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,title:'Expert Work',desc:'Skilled team executes to the highest standards.'},
              {n:'05',icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,title:'Handover',desc:'Final walkthrough and ongoing after-care support.'},
            ].map(p => (<div className="p-step" key={p.n}><div className="p-num">{p.n}</div><div className="p-icon">{p.icon}</div><h4>{p.title}</h4><p>{p.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <h2>Ready to Transform Your Exterior?</h2>
        <p>Get a free consultation and quotation - no obligation, completely free.</p>
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
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://www.instagram.com/allcaretechnical" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://www.tiktok.com/@all.care.technica" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
              <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
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
              <li><a href="/services">Pool Construction</a></li>
              <li><a href="/services">Landscaping</a></li>
              <li><a href="/services">Turnkey Solutions</a></li>
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
      <a href="tel:+971559747416" className="float-call" aria-label="Call Us"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg></a>
      <a href="https://wa.me/971559747416" className="float-wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
    </>
  );
}
