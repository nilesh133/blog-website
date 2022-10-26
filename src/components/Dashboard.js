import React from 'react';
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { REDIRECT_FALSE, REMOVE_MESSAGE, SET_LOADER, CLOSE_LOADER, SET_MESSAGE } from "../store/types/PostTypes";
import toast, { Toaster } from 'react-hot-toast';
import { fetchPosts } from "../store/asyncMethods/PostMethods";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import Sidebar from "./Sidebar";
import Noresult from "./Noresult";
import Pagination from "./Pagination";
import axios from "axios";
import moment from "moment";
import { AiFillEdit, BsImageFill, AiFillDelete } from 'react-icons/all';


const Dashboard = () => {


    const { redirect, message, loading } = useSelector(state => state.PostReducer);
    const { user: { _id }, token } = useSelector(state => state.AuthReducer);
    const { posts, count, perPage } = useSelector(state => state.FetchPosts);
    let { page } = useParams();
    if (page === undefined) {
        page = 1;
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if (redirect) {
            dispatch({ type: REDIRECT_FALSE });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: REMOVE_MESSAGE });
        }
    }, [message]);

    useEffect(() => {
        dispatch(fetchPosts(_id, page));
    }, [page])

    const deletePost = async (id) => {
        const confirm = window.confirm("You want to delete this post");
        if (confirm) {
            dispatch({ type: SET_LOADER });
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
                const { data: { msg } } = await axios.get(`/delete/${id}`, config);
                dispatch(fetchPosts(_id, page));
                dispatch({ type: SET_MESSAGE, payload: msg })
            } catch (err) {
                dispatch({ type: CLOSE_LOADER });
            }
        }
    }

    const showSettingsOptions = (e) => {
        e.classList.toggle("setting_active");
    }

    return (
        <>
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
            <div className="container mt-64 mt-128">
                <div className="row row ml-minus-16 mr-minus-16">
                    <div className="col-4" style={{ padding: "1rem" }}>
                        <Sidebar />
                    </div>
                    <div className="col-8" style={{ padding: "1rem" }}>

                        {!loading ? posts.length > 0 ? posts.map(post => (
                            <div className="dashboard" key={post._id}>
                                
                                <div className="dashboard__detail">
                                    <div className='dashboard__detail__title'>
                                        <Link to={`/postview/${post._id}`}>{post.title}</Link>
                                        <p className="post__details__body">
                                            {String(post.description.slice(0, 250)).replace(/<[^>]+>/g, '')}.....
                                            <Link to={`/postview/${post._id}`} className="readmore">Read more</Link>
                                        </p>
                                        <span>Published {moment(post.updatedAt).fromNow()}</span>
                                    </div>
                                    <div className="dashboard__detail__icons">
                                        <Link to={`/updateimage/${post._id}`}><BsImageFill style={{ color: "#000" }} /><span>Edit Image</span></Link>
                                        <Link to={`/editpost/${post._id}`}><AiFillEdit style={{ color: "#000" }} /><span>Edit Post</span></Link>
                                        <span style={{cursor: "pointer"}}><AiFillDelete onClick={() => deletePost(post._id)} style={{ color: "#000" }} /><span>Delete Post</span></span>
                                    </div>

                                </div>

                                <div className="dashboard__image">
                                    <img src={post.imageUrl} alt={post.image} />
                                </div>
                            </div>



                        )) : <Noresult noresultMessage = {"You don't have any posts. Start creating..."}/> : <Loader />}
                        <Pagination page={page} perPage={perPage} count={count} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard