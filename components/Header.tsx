"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageProvider";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.services, href: "#services" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-[#050912]/90 backdrop-blur-xl border-b border-line"
            : "border-b border-transparent"
          }`}
      >
        <div className="max-w-shell mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group shrink-0" aria-label="Duchel Decarte home">
            <span className="w-9 h-9 rounded-lg border border-blue/50 overflow-hidden bg-[#02050a] grid place-items-center transition-transform group-hover:scale-105">
              <img
                src="/images/WhatsApp_Image_2026-09-04_at_17.15.38.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </span>
            <span className="font-display font-bold text-[15px] tracking-[0.17em]">
              DECARTE<span className="text-cyan">.</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 ml-10" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] relative transition-colors duration-200 ${activeSection === item.href.slice(1)
                    ? "text-text"
                    : "text-muted hover:text-text"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-cyan transition-all duration-300 ${activeSection === item.href.slice(1) ? "w-full" : "w-0"
                    }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            {/* Language switcher */}
            <div className="flex items-center bg-[#0d1829] border border-line rounded-md overflow-hidden">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1.5 text-[11px] font-semibold transition-colors ${lang === "en" ? "bg-blue text-white" : "text-muted hover:text-text"
                  }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className={`px-2.5 py-1.5 text-[11px] font-semibold transition-colors ${lang === "fr" ? "bg-blue text-white" : "text-muted hover:text-text"
                  }`}
                aria-label="Switch to French"
              >
                FR
              </button>
            </div>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center text-[13px] border border-line px-4 py-2.5 rounded-md hover:border-blue hover:bg-blue/10 transition-colors duration-200"
            >
              {t.nav.cta} <span className="text-cyan ml-2">↗</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`w-5 h-px bg-text transition-all ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`w-5 h-px bg-text transition-all ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed top-[72px] left-3 right-3 z-40 lg:hidden transition-all duration-300 ${menuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
          }`}
      >
        <nav className="bg-[#0a1220]/97 border border-line rounded-xl p-2 backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`block px-4 py-3.5 text-[15px] border-b border-line/50 last:border-0 transition-colors ${activeSection === item.href.slice(1) ? "text-cyan" : "text-muted"
                }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="block px-4 py-3.5 text-[15px] text-blue font-medium"
          >
            {t.nav.cta} ↗
          </a>
        </nav>
      </div>
    </>
  );
}
