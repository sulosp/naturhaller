import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { menuLinks } from "../data.js";
import { useSite } from "../site.jsx";

export default function Menu() {
  const { menuOpen, setMenuOpen } = useSite();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, setMenuOpen]);

  return (
    <nav className={`menu${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
      <ul>
        {menuLinks.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
