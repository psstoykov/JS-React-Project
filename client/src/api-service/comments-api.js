import { requester } from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/games';

const build_URL = (id) => `${BASE_URL}/${id}`;

const create = (id, username, comment) => requester.post(build_URL(id), { username, comment });


const getAll = async (id) => {
    const result = await requester.get(build_URL(id));
    const comments = Object.values(result);

    return comments;
}

export default {
    create,
    getAll
}
//TODO continue work on comments functionality