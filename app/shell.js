"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "../src/components/Header.jsx";
import Menu from "../src/components/Menu.jsx";
import { SiteProvider } from "../src/site.jsx";

function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    function scrollToTarget() {
      const hash = window.location.hash;
      if (hash) {
        const node = document.querySelector(hash);
        if (node) {
          node.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo(0, 0);
    }

    scrollToTarget();
    window.addEventListener("hashchange", scrollToTarget);
    return () => window.removeEventListener("hashchange", scrollToTarget);
  }, [pathname]);

  return null;
}

export default function Shell({ children }) {
  return (
    <SiteProvider>
      <ScrollReset />
      <Header />
      <Menu />
      {children}
    </SiteProvider>
  );
}
