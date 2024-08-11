import { createContext } from "react";


export const AuthContext = createContext({
    email: '',
    accessToken: '',
    changeAuthState: (authState = {}) => null,
    isAuthenticated: false,
});