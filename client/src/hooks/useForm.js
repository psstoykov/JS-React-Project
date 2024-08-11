import { useState } from "react";

export function useForm(initialValues, submitCallback) {

    const [values, setValues] = useState(initialValues);

    //TODO adapt for checkbox functionality
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values)
    }

    return {
        changeHandler,
        values,
        submitHandler
    }
}