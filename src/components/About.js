import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/all"
import { AiFillEdit, MdOutlinePersonOutline, HiOutlineMail, AiOutlinePhone, IoGitNetworkOutline, RiLockPasswordLine, BsFileEarmarkPerson } from 'react-icons/all';
const About = () => {
    const { user } = useSelector(state => state.AuthReducer);

    return (
        <>
            <Helmet>
                <title>About User</title>
                <meta
                    name="description"
                    content="About User"
                />
            </Helmet>
            <div className="row mt-96 mr-ml-about md-about about mt-128">
                <div className="col-4" style={{ padding: "1rem" }}>
                    <div className="about__bgImage"></div>
                </div>
                <div className="col-6" style={{ padding: "1rem" }}>
                    <div className="group">
                        <h2 className="about__heading">About</h2>
                    </div>
                    <div className="about__details">
                        <h4 className="about__details__heading">Name</h4>
                        <h4 className="about__details__content">{user.name}</h4>


                    </div>
                    <div className="about__details">
                        <h4 className="about__details__heading">Email</h4>
                        <h4 className="about__details__content">{user.email}</h4>
                    </div>
                    <div className="about__details">
                        <h4 className="about__details__heading">Username</h4>
                        <h4 className="about__details__content">{user.username}</h4>
                    </div>
                    <div className="about__details">
                        <h4 className="about__details__heading">Profession</h4>
                        <h4 className="about__details__content">{user.profession}</h4>
                    </div>
                    <div className="about__details">
                        <h4 className="about__details__heading">Phone</h4>
                        <h4 className="about__details__content">{user.phone}</h4>
                    </div>
                    <div className="about__details">
                        <h4 className="about__details__heading">Age</h4>
                        <h4 className="about__details__content">{user.age}</h4>
                    </div>
                </div>
                <div className="about__edit col-2">

                    <div className='about__edit__individual'>
                        <FaRegEdit style={{marginRight: "0.3rem", fontSize: "1.4rem"}}/>
                        <Link to="/updatename">Change Name</Link>
                    </div>
                    <div className='about__edit__individual'>
                        <FaRegEdit style={{marginRight: "0.3rem", fontSize: "1.4rem"}}/>
                        <Link to="/updateemail">Change Email</Link>
                    </div>
                    <div className='about__edit__individual'>
                        <FaRegEdit style={{marginRight: "0.2rem", fontSize: "1.4rem"}}/>
                        <Link to="/updateusername">Change Username</Link>
                    </div>
                    <div className='about__edit__individual'>
                        <FaRegEdit style={{marginRight: "0.2rem", fontSize: "1.4rem"}}/>
                        <Link to="/updateprofession">Change Profession</Link>
                    </div>
                    <div className='about__edit__individual'>
                        <FaRegEdit style={{marginRight: "0.3rem", fontSize: "1.4rem"}}/>
                        <Link to="/updatephone">Change Phone</Link>
                    </div>
                    <div className='about__edit__individual'>
                    <FaRegEdit style={{marginRight: "0.3rem", fontSize: "1.4rem"}}/>
                        <Link to="/updateage">Change Age</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
