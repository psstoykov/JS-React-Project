import { useContext } from "react";
import { login, register } from "../api-service/user-api"
import { AuthContext } from "../contexts/userAuth";

export const useLogin = () => {

    const { changeAuthState } = useContext(AuthContext);
    const loginHandler = async (email, password) => {

        const { password: pass, ...authData } = await login(email, password);
        // update app state
        changeAuthState(authData)
        return authData;

    }
    return loginHandler
};


export const useRegister = () => {

    const { changeAuthState } = useContext(AuthContext);


    const registerHandler = async (email, password) => {
        //TODO check pass vs password
        const { password: pass, ...authData } = await register(email, password);

        changeAuthState(authData);
        return authData;
    };

    return registerHandler;
};