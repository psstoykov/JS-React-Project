
import { login, register, logout } from "../api-service/user-api"
import { useAuthContext } from "../contexts/authContext";

export const useLogin = () => {

    const { changeAuthState } = useAuthContext()
    const loginHandler = async (email, password) => {

        const { password: pass, ...authData } = await login(email, password);
        // update app state
        changeAuthState(authData)
        return authData;

    }
    return loginHandler
};


export const useRegister = () => {

    const { changeAuthState } = useAuthContext()


    const registerHandler = async (email, password) => {
        //TODO check pass vs password
        const { password: pass, ...authData } = await register(email, password);

        changeAuthState(authData);
        return authData;
    };

    return registerHandler;
};


export const useLogout = () => {

    const { logout: sessionLogout, } = useAuthContext();


    const logoutHandler = async () => {
        await logout();
        sessionLogout();

    }
    return logoutHandler;
}