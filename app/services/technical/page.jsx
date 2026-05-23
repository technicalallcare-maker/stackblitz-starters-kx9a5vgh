'use client';
import { useState } from 'react';

export default function TechnicalServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const servicesList = [
    { id: 'aluminum', label: 'Aluminum Work' },
    { id: 'pergola', label: 'Pergola & Shade' },
    { id: 'electrical', label: 'Electrical Work' },
    { id: 'ac', label: 'AC & Ducting' },
    { id: 'fencing', label: 'Fencing & Gates' },
    { id: 'waterproofing', label: 'Waterproofing' },
    { id: 'flooring', label: 'Flooring & Tiling' },
    { id: 'painting', label: 'Painting & Finishing' },
    { id: 'mep', label: 'MEP Works' },
    { id: 'irrigation', label: 'Irrigation Systems' },
    { id: 'lighting', label: 'Outdoor Lighting' },
    { id: 'civil', label: 'Civil Works' },
  ];

  const allServices = [
    {
      id: 'aluminum',
      title: 'Aluminum Work',
      tagline: 'Custom Aluminum Fabrication & Installation',
      desc: 'From aluminum doors and windows to glass facades and curtain walling - we fabricate and install custom aluminum solutions for modern buildings across Dubai. Our aluminum division uses premium-grade materials that are built to withstand harsh weather while delivering a sleek, contemporary look.',
      features: ['Aluminum Doors & Windows', 'Glass Facades', 'Curtain Walling', 'Aluminum Cladding', 'Skylights & Roof Lights', 'Railings & Balustrades', 'Aluminum Partitions', 'Shop Fronts'],
      img: '/aluminum1.jpg',
      highlight: 'We work with leading aluminum systems including Schuco, Technal, and Reynaers for premium quality and durability.',
      stats: [{ n: '200+', l: 'Aluminum Projects' }, { n: '10+', l: 'Years Experience' }, { n: '100%', l: 'Custom Made' }],
    },
    {
      id: 'pergola',
      title: 'Pergola & Shade Structures',
      tagline: 'Beautiful Outdoor Living Spaces',
      desc: 'Enhance your outdoor living with custom-designed pergolas, louvered roofs, and shade structures. We build structures that blend beauty with functionality - providing protection from the sun while creating stunning outdoor spaces for your home or commercial property.',
      features: ['Wooden Pergolas', 'Aluminum Pergolas', 'Louvered Roof Systems', 'Shade Sails', 'Retractable Awnings', 'Car Parking Shades', 'Pool Shade Structures', 'Outdoor Canopies'],
      img: '/pergola1.jpg',
      highlight: 'Our motorized louvered roof systems allow you to control sunlight and ventilation with the touch of a button.',
      stats: [{ n: '150+', l: 'Shade Projects' }, { n: 'Custom', l: 'Designs' }, { n: '5yr', l: 'Warranty' }],
    },
    {
      id: 'electrical',
      title: 'Electrical Works',
      tagline: 'Certified Electrical Installation & Maintenance',
      desc: 'Our certified electricians handle all types of electrical works across Dubai - from new installations and panel upgrades to smart home wiring, outdoor lighting, and emergency repairs. We follow all DEWA regulations and use only approved materials for complete safety and compliance.',
      features: ['Electrical Installation', 'DB Panel Upgrades', 'Smart Home Wiring', 'CCTV & Security Systems', 'Outdoor Lighting', 'Generator Connection', 'EV Charger Installation', 'Emergency Repairs'],
      img: '/electrical1.jpg',
      highlight: 'All our electricians are DEWA-certified and follow strict safety protocols on every project.',
      stats: [{ n: '300+', l: 'Electrical Jobs' }, { n: 'DEWA', l: 'Certified' }, { n: '24/7', l: 'Emergency' }],
    },
    {
      id: 'ac',
      title: 'AC & Ducting',
      tagline: 'Professional AC Installation, Maintenance & Ducting',
      desc: 'Stay cool year-round with our comprehensive AC and ducting solutions. We install, maintain, and repair all types of air conditioning systems - from split units and central AC to VRF systems and industrial HVAC. Our duct fabrication team delivers custom solutions for optimal airflow.',
      features: ['AC Installation', 'Duct Fabrication', 'AC Maintenance & Repair', 'Ventilation Systems', 'Chiller Systems', 'Air Quality Solutions', 'Thermostat Installation', 'AC Cleaning & Sanitization'],
      img: '/ac1.jpg',
      highlight: 'We work with all major AC brands including Daikin, Carrier, Trane, and Mitsubishi for reliable cooling.',
      stats: [{ n: '400+', l: 'AC Projects' }, { n: 'All Brands', l: 'Supported' }, { n: 'AMC', l: 'Available' }],
    },
    {
      id: 'fencing',
      title: 'Fencing & Gates',
      tagline: 'Custom Fencing & Automatic Gate Solutions',
      desc: 'Secure and beautify your property with our custom fencing, automatic gates, and decorative railings. We design and install boundary solutions that enhance security while adding to your property aesthetics - from sleek modern designs to classic ornamental styles.',
      features: ['Automatic Gates', 'Boundary Fencing', 'Metal Railings', 'Wooden Fencing', 'Pool Fencing', 'Glass Balustrades', 'Security Barriers', 'Electric Gate Motors'],
      img: '/fencing1.jpg',
      highlight: 'Our automatic gate systems include remote control, intercom integration, and safety sensors as standard.',
      stats: [{ n: '180+', l: 'Gate Projects' }, { n: 'Smart', l: 'Access Control' }, { n: '3yr', l: 'Motor Warranty' }],
    },
    {
      id: 'waterproofing',
      title: 'Waterproofing',
      tagline: 'Expert Waterproofing for Complete Protection',
      desc: 'Protect your property from water damage with our certified waterproofing solutions. We use premium membranes, coatings, and injection techniques to seal roofs, terraces, basements, bathrooms, and swimming pools - ensuring lasting protection against moisture and leaks.',
      features: ['Roof Waterproofing', 'Terrace Waterproofing', 'Basement Waterproofing', 'Bathroom Sealing', 'Swimming Pool Waterproofing', 'Foundation Protection', 'Expansion Joint Sealing', 'Leak Detection & Repair'],
      img: '/waterproof1.jpg',
      highlight: 'We use internationally certified waterproofing systems from Sika, Fosroc, and BASF for guaranteed results.',
      stats: [{ n: '250+', l: 'Waterproofing Jobs' }, { n: '10yr', l: 'Guarantee' }, { n: '0%', l: 'Leak Rate' }],
    },
    {
      id: 'flooring',
      title: 'Flooring & Tiling',
      tagline: 'Premium Flooring Solutions for Every Space',
      desc: 'From luxurious marble and porcelain tiles to engineered wood and vinyl flooring - we install and finish all types of flooring with expert precision. Our team handles both residential and commercial projects, delivering flawless results that transform any space from the ground up.',
      features: ['Marble & Granite', 'Porcelain Tiles', 'Engineered Wood', 'Vinyl & SPC Flooring', 'Epoxy Flooring', 'Herringbone & Patterns', 'Outdoor Tiles', 'Floor Polishing & Restoration'],
      img: '/flooring1.jpg',
      highlight: 'We source premium tiles and stone from Italy, Spain, India, and Turkey for the finest selection.',
      stats: [{ n: '350+', l: 'Flooring Projects' }, { n: 'All Types', l: 'Materials' }, { n: 'Precision', l: 'Installation' }],
    },
    {
      id: 'painting',
      title: 'Painting & Finishing',
      tagline: 'High-Quality Painting & Surface Finishing',
      desc: 'Our professional painting team delivers flawless, lasting finishes for interior and exterior surfaces. From standard emulsion and texture painting to designer wallpaper and decorative finishes - we prepare every surface meticulously before applying premium paints and coatings.',
      features: ['Interior Painting', 'Exterior Painting', 'Texture Painting', 'Wallpaper Installation', 'Wood Staining & Lacquer', 'Anti-Mold Treatment', 'Epoxy Coatings', 'Decorative Finishes'],
      img: '/painting1.jpg',
      highlight: 'We use premium paints from Jotun, Dulux, and National Paints with full color consultation included.',
      stats: [{ n: '400+', l: 'Paint Projects' }, { n: 'Premium', l: 'Brands Only' }, { n: 'Free', l: 'Color Consult' }],
    },
    {
      id: 'mep',
      title: 'MEP Works',
      tagline: 'Mechanical, Electrical & Plumbing Solutions',
      desc: 'Comprehensive MEP services covering all mechanical, electrical, and plumbing requirements for new builds, renovations, and commercial fit-outs. We design, install, and maintain complete MEP systems that are efficient, code-compliant, and built to last.',
      features: ['Plumbing Installation', 'Drainage Systems', 'Fire Suppression & Alarms', 'HVAC Systems', 'Electrical Distribution', 'BMS Integration', 'Sprinkler Systems', 'Gas Works & Piping'],
      img: '/mep1.jpg',
      highlight: 'Our MEP team handles everything in-house - no subcontracting means better quality control and coordination.',
      stats: [{ n: '200+', l: 'MEP Projects' }, { n: 'In-House', l: 'All Trades' }, { n: 'Code', l: 'Compliant' }],
    },
    {
      id: 'irrigation',
      title: 'Irrigation Systems',
      tagline: 'Smart Irrigation for Lush Green Landscapes',
      desc: 'Keep your garden green and healthy with our smart irrigation systems. We design, install, and maintain automated watering solutions - from drip irrigation and sprinklers to smart controllers and water-saving technologies that keep your landscape thriving in Dubai climate.',
      features: ['Drip Irrigation', 'Sprinkler Systems', 'Smart Controllers', 'Timer Systems', 'Soaker Hoses', 'Fertigation Systems', 'Water-Saving Solutions', 'Irrigation Repair & Maintenance'],
      img: '/irrigation1.jpg',
      highlight: 'Our smart irrigation controllers reduce water consumption by up to 40% while keeping your garden perfectly watered.',
      stats: [{ n: '120+', l: 'Irrigation Projects' }, { n: '40%', l: 'Water Saving' }, { n: 'Smart', l: 'Controllers' }],
    },
    {
      id: 'lighting',
      title: 'Outdoor Lighting',
      tagline: 'Transform Your Exterior After Dark',
      desc: 'Enhance your property with professional outdoor lighting solutions. From garden and pathway lights to facade uplighting and security lighting - we design and install systems that transform your outdoor spaces at night while improving safety and curb appeal.',
      features: ['Facade Uplighting', 'Garden Lighting', 'Pathway & Bollard Lights', 'Security Lighting', 'Landscape Spotlights', 'Pool Lighting', 'Smart Outdoor Lighting', 'Solar-Powered Options'],
      img: '/outdoor-lighting1.jpg',
      highlight: 'We offer energy-efficient LED solutions and smart lighting systems controllable from your phone.',
      stats: [{ n: '100+', l: 'Lighting Projects' }, { n: 'LED', l: 'Energy Efficient' }, { n: 'Smart', l: 'Control' }],
    },
    {
      id: 'civil',
      title: 'Civil Works',
      tagline: 'Structural & Civil Engineering Solutions',
      desc: 'Our civil works team handles foundations, blockwork, concrete structures, and all structural engineering requirements for residential and commercial projects. From demolition and excavation to retaining walls and structural repairs - we build the backbone of every project.',
      features: ['Foundation Works', 'Blockwork & Masonry', 'Concrete Works', 'Demolition & Excavation', 'Retaining Walls', 'Pavement & Interlocking', 'Drainage & Sewage', 'Structural Repairs'],
      img: '/civil1.jpg',
      highlight: 'All our civil works are supervised by qualified structural engineers and comply with Dubai Municipality standards.',
      stats: [{ n: '250+', l: 'Civil Projects' }, { n: 'Engineer', l: 'Supervised' }, { n: 'DM', l: 'Compliant' }],
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

        .hero { background: linear-gradient(135deg, var(--green-deeper) 0%, #4a7a18 60%, #2d5c08 100%); padding: clamp(3.5rem,7vw,6rem) 1.5rem; text-align: center; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BC14C' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        .hero-content { position: relative; max-width: 720px; margin: 0 auto; }
        .hero-badge { display: inline-flex; align-items: center; gap: 7px; background: rgba(155,193,76,0.18); border: 1px solid rgba(155,193,76,0.4); color: #c8e88a; font-size: 11px; font-weight: 600; padding: 5px 14px; border-radius: 100px; margin-bottom: 1.25rem; letter-spacing: 0.06em; text-transform: uppercase; }
        .hero-dot { width: 6px; height: 6px; background: var(--green-light); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.4rem,5.5vw,4.2rem); font-weight: 700; color: #fff; line-height: 1.08; margin-bottom: 1.25rem; }
        .hero h1 em { color: #c8e88a; font-style: normal; }
        .hero p { font-size: 16px; color: rgba(255,255,255,0.82); line-height: 1.8; margin-bottom: 2rem; max-width: 580px; margin-left: auto; margin-right: auto; }
        .hero-btns { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
        .btn-green { background: var(--green-light); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s, transform 0.15s; }
        .btn-green:hover { background: var(--green-dark); transform: translateY(-2px); }
        .btn-outline-w { background: rgba(255,255,255,0.1); color: #fff; padding: 13px 22px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid rgba(255,255,255,0.35); transition: background 0.2s; }
        .btn-outline-w:hover { background: rgba(255,255,255,0.18); }

        /* JUMP LINKS */
        .jump-bar { background: var(--white); padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border); position: sticky; top: 70px; z-index: 99; }
        .jump-inner { max-width: 1280px; margin: 0 auto; display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; }
        .jump-link { padding: 6px 14px; border-radius: 100px; border: 1.5px solid var(--border); background: transparent; font-size: 12px; font-weight: 500; color: var(--muted); cursor: pointer; font-family: inherit; transition: all 0.2s; white-space: nowrap; text-decoration: none; }
        .jump-link:hover { border-color: var(--green-light); color: var(--green-dark); background: rgba(155,193,76,0.06); }

        .section-tag { display: inline-block; font-size: 11px; font-weight: 600; color: var(--green-dark); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.75rem; padding: 4px 12px; background: rgba(122,158,48,0.1); border-radius: 100px; border: 1px solid rgba(122,158,48,0.25); }
        .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 700; color: #1a1a1a; line-height: 1.15; margin-bottom: 0.85rem; }

        /* SERVICE BLOCK */
        .svc-block { padding: clamp(3rem,6vw,5rem) 1.5rem; scroll-margin-top: 140px; }
        .svc-block:nth-child(odd) { background: var(--white); }
        .svc-block:nth-child(even) { background: var(--off-white); }
        .svc-block-inner { max-width: 1280px; margin: 0 auto; }

        /* SECTION 1 - INTRO */
        .svc-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-bottom: 3rem; }
        .svc-intro.reverse { direction: rtl; }
        .svc-intro.reverse > * { direction: ltr; }
        .svc-intro-content { display: flex; flex-direction: column; gap: 1rem; }
        .svc-intro-content h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,3.5vw,2.6rem); font-weight: 700; color: #1a1a1a; line-height: 1.12; }
        .svc-tagline { font-size: 14px; font-weight: 600; color: var(--green-dark); }
        .svc-intro-content p { font-size: 15px; color: var(--muted); line-height: 1.8; }
        .svc-img-wrap { border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; background: linear-gradient(135deg, var(--green-deeper), #4a7a18); position: relative; }
        .svc-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .svc-img-wrap:hover img { transform: scale(1.04); }
        .svc-img-label { position: absolute; top: 1rem; left: 1rem; background: var(--green-light); color: #fff; font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 100px; }
        .svc-img-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; color: rgba(255,255,255,0.3); }
        .svc-img-ph svg { opacity: 0.25; }
        .svc-img-ph span { font-size: 11px; }

        /* SECTION 2 - DETAILS */
        .svc-details { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .svc-features-card { background: var(--off-white); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; }
        .svc-block:nth-child(even) .svc-features-card { background: var(--white); }
        .svc-features-card h3 { font-size: 16px; font-weight: 600; color: #1a1a1a; margin-bottom: 1.25rem; }
        .svc-feat-list { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .svc-feat { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #444; }
        .svc-feat::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--green-light); flex-shrink: 0; }
        .svc-highlight-card { background: var(--green-deeper); border-radius: 16px; padding: 2rem; display: flex; flex-direction: column; justify-content: space-between; }
        .svc-highlight-card p { font-size: 15px; color: rgba(255,255,255,0.88); line-height: 1.8; margin-bottom: 1.5rem; }
        .svc-stats-row { display: flex; gap: 1.5rem; flex-wrap: wrap; }
        .svc-stat { text-align: center; }
        .svc-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 700; color: #c8e88a; line-height: 1; }
        .svc-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.6); margin-top: 3px; }
        .svc-quote-btn { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #fff; text-decoration: none; padding: 10px 20px; border: 1.5px solid rgba(255,255,255,0.35); border-radius: 8px; margin-top: 1rem; transition: background 0.2s; width: fit-content; }
        .svc-quote-btn:hover { background: rgba(255,255,255,0.12); }

        /* DIVIDER */
        .svc-divider { max-width: 1280px; margin: 0 auto; height: 1px; background: var(--border); }

        /* CTA */
        .cta-band { background: var(--green-light); padding: 3.5rem 1.5rem; text-align: center; }
        .cta-band h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,4vw,2.6rem); font-weight: 700; color: #fff; margin-bottom: 0.85rem; }
        .cta-band p { color: rgba(255,255,255,0.88); font-size: 15px; margin-bottom: 2rem; }
        .cta-btns { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
        .btn-cta-w { background: #fff; color: var(--green-deeper); padding: 13px 28px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.15s; }
        .btn-cta-w:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .btn-cta-g { background: var(--green-deeper); color: #fff; padding: 13px 26px; border-radius: 10px; font-size: 14px; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; }
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
        .float-call { position: fixed; left: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: var(--green-light); color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(90,122,30,0.35); transition: transform 0.2s; }
        .float-call:hover { transform: scale(1.1); }
        .float-wa { position: fixed; right: 1.25rem; bottom: 1.5rem; z-index: 500; width: 52px; height: 52px; border-radius: 50%; background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 6px 20px rgba(37,211,102,0.4); transition: transform 0.2s; }
        .float-wa:hover { transform: scale(1.1); }

        @media (max-width: 900px) {
          .nav-list { display: none; }
          .hamburger { display: flex; }
          .svc-intro { grid-template-columns: 1fr; gap: 1.5rem; }
          .svc-intro.reverse { direction: ltr; }
          .svc-details { grid-template-columns: 1fr; }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 600px) {
          .topbar-left { display: none; }
          .topbar { justify-content: center; }
          .svc-feat-list { grid-template-columns: 1fr; }
          .footer-main { grid-template-columns: 1fr 1fr; }
          .jump-bar { top: 0; }
        }
        @media (max-width: 480px) {
          .hero-btns, .cta-btns { flex-direction: column; align-items: center; }
          .btn-green, .btn-outline-w, .btn-cta-w, .btn-cta-g { width: 100%; justify-content: center; }
          .footer-main { grid-template-columns: 1fr; }
        }
        @media (max-width: 380px) { .logo-text .sub { display: none; } }
      `}</style>

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
          <div className="hero-badge"><div className="hero-dot" /> 12 Specialized Technical Services</div>
          <h1>Technical & Specialized Services Across <em>Dubai</em></h1>
          <p>From aluminum work and electrical installations to waterproofing, MEP, and civil works - expert technical services delivered with precision, quality, and reliability.</p>
          <div className="hero-btns">
            <a href="/#contact" className="btn-green">Get Free Quote <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            <a href="https://wa.me/971559747416" target="_blank" rel="noopener noreferrer" className="btn-outline-w"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* JUMP LINKS */}
      <div className="jump-bar">
        <div className="jump-inner">
          {servicesList.map(s => (
            <a href={`#${s.id}`} className="jump-link" key={s.id}>{s.label}</a>
          ))}
        </div>
      </div>

      {/* ALL SERVICES - 2 SECTIONS EACH */}
      {allServices.map((svc, idx) => (
        <section className="svc-block" id={svc.id} key={svc.id}>
          <div className="svc-block-inner">
            {/* SECTION 1 - INTRO */}
            <div className={`svc-intro ${idx % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="svc-intro-content">
                <span className="section-tag">{svc.title}</span>
                <p className="svc-tagline">{svc.tagline}</p>
                <h2>{svc.title}</h2>
                <p>{svc.desc}</p>
              </div>
              <div className="svc-img-wrap">
                <img src={svc.img} alt={svc.title} onError={e => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling.style.display='flex'; }} />
                <div className="svc-img-ph" style={{display:'none'}}>
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span>Image Coming Soon</span>
                </div>
                <span className="svc-img-label">{svc.title}</span>
              </div>
            </div>

            {/* SECTION 2 - FEATURES & STATS */}
            <div className="svc-details">
              <div className="svc-features-card">
                <h3>What We Offer</h3>
                <div className="svc-feat-list">
                  {svc.features.map(f => <span className="svc-feat" key={f}>{f}</span>)}
                </div>
              </div>
              <div className="svc-highlight-card">
                <div>
                  <p>{svc.highlight}</p>
                  <div className="svc-stats-row">
                    {svc.stats.map(st => (
                      <div className="svc-stat" key={st.l}>
                        <div className="svc-stat-num">{st.n}</div>
                        <div className="svc-stat-lbl">{st.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="/#contact" className="svc-quote-btn">Get a Quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="cta-band">
        <h2>Need Any of These Services?</h2>
        <p>One call is all it takes. Free consultation, site visit, and quotation at no cost.</p>
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
              <li><a href="/services/technical">Technical Services</a></li>
              <li><a href="/services">All Services</a></li>
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

      <a href="tel:+971559747416" className="float-call" aria-label="Call"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.58 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg></a>
      <a href="https://wa.me/971559747416" className="float-wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>
    </>
  );
}
