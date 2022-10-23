import React from 'react';

import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { homePosts } from "../store/asyncMethods/PostMethods";
import { homeTestingPosts } from "../store/asyncMethods/PostMethods";
import { useParams, Link } from "react-router-dom";
import Loader from './Loader';
import moment from "moment";

const Home = () => {
    useEffect(() => {
        dispatch(homeTestingPosts());
    }, [])
    // let { page } = useParams();

    // if(page === undefined){
    //     page = 1;
    // }

    const { loading } = useSelector(state => state.PostReducer);
    const { homePosts } = useSelector(state => state.HomeTestingPosts);
    // const [allPosts, setAllPosts] = useState(homePosts);
    // const { posts } = useSelector((state) => state.FetchPosts);
    const dispatch = useDispatch();
    // console.log(posts);

    console.log(homePosts);
    // console.log(allPosts);
    // console.log(page);
    // console.log(count);
    // console.log(perPage);
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta
                    name="description"
                    content="This is a Blog Website"
                />
            </Helmet>
            <div className="container mt-64">
                <div className="row ml-minus-16 mr-minus-16 mt-96">
                    <div className="home">
                        {
                            !loading ? homePosts.length > 0 ? homePosts.map(post => (
                                <div className="home__post" key={post._id}>
                                    <div className="post__image">
                                        <img src={`/images/${post.image}`} alt={post.image} />
                                    </div>

                                    <div className="post">
                                        <div className="post__header">
                                            <div className="post__header__avator">
                                                {post.userName[0]}
                                            </div>
                                            <div className="post__header__userdetails">
                                                <span>{post.userName}</span>
                                                <span>{moment(post.updatedAt).format("MMM Do YY")}</span>
                                            </div>
                                        </div>
                                        <div className="post__details">
                                            <h3 className="post__details__title">
                                                <Link to={`/postview/${post._id}`}>{post.title.slice(0, 40)}...</Link>
                                            </h3>
                                            <h4 className='post__details__category'>{post.category}</h4>
                                            <p className="post__details__body">
                                                {post.body.slice(0, 200)}...
                                                
                                            </p>
                                            
                                        </div>
                                        <span className='post__readmore'><Link to={`/postview/${post._id}`}>Read more</Link></span>
                                    </div>




                                </div>
                            )) : "No posts" : <Loader />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;