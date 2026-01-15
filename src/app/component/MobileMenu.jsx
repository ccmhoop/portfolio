import { Link } from "react-router";
import { HiSun, HiMoon } from "react-icons/hi";

export default function MobileMenu({ isOpen, closeMenu, location, theme, toggleTheme }) {
    return (
        <div className={`header-grid-middle ${isOpen ? "mobile-open" : ""}`}>
            <nav aria-label="Main navigation">
                <ul>
                    <li style={{ "--i": 1 }}>
                        <Link to="/portfolio/"
                              className={location.pathname === "/portfolio/" ? "active" : ""}
                              onClick={closeMenu}>
                            <span>About</span>
                        </Link>
                    </li>
                    <li style={{ "--i": 2 }}>
                        <Link to="/portfolio/projects"
                              className={location.pathname === "/portfolio/projects" ? "active" : ""}
                              onClick={closeMenu}>
                            <span>Projects</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mobile-theme-toggle" style={{ "--i": 3 }}>
                <p>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'dark' ? <HiSun /> : <HiMoon />}
                </button>
            </div>
        </div>
    );
}
