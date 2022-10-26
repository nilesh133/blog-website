import React from 'react'
import Helmet from 'react-helmet';
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, updateAction } from "../store/asyncMethods/PostMethods";
import { POST_RESET, RESET_UPDATE_ERRORS } from "../store/types/PostTypes";
import toast, { Toaster } from 'react-hot-toast';
import Loader from "./Loader";
const Edit = () => {
    const { push } = useHistory();
    const { id } = useParams();
    const [value, setValue] = useState('');
    const [state, setState] = useState({
        title: '',
        description: '',
        category: ''
    })

    const dispatch = useDispatch();
    const { loading, redirect } = useSelector(state => state.PostReducer);
    const { post, postStatus } = useSelector(state => state.FetchPost);
    const { editErrors } = useSelector(state => state.UpdatePost);
    useEffect(() => {
        if (postStatus) {
            setState({
                title: post.title,
                description: post.description,
                category: post.category
            })
            setValue(post.body);
            dispatch({ type: POST_RESET });
        }
        else {
            dispatch(fetchPost(id));
        }
    }, [post]);

    const updatePost = (e) => {
        e.preventDefault();
        dispatch(updateAction({
            title: state.title,
            // body: value,
            category: state.category,
            description: state.description,
            id: post._id
        })
        );
    };

    useEffect(() => {
        if (editErrors.length !== 0) {
            editErrors.map(error => {
                toast.error(error.msg);
            })
            dispatch({ type: RESET_UPDATE_ERRORS });
        }
    }, [editErrors]);

    useEffect(() => {
        if (redirect) {
            push('/dashboard');
        }
    }, [redirect])

    const handleCategory = (e) => {
        setState({
            ...state,
            category: e.target.value
        })
    }

    return !loading ? <div className="mt-96">
        <Helmet>
            <title>Edit Post</title>
            <meta
                name="description"
                content="Edit Post"
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
        <div className="container mt-128">
            <form onSubmit={updatePost}>
                <div className='row'>
                    <div className='col-1'>
                        <div className="group">
                            <input type="submit" className="btn" name="" id="" value="PUBLISH" />
                        </div>
                    </div>
                </div>
                <div className="row ml-minus-16 mr-minus-16">
                    <div className="col-9" style={{ padding: "1rem" }}>
                        <div className="card">
                            <div className="card__h3">Edit post</div>

                            <div className="group">
                                <label htmlFor="title">Post title</label>
                                <input type="text"
                                    name="title"
                                    id="title"
                                    className="group__control"
                                    placeholder="Post title"
                                    value={state.title}
                                    onChange={(e) => setState({ ...state, title: e.target.value })}
                                    onKeyUp={(e) => setState({ ...state, title: e.target.value })}
                                />
                            </div>
                            <div className="group">
                                    <label htmlFor="">Category</label>
                                    <select className="group__control" name="category" value = {state.category} onChange={handleCategory}>
                                        <option value="technology">Technology</option>
                                        <option value="entertainment">Entertainment</option>
                                        <option value="sports">Sports</option>
                                        <option value="politics">Politics</option>
                                        <option value="health">Health</option>
                                        <option value="lifestyle">Lifestyle</option>
                                    </select>
                                </div>
                            <div className="group">
                                <label htmlFor="description">Blog Description</label>
                                <textarea
                                style = {{height: "400px"}}
                                    name="description"
                                    id="description"
                                    cols="30"
                                    rows="10"
                                    defaultValue={state.description}
                                    onChange={(e) => setState({ ...state, description: e.target.value })}
                                    className="group__control"
                                    placeholder="Write Your Blog Here..."
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div> : <Loader />
}

export default Edit
