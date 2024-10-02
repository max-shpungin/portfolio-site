import ModalContactForm from "../../../modules/Modals/ModalForm/ModalForm";
import ContactForm from "../../../modules/Forms/ContactForm";

function TestPage() {

    return (
        <div className="TestPage">
            <div className="test-container">
                <ModalContactForm form={<ContactForm/>} buttonText="Click me!" />
            </div>
        </div>
    )
}

export default TestPage;