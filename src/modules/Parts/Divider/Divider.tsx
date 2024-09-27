import "./Divider.css"

import background from "../../../assets/forestwindow.jpg"

function Divider(){

    return (
        <div className="Divider" style={{backgroundImage: `url(${background})`}}>
            <h2>What I built</h2>
        </div>
    )
}

export default Divider;