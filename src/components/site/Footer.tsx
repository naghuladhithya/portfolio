import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {profile.name} <span className="text-foreground/40">© 2026</span>
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Designed &amp; Built with intent
        </p>
      </div>
    </footer>
  );
}
