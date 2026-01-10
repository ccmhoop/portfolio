import {Link} from "react-router";
import {GoMoon} from "react-icons/go";

export default function NavBar() {
    return (
        <header className="header-bar">
            <div className="header-grid-left">
                <div className="name-container">
                    <div className="name-circle">
                        <p>
                            C
                        </p>
                    </div>
                    <p>
                        CONNER
                    </p>
                </div>

            </div>
            <div className="header-grid-middle">
                <nav aria-label="Social links">
                    <ul className="social-links">
                        <li className="social-item">
                            <Link
                                to="/portfolio"
                                aria-label="LinkedIn profile"
                                className="social-link"
                            >
                                <p>
                                    About
                                </p>
                            </Link>
                            <Link
                                to="/portfolio/projects"
                                aria-label="LinkedIn profile"
                                className="social-link"
                            >
                                <p>
                                    Projects
                                </p>
                            </Link>
                            <Link
                                to="/portfolio"
                                aria-label="LinkedIn profile"
                                className="social-link"
                            >
                                <p>
                                    Contact
                                </p>
                            </Link>
                            <Link
                                to="/portfolio"
                                aria-label="LinkedIn profile"
                                className="social-link"
                            >
                                <p>
                                    Experience
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <GoMoon size={25} color={"#000000"}  aria-hidden="true" />
            </div>

            {/*<div className="header-grid-right">*/}
            {/*    <nav aria-label="Social links">*/}
            {/*        <ul className="social-links">*/}
            {/*            <li className="social-item">*/}
            {/*                <Link*/}
            {/*                    to="/portfolio"*/}
            {/*                    aria-label="LinkedIn profile"*/}
            {/*                    className="social-link"*/}
            {/*                >*/}
            {/*                    <ImLinkedin*/}
            {/*                        size={25}*/}
            {/*                        color="#000000"*/}
            {/*                        aria-hidden="true"*/}
            {/*                        focusable="false"*/}
            {/*                    />*/}
            {/*                </Link>*/}
            {/*                <Link*/}
            {/*                    to="/portfolio"*/}
            {/*                    aria-label="LinkedIn profile"*/}
            {/*                    className="social-link"*/}
            {/*                >*/}
            {/*                    <ImLinkedin*/}
            {/*                        size={25}*/}
            {/*                        color="#000000"*/}
            {/*                        aria-hidden="true"*/}
            {/*                        focusable="false"*/}
            {/*                    />*/}
            {/*                </Link>*/}
            {/*                <Link*/}
            {/*                    to="/portfolio"*/}
            {/*                    aria-label="LinkedIn profile"*/}
            {/*                    className="social-link"*/}
            {/*                >*/}
            {/*                    <ImLinkedin*/}
            {/*                        size={25}*/}
            {/*                        color="#000000"*/}
            {/*                        aria-hidden="true"*/}
            {/*                        focusable="false"*/}
            {/*                    />*/}
            {/*                </Link>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*    <a href="https://react.dev" target="_blank">*/}
            {/*        <img src={reactLogo} className="logo react" alt="React logo"/>*/}
            {/*    </a>*/}
            {/*</div>*/}

        </header>
    )

}