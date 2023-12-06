import React from "react";
import './loginbox.css';

function Loginbox() {
    const handleClick = () => {
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        // Perform a basic check for credentials (replace this with actual authentication logic)
        if (enteredUsername === 'admin' && enteredPassword === 'admin') {
            // Credentials match - redirect to Employee List (admin)
            window.location.href = '/Create';
        } else if (enteredUsername === 'employee' && enteredPassword === 'employee') {
            // Credentials match - redirect to Dashboard (employee)
            window.location.href = '/EmployeeList'; // Replace with your employee dashboard url
        } else if (enteredUsername === '' && enteredPassword === '') {
            alert('Please fill out the required fields');
        } else {
            // Credentials do not match - show error message or handle as needed
            alert('Invalid credentials. Please try again.');
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
        }
    };




    function moveLabelUp(e) {
        const label = e.target.previousElementSibling;
        label.classList.add('move-up');
    }

    function moveLabelBack(e) {
        const label = e.target.previousElementSibling;
        const input = e.target;

        if (input.value.trim() === '') {
            label.classList.add('move-back');
            label.classList.remove('move-up');

            setTimeout(() => {
                label.classList.remove('move-back');
            }, 200); // delay in ms
        }
    }

    return (

        <>
            <div className="loginbox" id="loginbox">
                <h1 className="login">Login</h1>
            </div>

            <div className="inputborder">
                <label className="lp">Username</label>
                <input className="userL" type="text" id="username" name="username" placeholder=""
                    onFocus={moveLabelUp} onBlur={moveLabelBack} autoComplete="off" onKeyDown={handleKeyPress} />
                <br />
                <br />
                <br />
                <br />
                <label className="lp">Password</label>
                <input className="passL" type="password" id="password" name="password" placeholder=""
                    onFocus={moveLabelUp} onBlur={moveLabelBack} autoComplete="off" onKeyDown={handleKeyPress} />
                <br />
                <br />
                <br />

                <button className="submit" onClick={handleClick}>
                    Sign In
                </button>
                <br />
                <br />

            </div>
        </>

    );
}

export default Loginbox