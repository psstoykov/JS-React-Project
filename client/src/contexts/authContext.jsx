import { createContext, useContext } from "react";
import userPersistState from "../hooks/usePersistState";

export const AuthContext = createContext({
    userId: "",
    email: "",
    accessToken: "",
    changeAuthState: (authState = {}) => null,
    isAuthenticated: false,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = userPersistState("auth", {});
    const changeAuthState = (state) => {
        localStorage.setItem("accessToken", state.accessToken);
        setAuthState(state);
    };

    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        changeAuthState,
        isAuthenticated: !!authState.email,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
}
