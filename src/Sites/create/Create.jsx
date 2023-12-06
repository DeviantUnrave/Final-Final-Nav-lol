import React, { useState } from 'react';

import './create.css';

function Create() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [Contact, setContact] = useState('');
    const [First, setFirstName] = useState('');
    const [Middle, setMiddleName] = useState('');
    const [Last, setLastName] = useState('');
    const [Birthday, setBirthday] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmChange = (e) => {
        setConfirm(e.target.value);
    };

    const handleContactChange = (e) => {
        setContact(e.target.value);
    };

    const handleFirstChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleMiddleChange = (e) => {
        setMiddleName(e.target.value);
    };
    const handleLastChange = (e) => {
        setLastName(e.target.value);
    };

    const handleBirthdayChange = (e) => {
        setBirthday(e.target.value);
    };


    //make it so that it adds into the database
    const handleClick = () => {
        if (!username || !password || !confirm || !First || !Last || !Birthday || !Contact) {
            alert('Please fill out all required fields.');
        } else if (!/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(Birthday)) {
            alert('Please enter the date in YYYY/MM/DD format.');
        } else if (
            (Contact.length !== 10 && !Contact.startsWith('0')) ||
            (Contact.length !== 11 && Contact.startsWith('0')) ||
            (Contact.length !== 11 && Contact.startsWith('09'))
        ) {
            alert('Invalid or empty phone number');
        } else {
            // Submit the form data or redirect to the next page
            window.location.href = '/Login';
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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
        }
    };
    return (
        <div className="containerC">

            <h1 className="Registration">Registration</h1>
            <div className='containerC2'>
                <div className='leftinput'>
                    <label className="lc">Username</label>
                    <input type="text" id="username" name="username" placeholder="" onFocus={moveLabelUp} onBlur={moveLabelBack} autoComplete="off" onKeyDown={handleKeyPress} onChange={handleUsernameChange} />
                    <br />
                    <br />
                    <label className="lc">Password</label>
                    <input type="password" id="password" name="password" placeholder="" onFocus={moveLabelUp} onBlur={moveLabelBack} autoComplete="off" onKeyDown={handleKeyPress} onChange={handlePasswordChange} />
                    <br />
                    <br />
                    <label className="lcc">Confirm Password</label>
                    <input type="password" id="confirm" name="confirm" placeholder="" onFocus={moveLabelUp} onBlur={moveLabelBack} autoComplete="off" onKeyDown={handleKeyPress} onChange={handleConfirmChange} />
                    <br />
                    <br />
                    <label className="lc">Contact</label>
                    <input type="text" id="Contact" name="Contact" placeholder="" onFocus={moveLabelUp} onBlur={moveLabelBack} autoComplete="off" onKeyDown={handleKeyPress} onChange={handleContactChange} />
                    <br />
                    <br />
                </div>
                <div className='rightinput'>
                    <label className="lc">First Name</label>
                    <input type="text" id="First" name="First" placeholder="" onFocus={moveLabelUp} onBlur={moveLabelBack} autoComplete="off" onKeyDown={handleKeyPress} onChange={handleFirstChange} />
                    <br />
                    <br />
                    <label className="lco">Middle Name (Optional)</label>
                    <input type="text" id="Middle" name="Middle" placeholder="" onFocus={moveLabelUp} onBlur={moveLabelBack} autoComplete="off" onKeyDown={handleKeyPress} onChange={handleMiddleChange} />
                    <br />
                    <br />

                    <label className="lc">Last Name</label>
                    <input type="text" id="Last" name="Last" placeholder="" onFocus={moveLabelUp} onBlur={moveLabelBack} autoComplete="off" onKeyDown={handleKeyPress} onChange={handleLastChange} />
                    <br />
                    <br />
                    <label className="lcb">Birthday (YYYY/MM/DD)</label>
                    <input type="text" id="Birthday" name="Birthday" placeholder="" onFocus={moveLabelUp} onBlur={moveLabelBack} autoComplete="off" onKeyDown={handleKeyPress} onChange={handleBirthdayChange} />
                    <br />
                    <br />

                </div>
            </div>


            <button className="Register" onClick={handleClick}>
                Register
            </button>
        </div>
    );
}

export default Create