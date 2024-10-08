import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { deleteGame } from "../../api-service/game-api";
import { useGetOneGame } from "../../hooks/useGame";
import { useForm } from "../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../hooks/useComment";

const initialValues = { comment: "" };

export default function Details() {
    const { userId, isAuthenticated, email } = useContext(AuthContext);
    const { gameId } = useParams();
    const createComment = useCreateComment();
    const [comments, setComments] = useGetAllComments(gameId);
    const [game, setGame] = useGetOneGame(gameId);
    const { changeHandler, submitHandler, values } = useForm(
        initialValues,
        async ({ comment }) => {
            try {
                const newComment = await createComment(gameId, comment);

                setComments((oldComments) => [
                    ...oldComments,
                    { ...newComment, owner: { email } },
                ]);
            } catch (err) {
                console.error(err.message);
            }
        }
    );

    const isOwner = game._ownerId === userId;
    const navigate = useNavigate();
    const gameDeleteHandler = async () => {
        const isConfirmed = confirm(
            "are you sure you want to delete the game?"
        );

        if (isConfirmed) {
            try {
                await deleteGame(gameId);
                navigate("/");
            } catch (err) {
                console.error(err.message);
            }
        }
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageURL} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">{game.summary}</p>
                {/* Bonus ( for Guests and Users ) */}
                {/* TODO create comments functionallity */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    {comments.length > 0 ? (
                        <ul>
                            {/* list all comments for current game (If any) */}
                            {comments.map((comment) => (
                                <li key={comment._id} className="comment">
                                    <p>
                                        {comment.owner.email}: {comment.comment}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        // {/* Display paragraph: If there are no games in the database */}
                        <p className="no-comment">No comments.</p>
                    )}
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/edit/${gameId}`} className="button">
                            Edit
                        </Link>
                        <a
                            href="#"
                            onClick={gameDeleteHandler}
                            className="button"
                        >
                            Delete
                        </a>
                    </div>
                )}
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            {isAuthenticated && !isOwner ? (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={submitHandler}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            onChange={changeHandler}
                            value={values.comment}
                        />
                        <input
                            className="btn submit"
                            type="submit" //TODO it used to be submit
                            value="Add Comment"
                        />
                    </form>
                </article>
            ) : null}
        </section>
    );
}
