import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
    return (
        <div className="NotFound">
            <div className="Content">
                <h1>There's nothing here!</h1>
                <Link to="/">Take me home</Link>
            </div>
        </div>
    );
}

export default NotFound;
