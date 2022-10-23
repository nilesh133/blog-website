import Sidebar from "./Sidebar";
import Loader from "./Loader";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePasswordAction } from "../store/asyncMethods/ProfileMethods";
import {RESET_PASSWORD_UPDATE_ERRORS} from "../store/types/ProfileTypes";
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from "react-router-dom";
const ChangePassword = () => {
    const [state, setState] = useState({
        currentPassword: '',
        newPassword: '',
        userId: null
    })

    const dispatch = useDispatch();
    const { redirect, loading } = useSelector((state) => state.PostReducer);
    const { updatePasswordErrors } = useSelector((state) => state.UpdatePassword);
    const { user: {_id } } = useSelector((state) => state.AuthReducer);
    const {push} = useHistory();

    const updatePasswordMethod = (e) => {
        e.preventDefault();
        dispatch(updatePasswordAction({
            currentPassword: state.currentPassword,
            newPassword: state.newPassword,
            userId: _id
        }));
    }

    const handlePassword = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (updatePasswordErrors.length !== 0) {
            updatePasswordErrors.map((error) => {
                toast.error(error.msg);
            })
            dispatch({type: RESET_PASSWORD_UPDATE_ERRORS});
        }
    }, [updatePasswordErrors]);

    useEffect(() => {
        if(redirect){
            push('/dashboard');
        }
    }, [redirect]);

    return !loading ? <div className="container mt-96">
        <Helmet>
            <title>Update Password</title>
            <meta
                name="description"
                content="Update Password"
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
        <div className="row ml-minus-16 mr-minus-16">
            <div className="col-4" style={{ padding: "1rem" }}>
                <Sidebar />
            </div>
            <div className="col-8" style={{ padding: "1rem" }}>
                <div className="card__h3">Change Password</div>
                <form onSubmit={updatePasswordMethod}>
                    <div className="group">
                        <input type="password"
                            name="currentPassword"
                            className="group__control"
                            placeholder="Current Password"
                            onChange={handlePassword} />
                    </div>
                    <div className="group">
                        <input type="password"
                            name="newPassword"
                            className="group__control"
                            placeholder="New Password"
                            onChange={handlePassword}
                        />
                    </div>
                    <div className="group">
                        <input style = {{width: "30%"}} type="submit" className="btn" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    </div> : <Loader />
}

export default ChangePassword;