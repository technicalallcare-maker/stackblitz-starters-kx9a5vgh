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

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { id: 'all',        label: 'All Services' },
    { id: 'renovation', label: 'Renovation' },
    { id: 'outdoor',    label: 'Outdoor & Landscape' },
    { id: 'technical',  label: 'Technical Works' },
    { id: 'plants',     label: 'Plants & Supply' },
  ];

  const megaLinks = [
    { href: '/services/interior-renovation',      label: 'Interior Renovation' },
    { href: '/services/exterior-renovation',      label: 'Exterior Renovation' },
    { href: '/services/exterior-renovation',      label: 'Pool Construction' },
    { href: '/services/exterior-renovation',      label: 'Landscaping & Gardens' },
    { href: '/services/turnkey',                  label: 'Turnkey Solutions' },
    { href: '/services/technical#aluminum',       label: 'Aluminum Work' },
    { href: '/services/technical#pergola',        label: 'Pergola & Shade' },
    { href: '/services/technical#electrical',     label: 'Electrical Works' },
    { href: '/services/technical#ac',             label: 'AC & Ducting' },
    { href: '/services/technical#fencing',        label: 'Fencing & Gates' },
    { href: '/services/technical#waterproofing',  label: 'Waterproofing' },
    { href: '/services/technical',                label: 'Flooring & Tiling' },
    { href: '/services/technical',                label: 'Painting & Finishing' },
    { href: '/services/technical',                label: 'MEP Works' },
    { href: '/services/technical#irrigation',     label: 'Plants Sale & Supply' },
    { href: '/services/technical#irrigation',     label: 'Irrigation Systems' },
    { href: '/services/technical',                label: 'Outdoor Lighting' },
    { href: '/services/technical#civil',          label: 'Civil Works' },
  ];

  // ✅ CORRECT image mapping based on actual image content
  const services = [
    {
      cat: 'renovation', img: '/services_1.jpg', href: '/services/interior-renovation', badge: 'Renovation',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
      title: 'Interior Renovation', short: 'Complete interior transformation for homes and offices.',
      desc: 'We deliver premium interior renovation services across Dubai — from flooring and ceilings to full fit-outs. Every space is crafted with precision and attention to detail.',
      items: ['False Ceiling & Partitions', 'Flooring & Tiling', 'Interior Painting', 'Kitchen Fit-Out', 'Bathroom Renovation', 'Office Interior', 'Wardrobes & Cabinetry', 'Lighting Design'],
    },
    {
      cat: 'renovation', img: '/services_11.jpg', href: '/services/exterior-renovation', badge: 'Renovation',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M2 9h20"/></svg>,
      title: 'Exterior Renovation', short: 'Elevate your property curb appeal and structural finish.',
      desc: 'Our exterior renovation team handles facade cladding, waterproofing, and structural upgrades — giving your property a lasting, professional finish.',
      items: ['Facade Cladding', 'Exterior Painting', 'Waterproofing', 'Roof Works', 'Structural Repairs', 'Gate & Fencing', 'Driveway Tiling', 'External Insulation'],
    },
    {
      cat: 'renovation', img: '/services_4.jpg', href: '/services/turnkey', badge: 'Renovation',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
      title: 'Turnkey Solutions', short: 'End-to-end project delivery from design to handover.',
      desc: 'One contract, one team, zero hassle. We manage your entire project from concept design to final handover, ensuring quality at every stage.',
      items: ['Full Project Management', 'Design & Build', 'MEP Works', 'Civil Works', 'Fit-Out & Finishing', 'Post-Handover Support', 'Villa Renovation', 'Commercial Fit-Out'],
    },
    {
      cat: 'renovation', img: '/services_5.jpg', href: '/services/technical#waterproofing', badge: 'Renovation',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Waterproofing', short: 'Expert waterproofing for roofs, bathrooms, and foundations.',
      desc: 'Protect your property from water damage with our certified waterproofing solutions using premium materials that last for years.',
      items: ['Roof Waterproofing', 'Basement Waterproofing', 'Bathroom Sealing', 'Terrace Waterproofing', 'Foundation Protection', 'Tank Waterproofing', 'Pool Sealing', 'Expansion Joints'],
    },
    {
      cat: 'renovation', img: '/services_6.jpg', href: '/services/technical', badge: 'Renovation',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
      title: 'Flooring & Tiling', short: 'Premium flooring solutions for every space.',
      desc: 'From marble and porcelain to wood and vinyl — we install and finish all types of flooring with expert precision for residential and commercial spaces.',
      items: ['Marble & Granite', 'Porcelain Tiles', 'Wooden Flooring', 'Vinyl & SPC Flooring', 'Epoxy Flooring', 'Outdoor Tiles', 'Grouting & Finishing', 'Floor Polishing'],
    },
    {
      cat: 'renovation', img: '/services_7.jpg', href: '/services/technical', badge: 'Renovation',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13.5V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6.5"/><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>,
      title: 'Painting & Finishing', short: 'High-quality painting and surface finishing services.',
      desc: 'Our painting team delivers flawless finishes for interior and exterior surfaces using premium paints and the latest techniques.',
      items: ['Interior Painting', 'Exterior Painting', 'Texture Painting', 'Wallpaper Installation', 'Wood Staining', 'Anti-Mold Painting', 'Epoxy Coating', 'Decorative Finishes'],
    },
    {
      cat: 'outdoor', img: '/services_3.jpg', href: '/services/exterior-renovation', badge: 'Outdoor',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10"/><path d="M6 16c0 2.2 2.7 4 6 4s6-1.8 6-4"/></svg>,
      title: 'Pool Construction', short: 'Luxury pool design and construction across Dubai.',
      desc: 'From infinity pools to family swimming pools, we design and build stunning aquatic spaces that complement your home and lifestyle.',
      items: ['Pool Design', 'New Pool Construction', 'Pool Renovation', 'Infinity Pools', 'Lap Pools', 'Jacuzzi Installation', 'Pool Equipment', 'Pool Lighting'],
    },
    {
      cat: 'outdoor', img: '/services_8.jpg', href: '/services/exterior-renovation', badge: 'Outdoor',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      title: 'Pool Maintenance', short: 'Regular pool care and maintenance packages.',
      desc: 'Keep your pool sparkling clean and perfectly balanced year-round with our professional maintenance packages for residential and commercial pools.',
      items: ['Weekly Cleaning', 'Chemical Balancing', 'Filter Maintenance', 'Pump Servicing', 'Tile Cleaning', 'Leak Detection', 'Equipment Repair', 'Emergency Services'],
    },
    {
      cat: 'outdoor', img: '/services_9.jpg', href: '/services/technical#pergola', badge: 'Outdoor',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7"/><path d="M9 22V12h6v10"/><line x1="3" y1="22" x2="21" y2="22"/></svg>,
      title: 'Pergola & Shade', short: 'Beautiful pergolas and outdoor shade solutions.',
      desc: 'Enhance your outdoor living with custom-designed pergolas, louvered roofs, and shade structures that blend beauty with functionality.',
      items: ['Wooden Pergolas', 'Aluminum Pergolas', 'Louvered Roofs', 'Shade Sails', 'Outdoor Canopies', 'Retractable Awnings', 'Car Parking Shade', 'Pool Shade Structures'],
    },
    {
      cat: 'outdoor', img: '/services_17.jpg', href: '/services/exterior-renovation', badge: 'Outdoor',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12"/><path d="M12 6v6l4 2"/></svg>,
      title: 'Landscaping & Gardens', short: 'Lush landscape design and garden creation.',
      desc: 'Transform your outdoor spaces with professional landscaping — from garden design and turf installation to lighting and water features.',
      items: ['Garden Design', 'Turf & Grass', 'Irrigation Systems', 'Outdoor Lighting', 'Pathway Design', 'Water Features', 'Retaining Walls', 'Garden Maintenance'],
    },
    {
      cat: 'outdoor', img: '/services_10.jpg', href: '/services/technical#fencing', badge: 'Outdoor',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
      title: 'Fencing & Gates', short: 'Custom fencing and gate solutions.',
      desc: 'We design and install boundary fencing, automatic gates, and decorative railings that enhance security while adding to your property aesthetics.',
      items: ['Boundary Fencing', 'Automatic Gates', 'Wooden Fencing', 'Metal Railings', 'Pool Fencing', 'Security Barriers', 'Decorative Gates', 'Electric Gate Systems'],
    },
    {
      cat: 'technical', img: '/services_2.jpg', href: '/services/technical#electrical', badge: 'Technical',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
      title: 'Electrical Works', short: 'Certified electrical installation and maintenance.',
      desc: 'Our certified electricians handle all types of electrical works — from new installations and panel upgrades to smart home wiring and outdoor lighting.',
      items: ['Electrical Installation', 'Panel Upgrades', 'Lighting Design', 'Smart Home Wiring', 'CCTV & Security', 'Outdoor Lighting', 'Generator Connection', 'EV Charger Installation'],
    },
    {
      cat: 'technical', img: '/services_12.jpg', href: '/services/technical#ac', badge: 'Technical',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>,
      title: 'AC & Ducting', short: 'Professional AC installation, maintenance, and ducting.',
      desc: 'Stay cool year-round with our AC installation, maintenance, and ducting solutions. We work with all major brands for residential and commercial spaces.',
      items: ['AC Installation', 'Duct Fabrication', 'AC Maintenance', 'Ventilation Systems', 'Chiller Systems', 'Air Quality Solutions', 'AC Repair', 'Thermostat Installation'],
    },
    {
      cat: 'technical', img: '/services_13.jpg', href: '/services/technical#aluminum', badge: 'Technical',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      title: 'Aluminum Work', short: 'Custom aluminum fabrication and installation.',
      desc: 'From aluminum doors and windows to glass facades and curtain walling — we fabricate and install custom aluminum solutions for modern buildings.',
      items: ['Aluminum Doors & Windows', 'Glass Facades', 'Curtain Walling', 'Aluminum Cladding', 'Skylights', 'Railings & Balustrades', 'Aluminum Partitions', 'Shop Fronts'],
    },
    {
      cat: 'technical', img: '/services_14.jpg', href: '/services/technical#civil', badge: 'Technical',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
      title: 'Civil Works', short: 'Structural and civil engineering works.',
      desc: 'Our civil works team handles foundations, blockwork, concrete structures, and all structural engineering requirements for your project.',
      items: ['Foundation Works', 'Blockwork & Masonry', 'Concrete Works', 'Demolition', 'Retaining Walls', 'Pavement & Tiling', 'Drainage Works', 'Structural Repairs'],
    },
    {
      cat: 'technical', img: '/services_15.jpg', href: '/services/technical', badge: 'Technical',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
      title: 'MEP Works', short: 'Mechanical, electrical, and plumbing solutions.',
      desc: 'Comprehensive MEP services covering all mechanical, electrical, and plumbing requirements for new builds, renovations, and commercial fit-outs.',
      items: ['Plumbing Installation', 'Drainage Systems', 'Fire Suppression', 'HVAC Systems', 'Electrical Systems', 'BMS Integration', 'Sprinkler Systems', 'Gas Works'],
    },
    {
      cat: 'plants', img: '/services_16.jpg', href: '/services/technical#irrigation', badge: 'Plants',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12C12 12 7 9 7 4a5 5 0 0 1 10 0c0 5-5 8-5 8z"/><path d="M12 12C12 12 17 9 17 4"/></svg>,
      title: 'Indoor Plants', short: 'Premium indoor plants for homes and offices.',
      desc: 'Bring nature indoors with our wide selection of premium indoor plants. We supply, install, and maintain indoor greenery for homes and offices.',
      items: ['Tropical Plants', 'Succulents & Cacti', 'Office Plants', 'Air Purifying Plants', 'Hanging Plants', 'Bonsai Trees', 'Plant Pots & Planters', 'Plant Maintenance'],
    },
    {
      cat: 'plants', img: '/services_18.jpg', href: '/services/technical#irrigation', badge: 'Plants',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/></svg>,
      title: 'Outdoor Plants & Trees', short: 'Garden plants, trees, and shrubs for outdoor spaces.',
      desc: 'Transform your garden with our extensive range of outdoor plants, flowering shrubs, shade trees, and palms — sourced fresh and delivered to your door.',
      items: ['Palm Trees', 'Shade Trees', 'Flowering Shrubs', 'Hedge Plants', 'Fruit Trees', 'Ground Cover Plants', 'Garden Shrubs', 'Seasonal Flowers'],
    },
    {
      cat: 'plants', img: '/services_19.jpg', href: '/services/technical#irrigation', badge: 'Plants',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
      title: 'Irrigation Systems', short: 'Automated irrigation for gardens and landscapes.',
      desc: 'Keep your garden green with our smart irrigation systems — from drip lines and sprinklers to fully automated watering schedules.',
      items: ['Drip Irrigation', 'Sprinkler Systems', 'Smart Controllers', 'Soaker Hoses', 'Timer Systems', 'Irrigation Repair', 'Water-Saving Systems', 'Fertigation Systems'],
    },
  ];

  const filtered = activeTab === 'all' ? services : services.filter(s => s.cat === activeTab);

  const faqs = [
    { q: 'Do you offer free site visits and quotations?', a: 'Yes! We offer completely free site visits and detailed quotations with no obligation. Contact us to schedule your visit.' },
    { q: 'How long does a typical renovation take?', a: 'Timelines vary by scope. A bathroom renovation takes 1-2 weeks, a full villa renovation 4-12 weeks. We provide a detailed timeline before starting.' },
    { q: 'Are you licensed and insured in Dubai?', a: 'Yes, All Care Technical Services is fully licensed with Dubai Municipality and carries comprehensive insurance for all our projects.' },
    { q: 'Do you provide warranty on your work?', a: 'All our work comes with a workmanship warranty. Specific periods vary by service — ask your project manager for details.' },
    { q: 'Can you handle large commercial projects?', a: 'Yes, we handle projects of all sizes — from single-room renovations to full commercial fit-outs and multi-villa developments.' },
    { q: 'Do you supply materials or do we need to provide them?', a: 'We handle full supply and installation, or work with client-supplied materials. We recommend our supply option for quality assurance and better pricing.' },
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
        .nav-links-list { display: flex; align-items: center; gap: 0.1rem; list-style: none; }
        .nav-links-list li a { font-size: 13.5px; font-weight: 500; color: #333; text-decoration: none; padding: 7px 13px; border-radius: 6px; transition: background 0.2s, color 0.2s; display: block; }
        .nav-links-list li a:hover { background: rgba(155,193,76,0.1); color: var(--green-dark); }
        .nav-links-list li a.active { color: var(--green-dark); font-weight: 600; background: rgba(155,193,76,0.08); }
        .nav-cta-btn { background: var(--green-light); color: #fff !important; padding: 9px 20px !important; border-radius: 8px !important; font-weight: 600 !important; }
        .nav-cta-btn:hover { background: var(--green-dark) !important; }
        .mega-wrap { position: relative; }
        .mega-trigger { font-size: 13.5px; font-weight: 500; color: #333; padding: 7px 13px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; white-space: nowrap; }
        .mega-trigger:hover { background: rgba(155,193,76,0.1); color: var(--green-dark); }
        .mega-panel { position: absolute; top: calc(100% + 4px); left: 50%; transform: translateX(-50%); background: #fff; border-radius: 14px; box-shadow: 0 16px 50px rgba(0,0,0,0.12); border: 1px solid var(--border); width: 660px; padding: 1.25rem; z-index: 300; display: grid; grid-template-columns: repeat(3,1fr); gap: 4px; }
        .mega-link { display: flex; align-items: center; gap: 8px; padding: 8px 10px; border-radius: 8px; font-size: 12.5px; color: #333; text-decoration: none; transition: background 0.15s; }
        .mega-link:hover { background: rgba(155,193,76,0.08); color: var(--green-dark); }
        .mega-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green-light); flex-shrink: 0; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; flex-shrink: 0; }
        .hamburger span { display: block; width: 24px; height: 2px; background: #333; border-radius: 2px; }
        .mobile-nav { display: none; flex-direction: column; background: var(--white); padding: 0.75rem 1.5rem 1.5rem; border-top: 1px solid var(--border); max-height: 80vh; overflow-y: auto; }
        .mobile-nav.open { display: flex; }
        .mobile-nav a { font-size: 14px; font-weight: 500; color: #333; text-decoration: none; padding: 9px 0; border-bottom: 1px solid #f0f0f0; }
        .mobile-nav a:hover { color: var(--green-dark); }
        .mob-cta { margin-top: 12px; background: var(--green-light); color: #fff !important; text-align: center; padding: 13px; border-radius: 9px; font-weight: 600; border-bottom: none !important; }

        /* HERO — with services_1.jpg background image */
        .hero { position: relative; height: clamp(540px, 78vh, 820px); overflow: hidden; display: flex; align-items: center; }
        .hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,18,5,0.88) 0%, rgba(10,18,5,0.65) 55%, rgba(10,18,5,0.35) 100%); }
        .hero-overlay2 { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.2) 100%); }
        .hero-inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; width: 100%; padding: 0 clamp(1.5rem,6vw,6rem); }
        .hero-badge { display: inline-flex; align-items: center; gap: 7px; background: rgba(155,193,76,0.18); border: 1px solid rgba(155,193,76,0.4); color: #c8e88a; font-size: 11px; font-weight: 600; padding: 5px 14px; border-radius: 100px; margin-bottom: 1.25rem; letter-spacing: 0.07em; text-transform: uppercase; }
        .hero-dot { width: 6px; height: 6px; background: var(--green-light); border-radius: 50%; animation: pulse 2s infinite; flex-shrink: 0; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.2rem,4.5vw,3.8rem); font-weight: 700; color: #fff; line-height: 1.1; margin-bottom: 0.85rem; max-width: 640px; }
        .hero h1 em { color: #c8e88a; font-style: normal; }
        .hero-divider { width: 50px; height: 2px; background: var(--green-light); border-radius: 2px; margin-bottom: 1rem; }
        .hero p { font-size: 15px; color: rgba(255,255,255,0.78); line-height: 1.8; margin-bottom: 2rem; max-width: 520px; }
        .hero-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; margin-bottom: 3rem; }
        .btn-green { background: var(--green-light); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, transform 0.15s; }
        .btn-green:hover { background: var(--green-dark); transform: translateY(-2px); }
        .btn-outline-w { background: rgba(255,255,255,0.1); backdrop-filter: blur(8px); color: #fff; padding: 13px 24px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(255,255,255,0.35); transition: background 0.2s; }
        .btn-outline-w:hover { background: rgba(255,255,255,0.18); }
        .hero-stats-bar { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(255,255,255,0.96); backdrop-filter: blur(12px); border-top: 2px solid rgba(155,193,76,0.2); display: flex; z-index: 2; }
        .hstat { flex: 1; padding: 1.1rem 1rem; text-align: center; border-right: 1px solid rgba(155,193,76,0.1); }
        .hstat:last-child { border-right: none; }
        .hstat-num { font-family: 'Cormorant Garamond', serif; font-size: 1.7rem; font-weight: 700; color: var(--green-dark); line-height: 1; }
        .hstat-lbl { font-size: 10.5px; color: var(--muted); margin-top: 3px; text-transform: uppercase; letter-spacing: 0.04em; }

        /* BREADCRUMB */
        .breadcrumb-bar { background: var(--off-white); border-bottom: 1px solid var(--border); padding: 0.75rem 1.5rem; }
        .breadcrumb-inner { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; gap: 8px; }
        .breadcrumb-inner a { font-size: 12.5px; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .breadcrumb-inner a:hover { color: var(--green-dark); }
        .breadcrumb-inner span { color: rgba(0,0,0,0.3); font-size: 11px; }
        .breadcrumb-inner strong { font-size: 12.5px; color: var(--green-dark); font-weight: 600; }

        /* FILTER */
        .filter-bar { background: var(--white); padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); position: sticky; top: 70px; z-index: 99; }
        .filter-inner { max-width: 1280px; margin: 0 auto; display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; }
        .filter-btn { padding: 8px 20px; border-radius: 100px; border: 1.5px solid var(--border); background: transparent; font-size: 13px; font-weight: 500; color: var(--muted); cursor: pointer; font-family: inherit; transition: all 0.2s; white-space: nowrap; }
        .filter-btn:hover { border-color: var(--green-light); color: var(--green-dark); }
        .filter-btn.active { background: var(--green-light); border-color: var(--green-light); color: #fff; font-weight: 600; }

        /* SERVICES */
        .svc-section { padding: clamp(3rem,6vw,5rem) 1.5rem; background: var(--off-white); }
        .svc-inner { max-width: 1280px; margin: 0 auto; }
        .svc-header { text-align: center; margin-bottom: 2.5rem; }
        .section-tag { display: inline-block; font-size: 11px; font-weight: 600; color: var(--green-dark); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; padding: 4px 12px; background: rgba(122,158,48,0.1); border-radius: 100px; border: 1px solid rgba(122,158,48,0.25); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #1a1a1a; line-height: 1.15; margin-bottom: 0.75rem; }
        .section-sub { font-size: 15px; color: var(--muted); max-width: 540px; line-height: 1.7; margin: 0 auto; }
        .svc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(330px,1fr)); gap: 1.5rem; }
        .svc-card { background: var(--white); border: 1px solid rgba(155,193,76,0.15); border-radius: 18px; overflow: hidden; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; display: flex; flex-direction: column; }
        .svc-card:hover { transform: translateY(-5px); box-shadow: 0 24px 60px rgba(90,122,30,0.12); border-color: rgba(155,193,76,0.3); }
        .svc-img-wrap { position: relative; width: 100%; height: 210px; overflow: hidden; background: linear-gradient(135deg, var(--green-deeper) 0%, #4a7a18 100%); }
        .svc-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; display: block; }
        .svc-card:hover .svc-img-wrap img { transform: scale(1.05); }
        .svc-img-ph { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.3); }
        .svc-img-badge { position: absolute; top: 1rem; left: 1rem; background: var(--green-light); color: #fff; font-size: 10.5px; font-weight: 600; padding: 4px 11px; border-radius: 100px; letter-spacing: 0.04em; text-transform: uppercase; }
        .svc-body { padding: 1.6rem; display: flex; flex-direction: column; flex: 1; }
        .svc-icon-row { display: flex; align-items: center; gap: 12px; margin-bottom: 0.9rem; }
        .svc-icon-wrap { width: 50px; height: 50px; background: rgba(155,193,76,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--green-dark); }
        .svc-title-group h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 700; color: #1a1a1a; margin-bottom: 2px; }
        .svc-title-group p { font-size: 12px; color: var(--green-dark); font-weight: 500; }
        .svc-desc { font-size: 13px; color: var(--muted); line-height: 1.7; margin-bottom: 1.1rem; }
        .svc-items { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 5px 10px; margin-bottom: 1.25rem; flex: 1; }
        .svc-items li { font-size: 12px; color: #444; display: flex; align-items: center; gap: 6px; }
        .svc-items li::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--green-light); flex-shrink: 0; }
        .svc-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid rgba(155,193,76,0.12); margin-top: auto; }
        .svc-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--green-dark); text-decoration: none; padding: 9px 18px; border: 1.5px solid var(--green-light); border-radius: 8px; transition: background 0.2s, color 0.2s; }
        .svc-link:hover { background: var(--green-light); color: #fff; }
        .svc-wa { display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; background: rgba(37,211,102,0.1); border-radius: 8px; color: #25D366; transition: background 0.2s; text-decoration: none; }
        .svc-wa:hover { background: #25D366; color: #fff; }

        /* BANNER 1 */
        .banner1 { position: relative; height: clamp(360px,48vw,540px); overflow: hidden; display: flex; align-items: center; }
        .banner1 img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .banner1-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(10,18,5,0.9) 0%, rgba(10,18,5,0.6) 55%, rgba(10,18,5,0.1) 100%); }
        .banner1-content { position: relative; padding: 0 clamp(1.5rem,6vw,6rem); max-width: 600px; }
        .banner1-content .section-tag { color: #c8e88a; background: rgba(155,193,76,0.2); border-color: rgba(155,193,76,0.35); }
        .banner1-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.9rem,4.5vw,3.2rem); font-weight: 700; color: #fff; line-height: 1.1; margin-bottom: 0.9rem; }
        .banner1-content p { font-size: 14.5px; color: rgba(255,255,255,0.82); line-height: 1.75; margin-bottom: 1.75rem; max-width: 450px; }
        .banner-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; }
        .btn-white { background: #fff; color: var(--green-deeper); padding: 12px 24px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s, box-shadow 0.15s; }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }

        /* BANNER 2 */
        .banner2 { position: relative; height: clamp(360px,48vw,540px); overflow: hidden; display: flex; align-items: center; justify-content: flex-end; }
        .banner2 img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .banner2-overlay { position: absolute; inset: 0; background: linear-gradient(to left, rgba(10,18,5,0.9) 0%, rgba(10,18,5,0.6) 55%, rgba(10,18,5,0.1) 100%); }
        .banner2-content { position: relative; padding: 0 clamp(1.5rem,6vw,6rem); max-width: 600px; text-align: right; }
        .banner2-content .section-tag { color: #c8e88a; background: rgba(155,193,76,0.2); border-color: rgba(155,193,76,0.35); }
        .banner2-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.9rem,4.5vw,3.2rem); font-weight: 700; color: #fff; line-height: 1.1; margin-bottom: 0.9rem; }
        .banner2-content p { font-size: 14.5px; color: rgba(255,255,255,0.82); line-height: 1.75; margin-bottom: 1.75rem; }
        .banner2-btns { display: flex; gap: 0.85rem; flex-wrap: wrap; justify-content: flex-end; }

        /* PROCESS */
        .process-section { background: var(--white); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .process-inner { max-width: 1100px; margin: 0 auto; }
        .process-header { text-align: center; margin-bottom: 2.5rem; }
        .process-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap: 1.25rem; }
        .process-step { text-align: center; padding: 2rem 1.25rem; background: var(--off-white); border-radius: 16px; border: 1px solid var(--border); }
        .step-num { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 700; color: rgba(155,193,76,0.15); line-height: 1; margin-bottom: 0.5rem; }
        .step-icon-box { width: 58px; height: 58px; background: var(--green-light); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; }
        .process-step h4 { font-size: 15px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; }
        .process-step p { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* WHY US */
        .whyus-section { background: var(--green-light); padding: clamp(3rem,6vw,5rem) 1.5rem; }
        .whyus-inner { max-width: 1280px; margin: 0 auto; }
        .whyus-header { margin-bottom: 2.5rem; }
        .whyus-section .section-tag { color: var(--green-deeper); background: rgba(255,255,255,0.25); border-color: rgba(255,255,255,0.35); }
        .whyus-section .section-title { color: #fff; }
        .whyus-section .section-sub { color: rgba(255,255,255,0.82); margin: 0; }
        .whyus-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: 1.25rem; }
        .why-card { background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.22); border-radius: 14px; padding: 1.75rem; transition: background 0.2s; }
        .why-card:hover { background: rgba(255,255,255,0.22); }
        .why-icon-box { width: 52px; height: 52px; background: rgba(255,255,255,0.22); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; color: #fff; }
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

        @media (max-width: 1100px) { .mega-panel { width: 500px; grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 900px) {
          .nav-links-list { display: none; } .hamburger { display: flex; }
          .footer-main { grid-template-columns: 1fr 1fr; } .footer-brand { grid-column: 1 / -1; }
          .svc-grid { grid-template-columns: 1fr; }
          .banner2-content { text-align: left; }
          .banner2-overlay { background: linear-gradient(to right, rgba(10,18,5,0.9) 0%, rgba(10,18,5,0.6) 55%, rgba(10,18,5,0.1) 100%); }
          .banner2 { justify-content: flex-start; }
          .banner2-btns { justify-content: flex-start; }
        }
        @media (max-width: 600px) {
          .topbar-left { display: none; } .topbar { justify-content: center; font-size: 11px; }
          .hero-stats-bar { flex-wrap: wrap; } .hstat { min-width: 50%; border-bottom: 1px solid rgba(155,193,76,0.1); }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .process-steps { grid-template-columns: 1fr 1fr; }
          .svc-items { grid-template-columns: 1fr; }
          .filter-bar { top: 0; }
        }
        @media (max-width: 480px) {
          .hero-btns, .cta-btns, .banner-btns, .banner2-btns { flex-direction: column; align-items: stretch; }
          .btn-green, .btn-outline-w, .btn-white, .btn-cta-w, .btn-cta-g { justify-content: center; }
          .process-steps { grid-template-columns: 1fr; } .footer-main { grid-template-columns: 1fr; }
        }
        @media (max-width: 380px) { .logo-text .sub { display: none; } }
      `}</style>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-left">
          <span className="topbar-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Dubai, UAE</span>
          <span className="topbar-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Mon–Sat: 8am–8pm</span>
        </div>
        <div className="topbar-right">
          <a href="tel:+971559747416"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>+971 55 974 7416</a>
          <a href="mailto:Info@allcaretechnicalservices.ae"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>Info@allcaretechnicalservices.ae</a>
        </div>
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/logo.jpg" alt="All Care Technical Services" />
            <div className="logo-text"><span className="name">All Care Technical</span><span className="sub">Services · Dubai</span></div>
          </a>
          <ul className="nav-links-list">
            <li><a href="/">Home</a></li>
            <li className="mega-wrap"
              onMouseEnter={e => e.currentTarget.querySelector('.mega-panel').style.display='grid'}
              onMouseLeave={e => e.currentTarget.querySelector('.mega-panel').style.display='none'}>
              <span className="mega-trigger">Services ▾</span>
              <div className="mega-panel" style={{display:'none'}}>
                {megaLinks.map(s => <a key={s.label} href={s.href} className="mega-link"><span className="mega-dot"/>{s.label}</a>)}
              </div>
            </li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/process">Our Process</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="tel:+971559747416" className="nav-cta-btn">Call Now</a></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(v=>!v)} aria-label="Menu"><span/><span/><span/></button>
        </div>
        <div className={`mobile-nav ${menuOpen?'open':''}`}>
          <a href="/">Home</a>
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

      {/* ✅ HERO — services_1.jpg as background */}
      <section className="hero">
        <img src="/services_1.jpg" alt="All Care Technical Services Dubai" className="hero-bg" />
        <div className="hero-overlay"/>
        <div className="hero-overlay2"/>
        <div className="hero-inner">
          <div className="hero-badge"><div className="hero-dot"/> Dubai&apos;s Complete Renovation &amp; Technical Services</div>
          <h1>Everything Your Property Needs —<br/><em>Under One Roof</em></h1>
          <div className="hero-divider"/>
          <p>From interior renovation and pool construction to electrical works, AC ducting, aluminum fabrication, and plant supply — 20+ expert services delivered across Dubai.</p>
          <div className="hero-btns">
            <a href="#svc-grid" className="btn-green">
              Explore All Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="/contact" className="btn-outline-w">Get Free Quote</a>
          </div>
        </div>
        <div className="hero-stats-bar">
          {[{num:'20+',lbl:'Services'},{num:'500+',lbl:'Projects Done'},{num:'10+',lbl:'Years Exp.'},{num:'4.9★',lbl:'Client Rating'},{num:'24/7',lbl:'Support'}].map(s=>(
            <div className="hstat" key={s.lbl}>
              <div className="hstat-num">{s.num}</div>
              <div className="hstat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="breadcrumb-bar">
        <div className="breadcrumb-inner">
          <a href="/">Home</a><span>›</span><strong>Our Services</strong>
        </div>
      </div>

      {/* FILTER */}
      <div className="filter-bar">
        <div className="filter-inner">
          {categories.map(c=>(
            <button key={c.id} className={`filter-btn ${activeTab===c.id?'active':''}`} onClick={()=>setActiveTab(c.id)}>{c.label}</button>
          ))}
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="svc-section" id="svc-grid">
        <div className="svc-inner">
          <div className="svc-header">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">{activeTab==='all'?'All Our Services':categories.find(c=>c.id===activeTab)?.label}</h2>
            <p className="section-sub">Professional services delivered by expert teams across Dubai — on time, on budget, to the highest standards.</p>
          </div>
          <div className="svc-grid">
            {filtered.map(s=>(
              <div className="svc-card" key={s.title}>
                <div className="svc-img-wrap">
                  <img src={s.img} alt={s.title} onError={e=>{e.currentTarget.style.display='none';e.currentTarget.nextElementSibling.style.display='flex';}}/>
                  <div className="svc-img-ph" style={{display:'none'}}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>
                  <span className="svc-img-badge">{s.badge}</span>
                </div>
                <div className="svc-body">
                  <div className="svc-icon-row">
                    <div className="svc-icon-wrap">{s.icon}</div>
                    <div className="svc-title-group"><h3>{s.title}</h3><p>{s.short}</p></div>
                  </div>
                  <p className="svc-desc">{s.desc}</p>
                  <ul className="svc-items">{s.items.map(item=><li key={item}>{item}</li>)}</ul>
                  <div className="svc-footer">
                    <a href={s.href} className="svc-link">Learn More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                    <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="svc-wa" aria-label="WhatsApp">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER 1 — Pool */}
      <div className="banner1">
        <img src="/pool6.webp" alt="Pool and Landscape Dubai"/>
        <div className="banner1-overlay"/>
        <div className="banner1-content">
          <span className="section-tag">Pool &amp; Landscape</span>
          <h2>Create Your Dream Outdoor Space</h2>
          <p>From luxurious infinity pools to beautifully landscaped gardens — we design and build outdoor spaces that inspire every day.</p>
          <div className="banner-btns">
            <a href="/contact" className="btn-white">Get Free Quote <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            <a href="/services/exterior-renovation" className="btn-outline-w">Pool Services</a>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <section className="process-section">
        <div className="process-inner">
          <div className="process-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Our Simple 5-Step Process</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>From first call to final handover — smooth, stress-free, and on time.</p>
          </div>
          <div className="process-steps">
            {[
              {n:'01',icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>,title:'Free Consultation',desc:'Call or WhatsApp. We understand your needs and guide you to the right solution.'},
              {n:'02',icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,title:'Site Visit & Survey',desc:'Our team visits your site, assesses scope, and provides a detailed quote.'},
              {n:'03',icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,title:'Proposal & Agreement',desc:'Full proposal with timeline, materials, and pricing for your approval.'},
              {n:'04',icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,title:'Expert Execution',desc:'Our skilled team executes with highest standards, on time and on budget.'},
              {n:'05',icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,title:'Handover & Support',desc:'Final walkthrough, full handover, and ongoing after-care support.'},
            ].map(p=>(
              <div className="process-step" key={p.n}>
                <div className="step-num">{p.n}</div>
                <div className="step-icon-box">{p.icon}</div>
                <h4>{p.title}</h4><p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER 2 — Interior */}
      <div className="banner2">
        <img src="/Interior7.jpg" alt="Interior Renovation Dubai"/>
        <div className="banner2-overlay"/>
        <div className="banner2-content">
          <span className="section-tag">Interior Renovation</span>
          <h2>Transform Every Room Into Something Extraordinary</h2>
          <p>Premium interiors crafted with precision — from false ceilings and custom cabinetry to full villa fit-outs across Dubai.</p>
          <div className="banner2-btns">
            <a href="/contact" className="btn-white">Start Your Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            <a href="/services/interior-renovation" className="btn-outline-w">Interior Services</a>
          </div>
        </div>
      </div>

      {/* WHY US */}
      <section className="whyus-section">
        <div className="whyus-inner">
          <div className="whyus-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">The All Care Difference</h2>
            <p className="section-sub">We go beyond construction — lasting relationships and exceptional spaces.</p>
          </div>
          <div className="whyus-grid">
            {[
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,title:'Expert Team',desc:'Skilled professionals with years of experience in Dubai construction.'},
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,title:'Premium Quality',desc:'Finest materials and finishes, meeting all UAE building standards.'},
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,title:'On-Time Delivery',desc:'We respect your timeline and deliver every project on schedule.'},
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,title:'Transparent Pricing',desc:'No hidden costs. Clear quotations and budget-friendly options.'},
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,title:'Warranty Backed',desc:'All work comes with workmanship warranty for peace of mind.'},
              {icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>,title:'24/7 Support',desc:'Available round the clock for emergencies and queries.'},
            ].map(w=>(
              <div className="why-card" key={w.title}><div className="why-icon-box">{w.icon}</div><h4>{w.title}</h4><p>{w.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Everything you need to know before starting your project with us.</p>
          </div>
          <div className="faq-list">{faqs.map((f,i)=><FaqItem key={i} q={f.q} a={f.a}/>)}</div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <h2>Ready to Start Your Project?</h2>
        <p>Contact us today for a free consultation and quotation — no obligation.</p>
        <div className="cta-btns">
          <a href="tel:+971559747416" className="btn-cta-w"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>+971 55 974 7416</a>
          <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="btn-cta-g"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>WhatsApp Us</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="logo"><img src="/logo.jpg" alt="All Care Technical Services"/><div className="logo-text"><span className="name" style={{color:'#fff'}}>All Care Technical</span><span className="sub" style={{color:'rgba(255,255,255,0.5)'}}>Services · Dubai</span></div></a>
            <p>Your trusted renovation and technical services partner in Dubai. Quality, integrity, and excellence on every project.</p>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://www.instagram.com/allcaretechnical" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://www.tiktok.com/@all.care.technica" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/></svg></a>
              <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg></a>
            </div>
          </div>
          <div className="footer-col"><h4>Renovation</h4><ul><li><a href="/services/interior-renovation">Interior Renovation</a></li><li><a href="/services/exterior-renovation">Exterior Renovation</a></li><li><a href="/services/turnkey">Turnkey Solutions</a></li><li><a href="/services/technical#waterproofing">Waterproofing</a></li><li><a href="/services/technical">Flooring & Tiling</a></li></ul></div>
          <div className="footer-col"><h4>Technical</h4><ul><li><a href="/services/technical#electrical">Electrical Works</a></li><li><a href="/services/technical#ac">AC & Ducting</a></li><li><a href="/services/technical#aluminum">Aluminum Work</a></li><li><a href="/services/exterior-renovation">Pool Construction</a></li><li><a href="/services/exterior-renovation">Landscaping</a></li></ul></div>
          <div className="footer-col"><h4>Company</h4><ul><li><a href="/">Home</a></li><li><a href="/about">About Us</a></li><li><a href="/process">Our Process</a></li><li><a href="/contact">Contact Us</a></li><li><a href="tel:+971559747416">+971 55 974 7416</a></li></ul></div>
        </div>
        <div className="footer-bottom"><span>© 2025 All Care Technical Services LLC. All rights reserved.</span><span>Made with care in Dubai</span></div>
      </footer>

      <a href="tel:+971559747416" className="float-call" aria-label="Call Us"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg></a>
      <a href="https://wa.me/971559747416" className="float-wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg></a>
    </>
  );
}
