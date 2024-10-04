import "./ContactForm.css";

import { FormEvent, ChangeEvent, useState, useEffect } from "react";

type ContactFormProps = {
    name: string;
    handleSuccess: () => void;
};

type contactFormData = {
    email: string;
    message: string;
};

type FormInputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const defaultFormData: contactFormData = {
    email: "",
    message: "",
};

function ContactForm({ name, handleSuccess }: ContactFormProps) {
    const [formData, setFormData] = useState(defaultFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event: FormInputEvent) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => {
                handleSuccess();
                setIsSubmitted(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted, handleSuccess]);

    return (
        <form
            data-netlify="true"
            name={name}
            className="ContactForm"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value={name} />
            <div className="contact-form-container">
                {isSubmitted && (
                    <div className="form-success">
                        <p>Success!</p>
                    </div>
                )}
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
                        required
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
                        required
                    />
                </div>
                <button id="contact-submit" type="submit">
                    <p>Send!</p>
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
