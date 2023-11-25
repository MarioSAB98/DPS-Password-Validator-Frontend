import React from 'react'
import { validateLogin, validateSignup } from '../utils/validationSchema';
export default function useValidate({ params, type }) {

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const paramsRef = React.useRef({ ...params });
    const [errs, setErrs] = React.useState({});

    const handleChange = (e) => {
        paramsRef.current = { ...paramsRef.current, [e.target.name]: e.target.value };
        if (type === 'login') {
            const errors = validateLogin(paramsRef.current);
            setErrs((prev) => {
                if (errors[e.target.name]) {
                    return { ...prev, [e.target.name]: errors[e.target.name] }
                }
                if (prev[e.target.name]) {
                    let previousState = { ...prev };
                    delete previousState[e.target.name];
                    return previousState;
                }
                return {};
            });
        } else if (type === 'signup') {
            const errors = validateSignup(paramsRef.current);




            setErrs((prev) => {
                if (errors[e.target.name]) {
                    return { ...prev, [e.target.name]: errors[e.target.name] }
                }
                if (prev[e.target.name]) {
                    let previousState = { ...prev };
                    delete previousState[e.target.name];
                    return previousState;
                }
                return {};
            });


        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);



        if (type === 'login') {
            const errors = validateLogin(paramsRef.current);
            setErrs(errors)
            if (JSON.stringify(errors) == "{}") {
                await submit();
            }
        }
        else if (type === 'signup') {
            const errors = validateSignup(paramsRef.current);
            setErrs(errors)
            if (JSON.stringify(errors) == "{}") {
                await submit();
            }
        }
        setLoading(false);
    };

    const submit = async () => {
        setSuccess(false);
        const response = await fetch(import.meta.env.VITE_BASE_URL + `user/${type}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...paramsRef.current }),
        });

        if (!response.ok) {
            const res = await response.json();
            console.log(res)
            setErrs({ [res.errors[0].path[0]]: res.errors[0].message })
        }

        console.log('response:', response.json());
        setLoading(false);
        if (response.status == 200 || response.status == 201) {
            setSuccess(true)
        }
    }

    return { handleChange, handleSubmit, errs, loading, success };
}