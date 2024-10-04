import { Link } from "react-router-dom";



import "./Header.css";

/**
 * props:
 * state:
 */

function Header() {


    return (
        <div className="Header mb-4">
            <div className="accent-bar bg-yellow-500">
                <span className="fs-4"></span>
            </div>
            <div className="nav-container">
            <div className="navLinks">
                <Link className="navinavi-link" to="/">home</Link>
            </div>

            </div>
        </div>
    );
}

export default Header;