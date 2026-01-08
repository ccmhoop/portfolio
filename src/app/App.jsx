import {useState} from 'react'
import leafsVertical from '../assets/leafsVertical.jpg'
import viteLogo from '/vite.svg'
import {ImLinkedin} from "react-icons/im";
import reactLogo from "/react.svg";
import './App.css'
import {Link, Outlet} from "react-router";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="layout">
            <header className="header-bar">
                <div className="header-grid-left">
                    <div className="name-circle">
                        <p>
                            C
                        </p>
                    </div>
                    <p>
                        CONNER
                    </p>
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
                                    to="/portfolio"
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
            <div className="content">
                <Outlet/>
            </div>
        </div>

    )
}

export default App
