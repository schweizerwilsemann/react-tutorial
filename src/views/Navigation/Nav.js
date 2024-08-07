import React from "react";
import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';

class Nav extends React.Component{
    render() {
        return (
            <div className="topnav">
                <NavLink 
                    to="/"
                    className={({isActive}) => isActive ? "active" : ""}
                >Home</NavLink>
                <NavLink 
                    to="/Todo"
                    className={({isActive}) => isActive ? "active" : ""}
                >Todo</NavLink>
                <NavLink 
                    to="/About" 
                    className={({isActive}) => isActive ? "active" : ""}
                >About</NavLink>
            </div>
        );
    }
}

export default Nav;