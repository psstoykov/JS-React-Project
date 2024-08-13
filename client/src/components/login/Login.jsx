import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuthenticate";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const initialValue = { email: "", password: "" };
export default function Login() {
    const navigate = useNavigate();

    const login = useLogin();
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }
    };
    const { values, changeHandler, submitHandler } = useForm(
        initialValue,
        loginHandler
    );

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="Sokka@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <input
                        type="submit"
                        className="btn submit"
                        defaultValue="Login"
                    />
                    <p className="field">
                        <span>
                            If you don't have profile click
                            <a href="/register">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
