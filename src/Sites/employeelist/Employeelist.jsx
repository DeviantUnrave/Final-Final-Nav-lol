import React from "react";
import './employeelist.css';
import { Navbar, List } from './components';


const Employeelist = () => {
    return (
        <div className="EmpContainer">
            <Navbar />
            <List />
        </div>
    )
}

export default Employeelist