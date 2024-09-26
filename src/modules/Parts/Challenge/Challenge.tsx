import "./Challenge.css";

function Challenge() {
    return (
        <div className="Challenge">
            <div className="challenge-container-wrapper">
                <h2>The challenge was huge!</h2>
                <div className="challenge-container">
                    {/* CARDS */}
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">
                                Non-Compliant Tech Stack
                            </h5>
                            <p className="card-text">
                                Existing marketing technology failed to meet
                                stringent privacy regulations, putting the
                                company at risk.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Unreliable Metrics</h5>
                            <p className="card-text">
                                Lack of confidence in marketing performance data
                                hindered decision-making and strategy
                                development.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Inefficient Systems</h5>
                            <p className="card-text">
                                Overlapping tools and inconsistent processes led
                                to wasted resources and reduced productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Challenge;

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
