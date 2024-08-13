import { useState } from "react";

export default function usePersistState(key, initialState) {

    const [state, setState] = useState(initialState)

    const updateState = (value) => {

        localStorage.setItem(key, JSON.stringify(value))
        setState(value)
    }
    return [state, updateState];
}