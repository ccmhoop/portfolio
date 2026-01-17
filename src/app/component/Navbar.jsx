import {Link, useLocation} from "react-router";
import {HiMenu, HiX, HiSun, HiMoon} from "react-icons/hi";
import {useState, useEffect} from "react";
import MobileMenu from "./MobileMenu";
import { useAppContext } from "../context/AppContext";
import { globalOptions } from "../../data/pageData.js";

export default function NavBar() {
    const { theme, toggleTheme } = useAppContext();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const fullName = globalOptions.fullName;

    useEffect(() => {
        let timeoutId;
        let isDeleting = false;
        let currentIndex = 0;

        const animate = () => {
            if (!isDeleting) {
                if (currentIndex <= fullName.length) {
                    setDisplayName(fullName.slice(0, currentIndex));
                    currentIndex++;
                    timeoutId = setTimeout(animate, 200);
                } else {
                    isDeleting = true;
                    timeoutId = setTimeout(animate, 2000); // Pause at full name
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    setDisplayName(fullName.slice(0, currentIndex));
                    timeoutId = setTimeout(animate, 100);
                } else {
                    isDeleting = false;
                    timeoutId = setTimeout(animate, 500); // Pause before restarting
                }
            }
        };

        animate();

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/portfolio/":
                return "About";
            case "/portfolio/projects":
                return "Projects";
            default:
                return "";
        }
    };

    return (
        <div>
            <header className={`header-bar ${isOpen ? "mobile-menu-open" : ""}`}>
                <div className="header-grid-left">
                    <Link to="/portfolio/" className="name-container" onClick={closeMenu}>
                        <div className="name-circle">
                            <p>C</p>
                        </div>
                        <p className="animated-name">
                            {displayName.split("").map((char, index) => (
                                <span key={index} className="fade-in-char">
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </p>
                    </Link>
                </div>
                <div className="header-grid-middle desktop-only">
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
                </div>
                <div className="mobile-page-title">
                       {getPageTitle()}
                </div>
                <div className="header-grid-right">
                    <button className="theme-toggle desktop-only" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? <HiSun /> : <HiMoon />}
                    </button>
                    <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <HiX/> : <HiMenu/>}
                    </button>
                </div>
            </header>
            <MobileMenu
                isOpen={isOpen}
                closeMenu={closeMenu}
                location={location}
            />
        </div>
    )
}