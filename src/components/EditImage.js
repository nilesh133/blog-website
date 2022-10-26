import React from 'react';
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateImageAction } from "../store/asyncMethods/PostMethods";
import toast, { Toaster } from 'react-hot-toast';
import { RESET_UPDATE_IMAGE_ERROR } from "../store/types/PostTypes";
import { postDetailView } from "../store/asyncMethods/PostMethods";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

const EditImage = () => {
    const { id } = useParams();
    const { push } = useHistory();
    const dispatch = useDispatch();
    const { loading, detailPost } = useSelector(state => state.PostReducer);
    useEffect(() => {
        dispatch(postDetailView(id));
    }, [id])

    const [imageName, setImageName] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const { updateImageErrors } = useSelector(state => state.UpdateImage);
    const { redirect } = useSelector(state => state.PostReducer);

    const fileHandle = (e) => {
        if (e.target.files.length !== 0) {
            setImageName(e.target.files[0]);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const updateImage = (e) => {
        e.preventDefault();
        const imageRef = ref(storage, `allPostImages/${imageName.name + v4()}`);
        uploadBytes(imageRef, imageName).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                dispatch(updateImageAction({
                    imageUrl: url,
                    id: id
                })
                );
            });
        })
    }

    useEffect(() => {
        if (updateImageErrors.length !== 0) {
            updateImageErrors.map(error => {
                toast.error(error.msg);
            })
            dispatch({ type: RESET_UPDATE_IMAGE_ERROR });
        }
    }, [updateImageErrors]);

    useEffect(() => {
        if (redirect) {
            push('/dashboard');
        }
    }, [redirect]);

    return (
        <div className="container mt-96 mt-128">
            <Helmet>
                <title>User Dashboard</title>
                <meta
                    name="description"
                    content="Register Form"
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
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card__h3">Update Post Image</div>
                        <form onSubmit={updateImage}>
                            <div className="group">
                                <div className="card__h3__small">Your Previous Image</div>
                                <div className="imagePreview">
                                    <img src={detailPost.imageUrl} alt={detailPost.imageUrl} />
                                </div>
                            </div>
                            <div className="group">
                                <label htmlFor="image" className="image__label">{imageName === null ? "Click to select image" : imageName.name}</label>
                                <input type="file"
                                    name="image"
                                    id="image"
                                    className="group__control"
                                    onChange={fileHandle}
                                />
                            </div>

                            <div className="group">
                                <div className="card__h3__small">Your New Image Will Appear Here</div>
                                <div className="imagePreview">
                                    {imagePreview ? <img src={imagePreview} /> : ''}
                                </div>
                            </div>
                            <div className="group">
                                <input type="submit" value="Update Image" className="btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditImage
