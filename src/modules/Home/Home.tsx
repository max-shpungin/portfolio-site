import IconPanel from '../IconPanel/IconPanel';

import profilePic from '../../assets/profile-pic.png';
import pinkCat from '../../assets/pink_cat.jpg';
import orangeCafe from '../../assets/orange_cafe.jpg';
import goldFrog from '../../assets/gold_frog.jpg';
import warbler from '../../assets/warbler.png';
import friender from '../../assets/friender.png';
import './Home.css';

/** Main body content for home page
 * props:
 * state:
 */

function Home() {
    return (
        <>
            <img className='rounded-circle mx-auto d-block w-50 border border-warning border-5 max-image-size' src={orangeCafe} alt="" />

            <div className="intro col-6 mx-auto m-5">
                <h1 className="h1 fs-2"> Hey! I'm <span className='name'>Max Shpungin</span>, a software engineer with a background in digital analytics.</h1>
                <p className='fw-semibold fs-3'> I love building <span className='cool-things'>cool things, my cat, and my <span className='wife'>wife</span></span>. Not necessarily in that order.</p>
            </div>

            <IconPanel />

            <div className="Featured text-center mt-5 pb-5">
                <h2 className='fw-bold p-5 display-4'>Featured Work</h2>

                <div className="container-fluid projects">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">

                        <div className="card shadow-sm rounded-5 border-2">
                            <img src={warbler} className="card-img-top rounded-top-5" alt="..." />
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
                            <img src={friender} className="card-img-top rounded-top-5" alt="..." />
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

        </>
    );
}


export default Home;

//cards
{/* <div className="container-fluid projects">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">

                        <div className="card shadow-sm rounded-5 border-2">
                            <img src={warbler} className="card-img-top rounded-top-5" alt="..." />
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
                            <img src={friender} className="card-img-top rounded-top-5" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mt-2">Friender</h5>
                                <p className="card-text">A live chatroom built with websockets.</p>
                                <a className="btn btn-outline-dark me-1" href="https://github.com/max-shpungin/friender-frontend">Github</a>
                                <a className="btn btn-outline-primary" href="https://mes-friender-front.onrender.com/chatroom">View on Render</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

