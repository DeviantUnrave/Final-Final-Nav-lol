// src/components/userdb.jsx
import React from 'react';
import './ed.css';

const UserDB = () => {
  // Replace this with actual user data
  const user = {
    name: 'John Doe',
    photo: 'url-to-user-photo',
    date: new Date().toLocaleDateString(),
  };

  return (
    <div className="user-db">
      <img src={user.photo} alt="User" className="user-pic" />
      <h2>{user.name}</h2>
      <p className="user-date">Date: {user.date}</p>
    </div>
  );
};

export default UserDB;
