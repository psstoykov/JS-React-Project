import { useContext } from "react";
import { login } from "../api-service/user-api"
import { AuthContext } from "../contexts/userAuth";

export const useLogin = () => {

    const { changeAuthState } = useContext(AuthContext);
    const loginHandler = async (username, password) => {

        const result = await login(username, password);
        // update app state
        changeAuthState(result)
        console.log(result)
    }
    return loginHandler
}