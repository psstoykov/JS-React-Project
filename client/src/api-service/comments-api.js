import { requester } from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';


const create = (gameId, username, comment) => requester.post(build_URL(gameId), { username, comment });


const getAll = async (gameId) => {
    const result = await requester.get(build_URL(gameId));
    const comments = Object.values(result);

    return comments;
}

const commentsApi = {
    create,
    getAll
}
export default commentsApi;
//TODO continue work on comments functionality