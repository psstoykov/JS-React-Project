import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback) {

    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues)
    }, [initialValues]);

    //TODO adapt for checkbox functionality
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        await submitCallback(values)

        setValues(initialValues) //TODO check this

    }

    return {
        changeHandler,
        values,
        submitHandler
    }
}