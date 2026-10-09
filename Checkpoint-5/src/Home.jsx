import { useCallback, useEffect, useMemo, useState } from "react";
// Alterado de ../ para ./
import { getCharacters } from "./services/api";
import Input from "./componentes/Input";
import Button from "./componentes/Button";
import List from "./componentes/List";
import loading from "./componentes/loading";
import ErrorMessage from "./componentes/ErrorMessage";









function Home() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        carregarPersonagens();
    }, []);

    async function carregarPersonagens() {
        try {




            const data = await getCharacters();
            setCharacters(data);

        } catch {

            setError("Erro ao carregar.");

        } finally {

            setLoading(false);
        }
    }

    const filteredCharacters = useMemo(() => {
        return characters.filter((character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [characters, searchTerm]);

    const clearSearch = useCallback(() => {
        setSearchTerm("");
    }, []);

    return (
        <div>
            <h2>Personagens</h2>
            <Input
                placeholder="Buscar por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}


        
            />


            <Button onClick={clearSearch}>Limpar</Button>

            {loading && <Loading />}
            {error && <ErrorMessage message={error} />}
            {!loading && !error && <List characters={filteredCharacters} />}
        </div>
    );
}

export default Home;