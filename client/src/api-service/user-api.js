import { requester } from "./requester";


const BASE_URL = 'http://localhost:3030/users';


export const login = async (email, password) => {

    const result = await requester.post(`${BASE_URL}/login`, { email, password });

    return result;
}


export const register = async (email, password) => {

    const result = await requester.post(`${BASE_URL}/register`, { email, password });

    return result;
};


export const logout = () => {
    requester.get(`${BASE_URL}/logout`)
}