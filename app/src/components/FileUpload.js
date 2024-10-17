// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './FileUpload.css';


const FileUpload = () => {
  return (
    <div className="file-upload-container">
        <div className="header">
            <h1>File Upload</h1>
            <h2>Add your documents to extract agnostic project information</h2>
        </div>
    </div>
  );
};

export default FileUpload;
