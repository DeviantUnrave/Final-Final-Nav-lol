import React, { useState } from 'react';
import LogButton from './logbutton';
import UserDB from './userdb';
import './ed.css';

const Dashboard = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Employee Dashboard</h1>
        <div className="user-image-dropdown">
          <img
            src="/path/to/user-image.jpg"
            alt="User"
            className="user-image"
            onClick={toggleDropdown}
          />
          {isDropdownVisible && (
            <div className="dropdown">
              <div className="dropdown-content">
                <a href="#">Logout</a>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="user-db">
        <UserDB />
      </div>
      <div className="log-db">
        <LogButton />
      </div>
    </div>
  );
};

export default Dashboard;