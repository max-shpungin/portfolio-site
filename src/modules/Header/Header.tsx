import "./Header.css";

/**
 * props:
 * state:
 */

function Header() {
    return (
        <div className="Header">
            <div className="accent-bar m-0 bg-yellow-500 p-4"></div>
            <div className="container-fluid d-flex p-3 w-100 justify-content-end">
                <div className="contact d-none d-md-flex btn btn-lg border-3 btn-outline-dark">
                    <span className="contact-text"><strong>Contact Me</strong></span>
                </div>
                <i className="navbar-toggler-icon bi bi-list display-5 d-md-none text-center pt-1 shadow"></i>
            </div>
        </div>
    );
}

export default Header;