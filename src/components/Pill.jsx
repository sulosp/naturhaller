"use client";

import Link from "next/link";

export function PillLink({ to, children, solid = false, onClick }) {
  const className = solid ? "pill pill-solid" : "pill";
  if (to) {
    return (
      <Link className={className} href={to} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
