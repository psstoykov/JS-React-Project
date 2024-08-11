import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateGame } from "../../hooks/useGame";

const initialValues = {
    title: "",
    category: "",
    maxLevel: "",
    imageURL: "",
    summary: "",
};
export default function CreatePage() {
    const navigate = useNavigate();
    const createGame = useCreateGame();

    const createHandler = async (values) => {
        try {
            //TODO fix navigation to details of the newly create game
            const newGame = await createGame(values);
            console.log(newGame);

            navigate("/");
        } catch (err) {
            console.error(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        createHandler
    );
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        placeholder="Enter game title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                        placeholder="Enter game category..."
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        value={values.maxLevel}
                        onChange={changeHandler}
                        placeholder={1}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageURL"
                        value={values.imageURL}
                        onChange={changeHandler}
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        value={values.summary}
                        onChange={changeHandler}
                        id="summary"
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Create Game"
                    />
                </div>
            </form>
        </section>
    );
}
