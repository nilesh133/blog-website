import React from 'react';
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Loader from './Loader';
import moment from "moment";
import  Noresult from "./Noresult";

const HomeBody = (homePosts) => {
    const titleBgColor = [
        "rgb(0,33,71)",
        "rgb(8,8,8)",
        "rgb(72,60,50)",
        "rgb(0,71,171)",
        "rgb(85,107,47)"
    ]
    console.log(homePosts)
    const { loading } = useSelector(state => state.PostReducer);
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta
                    name="description"
                    content="This is a Blog Website"
                />
            </Helmet>
            <div className="container">
                <div className="row ml-minus-16 mr-minus-16">
                    <div className="home">
                        {
                            !loading ? homePosts.allPosts.length > 0 ? homePosts.allPosts.map((post, i) => (
                                i == 0 ?
                                    <div className="home__post" key={post._id} style={{ gridColumn: "1 / span 2", width: "100%" }}>
                                        <div className="post__image">
                                            <img src={`/images/${post.image}`} alt={post.image} />
                                        </div>

                                        <div className="post">
                                            {/* <div className="post__header">
                                            <div className="post__header__avator">
                                                {post.userName[0]}
                                            </div>
                                            <div className="post__header__userdetails">
                                                <span>{post.userName}</span>
                                                <span>{moment(post.updatedAt).format("MMM Do YY")}</span>
                                            </div>
                                        </div> */}
                                            <div className="post__details">
                                                {/* <h3 className="post__details__title">
                                                <Link to={`/detailView/${post._id}`}>{post.title.slice(0, 40)}...</Link>
                                            </h3>
                                            <h4 className='post__details__category'>{post.category}</h4> */}
                                                {/* <p className="post__details__body">
                                                {post.body.slice(0, 200)}...
                                                
                                            </p> */}
                                                <div className="post__details__title" style={{ background: `linear-gradient(to bottom, transparent, ${titleBgColor[i % titleBgColor.length]})` }}>
                                                    <h4>{post.userName} . {moment(post.updatedAt).format("MMM Do YY")}</h4>
                                                    <Link to={`/postview/${post._id}`}>{post.title.slice(0, 150)}...</Link>
                                                </div>

                                            </div>
                                            {/* <span className='post__readmore'><Link to={`/detailView/${post._id}`}>Read more</Link></span> */}
                                        </div>




                                    </div> :
                                    <div className="home__post" key={post._id}>
                                        <div className="post__image">
                                            <img src={`/images/${post.image}`} alt={post.image} />
                                        </div>

                                        <div className="post">
                                            {/* <div className="post__header">
                                        <div className="post__header__avator">
                                            {post.userName[0]}
                                        </div>
                                        <div className="post__header__userdetails">
                                            <span>{post.userName}</span>
                                            <span>{moment(post.updatedAt).format("MMM Do YY")}</span>
                                        </div>
                                    </div> */}
                                            <div className="post__details">
                                                {/* <h3 className="post__details__title">
                                            <Link to={`/detailView/${post._id}`}>{post.title.slice(0, 40)}...</Link>
                                        </h3>
                                        <h4 className='post__details__category'>{post.category}</h4> */}
                                                {/* <p className="post__details__body">
                                            {post.body.slice(0, 200)}...
                                            
                                        </p> */}
                                                <div className="post__details__title" style={{ background: `linear-gradient(to bottom, transparent, ${titleBgColor[i % titleBgColor.length]},${titleBgColor[i % titleBgColor.length]})` }}>
                                                    <h4>{post.userName} . {moment(post.updatedAt).format("MMM Do YY")}</h4>

                                                    <Link to={`/postview/${post._id}`}>{post.title.slice(0, 80)}...</Link>
                                                </div>

                                            </div>
                                            {/* <span className='post__readmore'><Link to={`/detailView/${post._id}`}>Read more</Link></span> */}
                                        </div>




                                    </div>

                            )) : <div style={{fontSize: "1.2rem", color: "white"}}>No posts of this category...</div> : <Loader />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBody;