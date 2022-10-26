import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { homeTestingPosts } from "../store/asyncMethods/PostMethods";
import { useParams, Link } from "react-router-dom";
import Loader from './Loader';
import moment from "moment";
import HomeBody from './HomeBody';

const HomeMain = () => {
    const { redirect } = useSelector((state) => state.PostReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(homeTestingPosts());
    }, [redirect])

    const { homePosts } = useSelector(state => state.HomeTestingPosts);
    const [allPosts, setAllPosts] = useState(homePosts);
    const filterPosts = (category) => {
        const updatedPosts = homePosts.filter((curr) => {
            return curr.category === category;
        })
        setAllPosts(updatedPosts);
    }

    const [technologyActive, setTechnologyActive] = useState(false);
    const [entertainmentActive, setEntertainmentActive] = useState(false);
    const [sportsActive, setsportsActive] = useState(false);
    const [politicsActive, setPoliticsActive] = useState(false);
    const [healthActive, setHealthActive] = useState(false);
    const [lifestyleActive, setLifestyleActive] = useState(false);
    const [allActive, setAllActive] = useState(true);

    const technologyActiveHandler = () => {
        setTechnologyActive(true);
        setEntertainmentActive(false);
        setsportsActive(false);
        setPoliticsActive(false);
        setHealthActive(false);
        setLifestyleActive(false);
        setAllActive(false);
    }

    const entertainmentActiveHandler = () => {
        setEntertainmentActive(true);
        setTechnologyActive(false);
        setsportsActive(false);
        setPoliticsActive(false);
        setHealthActive(false);
        setLifestyleActive(false);
        setAllActive(false);
    }

    const sportsActiveHandler = () => {
        setsportsActive(true);
        setTechnologyActive(false);
        setEntertainmentActive(false);
        setPoliticsActive(false);
        setHealthActive(false);
        setLifestyleActive(false);
        setAllActive(false);
    }

    const politicsActiveHandler = () => {
        setPoliticsActive(true);
        setTechnologyActive(false);
        setEntertainmentActive(false);
        setsportsActive(false);
        setHealthActive(false);
        setLifestyleActive(false);
        setAllActive(false);
    }

    const healthActiveHandler = () => {
        setHealthActive(true);
        setTechnologyActive(false);
        setEntertainmentActive(false);
        setsportsActive(false);
        setPoliticsActive(false);
        setLifestyleActive(false);
        setAllActive(false);
    }

    const lifestyleActiveHandler = () => {
        setLifestyleActive(true);
        setTechnologyActive(false);
        setEntertainmentActive(false);
        setsportsActive(false);
        setPoliticsActive(false);
        setHealthActive(false);
        setAllActive(false);
    }

    const allActiveHandler = () => {
        setAllActive(true);
        setTechnologyActive(false);
        setEntertainmentActive(false);
        setsportsActive(false);
        setPoliticsActive(false);
        setHealthActive(false);
        setLifestyleActive(false);
    }

    const technologyMainHandler = (category) => {
        filterPosts(category);
        technologyActiveHandler()
    }

    const entertainmentMainHandler = (category) => {
        filterPosts(category);
        entertainmentActiveHandler()
    }

    const sportsMainHandler = (category) => {
        filterPosts(category);
        sportsActiveHandler()
    }

    const politicsMainHandler = (category) => {
        filterPosts(category);
        politicsActiveHandler()
    }

    const healthMainHandler = (category) => {
        filterPosts(category);
        healthActiveHandler()
    }

    const lifestyleMainHandler = (category) => {
        filterPosts(category);
        lifestyleActiveHandler()
    }

    const allMainHandler = () => {
        setAllPosts(homePosts)
        allActiveHandler()
    }

    return (
        <div>
            <div className="container mt-96 home__navbar">

                <ul>
                    <li
                        onClick={() => allMainHandler()}
                        className={allActive ? "home__active" : null}
                    >
                        All
                    </li>
                    <li
                        onClick={() => technologyMainHandler("technology")}
                        className={technologyActive ? "home__active" : null}
                    >
                        Technology
                    </li>
                    <li
                        onClick={() => entertainmentMainHandler("entertainment")}
                        className={entertainmentActive ? "home__active" : null}
                    >
                        Entertainment
                    </li>
                    <li
                        onClick={() => sportsMainHandler("sports")}
                        className={sportsActive ? "home__active" : null}
                    >
                        Sports
                    </li>
                    <li
                        onClick={() => politicsMainHandler("politics")}
                        className={politicsActive ? "home__active" : null}
                    >
                        Politics
                    </li>
                    <li
                        onClick={() => healthMainHandler("health")}
                        className={healthActive ? "home__active" : null}
                    >
                        Health
                    </li>
                    <li
                        onClick={() => lifestyleMainHandler("lifestyle")}
                        className={lifestyleActive ? "home__active" : null}
                    >
                        Lifestyle
                    </li>

                </ul>

            </div>
            <HomeBody allPosts={allPosts} />
        </div>
    )
}

export default HomeMain;
