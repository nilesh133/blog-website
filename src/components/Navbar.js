import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../store/types/UserTypes";

const Navbar = () => {
    const { user } = useSelector((state) => state.AuthReducer);
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem('myToken');
        dispatch({ type: LOGOUT })
    }

    const [homeActive, setHomeActive] = useState(false);
    const [aboutActive, setAboutActive] = useState(false);
    const [createActive, setCreateActive] = useState(false);
    const [dashboardActive, setDashboardActive] = useState(true);
    const [loginActive, setLoginActive] = useState(false);
    const [registerActive, setRegisterActive] = useState(false);

    const homeActiveHandler = () => {
        setHomeActive(true);
        setAboutActive(false);
        setCreateActive(false);
        setDashboardActive(false);
        setLoginActive(false);
        setRegisterActive(false);
    }

    const aboutActiveHandler = () => {
        setAboutActive(true);
        setCreateActive(false);
        setDashboardActive(false);
        setHomeActive(false);
        setLoginActive(false);
        setRegisterActive(false);
    }

    const createActiveHandler = () => {
        setCreateActive(true);
        setAboutActive(false);
        setDashboardActive(false);
        setHomeActive(false);
        setLoginActive(false);
        setRegisterActive(false);
    }

    const dashboardActiveHandler = () => {
        setDashboardActive(true);
        setAboutActive(false);
        setCreateActive(false);
        setHomeActive(false);
        setLoginActive(false);
        setRegisterActive(false);
    }

    const loginActiveHandler = () => {
        setLoginActive(true);
        setAboutActive(false);
        setCreateActive(false);
        setHomeActive(false);
        setDashboardActive(true);
        setRegisterActive(false);
    }

    const registerActiveHandler = () => {
        setRegisterActive(true);
        setAboutActive(false);
        setCreateActive(false);
        setDashboardActive(true);
        setHomeActive(false);
        setLoginActive(false);
    }

    // const linksArr = ["Home", "About", "Create", "Dashboard"];
    // const navActiveHandler = (linkName) => {
    //     for (let i = 0; i < linksArr.length; i++){
    //         if(linksArr[i] == linkName){
    //             let stat = `set${linkName}Active`;
    //             stat(true);
    //         }
    //         else{
    //             let stat = `set${linksArr[i]}Active`;
    //             stat(false);
    //         }
    //     }
    // }

    const Links = user ? <div className="navbar__right">
        <li
            // className={homeActive ? "navbar__active" : null} onClick={() => homeActiveHandler()}
        >
            <Link to="/">Home</Link>
        </li>
        <li
            // className={aboutActive ? "navbar__active" : null} onClick={() => aboutActiveHandler()}
        >
            <Link to="/about">About</Link>
        </li>
        <li
            // className={createActive ? "navbar__active" : null} onClick={() => createActiveHandler()}
        >
            <Link to="/createpost">Create</Link>
        </li>
        <li
            // className={dashboardActive ? "navbar__active" : null} onClick={() => dashboardActiveHandler()}
        >
            {/* <Link to = "/dashboard">{user.name}</Link> */}
            <Link to="/dashboard">Dashboard</Link>
        </li>
        <p>
            <span onClick={logout}>Logout</span>
        </p>
    </div> : <div className="navbar__right">
        <li
            // className={loginActive ? "navbar__active" : null} onClick={() => loginActiveHandler()}
        >
            <Link to="/login">Login</Link>
        </li>
        <li
            // className={registerActive ? "navbar__active" : null} onClick={() => registerActiveHandler()}
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
