// List.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EmployeeData from "../entry/Entry";
import Magnifying from './magnfying.jsx'
import './list.css';
const List = () => {
    const [searchValue, setSearchValue] = useState('');
    const [placeholderText, setPlaceholderText] = useState('Search...');
    const location = useLocation();
    const [userEntries, setUserEntries] = useState([
        {
            EmployeeID: "1",
            firstName: "Meow",
            lastName: "Wof",
            Birthday: "2003/02/21",
            Contact: "099223131"
        }
    ]);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        setPlaceholderText(e.target.value ? '' : 'Search...');
    };

    const handleDelete = (id) => {
        const updatedEntries = userEntries.filter((entry) => entry.EmployeeID !== id);
        setUserEntries(updatedEntries);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const userDataString = searchParams.get('data');

        if (userDataString) {
            const decodedData = decodeURIComponent(userDataString);
            const parsedData = JSON.parse(decodedData);
            setUserEntries(parsedData);
        }
    }, [location.search]);

    const handleAdd = () => {
        const newIndex = userEntries.length + 1;
        const newEntry = {
            EmployeeID: newIndex.toString(),
            firstName: "New",
            lastName: "Entry",
            Birthday: "2000/01/01",
            Contact: "1234567890"
        };
        setUserEntries([...userEntries, newEntry]);
        window.location.href = '/Create';
    };

    return (
        <div className="containerList">
            <div className="box1">
                <div className="box2">
                    <div className="AddDiv">
                        <h4 className="listtop">Employee ID</h4>
                        <h4 className="listtop">Last Name</h4>
                        <h4 className="listtop">First Name</h4>
                        <h4 className="listtop">Birthday</h4>
                        <h4 className="listtop">Contact</h4>
                        <h4 className="listtop5">Salary</h4>

                        <input
                            type="text" className="SearchEmp" placeholder={placeholderText} value={searchValue} onChange={handleSearchChange}
                        />
                        <div className="mag"> <Magnifying /> </div>

                        <button className="Add" onClick={handleAdd}>Add Employee</button>
                    </div>

                    <div className="empInfo">
                        {userEntries.map((entry) => (
                            <EmployeeData
                                key={entry.EmployeeID}
                                {...entry}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;
