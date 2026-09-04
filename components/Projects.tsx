"use client";

import { useLang } from "@/lib/LanguageProvider";

const projectImages: Record<string, string> = {
  MARKET: "/assets/merket.png",
  FOROMAMED: "/assets/foromamed.png",
  YourChemLab: "/assets/yourchemlab.png",
  GeoCasa: "/assets/54.png",
  ORTHOMEDICAL: "/assets/orthomedical.png",
  "Blend Hair": "/assets/blendair.png",
  "Ingénuim Elect": "/assets/ingeniumelect.png",
};

const projectLinks: Record<string, string | null> = {
  MARKET: "https://geocasaone.netlify.app", // Replace with actual URL
  FOROMAMED: "https://foromamed.com",
  YourChemLab: "https://yourchemlab.com",
  GeoCasa: null,
  ORTHOMEDICAL: "https://orthomedical237.com",
  "Blend Hair": null,
  "Ingénuim Elect": "https://ingenuimelect.fr",
};

const projectStatuses: Record<string, "live" | "private"> = {
  MARKET: "live",
  FOROMAMED: "live",
  YourChemLab: "live",
  GeoCasa: "private",
  ORTHOMEDICAL: "live",
  "Blend Hair": "live",
  "Ingénuim Elect": "live",
};

const projectTags: Record<string, string[]> = {
  MARKET: ["Next.js", "PostgreSQL", "Docker", "AWS", "PWA"],
  FOROMAMED: ["React", "TypeScript", "Supabase"],
  YourChemLab: ["React", "Vite"],
  GeoCasa: ["React", "IndexedDB", "Supabase"],
  ORTHOMEDICAL: ["Next.js", "PostgreSQL"],
  "Blend Hair": ["React", "TypeScript", "Stripe"],
  "Ingénuim Elect": ["React", "Tailwind"],
};

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="section-divider py-24 md:py-32">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12 md:mb-14 reveal">
          <div>
            <div className="flex items-center gap-3 text-cyan text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="w-7 h-px bg-cyan" />
              {t.projects.eyebrow}
            </div>
            <h2 className="font-display font-semibold text-[32px] md:text-[58px] leading-[1.08] tracking-[-0.04em] mt-5">
              {t.projects.title1}
              <br />
              <span className="gradient-text">{t.projects.title2}</span>
            </h2>
          </div>
          <p className="text-muted text-[14px] max-w-[220px]">{t.projects.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {t.projects.items.map((project, i) => {
            // Determine if this is the MARKET project (should be first)
            const isMarket = project.name === "MARKET";
            const image = projectImages[project.name] || "/assets/foromamed.png";
            const link = projectLinks[project.name] ?? null;
            const status = projectStatuses[project.name] || "live";
            const tags = projectTags[project.name] || [];

            // MARKET takes full width, all others are normal columns
            const isFullWidth = isMarket;

            // Only apply delay for non-full-width items
            const delayClass = !isFullWidth && i % 2 === 0 ? "reveal-delay-1" : "";

            return (
              <article
                key={project.name}
                className={`group bg-panel border border-line rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2b6097] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] reveal ${isFullWidth ? "md:col-span-2" : ""
                  } ${delayClass}`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-panel-2 ${isFullWidth ? "h-[280px] md:h-[380px]" : "h-[200px] md:h-[230px]"
                    }`}
                >
                  <img
                    src={image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top saturate-[0.75] transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
                  />
                  <span
                    className={`absolute top-4 right-4 text-[10px] uppercase font-bold tracking-[0.08em] px-2.5 py-1.5 rounded ${status === "live"
                      ? "bg-green text-[#07100a]"
                      : "bg-panel border border-line text-muted"
                      }`}
                  >
                    {status === "live" ? t.projects.live : t.projects.private}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex justify-between gap-4 mb-3">
                    <div>
                      <span className="text-cyan text-[10px] uppercase tracking-[0.1em]">
                        {project.type}
                      </span>
                      <h3 className="font-display font-semibold text-[22px] md:text-[24px] mt-2">
                        {project.name}
                      </h3>
                    </div>
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener"
                        aria-label={`${t.projects.visit} ${project.name}`}
                        className="text-[26px] text-cyan hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200 shrink-0"
                      >
                        ↗
                      </a>
                    ) : (
                      <span className="text-[26px] text-muted/40 shrink-0">↗</span>
                    )}
                  </div>

                  <p className="text-muted text-[13px] md:text-[14px] mb-4">
                    {project.description}
                  </p>

                  {/* Problem solved */}
                  <div className="mb-4 pl-3 border-l-2 border-cyan/30">
                    <p className="text-[12px] text-muted/90 italic">{project.problem}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] text-cyan/80 border border-cyan/20 bg-cyan/5 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted border border-line px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mt-7 reveal">
          <span className="text-muted text-[13px]">{t.projects.more}</span>
          <a
            href="https://github.com/leduc237"
            target="_blank"
            rel="noopener"
            className="text-[13px] text-text border-b border-line pb-1.5 hover:border-cyan hover:text-cyan transition-colors"
          >
            {t.projects.viewGithub} <span className="text-cyan">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}