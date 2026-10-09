api

import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
});

export const getCharacters = async () => {
    const response = await api.get("/character");
    return response.data.results;
};

export const getCharacter = async (id) => {
    const response = await api.get(`/character/${id}`);
    return response.data;
};

export const createPost = async (data) => {
    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
    );
    return response.data;
};