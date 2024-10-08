import { useState, useEffect } from "react";
import * as gamesAPI from "../api-service/game-api";


export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getAll();

            setGames(result);
        })();
    }, []);

    return [games, setGames]
}


export function useGetOneGame(gameId) {

    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageURL: '',
        summary: '',
    });

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getOne(gameId);
            setGame(result);
        })();
    }, [gameId]);

    return [game, setGame]
}


export function useCreateGame() {

    const createGameHandler = (gameData) => gamesAPI.create(gameData);

    return createGameHandler;
};

