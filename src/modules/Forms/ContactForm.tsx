import "./ContactForm.css";

import { FormEvent, ChangeEvent, useState } from "react";

type ContactFormProps = {
    email: string;
    message: string;
};

type FormInputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const defaultFormData: ContactFormProps = {
    email: "",
    message: "",
};

function ContactForm() {
    const [formData, setFormData] = useState(defaultFormData);

    const handleChange = (event: FormInputEvent) => {
        event.preventDefault();

        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form className="ContactForm" onSubmit={handleSubmit}>
            <div className="contact-form-container">
                <div className="form-header">
                    <h5>Let's get in touch</h5>
                </div>
                <div className="form-input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="jane@smith.com ..."
                        onChange={handleChange}
                    />
                </div>

                <div className="form-input-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        placeholder="write something ..."
                        onChange={handleChange}
                    />
                </div>

                <button id="contact-submit">

                    <p>Send!</p>
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
