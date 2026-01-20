import { Link } from "react-router";
import { HiSun, HiMoon, HiUser, HiCode } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

export default function MobileMenu({ isOpen, closeMenu, location }) {
    const { theme, toggleTheme } = useAppContext();
    
    return (
        <aside className={`mobile-menu ${isOpen ? "mobile-open" : ""}`}>
            <div className="mobile-menu-content">
                <section className="mobile-menu-section" style={{ "--section-index": 0 }}>
                    <h3 className="mobile-menu-section-title">Navigation</h3>
                    <nav aria-label="Main navigation">
                        <ul>
                            <li style={{ "--i": 1 }}>
                                <Link to="/portfolio/"
                                      className={(location.pathname === "/portfolio/") ? "active" : ""}
                                      onClick={closeMenu}
                                      aria-current={location.pathname === "/portfolio/" ? "page" : undefined}>
                                    <HiUser className="nav-icon" />
                                    <span>About</span>
                                </Link>
                            </li>
                            <li style={{ "--i": 2 }}>
                                <Link to="/portfolio/projects"
                                      className={location.pathname === "/portfolio/projects" ? "active" : ""}
                                      onClick={closeMenu}
                                      aria-current={location.pathname === "/portfolio/projects" ? "page" : undefined}>
                                    <HiCode className="nav-icon" />
                                    <span>Projects</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>

                <section className="mobile-menu-section connect" style={{ "--section-index": 1 }}>
                    <h3 className="mobile-menu-section-title">Connect</h3>
                    <div className="mobile-menu-socials">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ "--i": 3 }}>
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ "--i": 4 }}>
                            <FaLinkedin />
                        </a>
                        <a href="mailto:contact@example.com" aria-label="Email" style={{ "--i": 5 }}>
                            <FaEnvelope />
                        </a>
                    </div>
                </section>

                <section className="mobile-menu-section" style={{ "--section-index": 2 }}>
                    <h3 className="mobile-menu-section-title">Preferences</h3>
                    <div className="mobile-theme-toggle" onClick={toggleTheme} style={{ "--i": 6 }}>
                        <p>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
                        <button className="theme-toggle"  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
                            {theme === 'dark' ? <HiSun aria-hidden="true" /> : <HiMoon aria-hidden="true" />}
                        </button>
                    </div>
                </section>
            </div>
        </aside>
    );
}
