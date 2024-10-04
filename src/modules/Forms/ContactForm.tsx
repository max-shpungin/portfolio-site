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

        // Netlify normally requires a hidden input field with form-name attb
        // that matches the name of the HTML version of this form.
        // Because this is a stateful form, we need to add it manually so that
        // it's included with the rest of the formData.

        const encodedData = new URLSearchParams(formData);
        encodedData.append("form-name", name) // needed for netlify
        const encodedDataString = encodedData.toString();

        fetch("/", {
            method:"POST",
            headers: { "Content-Type":"application/x-www-form-urlencoded" },
            body: encodedDataString,
        })
            .then(()=>setIsSubmitted(true))
            .catch((error)=>console.log(error));
    };

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => {
                handleSuccess();
                setIsSubmitted(false);
                setFormData(defaultFormData);
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
