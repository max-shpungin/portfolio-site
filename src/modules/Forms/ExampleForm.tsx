import { ChangeEvent, FormEvent, useState } from "react";

import "./ExampleForm.css";

export default function ExampleForm() {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const [overlay, setOverlay] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        // Trigger success overlay for 3 seconds
        setOverlay(true);
        setTimeout(() => {
            setOverlay(false);
        }, 3000);

        sendAnalyticsData();
    };

    const sendAnalyticsData = () => {
        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
            event: "formSubmit",
            data: {
                name: formData.name,
                email: formData.email,
            },
        });
    };

    return (
        <form className="ExampleForm" onSubmit={handleSubmit}>
            {overlay && (
                <div className="successOverlay">
                    <p>Event Submitted!</p>
                    <p>Open browser console and type 'dataLayer' to see it.</p>
                </div>
            )}

            <h6 className="formTitle">Example Event Generator</h6>
            <div className="formContents">
                <div className="formInputGroup">
                    <label className="sr-only" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="Jane Doe"
                        onChange={handleChange}
                    />
                </div>
                <div className="formInputGroup">
                    <label className="sr-only" htmlFor="email">
                        Email
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="jane@doe.com"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="formButton">
                    <button type="submit" className="btn btn-success">
                        Show me an event!
                    </button>
                </div>
            </div>
        </form>
    );
}
