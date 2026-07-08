import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "@/lib/portfolio-data";

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 200);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-4 z-50 hidden justify-center px-4 md:flex"
        >
          <nav
            className={`glass flex items-center gap-1 rounded-full py-2 pl-4 pr-2 transition-shadow duration-500 ${
              scrolled ? "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : ""
            }`}
          >
           <a href="#home" className="mr-2 hidden sm:block">
  <img
    src="/naghul_pfp.jpg"
    alt="Naghul Adhithya"
    className="h-9 w-9 rounded-full object-cover ring-1 ring-border"
  />
</a>
            <ul className="flex items-center gap-0.5">
              {sections.map((s) => (
                <li key={s.id} className="relative">
                  <a
                    href={`#${s.id}`}
                    className={`relative z-10 block rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                      active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s.label}
                  </a>
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 320, damping: 30, mass: 0.8 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
