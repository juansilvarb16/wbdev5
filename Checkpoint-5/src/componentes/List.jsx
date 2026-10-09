import Card from "./Card";

function List({ characters }) {

    if (characters.length === 0) {
        return <p>Nenhum personagem encontrado.</p>;
    }

    return (
        <div className="cards">
            {characters.map((character) => (
                <Card key={character.id} {...character} />
            ))}
        </div>
    );
}


export default List;