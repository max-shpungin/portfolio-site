import "./Divider.css"

import background from "../../../assets/forestwindow.jpg"

type DividerProps = {
    content: string;
}

function Divider({content}:DividerProps){

    return (
        <div className="Divider" style={{backgroundImage: `url(${background})`}}>
            <h2>{content}</h2>
        </div>
    )
}

export default Divider;