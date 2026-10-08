import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSite } from "../site.jsx";

export default function Header() {
  const { menuOpen, setMenuOpen, headerTone } = useSite();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const tone = menuOpen ? "dark" : headerTone;

  function goHome(event) {
    event.preventDefault();
    setMenuOpen(false);
    if (pathname !== "/") navigate("/");
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
          <img src="/assets/menu.svg" alt="" width="50" height="50" />
        )}
        <span>MENU</span>
      </button>
      <Link className="logo" to="/" aria-label="Naturhotel Haller, home" onClick={goHome}>
        <img src="/assets/logo.png" alt="Haller Naturhotel" />
      </Link>
    </header>
  );
}
