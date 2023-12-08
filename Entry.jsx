import React, { useState } from "react";
import './entry.css'

function EmployeeData({ EmployeeID, firstName, lastName, Birthday, Contact, onDelete }) {
    const [showPopup, setShowPopup] = useState(false);


    const handleDelete = () => {
        onDelete(EmployeeID);
    };

    const handleSalary = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleEmp = () => {
        window.location.href = '' //link the employee dashboard here
    }

    const editEmp = () => {

    }

    return (
        <div className="userData">
            <div className="wrds">
                <div className="detail1"> {EmployeeID}</div>
                <div className="detail2"> {firstName}</div>
                <div className="detail3"> {lastName}</div>
                <div className="detail4"> {Birthday}</div>
                <div className="detail5"> {Contact}</div>
            </div>
            <div className="btns">
                <button className="Sa" onClick={handleSalary}>Salary</button>
                <button className="Sd" onClick={handleEmp}>Employee Account</button>
                <button className="Ed" onClick={editEmp}>Edit</button>
                <button className="De" onClick={handleDelete}>Delete</button>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">

                        <div className="popupBar"> <h1 className="SalaryDet">Salary details for Employee ID: {EmployeeID} </h1>
                            <span className="close" onClick={closePopup}>&times;</span>
                        </div>
                        <div className="popup1">
                            <div className="popup2">
                                <div className="PopUpHeader">
                                    <h4 className="PopUptop1">Date</h4>
                                    <h4 className="PopUptop2">Salary</h4>
                                    <h4 className="PopUptop3">Addition</h4>
                                    <h4 className="PopUptop4">Deduction</h4>
                                    <h4 className="PopUptop5">Edit</h4>
                                </div>
                                <div className="rows"> </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default EmployeeData;