import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer__brand">Seeflix</div>
        <p>© {new Date().getFullYear()} Seeflix. All rights reserved.</p>
      </div>
      <div className="footer__links">
        <Link to="/">Home</Link>
        <Link to="/media">Media</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}
