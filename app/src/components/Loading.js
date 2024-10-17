import React from 'react';
import './Loading.css'; // Separate CSS for the loading component

const Loading = () => {
  return (
    <div className="loading-box">
    <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
