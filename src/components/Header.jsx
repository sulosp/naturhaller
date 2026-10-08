"use client";

import { asset } from "../asset.js";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSite } from "../site.jsx";

export default function Header() {
  const { menuOpen, setMenuOpen, headerTone } = useSite();
  const router = useRouter();
  const pathname = usePathname();
  const tone = menuOpen ? "dark" : headerTone;

  function goHome(event) {
    event.preventDefault();
    setMenuOpen(false);
    if (pathname !== "/") router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className={`site-header tone-${tone}`}>
      <button
        className="menu-trigger"
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <span className="menu-close" aria-hidden="true" />
        ) : (
          <img src={asset("/assets/menu.svg")} alt="" width="50" height="50" />
        )}
        <span>MENU</span>
      </button>
      <Link className="logo" href="/" aria-label="Naturhotel Haller, home" onClick={goHome}>
        <img src={asset("/assets/logo.png")} alt="Haller Naturhotel" />
      </Link>
    </header>
  );
}
