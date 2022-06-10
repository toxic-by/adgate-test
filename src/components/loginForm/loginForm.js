import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";
import { logUserIn } from "../../redux/appSlice";

const LoginForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "Admin" && password === "12345") {
            dispatch(logUserIn());
            navigate(`/profile`);
        } else {
            setErrorMessage("Неверное имя или пароль");
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Введите имя</label>
                </div>
                <input
                    className="login-input"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <div>
                    <label>Введите пароль</label>
                </div>
                <input
                    className="login-input"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="login-error">{errorMessage ? errorMessage : null}</div>
            <input className="login-button" type="submit" value="Login" />
        </form>
    );
};

export default LoginForm;
