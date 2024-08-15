import { requester } from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';

//TODO check if it should be text ot comment on the request
const create = (gameId, comment) => requester.post(BASE_URL, { gameId, comment });


const getAll = (gameId) => {

    const params = new URLSearchParams({
        where: `gameId="${gameId}"`
    })
    return requester.get(`${BASE_URL}?${params.toString()}`);

}

const commentsApi = {
    create,
    getAll
}
export default commentsApi;
//TODO continue work on comments functionality