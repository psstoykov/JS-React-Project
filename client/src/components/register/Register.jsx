import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuthenticate";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
const initialValues = { email: "", password: "", rePass: "" };

export default function Register() {
    const [error, setError] = useState("");
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ email, password, rePass }) => {
        //TODO enhance error handling
        if (values.password != values.rePass) {
            setError("Passwords don't match");
            return;
        }
        try {
            await register(email, password);

            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        registerHandler
    );
    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="maria@email.com"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePass"
                        id="confirm-password"
                        value={values.rePass}
                        onChange={changeHandler}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Register"
                    />
                    {error && (
                        <p>
                            <span style={{ fontSize: "20px", color: "red" }}>
                                {error}{" "}
                            </span>
                        </p>
                    )}
                    <p className="field">
                        <span>
                            If you already have profile click
                            <a href="/login">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
