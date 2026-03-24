import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Media", to: "/media" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link className="navbar__brand" to="/">
        <img className="navbar__logo" src="/seeflix.png" alt="Seeflix logo" width="32" height="32" />
        <span>Seeflix</span>
      </Link>
      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.to} className={location.pathname === link.to ? "active" : ""}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
