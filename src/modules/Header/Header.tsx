import "./Header.css";

/**
 * props:
 * state:
 */

function Header() {
    return (
        <div className="Header mb-4">
            <div className="accent-bar m-0 bg-yellow-500 p-3">
                <span className="fs-4"></span>
            </div>
            <div className="container-fluid d-flex p-3 w-100 justify-content-end">
                <a href="mailto:max@workingwithmax.com" className="contact shadow d-none d-md-flex btn btn-lg border-3 btn-outline-dark">
                    <span className="contact-text"><strong>Contact Me</strong></span>
                </a>
                {/* <i className="navbar-toggler-icon bi bi-list display-5 d-md-none text-center pt-1 shadow"></i> */}
                <a
                    href="mailto:max@workingwithmax.com"
                    className="
                        navbar-toggler-icon
                        shadow d-flex
                        justify-content-center
                        display-5
                        fw-bold
                        d-md-none
                        me-3
                        text-decoration-none">
                    <span>@</span>
                </a>
            </div>
        </div>
    );
}

export default Header;