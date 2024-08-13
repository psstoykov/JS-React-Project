import { useState } from "react";

export default function usePersistState(key, initialState) {

    const [state, setState] = useState(() => {
        const isAuth = localStorage.getItem(key);

        if (!isAuth) {
            return typeof initialState === 'function'
                ? initialState()
                : initialState;
        }

        const authData = JSON.parse(isAuth);
        return authData;
    });

    const updateState = (value) => {

        const updatedState = typeof value === 'function'
            ? value(state)
            : value;

        localStorage.setItem(key, JSON.stringify(updateState));
        setState(value);
    }
    return [state, updateState];
}