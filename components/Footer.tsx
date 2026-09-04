"use client";

import { useLang } from "@/lib/LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-line">
      <div className="max-w-shell mx-auto px-5 md:px-8 py-7 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-muted text-[11px]">
        <a href="#home" className="flex items-center gap-3 group" aria-label="Duchel Decarte home">
          <span className="w-8 h-8 rounded-lg border border-blue/50 overflow-hidden bg-[#02050a] grid place-items-center transition-transform group-hover:scale-105">
            <img
              src="/images/WhatsApp_Image_2026-09-04_at_17.15.38.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </span>
          <span className="font-display font-bold text-[14px] tracking-[0.17em]">
            DUCHEL<span className="text-cyan">.</span>
          </span>
        </a>
        <p>{t.footer.copyright}</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/leduc237"
            target="_blank"
            rel="noopener"
            className="hover:text-cyan transition-colors"
          >
            {t.footer.github} ↗
          </a>
          <a
            href="https://www.linkedin.com/in/duchel-decarte"
            target="_blank"
            rel="noopener"
            className="hover:text-cyan transition-colors"
          >
            {t.footer.linkedin} ↗
          </a>
          <a href="tel:+237651203488" className="hover:text-cyan transition-colors">
            {t.footer.phone} ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
