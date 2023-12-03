import React from 'react';
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTER, HOME_ROUTER, POSTS_ROUTER} from "../../../utils/constants";

const Navbar = () => {
    return (
        <header className="navbar">
            <div>
                <NavLink end={true} to={HOME_ROUTER}>Home</NavLink>
            </div>
            <div>
                <NavLink end={true} to={ABOUT_ROUTER}>Quiz</NavLink>
                <NavLink end={true} to={POSTS_ROUTER}>Posts</NavLink>
            </div>
        </header>
    );
};

export default Navbar;