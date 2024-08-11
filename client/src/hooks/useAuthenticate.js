import { useContext } from "react";
import { login, register } from "../api-service/user-api"
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
};


export const useRegister = () => {

    const { changeAuthState } = useContext(AuthContext);


    const registerHandler = async (email, password) => {
        //TODO check pass vs password
        const { pass, ...authData } = await register(email, password);

        changeAuthState(authData);
        return result;
    };

    return registerHandler;
};