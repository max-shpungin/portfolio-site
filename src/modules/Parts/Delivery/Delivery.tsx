import "./Delivery.css";

import React, { useState } from "react";

type DeliveryProps = {
    title: string;
    leader: string;
    imageUrl: string;
    content: JSX.Element;
};

function Delivery({ title, leader, imageUrl, content }: DeliveryProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Delivery">
            <h2>What I Built</h2>
            <div className="delivery-container-wrapper ">
                <div className="delivery-container">
                    <h4 onClick={toggleAccordion}>{title}</h4>
                    <div
                        className={`delivery-content ${
                            isOpen ? "expanded" : "scrunched"
                        }`}
                    >
                        <img className="delivery-image" src={imageUrl} alt="" />
                        {!isOpen && (
                            <div
                                onClick={toggleAccordion}
                                className="delivery-overlay"
                            >
                                <p>Click for more!</p>
                            </div>
                        )}

                        {/* <div className="body-text" dangerouslySetInnerHTML={{__html: content}}>
                        </div> */}
                        <div className="body-text">{content}</div>
                        <button onClick={toggleAccordion} className="closeme">
                            Close me!
                        </button>
                    </div>
                </div>
                <div className="body-leader">
                    <h6>{leader}</h6>
                </div>
            </div>
        </div>
    );
}

export default Delivery;

{
    /* <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Card subtitle
                    </h6>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link">
                        Card link
                    </a>
                    <a href="#" className="card-link">
                        Another link
                    </a>
                </div>
            </div> */
}
