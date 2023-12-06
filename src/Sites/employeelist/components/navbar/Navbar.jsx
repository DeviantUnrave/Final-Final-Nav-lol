import React from "react";
import './navbar.css';

const Navbar = () => {
    return (

        <div className="NavContainer">
            <div className="Employee">
                <h1> Employee </h1>
            </div>
            <div className="right">
                <button href="*" className="LogOut"> Log Out</button>
            </div>
        </div>
    )
}

export default Navbar