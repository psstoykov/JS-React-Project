import { useState } from "react";

export default function usePersistState(key, initialState) {

    // const [state, setState] = useState(initialState);

    const [state, setState] = useState(() => {
        const authJSON = localStorage.getItem(key);

        if (!authJSON) {
            return initialState;
        }

        const authData = JSON.parse(authJSON);

        return authData;
    });

    const updateState = (value) => {

        localStorage.setItem(key, JSON.stringify(value))
        setState(value)
    }
    return [state, updateState];
}