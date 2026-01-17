import {Link} from "react-router";
import {useEffect} from "react";
import NavBar from "../../app/component/Navbar.jsx";
import "./Style.css";

const NotFoundPage = () => {

    useEffect(() => {
        document.title = "404";
    }, []);

    return (
        <div className="layout">
            <main className="content">
                <section className="not-found-page">
                    <div className="not-found-card">
                        <div className="not-found-content">
                            <div className="error-code">404</div>
                            <h1>Page Not Found</h1>
                            <p>
                                Oops! The page you are looking for doesn't exist or has been moved.
                            </p>
                            <Link to={"/portfolio/"} className="button">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                    <polyline points="9 22 9 12 15 12 15 22"/>
                                </svg>
                                <span>Return to Home</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export {NotFoundPage}