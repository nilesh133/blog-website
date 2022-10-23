import React from 'react';
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { postLogin } from "../../store/asyncMethods/AuthMethod";
import toast, { Toaster } from 'react-hot-toast';
import { RESET_LOGIN_MESSAGE } from "../../store/types/UserTypes";
const Login = () => {
    const dispatch = useDispatch();
    const { loginErrors, loading, message } = useSelector((state) => state.AuthReducer);
    console.log(message);
    const [state, setState] = useState({
        email: '',
        password: ''
    });
    useEffect(() => {
        if (message) {
            toast.success(message);
            dispatch({ type: RESET_LOGIN_MESSAGE });
        }
    }, [message]);

    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const userLogin = (e) => {
        e.preventDefault();
        dispatch(postLogin(state));
    }

    useEffect(() => {
        if (loginErrors.length > 0) {
            loginErrors.map((error) => {
                toast.error(error.msg);
            })
        }
    }, [loginErrors]);

    return (
        <>
            <Helmet>
                <title>User Login</title>
                <meta
                    name="description"
                    content="Login Form"
                />
            </Helmet>
            <div className="row row-center mt-64">
                <div className="col-4 row-height">
                    <div className="bgImage"></div>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                        toastOptions={{
                            style: {
                                border: 'none',
                                fontSize: "0.8rem",
                                borderLeft: "3px solid red",
                            },
                        }}
                    />
                </div>
                <div className="col-4 row-height">
                    <div className="account">
                        <div className="account__section">
                            <form onSubmit={userLogin}>
                                <div className="group">
                                    <h3 className="form-heading">Login</h3>
                                </div>
                                <div className="group">
                                    <h4>Email</h4>
                                    <input type="email"
                                        className="group__control"
                                        name='email'
                                        value={state.email}
                                        onChange={handleInputs}
                                        placeholder="Enter Your Email" />
                                </div>
                                <div className="group">
                                    <h4>Password</h4>
                                    <input type="password"
                                        name='password'
                                        value={state.password}
                                        onChange={handleInputs}
                                        className="group__control"
                                        placeholder="Enter Your Password" />
                                </div>
                                <div className="group">
                                    <input type="submit" className="btn btn-default btn-block" value={loading ? '...' : 'Login'} />
                                </div>
                            </form>

                            <div className="group login-separator">
                                <span>OR</span>
                            </div>

                            <div className="group">
                                <div className="group__control__login__fb">
                                    <a href="/">LOGIN WITH FACEBOOK</a>
                                </div>

                            </div>
                            <div className="group">
                                <div className="group__control__login__google">
                                    <a href="/">LOGIN WITH GOOGLE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login


// email verification
// articles view
// update user photo