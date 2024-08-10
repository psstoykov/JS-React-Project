import { Link } from "react-router-dom";

export default function CatalogItem({ _id, title, category, imageURL }) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageURL} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/details/${_id}`} className="details-button">
                    {/* TODO fix link to details */}
                    Details
                </Link>
            </div>
        </div>
    );
}
