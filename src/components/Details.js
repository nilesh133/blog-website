import React from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDetailView } from "../store/asyncMethods/PostMethods";
import Loader from './Loader';
import moment from "moment";
import { Helmet } from "react-helmet";
import {FaFacebookF, BsInstagram, FaLinkedinIn, FaPinterestP} from "react-icons/all";
// const { convert } = require('html-to-text');
const Details = () => {
    const { id } = useParams();
    const { loading, detailPost } = useSelector(state => state.PostReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postDetailView(id));
    }, [id])
    // console.log(detailPost);
    // const bodyContentHtml = String(detailPost.description);
    // const bodyContentText = bodyContentHtml.replace(/<[^>]+>/g, '');
    return (
        <>
            <div className="container">
                <div className="row mt-96 mt-128">
                    <div className='col-8'>
                        <div className='person'>
                            <div className='person__heading'>
                            <p className='person__heading__p'>Written By:</p>
                                <div className='person__heading__icons'>
                                    <div className='person__heading__icons__fb'>
                                        <FaFacebookF/>
                                    </div>
                                    <div className='person__heading__icons__insta'>
                                        <BsInstagram/>
                                    </div>
                                    <div className='person__heading__icons__twi'>
                                        <FaLinkedinIn/>
                                    </div>
                                    <div className='person__heading__icons__pint'>
                                        <FaPinterestP/>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='person__details'>
                                <div className='person__details__image'></div>
                                <div className="person__details__name">
                                    <span>{detailPost.userName}</span>
                                    <span>{moment(detailPost.updatedAt).format("MMM Do YY")}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-8">
                        {!loading ?
                            <div className="detail">
                                <Helmet>
                                    <title>{detailPost.title}</title>
                                    <meta
                                        name="description"
                                        content={detailPost.title}
                                    />
                                </Helmet>

                                <div className="detail__details">
                                    <h3 className="detail__details__title">
                                        {detailPost.title}
                                    </h3>
                                    {/* <p className="detail__details__body">
                                        {detailPost.body}
                                    </p> */}
                                </div>
                                <div className="detail__image">
                                    <img src={`/images/${detailPost.image}`} alt={detailPost.image} />
                                </div>
                                <div className="detail__header" style={{ marginBottom: "1.5rem" }}>

                                    {/* <div className="detail__header__avator">
                                        {detailPost.userName ? detailPost.userName[0] : ''}
                                    </div>
                                    <div className="detail__header__userdetails">
                                        <span>{detailPost.userName}</span>
                                        <span>{moment(detailPost.updatedAt).format("MMM Do YY")}</span>
                                    </div> */}
                                </div>

                                <p className="detail__details__body">
                                    {/* {bodyContentText} */}
                                    {detailPost.description}
                                    
                                </p>

                            </div>
                            : <Loader />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
