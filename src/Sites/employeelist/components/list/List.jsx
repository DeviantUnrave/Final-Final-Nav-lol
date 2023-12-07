import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HelloEntry from "../entry.jsx/Entry";
import './list.css';


const List = () => {
    const [searchValue, setSearchValue] = useState('');
    const [placeholderText, setPlaceholderText] = useState('Search...');
    const location = useLocation();
    const [userData, setUserData] = useState(null);
    const [employees, setEmployees] = useState([]);

    const userEntries = [
        {
            firstName: "Meow",
        }
    ]


    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        setPlaceholderText(e.target.value ? '' : 'Search...');
    };

    const handleClick = () => {
        window.location.href = '/Create';
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const userDataString = searchParams.get('data');

        if (userDataString) {
            const decodedData = decodeURIComponent(userDataString);
            const parsedData = JSON.parse(decodedData);
            setUserData(parsedData);
        }
    }, [location.search]);

    return (
        <div className="containerList">
            <div className="box1">
                <div className="box2">
                    <div className="AddDiv">
                        <input
                            type="text" className="SearchEmp"
                            placeholder={placeholderText}
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                        <button className="Add" onClick={handleClick}>Add Employee</button>
                    </div>
                    <div className="empInfo">
                        {userData && (
                            <div className="userData">
                                {/* Display user data */}
                                <p>First Name: {userData.First}</p>
                                <p>Middle Name: {userData.Middle}</p>
                                <p>Last Name: {userData.Last}</p>
                                {/* Display other user attributes */}
                                <button className="Sd">Show Dashboard</button>
                                <button className="Ed">Edit</button>
                                <button className="De">Delete</button>
                            </div>
                        )}

                        <HelloEntry firstName={"Michael"}> </HelloEntry>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;
