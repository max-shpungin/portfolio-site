import "./Approach.css";

import one from "../../../assets/one.jpg";
import two from "../../../assets/two.jpg";
import three from "../../../assets/three.jpg";

function Approach() {
    return (
        <div className="Approach">
            <div className="approach-container-wrapper">
                <h2>The Approach</h2>
                <p>
                    What value are we creating? Who is the audience? How are we
                    going to get there?
                </p>
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
                                The first step in any project is understanding
                                the lay of the land. I conducted in-depth
                                stakeholder interviews and system reviews to
                                paint a full picture of our current and future
                                state.
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
                                With a clear measurement plan in place, the
                                changes we needed to make became self evident -
                                it was just a matter of designing the schema and
                                data layer code necessary to gather consent and
                                corresponding measurement signals.
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
                                Once we had our goals identified and a plan
                                agreed to, it was time to make it happen.
                                Deployment here was a mix of tag management,
                                data layer code development, and platform
                                configuration.
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
