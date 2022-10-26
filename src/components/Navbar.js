import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../store/types/UserTypes";

const Navbar = () => {
    const [path, setPath] = useState('')
    const { user } = useSelector((state) => state.AuthReducer);
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem('myToken');
        dispatch({ type: LOGOUT })
    }

    const Links = user ? <div className="navbar__right">
        <li
        onClick={() => setPath("/")}
        className={path === "/" ? "navbar__active" : null}
        >
            <Link to="/">Home</Link>
        </li>
        <li onClick={() => setPath("/about")}
        className={path === "/about" ? "navbar__active" : null}
        >
            <Link to="/about">About</Link>
        </li>
        <li
        onClick={() => setPath("/create")}
        className={path === "/create" ? "navbar__active" : null}
        >
            <Link to="/createpost">Create</Link>
        </li>
        <li
        onClick={() => setPath("/dashboard")}
        className={path === "/dashboard" ? "navbar__active" : null}
        >
            <Link to="/dashboard">Dashboard</Link>
        </li>
        <p>
            <span onClick={logout}>Logout</span>
        </p>
    </div> : <div className="navbar__right">
        <li
        onClick={() => setPath("/login")}
        className={path === "/login" ? "navbar__active" : null}
        >
            <Link to="/login">Login</Link>
        </li>
        <li
        onClick={() => setPath("/register")}
        className={path === "/register" ? "navbar__active" : null}
        >
            <Link to="/register">Register</Link>
        </li>
    </div>
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__row">
                    <div className="navbar__left">
                        <Link to="/">
                            Blog
                        </Link>
                    </div>
                    {Links}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
