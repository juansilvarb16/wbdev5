import { Link } from "react-router-dom";

function Card({id, name, image, status}) {
    return (
        <div className="Card">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{status}</p>
            //ACHEI O ERROO ERA CRASE AO INVES DE ASPAS 
            <Link to={`/Details/${id}`}>Detalhes</Link>

        </div>

    );
}

export default Card; 