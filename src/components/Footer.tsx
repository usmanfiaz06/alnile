"use client";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Quality & Certifications", href: "#quality" },
    { label: "Global Reach", href: "#global" },
    { label: "Gallery", href: "#gallery" },
  ],
  services: [
    { label: "Frozen Fish", href: "#products" },
    { label: "Shellfish & Crustaceans", href: "#products" },
    { label: "Premium Fillets", href: "#products" },
    { label: "Specialty Products", href: "#products" },
    { label: "Custom Orders", href: "#contact" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Partnership", href: "#partnership" },
    { label: "Export Inquiries", href: "#contact" },
    { label: "Careers", href: "#contact" },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-950 relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="relative block w-full h-[30px] md:h-[40px] lg:h-[60px]"
        >
          <path
            d="M0,20 C360,50 720,5 1080,25 C1260,35 1380,15 1440,20 L1440,60 L0,60 Z"
            fill="#F8F6F0"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-8">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="url(#footerLogoGrad)" strokeWidth="1.5" />
                  <path d="M12 20C12 20 16 14 24 14C28 14 30 17 30 20C30 23 28 26 24 26C16 26 12 20 12 20Z" fill="url(#footerLogoGrad)" />
                  <path d="M10 16C10 16 12 20 10 24C12 22 14 20 12 20C14 20 12 18 10 16Z" fill="url(#footerLogoGrad)" />
                  <circle cx="26" cy="19.5" r="1.5" fill="#050B14" />
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="40" y2="40">
                      <stop offset="0%" stopColor="#C5A572" />
                      <stop offset="100%" stopColor="#E0C78F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span className="text-lg font-display font-bold text-white">Al Nile</span>
                <span className="text-[10px] font-body font-medium tracking-[0.3em] uppercase text-gold-400 block leading-tight">
                  Fish
                </span>
              </div>
            </div>

            <p className="text-white/40 font-body text-sm leading-relaxed max-w-sm mb-6">
              Premium frozen seafood from the heart of the Middle East to the world.
              Over four decades of excellence in sourcing, processing, and delivering
              the finest seafood products. Now expanding across Russia and beyond.
            </p>

            {/* Certifications */}
            <div className="flex items-center gap-4">
              {["HACCP", "ISO 22000", "EU", "GMP"].map((cert) => (
                <div
                  key={cert}
                  className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-body font-medium text-white/30 tracking-wider"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-body text-white/40 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm tracking-wide">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-body text-white/40 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm tracking-wide">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-body text-white/40 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-white/30">
            &copy; {new Date().getFullYear()} Al Nile Fish Import & Export. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs font-body text-white/30 hover:text-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs font-body text-white/30 hover:text-gold-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs font-body text-white/30 hover:text-gold-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <BackToTop />
    </footer>
  );
}

function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gold-500/90 text-navy-950 shadow-lg shadow-gold-500/25 hover:bg-gold-400 hover:shadow-gold-500/40 transition-all duration-300 flex items-center justify-center z-40 hover:scale-110"
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 16V4M4 10L10 4L16 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
