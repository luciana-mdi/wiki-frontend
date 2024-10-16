// src/screens/UploadScreen.js

import React, { useState } from 'react';
import BackgroundWrapper from '../components/BackgroundWrapper';

const UploadScreen = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log('File uploaded:', file);
    // Logic for file upload goes here.
  };

  return (
    <BackgroundWrapper>
      <div className="upload-container">
        <h2>Upload a File</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} className="upload-button">Upload</button>
      </div>
    </BackgroundWrapper>
  );
};

export default UploadScreen;
