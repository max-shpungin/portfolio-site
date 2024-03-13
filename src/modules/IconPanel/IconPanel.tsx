import './IconPanel.css';

/** Icon panel - display various icons
 * props:
 * state:
 */

function IconPanel() {
    return (
        <>

            <div className="container-md d-none d-md-block">

                <div className="icon-wrapper bg-warning bg-opacity-10 mx-auto py-3 my-3 rounded-2">

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
                        <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" />
                        <img className='col-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                    </div>

                </div>

            </div>
        </>
    );
}

export default IconPanel;