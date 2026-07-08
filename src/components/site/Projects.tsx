import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Section } from "./Section";
import { Stagger, StaggerItem } from "./Reveal";

export function Projects() {
  return (
    <Section id="projects" eyebrow="04 — Selected Work" title="Projects & Research">
      <Stagger className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <StaggerItem key={p.title} className={i === 0 ? "md:col-span-2" : ""}>
            <article className="card-ring card-ring-hover group relative h-full overflow-hidden p-7 md:p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(600px circle at 30% 0%, oklch(0.7 0.15 245 / 0.08), transparent 60%)" }}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">{p.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
