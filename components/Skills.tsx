"use client";

import { useLang } from "@/lib/LanguageProvider";

const skillItems: Record<string, Record<string, string[]>> = {
  en: {
    Frontend: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3"],
    "Backend & data": ["Supabase", "PostgreSQL", "PHP", "Python", "REST APIs", "Stripe"],
    Infrastructure: ["Docker", "VPS", "Railway", "Cloudinary", "Netlify", "Git / GitHub"],
    "AI & workflow": ["AI-assisted development", "Rapid prototyping", "PWA / Offline-first", "IndexedDB"],
  },
  fr: {
    Frontend: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3"],
    "Backend & données": ["Supabase", "PostgreSQL", "PHP", "Python", "REST APIs", "Stripe"],
    Infrastructure: ["Docker", "VPS", "Railway", "Cloudinary", "Netlify", "Git / GitHub"],
    "IA & productivité": ["Dév. assisté par IA", "Prototypage rapide", "PWA / Offline-first", "IndexedDB"],
  },
};

export default function Skills() {
  const { t, lang } = useLang();

  const allItems = t.skills.groups.flatMap((g) => {
    const items = lang === "fr"
      ? skillItems.fr[g.label as keyof typeof skillItems.fr] || skillItems.en[g.label as keyof typeof skillItems.en] || []
      : skillItems.en[g.label as keyof typeof skillItems.en] || [];
    return items.map((item) => ({ item, group: g.label }));
  });

  return (
    <section id="skills" className="section-divider py-24 md:py-32">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="grid grid-cols-[42px_1fr] md:grid-cols-[110px_1fr] gap-3 md:gap-6 mb-14 md:mb-16 reveal">
          <span className="font-display font-medium text-[13px] text-cyan pt-2.5">{t.skills.num}</span>
          <div>
            <div className="flex items-center gap-3 text-cyan text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="w-7 h-px bg-cyan" />
              {t.skills.eyebrow}
            </div>
            <h2 className="font-display font-semibold text-[32px] md:text-[58px] leading-[1.08] tracking-[-0.04em] mt-5">
              {t.skills.title1}
              <br />
              <span className="gradient-text">{t.skills.title2}</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-28 md:ml-[132px]">
          <div className="reveal">
            <p className="text-muted text-[15px] mb-10">{t.skills.summary}</p>
            <div className="space-y-0">
              {t.skills.groups.map((group) => (
                <div
                  key={group.number}
                  className="flex justify-between items-center py-3.5 border-t border-line text-[12px] text-text"
                >
                  <span>{group.label}</span>
                  <span className="text-cyan">{group.number}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1 flex flex-wrap gap-3 content-start">
            {allItems.map((tech, i) => {
              const featured = ["React", "TypeScript", "Supabase", "PWA"].some((f) =>
                tech.item.includes(f)
              );
              return (
                <span
                  key={i}
                  className={`font-display text-[13px] px-4 py-3 bg-panel border rounded-md transition-all duration-200 hover:-translate-y-1 ${
                    featured
                      ? "text-text border-[#2d6eb0] bg-blue/10"
                      : "text-muted border-line hover:text-text hover:border-cyan"
                  }`}
                >
                  {tech.item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
