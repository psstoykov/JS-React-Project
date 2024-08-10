import { useEffect } from "react";
import { useState } from "react";
import * as gamesAPI from "../../api-service/game-api";
import CatalogItem from "./catalog-item/CatalogItem";

export default function Catalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesAPI.getAll().then((result) => {
            setGames(result);
        });

        //TODO change to async function
    }, []);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0 ? (
                games.map((game) => <CatalogItem key={game._id} {...game} />)
            ) : (
                <h3 className="no-articles">No games yet</h3>
            )}
        </section>
    );
}
