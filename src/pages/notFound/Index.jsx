import {Link} from "react-router";

const NotFoundPage = () => {
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