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
                <a
                    href="mailto:max@workingwithmax.com"
                    className="contact shadow d-md-flex btn btn-lg border-3 btn-outline-dark"
                >
                    <span className="contact-text">
                        <strong>Contact Me</strong>
                    </span>
                </a>
                {/* <i className="navbar-toggler-icon bi bi-list display-5 d-md-none text-center pt-1 shadow"></i> */}
            </div>
        </div>
    );
}

export default Header;
