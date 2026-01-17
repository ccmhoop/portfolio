import {Link} from "react-router";
import {useEffect} from "react";
import "./Style.css";

const NotFoundPage = () => {

    useEffect(() => {
        document.title = "404";
    }, []);

    return (
        <section className="not-found-page">
            <article className="not-found-card">
                <div className="not-found-content">
                    <div className="error-code" aria-hidden="true">404</div>
                    <h1>Page Not Found</h1>
                    <p>
                        Oops! The page you are looking for doesn't exist or has been moved.
                    </p>
                    <Link to={"/"} className="button" aria-label="Return to Home page">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        <span>Return to Home</span>
                    </Link>
                </div>
            </article>
        </section>
    )
}

export {NotFoundPage}