import React, { useState, useEffect } from 'react';
import { Message } from './Message';

import "./effects.css";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });

    const { name, email } = formState;

    useEffect(() => {
        /* console.log("Hey"); */
    }, []);

    useEffect(() => {
        /* console.log("formState cambió"); */
    }, [formState]);

    useEffect(() => {
        /* console.log("email cambió"); */
    }, [email]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    };

    return (
        <>
            <h1>Use Effect</h1>
            <hr />

            <div className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
            </div>

            <div className="form-group">
                <input 
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
            </div>

            {(name === "123") && <Message />}
        </>
    )
}
