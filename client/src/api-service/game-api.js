import { requester } from "./requester"

const BASE_URL = 'http://localhost:3030/data/games';

export const getAll = async () => {
    const result = await requester.get(BASE_URL);
    const games = Object.values(result);

    return games;
};

export const getLatest = async () => {

    // const urlSearchParams = new URLSearchParams({
    //     sortBy: '_createdOn desc',
    //     pageSize: 3,
    // });
    // const result = await requester.get(`${BASE_URL}?${urlSearchParams.toString()}`);
    const result = await requester.get('http://localhost:3030/data/games?sortBy=_createdOn%20desc&pageSize=3');
    console.log(result)



    const latestGames = Object.values(result);
    return latestGames

}

export const getOne = async (id) => {

    const game = await requester.get(`${BASE_URL}/${id}`);

    return game;
}


export const create = async (data) => {
    await requester.post(BASE_URL, data)
}

export const update = (gameId, data) => {

    return requester.put(`${BASE_URL}/${gameId}`, data)
}

export const deleteGame = (gameId) => requester.del(`${BASE_URL}/${gameId}`);