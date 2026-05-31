import Link from "next/link";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container inner">
        <div className="logo">Your Logo</div>

        <div className="links">
          <nav className="nav-link">
            <Link href="/" className="nav-link">
              Contact
            </Link>
          </nav>
          <nav className="nav-link">
            <Link href="/" className="nav-link">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
