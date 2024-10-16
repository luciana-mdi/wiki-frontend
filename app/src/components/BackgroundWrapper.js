// src/components/BackgroundWrapper.js

import React from 'react';
import './BackgroundWrapper.css'; // or styled-components, depending on preference

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="background-wrapper">
      {children}
    </div>
  );
};

export default BackgroundWrapper;
