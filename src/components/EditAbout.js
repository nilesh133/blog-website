import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { updateAboutAction } from "../store/asyncMethods/ProfileMethods";
import toast, { Toaster } from 'react-hot-toast';
import { RESET_ABOUT_UPDATE_ERRORS, UPDATE_ABOUT_RESET } from "../store/types/ProfileTypes";
import { useHistory } from "react-router-dom";
import Loader from "./Loader";
const EditAbout = () => {
    const { push } = useHistory();
    const { user } = useSelector(state => state.AuthReducer);
    const { updateAboutErrors, userUpdateStatus } = useSelector((state) => state.UpdateAbout);
    const { redirect, loading } = useSelector((state) => state.PostReducer);
    const dispatch = useDispatch();


    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        username: '',
        profession: '',
        phone: '',
        age: ''
    });

    useEffect(() => {
        setUserDetails({
            name: user.name,
            email: user.email,
            username: user.username,
            profession: user.profession,
            phone: user.phone,
            age: user.age
        })
    }, [user])

    const updateAboutMethod = (e) => {
        e.preventDefault();
        dispatch(updateAboutAction({
            id: user._id,
            name: userDetails.name,
            email: userDetails.email,
            username: userDetails.username,
            profession: userDetails.profession,
            phone: userDetails.phone,
            age: userDetails.age,
        }));
    }
    useEffect(() => {
        if (updateAboutErrors.length !== 0) {
            updateAboutErrors.map((error) => {
                toast.error(error.msg);
            })
            dispatch({ type: RESET_ABOUT_UPDATE_ERRORS });
        }
    }, [updateAboutErrors]);

    useEffect(() => {
        if (redirect) {
            push('/about');
        }
    }, [redirect]);

    const handleInputs = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    }

    return !loading ?
        <div className="row mt-96 mr-ml-about md-about edit__about">
            <Helmet>
                <title>Update User Info</title>
                <meta
                    name="description"
                    content="Update About User"
                />
            </Helmet>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        border: '1px solid #713200',
                        fontSize: "0.8rem"
                    },
                }}
            />
            <div className="col-4" style={{ padding: "1rem" }}>
                <div className="bgImageAbout"></div>
            </div>

            <div className="col-8" style={{ padding: "1rem" }}>
                <div className="group">
                    <h2 className="edit__about__heading">Edit About</h2>
                </div>
                <form onSubmit={updateAboutMethod}>
                    <div className="edit__about__group">
                        <h4 className="edit__about__group__heading">Enter New Name</h4>
                        <input type="text"
                            className="edit__about__group__control"
                            name="name"
                            placeholder="Enter Your New Name"
                            value={userDetails.name}
                            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                        />
                    </div>
                    <div className="edit__about__group">
                        <h4 className="edit__about__group__heading">Enter New Email</h4>
                        <input type="email"
                            className="edit__about__group__control"
                            name="email"
                            placeholder="Enter Your New Email"
                            value={userDetails.email}
                            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                        />
                    </div>
                    <div className="edit__about__group">
                        <h4 className="edit__about__group__heading">Enter New Username</h4>
                        <input type="text"
                            className="edit__about__group__control"
                            name="username"
                            placeholder="Enter Your New Username"
                            value={userDetails.username}
                            onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                        />
                    </div>
                    <div className="edit__about__group">
                        <h4 className="edit__about__group__heading">Enter New Profession</h4>
                        <input type="text"
                            className="edit__about__group__control"
                            name="profession"
                            placeholder="Enter Your New Profession"
                            value={userDetails.profession}
                            onChange={(e) => setUserDetails({ ...userDetails, profession: e.target.value })}
                        />
                    </div>
                    <div className="edit__about__group">
                        <h4 className="edit__about__group__heading">Enter New Phone</h4>
                        <input type="text"
                            className="edit__about__group__control"
                            name="phone"
                            placeholder="Enter Your New Phone"
                            value={userDetails.phone}
                            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                        />
                    </div>
                    <div className="edit__about__group">
                        <h4 className="edit__about__group__heading">Enter New Age</h4>
                        <input type="text"
                            className="edit__about__group__control"
                            name="age"
                            placeholder="Enter Your New Age"
                            value={userDetails.age}
                            onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })}
                        />
                    </div>
                    <div className="edit__about__group">
                        <input type="submit" className="btn" value="Submit" />
                    </div>
                </form>
            </div>
        </div> : <Loader />
}

export default EditAbout
