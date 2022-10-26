import Sidebar from "./Sidebar";
import Loader from "./Loader";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAgeAction } from "../store/asyncMethods/ProfileMethods";
import toast, { Toaster } from 'react-hot-toast';
import { RESET_PROFILE_ERRORS } from "../store/types/ProfileTypes";
import { useHistory } from "react-router-dom";
const UpdateAge = () => {
    const { user: { age, _id } } = useSelector((state) => state.AuthReducer);
    const { redirect, loading } = useSelector((state) => state.PostReducer);
    const { updateErrors } = useSelector((state) => state.UpdateName);
    const [userAge, setUserAge] = useState('');
    const dispatch = useDispatch();
    const { push } = useHistory();

    useEffect(() => {
        setUserAge("");
    }, [])

    const updateAgeMethod = (e) => {
        e.preventDefault();
        dispatch(updateAgeAction({ age: userAge, id: _id }));
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
            <title>Update Age</title>
            <meta
                name="description"
                content="Update Age"
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
                <div className="card__h3">Update Age</div>
                <div className="group">
                <div className="card__h3__small">Your Previous Age</div>
                    <input type="text"
                        className="group__control"
                        value={age}
                    />
                </div>
                <form onSubmit={updateAgeMethod}>
                    <div className="group">
                    <div className="card__h3__small">Enter Your New Age</div>
                        <input type="text"
                            className="group__control"
                            placeholder="Enter Your New Email"
                            onChange={(e) => setUserAge(e.target.value)}
                            value={userAge}
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

export default UpdateAge;