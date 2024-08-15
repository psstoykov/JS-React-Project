import { requester } from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';

//TODO check if it should be text ot comment on the request
const create = async (gameId, comment) => await requester.post(BASE_URL, { gameId, comment });


const getAll = async (gameId) => {

    const params = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`
    })
    const result = requester.get(`${BASE_URL}?${params.toString()}`);
    return result

}

const commentsApi = {
    create,
    getAll
}
export default commentsApi;
//TODO continue work on comments functionality