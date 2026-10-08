"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { menuLinks } from "../data.js";
import { useSite } from "../site.jsx";

export default function Menu() {
  const { menuOpen, setMenuOpen } = useSite();
  const pathname = usePathname();
  const listRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  useEffect(() => {
    const root = listRef.current;
    if (!root || !menuOpen) return undefined;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return undefined;

    const cleanups = [];
    root.querySelectorAll("li").forEach((item) => {
      const image = item.querySelector(".menu-preview");
      if (!image) return;
      gsap.set(image, { xPercent: 0, yPercent: -50, autoAlpha: 0 });
      const setX = gsap.quickTo(image, "x", { duration: 0.45, ease: "power3" });
      const setY = gsap.quickTo(image, "y", { duration: 0.45, ease: "power3" });
      const place = (event) => {
        const gap = 200;
        const width = image.offsetWidth || 280;
        const roomOnRight = event.clientX + gap + width <= window.innerWidth - 16;
        const x = roomOnRight ? event.clientX + gap : event.clientX - gap - width;
        return { x, y: event.clientY };
      };
      const align = (event, jump) => {
        const { x, y } = place(event);
        if (jump) {
          setX(x, x);
          setY(y, y);
        } else {
          setX(x);
          setY(y);
        }
      };
      const startFollow = () => document.addEventListener("mousemove", align);
      const stopFollow = () => document.removeEventListener("mousemove", align);
      const fade = gsap.to(image, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "power1.out",
        paused: true,
        onReverseComplete: stopFollow,
      });
      const onEnter = (event) => {
        fade.play();
        startFollow();
        align(event, true);
      };
      const onLeave = () => fade.reverse();
      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("mouseleave", onLeave);
        stopFollow();
        fade.kill();
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [menuOpen]);

  return (
    <nav className={`menu${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
      <ul ref={listRef}>
        {menuLinks.map((link) => {
          const active = link.to === "/" ? pathname === "/" : pathname === link.to || pathname.startsWith(`${link.to}/`);
          return (
            <li key={link.to}>
              <img className="menu-preview" src={link.image} alt="" />
              <Link href={link.to} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
