import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import {useState} from "react";
import "./Style.css"
import {Link} from "react-router";

const HomePage = () => {
    const [count, setCount] = useState(0)

    return (
            <section className="home-page">
                <title>
                    Conner de Hoop
                </title>

                <div className="card">

                    <h2>
                        I'm Conner de Hoop
                    </h2>

                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                    <div className="buttons">
                        <Link to="/portfolio/projects" >
                            <button>
                                Projects
                            </button>
                        </Link>
                        <Link to="/portfolio/projects" >
                            <button>
                                Contact
                            </button>
                        </Link>

                    </div>

                    <p className="read-the-docs">
                        Click on the Vite and React logos to learn more
                    </p>
                </div>

            </section>

    )
}

export {HomePage}