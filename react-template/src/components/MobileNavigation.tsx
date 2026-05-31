"use client";

import Link from "next/link";
import "../styles/mobileNav.css";
// import Logo from "../common/Logo";

type MobileNavigationProps = {
  handleCloseMenu: () => void;
};

export default function MobileNavigation({
  handleCloseMenu,
}: MobileNavigationProps) {
  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu-backdrop" onClick={handleCloseMenu}></div>
      <div className="mobile-menu-panel">
        <button
          type="button"
          className="mobile-menu-close"
          onClick={handleCloseMenu}
          aria-label="Close navigation menu"
        >
          ✕
        </button>

        <nav className="mobile-menu-nav">
          {/* <Logo /> */}
          <Link href="/" className="mobile-nav-link" onClick={handleCloseMenu}>
            Home
          </Link>

          <Link
            href="/about"
            className="mobile-nav-link mobile-nav-button"
            onClick={handleCloseMenu}
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}
