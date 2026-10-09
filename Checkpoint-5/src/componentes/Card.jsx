import {link} from "react-router-dom"

function Card({id, name, image, status} ){
    return (
        <div className="Card">
            <img src="{image}" alt="{name}" />
            <h3>{name}</h3>
            <p>{status}</p>
            <link to={`/details${id}`}>Detalhes</link>

        </div>

    )
}

export default Card; 