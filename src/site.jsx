"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [season, setSeason] = useState("summer");
  const [headerTone, setHeaderTone] = useState("light");

  useEffect(() => {
    document.body.classList.toggle("menu-lock", menuOpen);
  }, [menuOpen]);

  const value = useMemo(
    () => ({
      menuOpen,
      setMenuOpen,
      season,
      setSeason,
      headerTone,
      setHeaderTone,
    }),
    [menuOpen, season, headerTone],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  return useContext(SiteContext);
}

export function useSnap(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;
    document.documentElement.classList.add("snap");
    return () => document.documentElement.classList.remove("snap");
  }, [enabled]);
}

export function useHeaderObserver(fallback = "dark") {
  const { setHeaderTone } = useSite();

  useEffect(() => {
    const nodes = [...document.querySelectorAll("[data-header]")];
    if (!nodes.length) {
      setHeaderTone(fallback);
      return undefined;
    }

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target, entry.intersectionRatio);
          else visible.delete(entry.target);
        });
        let best = null;
        let bestRatio = 0;
        visible.forEach((ratio, node) => {
          if (ratio >= bestRatio) {
            bestRatio = ratio;
            best = node;
          }
        });
        if (best) setHeaderTone(best.dataset.header);
      },
      { threshold: [0.35, 0.55, 0.75] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [fallback, setHeaderTone]);
}
