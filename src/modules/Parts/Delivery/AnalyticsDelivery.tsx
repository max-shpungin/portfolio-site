import "./Delivery.css";
import "./AnalyticsDelivery.css";

import ExampleForm from "../../Forms/ExampleForm";
import dlpush from "../../../assets/dataLayerPush.png";
import dlresult from "../../../assets/dataLayerResult.png";

import { useState } from "react";

function DatalayerDelivery() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="DatalayerDelivery">
            <div className="delivery-container-wrapper ">
                <div className="delivery-container">
                    <h4 onClick={toggleAccordion}>Data Layer</h4>
                    <div
                        className={`delivery-content ${
                            isOpen ? "expanded" : "scrunched"
                        }`}
                    >
                        <img
                            className="delivery-image"
                            src={dlpush}
                            alt="example dataLayer push code"
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
                            <h5>Event Capture</h5>
                            <p>
                                Once we've identified which events we care
                                about, it's time to actually capture those
                                actions so that we can analyze them.
                            </p>

                            <p>
                                The best way to get this done is via the{" "}
                                <strong>data layer</strong> - a global object
                                that functions as a sort of go-between,
                                capturing user interaction for platforms to then
                                make use of.
                            </p>
                            <p>
                                While the data layer is a general concept, in
                                this case we're talking specifically about the{" "}
                                <strong>Google Tag Manager dataLayer</strong> -
                                a kind of data layer API created by Google that
                                interacts natively with various advertising and
                                analytics platforms.
                            </p>
                            <h5>Example</h5>

                            <p>
                                Curious to see how it works? Try out the form
                                below! The output will be available in your
                                browser console, just type 'dataLayer' and
                                expand the list to see it.
                            </p>
                        </div>

                        <div className="body-content">
                            <ExampleForm />
                        </div>

                        <div className="body-text">
                            <p>You should see something like this:</p>
                        </div>

                        <img
                            className="delivery-image"
                            id="datalayer-output-example"
                            src={dlresult}
                            alt="an example dataLayer output"
                        />

                        <button onClick={toggleAccordion} className="closeme">
                            Close me!
                        </button>
                    </div>
                </div>
                <div className="body-leader">
                    <h6>
                        We've got the requirements - now how do we actually
                        capture those interactions as data?
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default DatalayerDelivery;
