import React from 'react';
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { postRegister } from "../../store/asyncMethods/AuthMethod";
import { MdOutlinePersonOutline, HiOutlineMail, AiOutlinePhone, IoGitNetworkOutline, RiLockPasswordLine, BsFileEarmarkPerson } from 'react-icons/all';

const Register = (props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        username: '',
        phone: '',
        profession: '',
        age: '',
        password: '',
        confirmpassword: ''
    });

    const { loading, registerErrors, user } = useSelector((state) => state.AuthReducer);
    const dispatch = useDispatch();

    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const userRegister = async (e) => {
        e.preventDefault();
        dispatch(postRegister(state));
    }

    useEffect(() => {
        if (registerErrors.length > 0) {
            registerErrors.map((error) => {
                toast.error(error.msg);
            })
        }
    }, [registerErrors, user]);

    return (
        <>
            <Helmet>
                <title>User Register</title>
                <meta
                    name="description"
                    content="Register Form"
                />
            </Helmet>
            <div className="row mt-64 row-center">
                <div className="col-5 row-height">
                    <div className="bgImage"></div>
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                        toastOptions={{
                            style: {
                                border: '1px solid #713200',
                                fontSize: "0.8rem"
                            },
                        }}
                    />
                </div>
                <div className="col-5 row-height">
                    <div className="account">
                        <div className="account__section">
                            <form onSubmit={userRegister}>
                                <div className="group">
                                    <h2 className="form-heading">Register</h2>
                                </div>
                                <div className="group">
                                    <h4>Name</h4>
                                    <span className="group__icons"><MdOutlinePersonOutline /></span>
                                    <input
                                        type="text"
                                        className="group__control"
                                        placeholder="Enter Your Name"
                                        name="name"
                                        value={state.name}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="group">
                                    <h4>Email</h4>
                                    <span className="group__icons"><HiOutlineMail /></span>
                                    <input type="email"
                                        className="group__control"
                                        placeholder="Enter Your Email"
                                        name="email"
                                        value={state.email}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="group">
                                    <h4>Username</h4>
                                    <span className="group__icons"><BsFileEarmarkPerson /></span>
                                    <input type="text"
                                        className="group__control"
                                        placeholder="Create Your Username"
                                        name="username"
                                        value={state.username}
                                        onChange={handleInputs}
                                    />
                                </div>

                                <div className="group">
                                    <h4>Phone</h4>
                                    <span className="group__icons"><AiOutlinePhone /></span>
                                    <input
                                        type="text"
                                        className="group__control"
                                        placeholder="Enter Your Phone"
                                        name="phone"
                                        value={state.phone}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="group__half">
                                    <div className="group__half__container">
                                        <h4>Profession</h4>
                                        <span className="group__half__icons"><IoGitNetworkOutline /></span>
                                        <input
                                            type="text"
                                            className="group__half__control"
                                            placeholder="Enter Your Profession"
                                            name="profession"
                                            value={state.profession}
                                            onChange={handleInputs}
                                        />
                                    </div>

                                    <div className="group__half__container" >
                                        <h4>Age</h4>
                                        <span className="group__half__icons"><IoGitNetworkOutline /></span>
                                        <input
                                            style={{ marginLeft: "2%" }}
                                            type="number"
                                            className="group__half__control"
                                            placeholder="Enter Your Age"
                                            name="age"
                                            value={state.age}
                                            onChange={handleInputs}
                                        />
                                    </div>
                                </div>
                                <div className = "group__half">
                                    <div className="group__half__container">
                                        <h4>Password</h4>
                                        <input type="password"
                                            className="group__half__control"
                                            placeholder="Enter Your Password"
                                            name="password"
                                            value={state.password}
                                            onChange={handleInputs}
                                        />
                                    </div>

                                    <div className="group__half__container">
                                        <h4>Confirm Password</h4>
                                        <input type="password"
                                            className="group__half__control"
                                            placeholder="Confirm Your Password"
                                            name="confirmpassword"
                                            value={state.confirmpassword}
                                            onChange={handleInputs}
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <input type="submit" className="btn btn-default btn-block" value={loading ? '...' : 'Register'} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
