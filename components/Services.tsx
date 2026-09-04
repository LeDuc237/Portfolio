"use client";

import { useLang } from "@/lib/LanguageProvider";

const icons: Record<string, string> = {
  globe: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.07 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  app: "M7 4V2h10v2h3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3zm0 2H4v14h16V6h-3v2H7V6h0zm2 0v2h6V6H9z",
  mobile: "M7 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm0 2v2h10V3H7zm0 4v12h10V7H7zm3 10h4v2h-4v-2z",
  code: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
  server: "M4 3h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 6h16V5H4v4zm0 4h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zm0 6h16v-4H4v4zm2-5v2h2v-2H6zm0-8v2h2V5H6z",
  wrench: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",
};

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="section-divider py-24 md:py-32">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="grid grid-cols-[42px_1fr] md:grid-cols-[110px_1fr] gap-3 md:gap-6 mb-14 md:mb-16 reveal">
          <span className="font-display font-medium text-[13px] text-cyan pt-2.5">{t.services.num}</span>
          <div>
            <div className="flex items-center gap-3 text-cyan text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="w-7 h-px bg-cyan" />
              {t.services.eyebrow}
            </div>
            <h2 className="font-display font-semibold text-[32px] md:text-[58px] leading-[1.08] tracking-[-0.04em] mt-5">
              {t.services.title1}
              <br />
              <span className="gradient-text">{t.services.title2}</span>
            </h2>
            <p className="text-muted text-[15px] mt-5 max-w-[480px]">{t.services.sub}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 md:ml-[132px]">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className={`group p-6 md:p-7 bg-panel border border-line rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#2b6097] hover:bg-[#0d1829] reveal reveal-delay-${
                (i % 3) + 1
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-blue/10 border border-blue/20 grid place-items-center mb-5 transition-colors group-hover:bg-blue/20 group-hover:border-blue/40">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#15c7e7"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={icons[service.icon] || icons.globe} />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-[17px] md:text-[18px] mb-2.5">
                {service.title}
              </h3>
              <p className="text-muted text-[13px] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
