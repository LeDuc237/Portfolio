"use client";

import { useLang } from "@/lib/LanguageProvider";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-[760px] flex items-center pt-32 pb-20 md:pb-28"
    >
      <div className="max-w-shell mx-auto px-5 md:px-8 grid md:grid-cols-[1.08fr_0.92fr] gap-12 md:gap-16 items-center w-full">
        {/* Copy */}
        <div className="reveal">
          <div className="flex items-center gap-3 text-cyan text-[11px] font-semibold uppercase tracking-[0.14em]">
            <span className="w-7 h-px bg-cyan" />
            {t.hero.badge}
          </div>

          <h1 className="font-display font-semibold text-[42px] sm:text-[58px] md:text-[76px] leading-[1.05] tracking-[-0.045em] mt-7">
            {t.hero.title1}
            <br />
            <span className="gradient-text">{t.hero.title2}</span>
          </h1>

          <p className="text-muted text-base md:text-[17px] mt-6 max-w-[480px]">
            {t.hero.intro.split("Duchel Decarte").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <strong className="text-text font-medium">Duchel Decarte</strong>
                )}
              </span>
            ))}
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-9">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-[13px] font-semibold rounded-md bg-blue text-white shadow-[0_12px_30px_rgba(29,117,255,0.2)] hover:bg-blue-light hover:-translate-y-0.5 transition-all duration-250"
            >
              {t.hero.cta1} <span className="text-cyan">↗</span>
            </a>
            <a
              href="#contact"
              className="text-[13px] text-text border-b border-line pb-1.5 hover:border-cyan hover:text-cyan transition-colors"
            >
              {t.hero.cta2} <span className="text-cyan">→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 md:gap-9 mt-16">
            {[
              { n: t.hero.stat1n, l: t.hero.stat1l },
              { n: t.hero.stat2n, l: t.hero.stat2l },
              { n: t.hero.stat3n, l: t.hero.stat3l },
            ].map((s, i) => (
              <div
                key={i}
                className={`pr-6 md:pr-9 ${i < 2 ? "border-r border-line" : ""
                  }`}
              >
                <div className="font-display font-semibold text-[20px] md:text-[24px]">
                  {s.n}
                </div>
                <div className="text-[10px] uppercase tracking-[0.08em] text-muted leading-tight mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative h-[420px] md:h-[490px] grid place-items-center reveal reveal-delay-1 overflow-hidden">
          {/* Orbit rings */}
          <div className="absolute w-[440px] h-[180px] border border-blue/25 rounded-full -rotate-[24deg] orbit-spin" />
          <div className="absolute w-[370px] h-[520px] border border-cyan/10 rounded-full rotate-[35deg] orbit-spin-reverse" />

          {/* Main card */}
          <div className="relative w-[min(340px,80%)] aspect-[1/1.18] bg-gradient-to-br from-[#101e31] to-[#060b14] border border-[#29405f] rounded-[9px] shadow-[24px_25px_70px_rgba(0,0,0,0.45)] overflow-hidden">
            <div className="absolute inset-0 after:content-[''] after:absolute after:w-[280px] after:h-[280px] after:rounded-full after:right-[-150px] after:bottom-[-145px] after:bg-blue after:blur-[75px] after:opacity-30" />

            <div className="absolute top-5 left-5 right-5 flex items-center gap-2 text-muted text-[10px] uppercase tracking-[0.1em]">
              <span className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" />
              <span>{t.hero.cardStatus}</span>
              <span className="ml-auto text-[#4b6481]">{t.hero.cardNum}</span>
            </div>

            <div className="absolute top-[57px] bottom-[56px] left-[34px] right-[34px] grid place-items-center">
              <img
                src="/assets/profile.jpg"
                alt="Duchel Decarte logo"
                className="w-full h-full object-cover rounded opacity-90"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            <div className="absolute bottom-5 left-6 right-6 flex justify-between text-muted text-[10px] uppercase tracking-[0.16em]">
              <span>{t.hero.cardDev}</span>
              <span>{t.hero.cardDesign}</span>
              <span>{t.hero.cardSolver}</span>
            </div>
          </div>

          {/* Floating tags */}
          <div className="absolute top-[60px] right-0 bg-[#0a1220]/90 backdrop-blur-md border border-line px-3.5 py-2.5 rounded-md text-[11px] shadow-lg animate-float">
            {t.hero.tagReact} <span className="text-cyan ml-2">✦</span>
          </div>
          <div className="absolute bottom-[60px] left-0 bg-[#0a1220]/90 backdrop-blur-md border border-line px-3.5 py-2.5 rounded-md text-[11px] shadow-lg animate-float-slow">
            {t.hero.tagOffline} <span className="text-cyan ml-2">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
