import { useState, MouseEvent } from "react";
import "./ModalForm.css";

type ModalFormProps = {
    form: JSX.Element;
    buttonText: string;
    className?: string;
};

function ModalForm({ form, buttonText, className = "" }: ModalFormProps) {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = (event: MouseEvent) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleClose = (event: MouseEvent) => {
        event.preventDefault();
        setShowModal(false);
    };

    return (
        <div className="ModalContactForm">
            <button className={`${className}`} onClick={handleOpen}>
                {buttonText}
            </button>

            {showModal && (
                <div
                    className={`modal-container ${showModal ? "visible" : ""}`}
                >
                    <div className="modal-form-container">
                        {form}
                        <button
                            type="button"
                            className="btn-close modal-close-button"
                            onClick={handleClose}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModalForm;
