import {Link} from "react-router";
import {useEffect} from "react";

const NotFoundPage = () => {

    useEffect(() => {
        document.title = "404 Not Found";
    }, []);

    return (
        <div>
            <h1>404 Not Found ❌</h1>
            <Link to={"/portfolio"}>
                <button>Return to Home</button>
            </Link>
        </div>
    )
}

export {NotFoundPage}