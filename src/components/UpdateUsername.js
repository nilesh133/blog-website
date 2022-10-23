import Sidebar from "./Sidebar";
import Loader from "./Loader";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsernameAction } from "../store/asyncMethods/ProfileMethods";
import toast, { Toaster } from 'react-hot-toast';
import { RESET_PROFILE_ERRORS } from "../store/types/ProfileTypes";
import { useHistory } from "react-router-dom";
const UpdateUsername = () => {
    const { user: { username, _id } } = useSelector((state) => state.AuthReducer);
    const { redirect, loading } = useSelector((state) => state.PostReducer);
    const { updateErrors } = useSelector((state) => state.UpdateName);
    const [userUsername, setuserUsername] = useState('');
    const dispatch = useDispatch();
    const { push } = useHistory();

    useEffect(() => {
        setuserUsername("");
    }, [])

    const updateUsernameMethod = (e) => {
        e.preventDefault();
        dispatch(updateUsernameAction({ username: userUsername, id: _id }));
    }

    useEffect(() => {
        if (updateErrors.length !== 0) {
            updateErrors.map((error) => {
                toast.error(error.msg);
            })
            dispatch({ type: RESET_PROFILE_ERRORS });
        }
    }, [updateErrors]);

    useEffect(() => {
        if (redirect) {
            push('/dashboard');
        }
    }, [redirect]);

    return !loading ? <div className="container mt-96">
        <Helmet>
            <title>Update Username</title>
            <meta
                name="description"
                content="Update Usename"
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
                <div className="card__h3">Update Username</div>
                <div className="group">
                <div className="card__h3__small">Your Previous Username</div>
                    <input type="text"
                        className="group__control"
                        // placeholder="Enter Your New Name"
                        // onChange={(e) => setUserName(e.target.value)}
                        value={username}
                    />
                </div>
                <form onSubmit={updateUsernameMethod}>
                    <div className="group">
                    <div className="card__h3__small">Enter Your New Username</div>
                        <input type="text"
                        
                            className="group__control"
                            placeholder="Enter Your New Username"
                            onChange={(e) => setuserUsername(e.target.value)}
                            value={userUsername}
                        />
                    </div>
                    <div className="group">
                        <input style={{ width: "30%" }} type="submit" className="btn" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    </div> : <Loader />
}

export default UpdateUsername;