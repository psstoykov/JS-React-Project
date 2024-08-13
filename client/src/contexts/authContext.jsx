import { createContext, useState } from "react";

export const AuthContext = createContext({
    userId: "",
    email: "",
    accessToken: "",
    changeAuthState: (authState = {}) => null,
    isAuthenticated: false,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});
    const changeAuthState = (state) => {
        //TODO fix by implementing persisted authState
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
