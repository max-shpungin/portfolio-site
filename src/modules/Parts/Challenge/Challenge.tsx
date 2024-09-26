import "./Challenge.css";

function Challenge() {
    return (
        <div className="Challenge">
            <div className="challenge-container-wrapper">
                <h2>The Challenge</h2>
                <p>
                    Great teams iterate quickly - sometimes that comes with
                    challenges
                </p>
                <div className="challenge-container">
                    {/* CARDS */}
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Non-compliant Tools</h5>
                            <div className="card-text">
                                <p>
                                    There's a natural tension between data
                                    collection and the need to{" "}
                                    <strong>protect users' privacy</strong> -
                                    the tricky part is getting that balance
                                    right.
                                </p>

                                <p>
                                    Privacy frameworks like{" "}
                                    <strong>CCPA</strong> and{" "}
                                    <strong>GDPR</strong> have different
                                    requirements for how visitors' data should
                                    be managed - these rules vary not only by
                                    region, but also govern different
                                    classifications for how data can be used,
                                    including analytics and advertising.
                                </p>

                                <p>
                                    Envoy's marketing team needed the ability to
                                    run <strong>effective</strong> and{" "}
                                    <strong>compliant</strong> media.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Ambiguous Success</h5>
                            <div className="card-text">
                                <p>
                                    For an organization to succeed, teams need
                                    to be pointed in the right direction. If
                                    that direction isn't clear, teams naturally
                                    interpret their own objectives - that leads
                                    to <strong>confusion</strong> when those
                                    definitions don't match.
                                </p>
                                <p>
                                    The lack of a{" "}
                                    <strong>unified measurement plan</strong>{" "}
                                    meant that internal success metrics did not
                                    always align to partners' performance
                                    reports.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Lack of Trust</h5>
                            <p className="card-text">
                                <p>
                                    Digital analytics is an inexact science -
                                    there will always be gaps in data
                                    collection, and marketing teams are used to
                                    operating with that ambiguity.
                                </p>

                                <p>
                                    But when those tools aren't collecting data
                                    in a way that's relevant to the business,
                                    the folks making decisions are flying blind.
                                </p>

                                <p>
                                    Envoy's marketing team is elite - the{" "}
                                    <strong>Google Analytics 4</strong>{" "}
                                    deployment wasn't measuring up.
                                </p>
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
