import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <h1>Breaking Bad</h1>
            <ul className="NavLinks">
                <li><NavLink exact={true} to="/">Home</NavLink></li>
                <li><NavLink exact={true} to="/episodes">Episodes</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;