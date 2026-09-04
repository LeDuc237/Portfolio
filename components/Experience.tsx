"use client";

import { useLang } from "@/lib/LanguageProvider";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="section-divider py-24 md:py-32">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="grid grid-cols-[42px_1fr] md:grid-cols-[110px_1fr] gap-3 md:gap-6 mb-14 md:mb-16 reveal">
          <span className="font-display font-medium text-[13px] text-cyan pt-2.5">{t.experience.num}</span>
          <div>
            <div className="flex items-center gap-3 text-cyan text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="w-7 h-px bg-cyan" />
              {t.experience.eyebrow}
            </div>
            <h2 className="font-display font-semibold text-[32px] md:text-[58px] leading-[1.08] tracking-[-0.04em] mt-5">
              {t.experience.title1}
              <br />
              <span className="gradient-text">{t.experience.title2}</span>
            </h2>
          </div>
        </div>

        <div className="md:ml-[132px] border-l border-line">
          {t.experience.items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[80px_30px_1fr] md:grid-cols-[150px_30px_1fr] gap-3 md:gap-5 pb-12 md:pb-14 last:pb-0 -ml-1.5 reveal"
            >
              <div className="text-[11px] md:text-[12px] text-muted pt-1">{item.date}</div>
              <div
                className={`w-3 h-3 rounded-full border-2 bg-ink mt-1 ${
                  i === t.experience.items.length - 1
                    ? "border-cyan shadow-[0_0_0_6px_#050912,0_0_15px_#15c7e7]"
                    : "border-blue shadow-[0_0_0_6px_#050912]"
                }`}
              />
              <div>
                <h3 className="font-display font-semibold text-[16px] md:text-[19px] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-[13px] md:text-[14px] max-w-[530px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
