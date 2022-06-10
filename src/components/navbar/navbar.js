import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Link to={"/"}>Home</Link>
            </div>
            <div>
                <Link to={"/login"}>Login</Link>
            </div>
            <div>
                <Link to={"/profile"}>Profile</Link>
            </div>
            <div>
                <Link to={"/news"}>News</Link>
            </div>
        </div>
    );
};

export default Navbar;
