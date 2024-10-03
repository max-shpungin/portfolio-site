import { useState, MouseEvent } from "react";

import ModalContactForm from "../../../modules/Modals/ModalForm/ModalForm";
import ContactForm from "../../../modules/Forms/ContactForm";

function TestPage() {

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
        <div className="TestPage">
            <div className="test-container">
            <button className="what" onClick={handleOpen}>
                shomethemoney
            </button>
                <ModalContactForm form={<ContactForm/>} showModal={showModal} handleClose={handleClose} />
            </div>
        </div>
    )
}

export default TestPage;