import { login } from "../api-service/user-api"

export const useLogin = () => {

    const loginHandler = async (username, password) => {

        const result = await login(username, password);

        console.log(result)
        //TODO update app state
    }
    return loginHandler
}