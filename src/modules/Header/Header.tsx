import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";

import ContactForm from "../Forms/ContactForm";
import ModalForm from "../Modals/ModalForm/ModalForm";

import "./Header.css";

/**
 * props:
 * state:
 */

function Header() {

    const[showModal, setShowModal] = useState(false);

    const handleOpen = (event: MouseEvent) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleClose = (event:MouseEvent) => {
        event.preventDefault();
        setShowModal(false)
    }

    return (
        <div className="Header mb-4">
            <div className="accent-bar bg-yellow-500">
                <span className="fs-4"></span>
            </div>
            <div className="nav-container">
            <div className="navLinks">
                <Link className="navinavi-link" to="/">home</Link>
            </div>
                <button
                    className="contact shadow d-md-flex btn btn-lg border-3 btn-outline-dark"
                    onClick={handleOpen}
                >
                    <span className="contact-text">
                        <strong>Contact Me</strong>
                    </span>
                </button>
            </div>
                <ModalForm form={<ContactForm/>} showModal={showModal} handleClose={handleClose} />
        </div>
    );
}

export default Header;