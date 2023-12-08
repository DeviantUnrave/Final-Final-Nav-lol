import React, { useState } from "react";
import './loginbox.css';

function Loginbox() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        try {
            const response = await fetch("logindb.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    employee_id: username,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.user_id) {
                    // Credentials match - redirect or handle success as needed
                    window.location.href = '/EmployeeList'; // Replace with your employee dashboard url
                } else {
                    // Credentials do not match - show error message or handle as needed
                    alert('Invalid credentials. Please try again.');
                }
            } else {
                // Handle error response from the server
                alert('Error during login. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Error during login. Please try again.');
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
                <input
                    className="userL"
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={moveLabelUp}
                    onBlur={moveLabelBack}
                    autoComplete="off"
                    onKeyDown={handleKeyPress}
                />

                <br />
                <br />
                <br />
                <br />
                <label className="lp">Password</label>
                <input
                    className="passL"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={moveLabelUp}
                    onBlur={moveLabelBack}
                    autoComplete="off"
                    onKeyDown={handleKeyPress}
                />
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