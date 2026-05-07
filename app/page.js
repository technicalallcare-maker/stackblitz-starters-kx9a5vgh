// app/page.tsx  (or pages/index.tsx)

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #f0f2ed;
          color: #1a1a1a;
          min-height: 100vh;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(240, 242, 237, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(155, 193, 76, 0.18);
          padding: 0 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-area img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          border-radius: 8px;
          background: #fff;
          padding: 3px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .logo-name {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: -0.01em;
        }

        .logo-tagline {
          font-size: 11px;
          font-weight: 400;
          color: #6b7164;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }

        .nav-links li a {
          font-size: 14px;
          font-weight: 400;
          color: #4a4f42;
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-links li a:hover { color: #7a9e30; }

        .nav-cta {
          background: #9BC14C;
          color: #fff !important;
          padding: 8px 18px;
          border-radius: 8px;
          font-weight: 500 !important;
          font-size: 13px !important;
          transition: background 0.2s !important;
        }

        .nav-cta:hover { background: #7a9e30 !important; }

        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6rem 2rem 5rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(155,193,76,0.12);
          border: 1px solid rgba(155,193,76,0.35);
          color: #5a7a1e;
          font-size: 12px;
          font-weight: 500;
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 2rem;
          letter-spacing: 0.03em;
          animation: fadeUp 0.5s ease both;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #9BC14C;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          font-weight: 700;
          line-height: 1.08;
          color: #111;
          letter-spacing: -0.02em;
          max-width: 700px;
          margin-bottom: 1.5rem;
          animation: fadeUp 0.5s 0.1s ease both;
        }

        .hero h1 span { color: #9BC14C; }

        .subtitle {
          font-size: 17px;
          color: #5a6050;
          max-width: 500px;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          animation: fadeUp 0.5s 0.2s ease both;
        }

        .cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeUp 0.5s 0.3s ease both;
        }

        .btn-primary {
          background: #9BC14C;
          color: #fff;
          padding: 13px 26px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, transform 0.15s;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        .btn-primary:hover { background: #7a9e30; transform: translateY(-1px); }

        .btn-secondary {
          background: transparent;
          color: #3a4030;
          padding: 13px 22px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          border: 1.5px solid rgba(60,65,50,0.25);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: border-color 0.2s, color 0.2s;
        }

        .btn-secondary:hover { border-color: #9BC14C; color: #5a7a1e; }

        .divider-area {
          padding: 0 2.5rem;
          margin-bottom: 3rem;
          animation: fadeUp 0.5s 0.4s ease both;
        }

        .divider-line {
          border: none;
          border-top: 1px solid rgba(60,65,50,0.12);
          margin-bottom: 2rem;
        }

        .service-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 12px;
        }

        .service-card {
          background: #fff;
          border: 1px solid rgba(60,65,50,0.08);
          border-radius: 14px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: border-color 0.2s, transform 0.15s;
        }

        .service-card:hover {
          border-color: rgba(155,193,76,0.4);
          transform: translateY(-2px);
        }

        .service-icon {
          width: 36px;
          height: 36px;
          background: rgba(155,193,76,0.1);
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7a9e30;
        }

        .service-label {
          font-size: 13px;
          font-weight: 500;
          color: #1a1a1a;
          line-height: 1.3;
        }

        .service-desc {
          font-size: 12px;
          color: #7a8070;
          line-height: 1.5;
        }

        .coming-soon-bar {
          background: #111;
          color: #eee;
          text-align: center;
          padding: 1rem;
          font-size: 13px;
          letter-spacing: 0.02em;
        }

        .coming-soon-bar span { color: #9BC14C; font-weight: 500; }

        footer {
          padding: 1.25rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(60,65,50,0.1);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .footer-copy { font-size: 12px; color: #8a9080; }

        .footer-contact {
          font-size: 12px;
          color: #5a7a1e;
          text-decoration: none;
          font-weight: 500;
        }

        .footer-contact:hover { text-decoration: underline; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="logo-area">
          <img src="/logo.jpg" alt="All Care Technical Services" />
          <div className="logo-text">
            <span className="logo-name">All Care Technical</span>
            <span className="logo-tagline">Services · Dubai</span>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="tel:+971559747416" className="nav-cta">
              📞 Call Us
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="badge">
          <div className="badge-dot" />
          New site launching soon
        </div>
        <h1>
          We&apos;re building
          <br />
          something <span>great</span>.
        </h1>
        <p className="subtitle">
          All Care Technical Services is leveling up. Our new website is on its
          way — in the meantime, reach out and we&apos;ll take care of you
          directly.
        </p>
        <div className="cta-group">
          <a href="tel:+971559747416" className="btn-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.77 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.22a16 16 0 0 0 5.87 5.87l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z" />
            </svg>
            +971 55 974 7416
          </a>
          <a href="mailto:technicalallcare@gmail.com" className="btn-secondary">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            technicalallcare@gmail.com
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <div className="divider-area">
        <hr className="divider-line" />
        <div className="service-row">
          <div className="service-card">
            <div className="service-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <span className="service-label">Technical Maintenance</span>
            <span className="service-desc">Equipment upkeep &amp; repairs</span>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <span className="service-label">IT &amp; Systems</span>
            <span className="service-desc">Network, servers &amp; support</span>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="service-label">Electrical Works</span>
            <span className="service-desc">
              Installations &amp; safety checks
            </span>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <span className="service-label">24/7 Support</span>
            <span className="service-desc">Round-the-clock assistance</span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="coming-soon-bar">
        Full website <span>coming soon</span> — contact us at +971 55 974 7416
        or technicalallcare@gmail.com
      </div>

      {/* FOOTER */}
      <footer>
        <span className="footer-copy">
          © 2025 All Care Technical Services. All rights reserved.
        </span>
        <a href="mailto:technicalallcare@gmail.com" className="footer-contact">
          technicalallcare@gmail.com
        </a>
      </footer>
    </>
  );
}
