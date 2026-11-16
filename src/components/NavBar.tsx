import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="wordmark" href="#hero" onClick={() => setMenuOpen(false)} aria-label="Khetesh Singh, home">
          <span className="wordmark-symbol" aria-hidden="true">k<span>.</span></span>
          <span>Khetesh Singh<span className="wordmark-caption">Engineer. Builder. Problem solver.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"} <span aria-hidden="true">{menuOpen ? "-" : "+"}</span>
        </button>
        <nav id="primary-navigation" className={`primary-navigation${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-resume" href="/resume.html" onClick={() => setMenuOpen(false)}>
            View resume <span aria-hidden="true">&#8599;</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
