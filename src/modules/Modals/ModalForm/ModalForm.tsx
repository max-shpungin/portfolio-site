import { MouseEvent, useRef } from "react";

import "./ModalForm.css";

type ModalFormProps = {
    form: JSX.Element;
    showModal: boolean;
    handleClose: (event: MouseEvent) => void;
};

function ModalForm({ form, showModal, handleClose }: ModalFormProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        // event.stopPropagation();
        event.preventDefault();

        if (
            showModal &&
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            handleClose(event);
        }
    };

    return (
        <div className="ModalForm" onClick={handleOutsideClick}>
            {showModal && (
                <div  className="modal-form-backdrop" />
            )}
            <div className={`modal-container ${showModal ? "visible" : ""}`}>
                <div className="modal-form-container" ref={modalRef}>
                    <button
                        type="button"
                        className="btn-close btn-close-white modal-close-button"
                        onClick={handleClose}
                    />
                    {form}
                </div>
            </div>
        </div>
    );
}

export default ModalForm;
