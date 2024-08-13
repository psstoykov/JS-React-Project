import { useState } from "react";

export default function usePersistState(key, initialState) {

    // const [state, setState] = useState(initialState);

    const [state, setState] = useState(() => {
        const authJSON = localStorage.getItem(key);

        if (!authJSON) {
            return typeof initialState === 'function'
                ? initialState()
                : initialState;
        }

        const authData = JSON.parse(authJSON);

        return authData;
    });

    const updateState = (value) => {

        const newState = typeof value === 'function'
            ? value(state)
            : value;

        localStorage.setItem(key, JSON.stringify(value))

        setState(newState)
    }
    return [state, updateState];
}