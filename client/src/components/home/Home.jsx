import { useEffect, useState } from "react";
import { getLatest } from "../../api-service/game-api";
import LatestGame from "./latest/latestGame";

export default function Home() {
    const [latest, setLatest] = useState([]);

    //TODO transfer hook to custom hook and fix the latest 3 games functinality
    useEffect(() => {
        (async () => {
            const result = await getLatest();
            console.log(result);
            setLatest(result);
        })();
    }, []);
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>

                {latest.length > 0 ? (
                    latest.map((game) => (
                        <LatestGame key={game._id} {...game} />
                    ))
                ) : (
                    <p className="no-articles">No games yet</p>
                )}
            </div>
        </section>
    );
}
