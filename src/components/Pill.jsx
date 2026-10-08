import { Link } from "react-router-dom";

export function PillLink({ to, children, solid = false, onClick }) {
  const className = solid ? "pill pill-solid" : "pill";
  if (to) {
    return (
      <Link className={className} to={to} onClick={onClick}>
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
