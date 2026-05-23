'use client';
import { useState } from 'react';

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(v => !v)}>
        {q}
        <span className={`faq-icon ${open ? 'open' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

export default function InteriorRenovationPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState('all');

  const galleryCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'living', label: 'Living Rooms' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'bathroom', label: 'Bathrooms' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'office', label: 'Offices' },
  ];

  const galleryImages = [
    { id: 1, cat: 'living', src: '/interior1.jpg', title: 'Modern Living Room', location: 'Dubai Marina' },
    { id: 2, cat: 'living', src: '/interior2.jpg', title: 'Luxury Living Space', location: 'Palm Jumeirah' },
    { id: 3, cat: 'living', src: '/Interior7.jpg', title: 'Contemporary Lounge', location: 'Downtown Dubai' },
    { id: 4, cat: 'kitchen', src: '/kitchen1.jpg', title: 'Modern Kitchen Fit-Out', location: 'Jumeirah' },
    { id: 5, cat: 'kitchen', src: '/kitchen2.jpg', title: 'Open Plan Kitchen', location: 'Business Bay' },
    { id: 6, cat: 'bathroom', src: '/bathroom1.jpg', title: 'Luxury Bathroom', location: 'Dubai Hills' },
    { id: 7, cat: 'bathroom', src: '/bathroom2.jpg', title: 'Master En-Suite', location: 'Arabian Ranches' },
    { id: 8, cat: 'bedroom', src: '/bedroom1.jpg', title: 'Master Bedroom Suite', location: 'The Springs' },
    { id: 9, cat: 'bedroom', src: '/bedroom2.jpg', title: 'Custom Wardrobes', location: 'Mirdif' },
    { id: 10, cat: 'office', src: '/office1.jpg', title: 'Corporate Office Fit-Out', location: 'DIFC' },
    { id: 11, cat: 'office', src: '/office2.jpg', title: 'Modern Workspace', location: 'Media City' },
    { id: 12, cat: 'living', src: '/interior1.jpg', title: 'Villa Living Room', location: 'Meadows' },
  ];

  const filteredGallery = activeGallery === 'all' ? galleryImages : galleryImages.filter(g => g.cat === activeGallery);

  const subServices = [
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
      title: 'False Ceiling & Partitions',
      desc: 'We design and install custom false ceilings — gypsum, POP, stretch ceilings, and more. Our partition solutions create smart, functional spaces for any layout.',
      features: ['Gypsum Board Ceilings', 'POP False Ceilings', 'Stretch Ceilings', 'LED Cove Lighting', 'Drywall Partitions', 'Glass Partitions', 'Acoustic Panels', 'Coffered Ceilings'],
      img: '/interior2.jpg',
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
      title: 'Flooring & Tiling',
      desc: 'From premium marble and porcelain tiles to engineered wood and luxury vinyl — we install and finish all types of flooring with expert precision and lasting quality.',
      features: ['Marble & Granite', 'Porcelain Tiles', 'Engineered Wood', 'Vinyl & SPC Flooring', 'Epoxy Flooring', 'Herringbone Pattern', 'Outdoor Tiles', 'Floor Polishing'],
      img: '/interior1.jpg',
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6.5"/><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>,
      title: 'Interior Painting',
      desc: 'Our professional painting team delivers flawless, lasting finishes. From standard emulsion to designer textures and wallpaper — we transform your walls beautifully.',
      features: ['Emulsion Painting', 'Texture Painting', 'Wallpaper Installation', 'Feature Walls', 'Anti-Mold Paints', 'Metallic Finishes', 'Stencil Designs', 'Wood Staining'],
      img: '/Interior7.jpg',
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>,
      title: 'Kitchen Fit-Out',
      desc: 'We create stunning, functional kitchens — from custom cabinetry and countertops to full kitchen renovations. Every kitchen is designed around how you cook and live.',
      features: ['Custom Cabinetry', 'Quartz Countertops', 'Marble Countertops', 'Kitchen Islands', 'Built-in Appliances', 'Backsplash Tiling', 'Kitchen Lighting', 'Open Plan Kitchens'],
      img: '/interior1.jpg',
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><circle cx="12" cy="12" r="4"/><path d="M2 12h2M20 12h2M12 2v2M12 20v2"/></svg>,
      title: 'Bathroom Renovation',
      desc: 'Transform your bathroom into a private sanctuary. We handle everything from full demolition and waterproofing to tiling, fixtures, vanities, and luxury finishes.',
      features: ['Full Bathroom Remodel', 'Waterproofing', 'Luxury Tiles', 'Custom Vanities', 'Rain Showers', 'Bathtub Installation', 'Heated Floors', 'Smart Mirrors'],
      img: '/interior2.jpg',
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
      title: 'Office Interior',
      desc: 'Create inspiring, productive workspaces with our commercial interior solutions. From corporate offices and retail fit-outs to co-working spaces and executive suites.',
      features: ['Corporate Fit-Outs', 'Open Plan Offices', 'Executive Suites', 'Reception Areas', 'Meeting Rooms', 'Acoustic Solutions', 'Cable Management', 'Branded Interiors'],
      img: '/Interior7.jpg',
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2"/><path d="M2 9h20"/><path d="M12 9v13"/><path d="M5 9v13"/><path d="M19 9v13"/></svg>,
      title: 'Wardrobes & Cabinetry',
      desc: 'Custom-built wardrobes, storage solutions, and cabinetry crafted to fit your exact space, style, and storage needs. Every millimeter maximized for function and beauty.',
      features: ['Walk-in Wardrobes', 'Built-in Wardrobes', 'Sliding Door Systems', 'Custom Cabinetry', 'TV Units', 'Bookshelves', 'Storage Solutions', 'Dressing Rooms'],
      img: '/interior1.jpg',
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>,
      title: 'Lighting Design',
      desc: 'Expert lighting design and installation that transforms your space. From ambient cove lighting and spotlights to statement fixtures and smart lighting systems.',
      features: ['Cove LED Lighting', 'Recessed Spotlights', 'Pendant Lights', 'Smart Lighting', 'Dimmer Systems', 'Feature Lighting', 'Under-Cabinet Lights', 'Outdoor Lighting'],
      img: '/interior2.jpg',
    },
  ];

  const stats = [
    { num: '500+', label: 'Interior Projects Completed' },
    { num: '10+', label: 'Years of Experience' },
    { num: '4.9★', label: 'Client Rating' },
    { num: '30+', label: 'Expert Craftsmen' },
  ];

  const faqs = [
    { q: 'How long does an interior renovation take?', a: 'Timelines vary by scope. A single bathroom takes 1-2 weeks, a kitchen 2-3 weeks, and a full villa interior renovation 6-14 weeks. We provide a detailed timeline in our proposal before starting.' },
    { q: 'Do you handle permits and approvals in Dubai?', a: 'Yes, we handle all necessary permits and approvals with Dubai Municipality and relevant authorities for renovation works that require them.' },
    { q: 'Can I live in my home during the renovation?', a: 'For partial renovations (single room), yes. For full renovations, we recommend temporary accommodation. We always work to minimize disruption and can phase works to suit your needs.' },
    { q: 'Do you offer a design service as well?', a: 'Yes! We offer interior design consultation and 3D visualization services. Our designers work with you to create your perfect space before any work begins.' },
    { q: 'What materials do you use and can I choose them?', a: 'Absolutely. We source premium materials from trusted suppliers across Dubai and internationally. You can choose from our curated selection or specify your own preferred materials.' },
    { q: 'Is there a warranty on the renovation work?', a: 'Yes, all our interior renovation work comes with a workmanship warranty. The duration varies by service type — ask your project manager for specific warranty details.' },
    { q: 'Do you do small renovation jobs as well?', a: 'Yes, we take projects of all sizes — from a single bathroom refresh to complete villa renovations. Every project receives the same level of care and quality.' },
    { q: 'How do I get started?', a: 'Simply call or WhatsApp us on +971 55 974 7416. We will schedule a free site visit, assess your requirements, and provide a detailed quotation at no cost.' },
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
        .nav-list li a.active { color: var(--green-dark); font-weight: 600; }
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
        .hero { position: relative; height: clamp(500px, 75vh, 820px); overflow: hidden; display: flex; align-items: flex-end; }
        .hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,20,9,0.88) 0%, rgba(15,20,9,0.4) 50%, rgba(15,20,9,0.1) 100%); }
        .hero-overlay2 { position: absolute; inset: 0; background: linear-gradient(to right, rgba(61,92,16,0.5) 0%, transparent 60%); }
        .hero-content { position: relative; padding: clamp(2rem,5vw,4rem) clamp(1.5rem,6vw,6rem); max-width: 800px; }
        .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 1.25rem; }
        .breadcrumb a { color: rgba(255,255,255,0.6); font-size: 13px; text-decoration: none; transition: color 0.2s; }
        .breadcrumb a:hover { color: #c8e88a; }
        .breadcrumb span { color: rgba(255,255,255,0.4); font-size: 12px; }
        .breadcrumb-active { color: #c8e88a; font-size: 13px; font-weight: 500; }
        .hero-badge { display: inline-flex; align-items: center; gap: 7px; background: rgba(155,193,76,0.2); border: 1px solid rgba(155,193,76,0.4); color: #c8e88a; font-size: 11px; font-weight: 600; padding: 5px 14px; border-radius: 100px; margin-bottom: 1.25rem; letter-spacing: 0.06em; text-transform: uppercase; }
        .hero-dot { width: 6px; height: 6px; background: var(--green-light); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.6rem,6vw,5rem); font-weight: 700; color: #fff; line-height: 1.05; margin-bottom: 1.25rem; }
        .hero h1 em { color: #c8e88a; font-style: normal; }
        .hero p { font-size: 16px; color: rgba(255,255,255,0.82); line-height: 1.8; margin-bottom: 2rem; max-width: 560px; }
        .hero-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; }
        .btn-green { background: var(--green-light); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, transform 0.15s; }
        .btn-green:hover { background: var(--green-dark); transform: translateY(-2px); }
        .btn-wa { background: rgba(37,211,102,0.15); color: #25D366; padding: 13px 24px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(37,211,102,0.4); transition: background 0.2s; }
        .btn-wa:hover { background: rgba(37,211,102,0.25); }
        .hero-stats { position: absolute; bottom: 0; right: 0; display: flex; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-radius: 16px 0 0 0; overflow: hidden; }
        .hero-stat { padding: 1.25rem 1.75rem; text-align: center; border-left: 1px solid rgba(155,193,76,0.15); }
        .hero-stat:first-child { border-left: none; }
        .hero-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 700; color: var(--green-dark); line-height: 1; }
        .hero-stat-lbl { font-size: 11px; color: var(--muted); margin-top: 3px; white-space: nowrap; }

        /* INTRO SECTION */
        .intro-section { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .intro-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .intro-left { display: flex; flex-direction: column; gap: 1.25rem; }
        .section-tag { display: inline-block; font-size: 11px; font-weight: 600; color: var(--green-dark); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.5rem; padding: 4px 12px; background: rgba(122,158,48,0.1); border-radius: 100px; border: 1px solid rgba(122,158,48,0.25); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #1a1a1a; line-height: 1.15; }
        .section-sub { font-size: 15px; color: var(--muted); line-height: 1.8; }
        .intro-features { display: flex; flex-direction: column; gap: 12px; margin-top: 0.5rem; }
        .intro-feature { display: flex; align-items: flex-start; gap: 12px; padding: 14px; background: var(--off-white); border-radius: 12px; border: 1px solid var(--border); }
        .intro-feature-icon { width: 40px; height: 40px; background: rgba(155,193,76,0.12); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--green-dark); }
        .intro-feature-text strong { display: block; font-size: 14px; font-weight: 600; color: #1a1a1a; }
        .intro-feature-text span { font-size: 13px; color: var(--muted); }
        .intro-right { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .intro-img-main { grid-column: 1 / -1; border-radius: 16px; overflow: hidden; height: 260px; background: linear-gradient(135deg, var(--green-deeper), #4a7a18); }
        .intro-img-main img { width: 100%; height: 100%; object-fit: cover; }
        .intro-img-sm { border-radius: 12px; overflow: hidden; height: 180px; background: linear-gradient(135deg, #4a7a18, var(--green-dark)); }
        .intro-img-sm img { width: 100%; height: 100%; object-fit: cover; }
        .intro-img-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 0.5rem; color: rgba(255,255,255,0.4); font-size: 12px; }

        /* SUB SERVICES */
        .sub-services { background: var(--off-white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
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
        .sub-icon-wrap { width: 64px; height: 64px; background: rgba(155,193,76,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; color: var(--green-dark); margin-bottom: 0.25rem; }
        .sub-content h3 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.6rem,3vw,2.2rem); font-weight: 700; color: #1a1a1a; line-height: 1.15; }
        .sub-content p { font-size: 15px; color: var(--muted); line-height: 1.8; }
        .sub-features { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .sub-feature { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #444; }
        .sub-feature::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--green-light); flex-shrink: 0; }
        .sub-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--green-dark); text-decoration: none; padding: 10px 20px; border: 1.5px solid var(--green-light); border-radius: 8px; margin-top: 0.5rem; transition: background 0.2s, color 0.2s; width: fit-content; }
        .sub-link:hover { background: var(--green-light); color: #fff; }

        /* STATS BAND */
        .stats-band { background: var(--green-dark); padding: 2.5rem 1.5rem; }
        .stats-inner { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; text-align: center; }
        .stat-icon { display: flex; justify-content: center; margin-bottom: 8px; opacity: 0.75; }
        .stat-num { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.2rem,4vw,3rem); font-weight: 700; color: #c8e88a; line-height: 1; }
        .stat-lbl { font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 5px; }

        /* FULL BANNER 1 */
        .banner1 { position: relative; height: clamp(350px,50vw,580px); overflow: hidden; display: flex; align-items: center; }
        .banner1 img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .banner1-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(61,92,16,0.9) 0%, rgba(61,92,16,0.55) 55%, rgba(61,92,16,0.1) 100%); }
        .banner1-content { position: relative; padding: 0 clamp(1.5rem,6vw,6rem); max-width: 640px; }
        .banner1-content .section-tag { color: #c8e88a; background: rgba(155,193,76,0.2); border-color: rgba(155,193,76,0.35); }
        .banner1-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,5vw,3.6rem); font-weight: 700; color: #fff; line-height: 1.08; margin-bottom: 1rem; }
        .banner1-content p { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.75; margin-bottom: 1.75rem; max-width: 480px; }
        .banner-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; }
        .btn-white { background: #fff; color: var(--green-deeper); padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s, box-shadow 0.15s; }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-outline-w { background: transparent; color: #fff; padding: 13px 22px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(255,255,255,0.45); transition: background 0.2s; }
        .btn-outline-w:hover { background: rgba(255,255,255,0.12); }

        /* GALLERY */
        .gallery-section { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .gallery-inner { max-width: 1280px; margin: 0 auto; }
        .gallery-header { text-align: center; margin-bottom: 2rem; }
        .gallery-filter { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2.5rem; }
        .gal-btn { padding: 7px 18px; border-radius: 100px; border: 1.5px solid var(--border); background: transparent; font-size: 13px; font-weight: 500; color: var(--muted); cursor: pointer; font-family: inherit; transition: all 0.2s; }
        .gal-btn:hover { border-color: var(--green-light); color: var(--green-dark); }
        .gal-btn.active { background: var(--green-light); border-color: var(--green-light); color: #fff; font-weight: 600; }
        .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .gallery-item { border-radius: 12px; overflow: hidden; position: relative; aspect-ratio: 4/3; background: linear-gradient(135deg, var(--green-deeper), #4a7a18); cursor: pointer; }
        .gallery-item:nth-child(4n+1) { grid-column: span 2; aspect-ratio: 16/9; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .gallery-item:hover img { transform: scale(1.06); }
        .gallery-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%); opacity: 0; transition: opacity 0.3s; }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 1rem; transform: translateY(8px); transition: transform 0.3s; }
        .gallery-item:hover .gallery-info { transform: translateY(0); }
        .gallery-info h4 { font-size: 14px; font-weight: 600; color: #fff; }
        .gallery-info p { font-size: 12px; color: rgba(255,255,255,0.75); display: flex; align-items: center; gap: 4px; margin-top: 2px; }
        .gallery-placeholder { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; color: rgba(255,255,255,0.35); }
        .gallery-placeholder svg { opacity: 0.3; }
        .gallery-placeholder span { font-size: 11px; }

        /* FULL BANNER 2 */
        .banner2 { position: relative; height: clamp(350px,50vw,580px); overflow: hidden; display: flex; align-items: center; justify-content: flex-end; }
        .banner2 img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .banner2-overlay { position: absolute; inset: 0; background: linear-gradient(to left, rgba(61,92,16,0.9) 0%, rgba(61,92,16,0.5) 55%, transparent 100%); }
        .banner2-content { position: relative; padding: 0 clamp(1.5rem,6vw,6rem); max-width: 620px; text-align: right; }
        .banner2-content .section-tag { color: #c8e88a; background: rgba(155,193,76,0.2); border-color: rgba(155,193,76,0.35); }
        .banner2-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,5vw,3.6rem); font-weight: 700; color: #fff; line-height: 1.08; margin-bottom: 1rem; }
        .banner2-content p { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.75; margin-bottom: 1.75rem; }
        .banner2-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; justify-content: flex-end; }

        /* MEDIA MOSAIC */
        .mosaic-section { background: var(--off-white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .mosaic-inner { max-width: 1280px; margin: 0 auto; }
        .mosaic-header { text-align: center; margin-bottom: 2.5rem; }
        .mosaic-grid { display: grid; grid-template-columns: repeat(6, 1fr); grid-template-rows: repeat(3, 220px); gap: 1rem; }
        .mosaic-item { border-radius: 14px; overflow: hidden; position: relative; background: linear-gradient(135deg, var(--green-deeper), #4a7a18); }
        .mosaic-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .mosaic-item:hover img { transform: scale(1.05); }
        .mosaic-item:nth-child(1) { grid-column: span 3; grid-row: span 2; }
        .mosaic-item:nth-child(2) { grid-column: span 3; }
        .mosaic-item:nth-child(3) { grid-column: span 3; }
        .mosaic-item:nth-child(4) { grid-column: span 2; }
        .mosaic-item:nth-child(5) { grid-column: span 2; }
        .mosaic-item:nth-child(6) { grid-column: span 2; }
        .mosaic-label { position: absolute; bottom: 0.75rem; left: 0.75rem; background: rgba(61,92,16,0.85); color: #fff; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 6px; backdrop-filter: blur(4px); }
        .mosaic-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.2); }

        /* PROCESS */
        .process-section { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .process-inner { max-width: 1100px; margin: 0 auto; }
        .process-header { text-align: center; margin-bottom: 2.5rem; }
        .process-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap: 1.25rem; }
        .p-step { text-align: center; padding: 2rem 1.25rem; background: var(--off-white); border-radius: 16px; border: 1px solid var(--border); }
        .p-num { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 700; color: rgba(155,193,76,0.15); line-height: 1; }
        .p-icon { width: 58px; height: 58px; background: var(--green-light); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0.5rem auto 1rem; }
        .p-step h4 { font-size: 15px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; }
        .p-step p { font-size: 13px; color: var(--muted); line-height: 1.6; }

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

        /* FAQ */
        .faq-section { background: var(--off-white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .faq-inner { max-width: 860px; margin: 0 auto; }
        .faq-header { text-align: center; margin-bottom: 2.5rem; }
        .faq-list { display: flex; flex-direction: column; gap: 1rem; }
        .faq-item { background: var(--white); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
        .faq-q { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 1.5rem; background: none; border: none; cursor: pointer; font-family: inherit; font-size: 15px; font-weight: 600; color: #1a1a1a; text-align: left; gap: 1rem; }
        .faq-q:hover { color: var(--green-dark); }
        .faq-icon { flex-shrink: 0; color: var(--green-light); transition: transform 0.3s; }
        .faq-icon.open { transform: rotate(45deg); }
        .faq-a { padding: 0 1.5rem 1.1rem; font-size: 14px; color: var(--muted); line-height: 1.75; }

        /* CTA */
        .cta-band { background: var(--green-deeper); padding: 4rem 1.5rem; text-align: center; }
        .cta-band h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #fff; margin-bottom: 0.85rem; }
        .cta-band p { color: rgba(255,255,255,0.8); font-size: 15px; margin-bottom: 2rem; }
        .cta-btns { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
        .btn-cta-w { background: #fff; color: var(--green-deeper); padding: 13px 28px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s, box-shadow 0.15s; }
        .btn-cta-w:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-cta-g { background: var(--green-light); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; }
        .btn-cta-g:hover { background: var(--green-dark); }

        /* FOOTER */
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

        /* FLOATING */
        .float-call { position: fixed; left: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: var(--green-light); color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(90,122,30,0.35); transition: transform 0.2s, background 0.2s; }
        .float-call:hover { transform: scale(1.1); background: var(--green-dark); }
        .float-wa { position: fixed; right: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(37,211,102,0.4); transition: transform 0.2s; }
        .float-wa:hover { transform: scale(1.1); }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .mosaic-grid { grid-template-columns: repeat(3,1fr); grid-template-rows: repeat(4, 200px); }
          .mosaic-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
          .mosaic-item:nth-child(2) { grid-column: span 1; }
          .mosaic-item:nth-child(3) { grid-column: span 1; }
          .mosaic-item:nth-child(4) { grid-column: span 1; }
          .mosaic-item:nth-child(5) { grid-column: span 1; }
          .mosaic-item:nth-child(6) { grid-column: span 1; }
        }
        @media (max-width: 900px) {
          .nav-list { display: none; }
          .hamburger { display: flex; }
          .hero-stats { position: relative; border-radius: 12px; margin: 1.5rem; }
          .intro-inner { grid-template-columns: 1fr; gap: 2rem; }
          .sub-item { grid-template-columns: 1fr; gap: 1.5rem; }
          .sub-item.reverse { direction: ltr; }
          .gallery-grid { grid-template-columns: repeat(2,1fr); }
          .gallery-item:nth-child(4n+1) { grid-column: span 1; aspect-ratio: 4/3; }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
          .banner2-content { text-align: left; }
          .banner2-overlay { background: linear-gradient(to right, rgba(61,92,16,0.9) 0%, rgba(61,92,16,0.5) 55%, transparent 100%); }
          .banner2 { justify-content: flex-start; }
          .banner2-btns { justify-content: flex-start; }
          .mosaic-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
          .mosaic-item { aspect-ratio: 4/3; }
          .mosaic-item:nth-child(1) { grid-column: span 2; grid-row: span 1; }
          .stats-inner { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 600px) {
          .topbar-left { display: none; }
          .topbar { justify-content: center; font-size: 11px; }
          .hero h1 { font-size: 2.4rem; }
          .gallery-grid { grid-template-columns: 1fr; }
          .gallery-item:nth-child(4n+1) { grid-column: span 1; }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .process-steps { grid-template-columns: 1fr 1fr; }
          .sub-features { grid-template-columns: 1fr; }
          .intro-right { grid-template-columns: 1fr; }
          .intro-img-main { height: 200px; }
          .mosaic-grid { grid-template-columns: 1fr; }
          .mosaic-item:nth-child(1) { grid-column: span 1; }
        }
        @media (max-width: 480px) {
          .hero-btns { flex-direction: column; }
          .btn-green, .btn-wa { justify-content: center; }
          .cta-btns, .banner-btns, .banner2-btns { flex-direction: column; align-items: center; }
          .btn-white, .btn-outline-w, .btn-cta-w, .btn-cta-g { width: 100%; justify-content: center; }
          .process-steps { grid-template-columns: 1fr; }
          .footer-main { grid-template-columns: 1fr; }
          .hero-stats { flex-wrap: wrap; }
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
            <li><a href="/services" className="active">Services</a></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#process">Our Process</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="tel:+971559747416" className="nav-cta-a">Call Now</a></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/services">All Services</a>
          <a href="/services/interior-renovation">Interior Renovation</a>
          <a href="/#about">About Us</a>
          <a href="/#contact">Contact</a>
          <a href="tel:+971559747416" className="mob-cta">Call Now — +971 55 974 7416</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img src="/Interior7.jpg" alt="Interior Renovation Dubai" className="hero-img"
          onError={e => { e.currentTarget.style.opacity='0'; }} />
        <div className="hero-overlay" />
        <div className="hero-overlay2" />
        <div className="hero-content">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/services">Services</a>
            <span>›</span>
            <span className="breadcrumb-active">Interior Renovation</span>
          </div>
          <div className="hero-badge"><div className="hero-dot" /> Premium Interior Renovation Dubai</div>
          <h1>Transform Your Space Into Something <em>Extraordinary</em></h1>
          <p>From false ceilings and custom flooring to full villa fit-outs — All Care Technical Services delivers world-class interior renovation across Dubai with craftsmanship you can see and feel.</p>
          <div className="hero-btns">
            <a href="/#contact" className="btn-green">
              Get Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="btn-wa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="hero-stats">
          {stats.map(s => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="intro-inner">
          <div className="intro-left">
            <span className="section-tag">About This Service</span>
            <h2 className="section-title">Dubai&apos;s Premier Interior Renovation Experts</h2>
            <p className="section-sub">We specialize in transforming residential and commercial interiors across Dubai. From concept to completion, our experienced team delivers exceptional quality, on time and within budget.</p>
            <p className="section-sub">Whether you are renovating a single room or an entire villa, we bring the same passion, craftsmanship, and attention to detail to every project.</p>
            <div className="intro-features">
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>, title: 'Licensed & Insured', desc: 'Fully registered with Dubai Municipality.' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, title: '30+ Expert Craftsmen', desc: 'Skilled team of carpenters, tilers, and designers.' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Workmanship Warranty', desc: 'All work covered by our quality guarantee.' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'On-Time Delivery', desc: 'We respect your timeline, always.' },
              ].map(f => (
                <div className="intro-feature" key={f.title}>
                  <div className="intro-feature-icon">{f.icon}</div>
                  <div className="intro-feature-text">
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="intro-right">
            <div className="intro-img-main">
              <img src="/interior1.jpg" alt="Interior Renovation" onError={e => { e.currentTarget.parentElement.querySelector('.intro-img-placeholder') && (e.currentTarget.style.display='none'); }} />
            </div>
            <div className="intro-img-sm">
              <img src="/interior2.jpg" alt="Interior Design" onError={e => { e.currentTarget.style.display='none'; }} />
            </div>
            <div className="intro-img-sm">
              <img src="/Interior7.jpg" alt="Luxury Interior" onError={e => { e.currentTarget.style.display='none'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* SUB SERVICES */}
      <section className="sub-services">
        <div className="sub-inner">
          <div className="sub-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Our Interior Renovation Services</h2>
            <p className="section-sub" style={{margin:'0 auto', textAlign:'center'}}>Comprehensive interior solutions for every space — designed around your vision, delivered with precision.</p>
          </div>
          <div className="sub-grid">
            {subServices.map((s, i) => (
              <div className={`sub-item ${i % 2 !== 0 ? 'reverse' : ''}`} key={s.title}>
                <div className="sub-img-wrap">
                  <img src={s.img} alt={s.title} onError={e => { e.currentTarget.style.display='none'; }} />
                  <span className="sub-img-label">Interior Renovation</span>
                </div>
                <div className="sub-content">
                  <div className="sub-icon-wrap">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="sub-features">
                    {s.features.map(f => <span className="sub-feature" key={f}>{f}</span>)}
                  </div>
                  <a href="/#contact" className="sub-link">
                    Get a Quote
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-band">
        <div className="stats-inner">
          {[
            { num:'500+', lbl:'Interior Projects', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
            { num:'10+', lbl:'Years Experience', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
            { num:'4.9★', lbl:'Client Rating', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
            { num:'30+', lbl:'Expert Craftsmen', icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
          ].map(s => (
            <div key={s.lbl} style={{textAlign:'center'}}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL BANNER 1 */}
      <div className="banner1">
        <img src="/interior1.jpg" alt="Premium Interior Renovation" onError={e => { e.currentTarget.style.display='none'; }} />
        <div className="banner1-overlay" />
        <div className="banner1-content">
          <span className="section-tag">Premium Quality</span>
          <h2>Every Detail Crafted to Perfection</h2>
          <p>We source only the finest materials and employ skilled craftsmen who take pride in their work. The result — interiors that inspire, impress, and last.</p>
          <div className="banner-btns">
            <a href="/#contact" className="btn-white">
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="tel:+971559747416" className="btn-outline-w">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>
              +971 55 974 7416
            </a>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="gallery-inner">
          <div className="gallery-header">
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">Interior Project Gallery</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Browse our portfolio of completed interior renovation projects across Dubai.</p>
          </div>
          <div className="gallery-filter">
            {galleryCategories.map(c => (
              <button key={c.id} className={`gal-btn ${activeGallery === c.id ? 'active' : ''}`} onClick={() => setActiveGallery(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {filteredGallery.map(img => (
              <div className="gallery-item" key={img.id}>
                <img src={img.src} alt={img.title}
                  onError={e => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling.style.display='flex'; }} />
                <div className="gallery-placeholder" style={{display:'none'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span>Image Coming Soon</span>
                </div>
                <div className="gallery-overlay" />
                <div className="gallery-info">
                  <h4>{img.title}</h4>
                  <p>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {img.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL BANNER 2 */}
      <div className="banner2">
        <img src="/interior2.jpg" alt="Luxury Interior Dubai" onError={e => { e.currentTarget.style.display='none'; }} />
        <div className="banner2-overlay" />
        <div className="banner2-content">
          <span className="section-tag">Ready to Transform?</span>
          <h2>Your Dream Interior is One Call Away</h2>
          <p>Let our design and renovation experts turn your vision into reality. Free consultation, transparent pricing, on-time delivery.</p>
          <div className="banner2-btns">
            <a href="/#contact" className="btn-white">
              Get Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="btn-outline-w">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* MOSAIC MEDIA SECTION */}
      <section className="mosaic-section">
        <div className="mosaic-inner">
          <div className="mosaic-header">
            <span className="section-tag">Project Showcase</span>
            <h2 className="section-title">More of Our Interior Work</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>A closer look at the quality and craftsmanship we bring to every interior renovation project.</p>
          </div>
          <div className="mosaic-grid">
            {[
              { src:'/interior1.jpg', label:'Living Room' },
              { src:'/interior2.jpg', label:'Master Bedroom' },
              { src:'/Interior7.jpg', label:'Kitchen' },
              { src:'/interior1.jpg', label:'Bathroom' },
              { src:'/interior2.jpg', label:'Office' },
              { src:'/Interior7.jpg', label:'Wardrobe' },
            ].map((item, i) => (
              <div className="mosaic-item" key={i}>
                <img src={item.src} alt={item.label}
                  onError={e => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling.style.display='flex'; }} />
                <div className="mosaic-placeholder" style={{display:'none'}}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <span className="mosaic-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="process-inner">
          <div className="process-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Our Renovation Process</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>A seamless, stress-free renovation experience from start to finish.</p>
          </div>
          <div className="process-steps">
            {[
              { n:'01', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>, title:'Free Consultation', desc:'Call or WhatsApp. We listen and understand exactly what you want to achieve.' },
              { n:'02', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>, title:'Site Visit & Design', desc:'We visit your space, take measurements, and present design options and 3D visuals.' },
              { n:'03', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, title:'Detailed Proposal', desc:'Full breakdown of materials, timeline, and fixed pricing — no hidden surprises.' },
              { n:'04', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>, title:'Expert Renovation', desc:'Our skilled craftsmen execute your renovation to the highest standards.' },
              { n:'05', icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>, title:'Handover & Care', desc:'Full walkthrough, snagging, and after-care support for complete satisfaction.' },
            ].map(p => (
              <div className="p-step" key={p.n}>
                <div className="p-num">{p.n}</div>
                <div className="p-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
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
            <h2 className="section-title">The All Care Difference</h2>
            <p className="section-sub">We go beyond renovation — we create spaces that truly feel like home.</p>
          </div>
          <div className="why-grid">
            {[
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title:'Premium Quality', desc:'Only the finest materials and finishes — we never compromise on quality.' },
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title:'On-Time Delivery', desc:'We set realistic timelines and stick to them, every single time.' },
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title:'Transparent Pricing', desc:'Fixed quotes, no hidden costs. What we quote is what you pay.' },
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title:'Warranty Backed', desc:'Full workmanship warranty on all interior renovation works.' },
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, title:'Expert Craftsmen', desc:'30+ skilled tradespeople — carpenters, tilers, painters, and designers.' },
              { icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, title:'Design Consultation', desc:'Free design advice and 3D visualization before any work begins.' },
            ].map(w => (
              <div className="why-card" key={w.title}>
                <div className="why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Interior Renovation FAQs</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Common questions about our interior renovation services in Dubai.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <h2>Ready to Transform Your Interior?</h2>
        <p>Get a free consultation and detailed quote — no obligation, completely free.</p>
        <div className="cta-btns">
          <a href="tel:+971559747416" className="btn-cta-w">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>
            +971 55 974 7416
          </a>
          <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="btn-cta-g">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
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
            <p>Your trusted renovation and technical services partner in Dubai.</p>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://www.instagram.com/allcaretechnical" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://www.tiktok.com/@all.care.technica" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
              <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Interior Services</h4>
            <ul>
              <li><a href="#sub-services">False Ceiling</a></li>
              <li><a href="#sub-services">Flooring & Tiling</a></li>
              <li><a href="#sub-services">Kitchen Fit-Out</a></li>
              <li><a href="#sub-services">Bathroom Renovation</a></li>
              <li><a href="#sub-services">Interior Painting</a></li>
              <li><a href="#sub-services">Wardrobes</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li style={{position:'relative'}} onMouseEnter={e => e.currentTarget.querySelector('.mega').style.display='grid'} onMouseLeave={e => e.currentTarget.querySelector('.mega').style.display='none'}>
  <a href="/services">Services &#9662;</a>
  <div className="mega" style={{display:'none',position:'absolute',top:'100%',left:'-200px',background:'#fff',borderRadius:'12px',boxShadow:'0 20px 60px rgba(0,0,0,0.12)',padding:'1.5rem 2rem',gridTemplateColumns:'1fr 1fr 1fr',gap:'0.5rem 2rem',minWidth:'680px',zIndex:300,border:'1px solid rgba(155,193,76,0.15)'}}>
    <a href="/services/interior-renovation" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Interior Renovation</a>
    <a href="/services/exterior-renovation" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Exterior Renovation</a>
    <a href="/services" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Pool Construction</a>
    <a href="/services" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Landscaping & Gardens</a>
    <a href="/services/turnkey" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Turnkey Solutions</a>
    <a href="/services/technical#aluminum" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Aluminum Work</a>
    <a href="/services/technical#pergola" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Pergola & Shade</a>
    <a href="/services/technical#electrical" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Electrical Works</a>
    <a href="/services/technical#ac" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />AC & Ducting</a>
    <a href="/services/technical#fencing" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Fencing & Gates</a>
    <a href="/services/technical#waterproofing" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Waterproofing</a>
    <a href="/services/technical#flooring" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Flooring & Tiling</a>
    <a href="/services/technical#painting" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Painting & Finishing</a>
    <a href="/services/technical#mep" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />MEP Works</a>
    <a href="/services" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Plants Sale & Supply</a>
    <a href="/services/technical#irrigation" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Irrigation Systems</a>
    <a href="/services/technical#lighting" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Outdoor Lighting</a>
    <a href="/services/technical#civil" style={{fontSize:'13px',padding:'8px 0',color:'#333',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #f5f5f5',textDecoration:'none'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#9BC14C',flexShrink:0}} />Civil Works</a>
  </div>
</li>
              <li><a href="/services">Exterior Renovation</a></li>
              <li><a href="/services">Pool & Landscape</a></li>
              <li><a href="/services">Electrical Works</a></li>
              <li><a href="/services">AC & Ducting</a></li>
              <li><a href="/services">Turnkey Solutions</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+971559747416">+971 55 974 7416</a></li>
              <li><a href="mailto:Info@allcaretechnicalservices.ae">Info@allcaretechnicalservices.ae</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#contact">Contact Us</a></li>
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
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      </a>
    </>
  );
}
