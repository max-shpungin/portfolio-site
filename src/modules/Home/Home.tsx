import profilePic from '../../assets/profile-pic.png';
import pinkCat from '../../assets/pink_cat.jpg';
import orangeCafe from '../../assets/orange_cafe.jpg';
import goldFrog from '../../assets/gold_frog.jpg';
import './Home.css';

/** Main body content for home page
 * props:
 * state:
 */

function Home() {
    return (
        <>
            <img className='rounded-circle mx-auto d-block w-25 border border-5 ' src={orangeCafe} alt="" />

            <nav className="nav d-flex justify-content-center mt-3">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>


            </nav>



            <div className="IconPanel row my-5">
                <div className="icons d-flex mx-auto justify-content-center">
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
                </div>
                <div className="icons d-flex mx-auto justify-content-center">
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" />
                </div>
                <div className="icons d-flex mx-auto justify-content-center">
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" />
                    <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                </div>
            </div>


            <div className="row">


                <div className="card-group">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aut excepturi nisi esse sit magni tempore sequi quas quaerat non laboriosam quod expedita culpa facere voluptas tempora quo, recusandae, deleniti sint temporibus sed dolore? Corrupti aspernatur sint ea delectus. Optio ipsam fugit corrupti. Sequi sint sed provident molestias asperiores nam dolores quos modi consectetur recusandae voluptatibus odit reprehenderit illo cumque, blanditiis dolore expedita debitis nostrum accusamus? Natus voluptatum quis voluptas dolorum non voluptates consectetur earum quasi, obcaecati optio esse enim velit excepturi laboriosam voluptatibus fugiat at iusto? Deleniti, illum commodi consequatur eos recusandae incidunt placeat, quisquam fuga quas officia saepe?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aut excepturi nisi esse sit magni tempore sequi quas quaerat non laboriosam quod expedita culpa facere voluptas tempora quo, recusandae, deleniti sint temporibus sed dolore? Corrupti aspernatur sint ea delectus. Optio ipsam fugit corrupti. Sequi sint sed provident molestias asperiores nam dolores quos modi consectetur recusandae voluptatibus odit reprehenderit illo cumque, blanditiis dolore expedita debitis nostrum accusamus? Natus voluptatum quis voluptas dolorum non voluptates consectetur earum quasi, obcaecati optio esse enim velit excepturi laboriosam voluptatibus fugiat at iusto? Deleniti, illum commodi consequatur eos recusandae incidunt placeat, quisquam fuga quas officia saepe?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aut excepturi nisi esse sit magni tempore sequi quas quaerat non laboriosam quod expedita culpa facere voluptas tempora quo, recusandae, deleniti sint temporibus sed dolore? Corrupti aspernatur sint ea delectus. Optio ipsam fugit corrupti. Sequi sint sed provident molestias asperiores nam dolores quos modi consectetur recusandae voluptatibus odit reprehenderit illo cumque, blanditiis dolore expedita debitis nostrum accusamus? Natus voluptatum quis voluptas dolorum non voluptates consectetur earum quasi, obcaecati optio esse enim velit excepturi laboriosam voluptatibus fugiat at iusto? Deleniti, illum commodi consequatur eos recusandae incidunt placeat, quisquam fuga quas officia saepe?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aut excepturi nisi esse sit magni tempore sequi quas quaerat non laboriosam quod expedita culpa facere voluptas tempora quo, recusandae, deleniti sint temporibus sed dolore? Corrupti aspernatur sint ea delectus. Optio ipsam fugit corrupti. Sequi sint sed provident molestias asperiores nam dolores quos modi consectetur recusandae voluptatibus odit reprehenderit illo cumque, blanditiis dolore expedita debitis nostrum accusamus? Natus voluptatum quis voluptas dolorum non voluptates consectetur earum quasi, obcaecati optio esse enim velit excepturi laboriosam voluptatibus fugiat at iusto? Deleniti, illum commodi consequatur eos recusandae incidunt placeat, quisquam fuga quas officia saepe?</p>
            </div>
        </>
    );
}


export default Home;

{/* <div className="col-4">
                <div className="card" >
                    <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div> */};