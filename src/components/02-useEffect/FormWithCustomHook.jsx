import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import "./effects.css";

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: ""
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log("Email cambió");
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with Custom Hook</h1>
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

            <div className="form-group">
                <input 
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button className="btn btn-primary" type="submit">Guardar</button>
        </form>
    )
}
