import { useGetAllGames } from "../../hooks/useGame";
import CatalogItem from "./catalog-item/CatalogItem";

export default function Catalog() {
    const [games, setGames] = useGetAllGames();

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
