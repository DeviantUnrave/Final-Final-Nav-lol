// src/components/LogButton.jsx
import React, { useState } from 'react';
import './ed.css';

const LogButton = () => {
  const [logType, setLogType] = useState(null);
  const [logTime, setLogTime] = useState(null);

  const handleLogClick = (type) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    if (type === 'Time-in') {
      if (hours >= 1 && hours < 8) {
        setLogType('Work has not started.');
        setLogTime(null);
      } else if (hours >= 8 && minutes >= 30 && hours < 9) {
        setLogType('Early Time-In');
        setLogTime(currentTime);
      } else if (hours >= 9 && hours < 17) {
        setLogType('Late Time-In');
        setLogTime(currentTime);
      } else if (hours >= 17 && hours <= 24) {
        setLogType('Work has ended.');
        setLogTime(null); // Fix: setLogTime should be null for invalid Time-Out
      }
    } else if (type === 'Time-out') {
      if (logType === 'Work has not started.' || logType === 'Work has ended.') {
        setLogType('Invalid Time-Out');
        setLogTime(null);
      } else if (hours >= 17 && hours <= 18) {
        setLogType('Timed-Out');
        setLogTime(currentTime);
      } else if (hours > 18 && hours <= 19) {
        setLogType('Timed-Out (Overtime)');
        setLogTime(currentTime);
      } else {
        setLogType('Invalid Time-Out');
        setLogTime(null);
      }
    }
  };

  return (
    <div className="log-container">
      <button className="buttons" onClick={() => handleLogClick('Time-in')}>
        Time-in
      </button>
      <button className="buttons" onClick={() => handleLogClick('Time-out')}>
        Time-out
      </button>
      {/* Display log type and time information below the buttons */}
      <div className="log-info">
        {logType && <p style={{ color: 'black' }}>{logType} {logTime && `at ${logTime.toLocaleTimeString()}`}</p>}
      </div>
    </div>
  );
};

export default LogButton;
