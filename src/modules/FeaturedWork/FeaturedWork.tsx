import warbler from '../../assets/warbler.png';
import friender from '../../assets/friender.png';
import lmp from '../../assets/LMP.png';

import "./FeaturedWork.css";

function FeaturedWork(){

    return(
        <div className="Featured text-center mt-5 pb-5">
                <div className="container-fluid projects">
                    <h2 className='fw-bold p-5 display-4'>Featured Work</h2>

                    <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center">

                        <div className="col">
                            <div className="card shadow-sm rounded-5 border-2">
                                <img src={lmp} className="card-img-top rounded-top-5" alt="Live Music Project home page" />
                                <div className="card-body">
                                    <h5 className="card-title mt-2">Live Music Project</h5>
                                    <p className="card-text">Making live classical music more accessible for artists, fans, and communities.</p>
                                    <a className="btn btn-outline-primary" href="https://www.livemusicproject.org/">Check it out!</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm rounded-5 border-2">
                                <img src={warbler} className="card-img-top rounded-top-5" alt="Warbler home page" />
                                <div className="card-body">
                                    <h5 className="card-title">Warbler</h5>
                                    <p className="card-text">A twitter clone except with warbles :D.</p>
                                    <a className="btn btn-outline-dark me-1" href="https://github.com/max-shpungin/warbler/">Github</a>
                                    <a className="btn btn-outline-primary" href="https://max-shpungin-warbler.onrender.com/">View on Render</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm rounded-5 border-2">
                                <img src={friender} className="card-img-top rounded-top-5" alt="Friender home page" />
                                <div className="card-body">
                                    <h5 className="card-title mt-2">Friender</h5>
                                    <p className="card-text">A live chatroom built with websockets.</p>
                                    <a className="btn btn-outline-dark me-1" href="https://github.com/max-shpungin/friender-frontend">Github</a>
                                    <a className="btn btn-outline-primary" href="https://mes-friender-front.onrender.com/chatroom">View on Render</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default FeaturedWork;