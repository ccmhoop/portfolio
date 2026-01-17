import { Link } from "react-router";
import { HiSun, HiMoon } from "react-icons/hi";
import { useAppContext } from "../context/AppContext";

export default function MobileMenu({ isOpen, closeMenu, location }) {
    const { theme, toggleTheme } = useAppContext();
    return (
        <aside className={`mobile-menu ${isOpen ? "mobile-open" : ""}`}>
            <nav aria-label="Main navigation">
                <ul>
                    <li>
                        <Link to="/portfolio/"
                              className={(location.pathname === "/portfolio/" || location.pathname === "/portfolio/") ? "active" : ""}
                              onClick={closeMenu}
                              aria-current={location.pathname === "/portfolio/" ? "page" : undefined}>
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio/projects"
                              className={location.pathname === "/portfolio/projects" ? "active" : ""}
                              onClick={closeMenu}
                              aria-current={location.pathname === "/portfolio/projects" ? "page" : undefined}>
                            <span>Projects</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mobile-theme-toggle">
                <p>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
                <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
                    {theme === 'dark' ? <HiSun aria-hidden="true" /> : <HiMoon aria-hidden="true" />}
                </button>
            </div>
        </aside>
    );
}
