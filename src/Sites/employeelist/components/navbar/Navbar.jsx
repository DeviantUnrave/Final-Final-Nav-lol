import React from "react";
import './navbar.css';

const Navbar = () => {

    const handleClick = () => {
        window.location.href = './Login';
    }

    return (

        <div className="NavContainer">
            <div className="Navbox">
                <h1 className="ElN"> Employee List</h1>
                <button className="LogOut" onClick={handleClick}> Log Out</button>
            </div>
        </div>

    )
}

export default Navbar