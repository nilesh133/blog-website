import Sidebar from "./Sidebar";
import Loader from "./Loader";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEmailAction } from "../store/asyncMethods/ProfileMethods";
import toast, { Toaster } from 'react-hot-toast';
import { RESET_PROFILE_ERRORS } from "../store/types/ProfileTypes";
import { useHistory } from "react-router-dom";
const UpdateEmail = () => {
    const { user: { email, _id } } = useSelector((state) => state.AuthReducer);
    const { redirect, loading } = useSelector((state) => state.PostReducer);
    const { updateErrors } = useSelector((state) => state.UpdateName);
    const [userEmail, setUserEmail] = useState('');
    const dispatch = useDispatch();
    const { push } = useHistory();

    useEffect(() => {
        setUserEmail("");
    }, [])

    const updateEmailMethod = (e) => {
        e.preventDefault();
        dispatch(updateEmailAction({ email: userEmail, id: _id }));
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
            <title>Update Email</title>
            <meta
                name="description"
                content="Update Email"
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
                <div className="card__h3">Update Email</div>
                <div className="group">
                <div className="card__h3__small">Your Previous Email</div>
                    <input type="text"
                        className="group__control"
                        // placeholder="Enter Your New Name"
                        // onChange={(e) => setUserName(e.target.value)}
                        value={email}
                    />
                </div>
                <form onSubmit={updateEmailMethod}>
                    <div className="group">
                    <div className="card__h3__small">Enter Your New Email</div>
                        <input type="text"
                            className="group__control"
                            placeholder="Enter Your New Email"
                            onChange={(e) => setUserEmail(e.target.value)}
                            value={userEmail}
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

export default UpdateEmail;