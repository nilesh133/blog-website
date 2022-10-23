import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoPerson } from "react-icons/all"
const Sidebar = () => {
    const { user } = useSelector(state => state.AuthReducer);
    return (
        <div className="sidebar">
            <div className='sidebar__heading'>Your Info</div>
            <div className="sidebar__info">
                <div className='sidebar__info__profilepic'>
                    <span><GoPerson /></span>
                </div>
                <div className="sidebar__info__individual">
                    <h4>Name</h4>
                    <h5>{user.name}</h5>
                </div>
                <div className="sidebar__info__individual">
                    <h4>Email</h4>
                    <h5>{user.email}</h5>
                </div>
                <div className="sidebar__info__individual">
                    <h4>Username</h4>
                    <h5>{user.username}</h5>
                </div>
                <div className="sidebar__info__individual">
                    <h4>Profession</h4>
                    <h5>{user.profession}</h5>
                </div>
                <div className="sidebar__info__individual">
                    <h4>Contact</h4>
                    <h5>{user.phone}</h5>
                </div>
                {/* <div className="sidebar__info__individual">
                    <h4>Age</h4>
                    <h5>{user.age}</h5>
                </div> */}
            </div>
            <div className='sidebar__item'>
                <div className="sidebar__item__individual">
                    <Link to="/updatename">Change Name</Link>
                </div>
                <div className="sidebar__item__individual">
                    <Link to="/updatepassword">Change Password</Link>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
