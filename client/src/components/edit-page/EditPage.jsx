import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getOne, update } from "../../api-service/game-api";
import { useGetOneGame } from "../../hooks/useGame";
import { useMemo } from "react";
const initialValues = {
    title: "",
    category: "",
    maxLevel: "",
    imageURL: "",
    summary: "",
};

export default function EditPage() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useGetOneGame(gameId);

    const initialFormValues = useMemo(
        () => Object.assign({}, initialValues, game),
        [game]
    );

    const { changeHandler, submitHandler, values } = useForm(
        initialFormValues,
        async (values) => {
            try {
                const updatedGame = await update(gameId, values);
                console.log(updatedGame);

                navigate(`/details/${gameId}`);
                // setGame(updatedGame) instead of navigate as option
            } catch (err) {
                console.error(err.message);
            }
        }
    );
    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={changeHandler}
                        value={values.title}
                        defaultValue=""
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={changeHandler}
                        value={values.category}
                        defaultValue=""
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        onChange={changeHandler}
                        value={values.maxLevel}
                        min={1}
                        defaultValue=""
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageURL"
                        onChange={changeHandler}
                        value={values.imageURL}
                        defaultValue=""
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        onChange={changeHandler}
                        value={values.summary}
                        defaultValue={""}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Edit Game"
                    />
                </div>
            </form>
        </section>
    );
}
