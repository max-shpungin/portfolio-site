import "./Approach.css";

import one from "../../../assets/one.jpg";
import two from "../../../assets/two.jpg";
import three from "../../../assets/three.jpg";

function Approach() {
    return (
        <div className="Approach">
            <div className="approach-container-wrapper">
                <h2>The Approach</h2>
                <p>There's no such thing as a one-size fits all solution. </p>
                <div className="approach-container">
                    {/* CARDS */}
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            src={one}
                            className="card-img-top rounded-2"
                            alt="Live Music Project home page"
                        />
                        <div className="card-body">
                            <h5 className="card-title"> Discover </h5>
                            <p className="card-text">
                                Conducted in-depth stakeholder interviews and
                                comprehensive system reviews to understand the
                                current landscape.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                    <img
                            src={two}
                            className="card-img-top rounded-2"
                            alt="Live Music Project home page"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Design</h5>
                            <p className="card-text">
                                Crafted a tailored end-state solution, ensuring
                                buy-in from all team members for seamless
                                implementation.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                    <img
                            src={three}
                            className="card-img-top rounded-2"
                            alt="Live Music Project home page"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Deploy</h5>
                            <p className="card-text">
                                Executed technical and process changes,
                                transforming the marketing technology ecosystem
                                for optimal performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Approach;

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
