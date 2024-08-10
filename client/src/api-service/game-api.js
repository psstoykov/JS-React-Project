import { requester } from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
    const result = await requester.get(BASE_URL);
    const games = Object.values(result);

    return games;
};


export const getOne = async (id) => {

    const game = await requester.get(`${BASE_URL}/${id}`);

    return game;
}
