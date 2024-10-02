import "./Delivery.css";
import "./AnalyticsDelivery.css";

import analyticsreport2 from "../../../assets/analyticsreport2.png";
import analyticsSegmentation from "../../../assets/analytics-segmentation.png";

import { useState } from "react";

function AnalyticsDelivery() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Delivery">
            <div className="delivery-container-wrapper ">
                <div className="delivery-container">
                    <h4 onClick={toggleAccordion}>Analytics & Optimization</h4>
                    <div
                        className={`delivery-content ${
                            isOpen ? "expanded" : "scrunched"
                        }`}
                    >
                        <img
                            className="delivery-image"
                            src={analyticsreport2}
                            alt="example analytics report"
                            id="example-analytics-report"
                        />
                        {!isOpen && (
                            <div
                                onClick={toggleAccordion}
                                className="delivery-overlay"
                            >
                                <p>Click for more!</p>
                            </div>
                        )}

                        <div className="body-text">
                            <h5>Insights & Opportunities</h5>
                            <p>
                                Dashboards can help visualize performance, but
                                the real value lies in{" "}
                                <strong>identifying areas of friction.</strong>{" "}
                                Analysing user behavior allows us to identify
                                areas for A/b tests to improve our digital
                                properties.
                            </p>

                            <h5>Audience Activation</h5>

                            <p>
                                By segmenting our users based on key attributes
                                like how they found us (a LinkedIn post, a
                                Google search...) and what content they engaged
                                with, we're able to better understand which
                                areas of our sites and apps are under /
                                overperforming.
                            </p>

                            <p>
                                Critically: we can use those same user segments
                                as audiences in our digital marketing campaigns.
                                By integrating analytics and advertising
                                platforms, we're able to{" "}
                                <strong>unlock targeting opportunities</strong>{" "}
                                for data driven optimization.
                            </p>
                        </div>

                        <img
                            className="delivery-image"
                            id="datalayer-output-example"
                            src={analyticsSegmentation}
                            alt="an example dataLayer output"
                        />

                        <button onClick={toggleAccordion} className="closeme">
                            Close me!
                        </button>
                    </div>
                </div>
                <div className="body-leader">
                    <h6>We've got the data - how do we actually use it?</h6>
                </div>
            </div>
        </div>
    );
}

export default AnalyticsDelivery;
