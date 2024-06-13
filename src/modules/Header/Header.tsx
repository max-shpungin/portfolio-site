import ContactForm from "../Forms/ContactForm";
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
                <ContactForm />
            </div>
        </div>
    );
}

export default Header;