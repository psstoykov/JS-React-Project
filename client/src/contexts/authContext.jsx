import { createContext, useContext } from "react";
import usePersistState from "../hooks/usePersistState";

export const AuthContext = createContext({
    userId: "",
    email: "",
    accessToken: "",
    changeAuthState: (authState = {}) => null,
    isAuthenticated: false,
    logout: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistState("auth", {});
    const changeAuthState = (state) => {
        localStorage.setItem("accessToken", state.accessToken);
        setAuthState(state);
    };
    const logout = () => {
        setAuthState(null);
    };

    const contextData = {
        userId: authState?._id,
        email: authState?.email,
        accessToken: authState?.accessToken,
        changeAuthState,
        isAuthenticated: !!authState?.email,
        logout,
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
