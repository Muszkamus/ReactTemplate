"use client";

import Link from "next/link";
import "../styles/navbar.css";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        {isMenuOpen && <MobileNavigation handleCloseMenu={handleCloseMenu} />}

        <div className="container header-inner">
          <div className="brand">
            <Link href="/" onClick={handleCloseMenu}>
              Your Logo
            </Link>

            <div className="brand-text">
              <p className="brand-label">Title</p>
            </div>
          </div>

          <button
            type="button"
            className={`menu-toggle ${isMenuOpen ? "menu-toggle-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={handleToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`site-nav`}>
            <Link href="/" className="nav-link" onClick={handleCloseMenu}>
              Home
            </Link>

            <Link href="/about" className="nav-link" onClick={handleCloseMenu}>
              About
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
