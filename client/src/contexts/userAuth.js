import { createContext } from "react";


export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    changeAuthState: (authState = {}) => null,
    isAuthenticated: false,
});