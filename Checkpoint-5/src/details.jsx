import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacter, createPost } from "./services/api";
import Input from "./componentes/Input";
import Button from "./componentes/Button";
import Loading from "./componentes/Loading";
import ErrorMessage from "./componentes/ErrorMessage";

export default function Details() {
    const { id } = useParams();
    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [comment, setComment] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        getCharacter(id)
            .then(setChar)
            .catch(() => setError("Erro"))
            .finally(() => setLoading(false));
    }, [id]);

    function enviar(e) {
        e.preventDefault();
        if (!comment.trim()) return;

        createPost({ title: char.name, body: comment })
            .then((r) => {
                setMsg(`Comentario Enviado! ${r.id}`);
                setComment("");
            })
            .catch(() => setMsg("Erro ao enviar."));
    }

    if (loading) return <Loading/>;
    if (error || !char)
        return <ErrorMessage message={error || "Falha ao carregar"} />;

    return (
        <div>
            <Link to="/">Voltar</Link>
            <img src={char.image} alt={char.name} width="250" />
            <h2>{char.name}</h2>
            <p>Status: {char.status} | Espécie: {char.species}</p>

            <form onSubmit={enviar}>
                <Input placeholder="Comentário" value={comment}
                    onChange={(e) => setComment(e.target.value)} />
                <Button type="submit">Enviar</Button>
            </form>

            {msg && <p>{msg}</p>}
        </div>
    );
}