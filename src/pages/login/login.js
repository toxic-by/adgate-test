import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { logUserOut } from "../../redux/appSlice";
import LoginForm from "../../components/loginForm/loginForm";
import "./login.css";

const Login = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.app.isLoggedIn);

    const handleLogOut = () => {
        dispatch(logUserOut());
    };

    return (
        <div className="login-page">
            {isLoggedIn ? <button onClick={handleLogOut}>Logout</button> : <LoginForm />}
        </div>
    );
};

export default Login;
