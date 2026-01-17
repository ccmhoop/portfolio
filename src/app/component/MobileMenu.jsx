import { Link } from "react-router";
import { HiSun, HiMoon } from "react-icons/hi";
import { useAppContext } from "../context/AppContext";

export default function MobileMenu({ isOpen, closeMenu, location }) {
    const { theme, toggleTheme } = useAppContext();
    return (
        <aside className={`mobile-menu ${isOpen ? "mobile-open" : ""}`}>
            <nav aria-label="Main navigation">
                <ul>
                    <li >
                        <Link to="/portfolio/"
                              className={(location.pathname === "/portfolio/" || location.pathname === "/portfolio/") ? "active" : ""}
                              onClick={closeMenu}>
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio/projects"
                              className={location.pathname === "/portfolio/projects" ? "active" : ""}
                              onClick={closeMenu}>
                            <span>Projects</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mobile-theme-toggle" onClick={toggleTheme} >
                <p>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
                <button className="theme-toggle" aria-label="Toggle theme">
                    {theme === 'dark' ? <HiSun /> : <HiMoon />}
                </button>
            </div>
        </aside>
    );
}
