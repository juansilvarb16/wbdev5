import {link} from "react-router-dom"

function Card({id, name, image, object} ){
    return (
        <div className="Card">
            <img src="{image}" alt="{name}" />
            <h3>{name}</h3>
            <p>{object}</p>
            <link to={`/details${id}`}>Detalhes</link>

        </div>

    )
}

export default Card; 