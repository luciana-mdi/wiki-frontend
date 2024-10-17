import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DragDropFile from './DragDropFile'; 
import FileItem from './FileItem'; // Import the new FileItem component
import './FileUpload.css';

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (files) => {
    const fileList = Array.from(files);
    setSelectedFiles(fileList);
  };

  const navigate = useNavigate();

  const handleGenerateClick = () => {
    // Navigate to the loading screen when the button is clicked
    navigate('/loading');
  };

  return (
    <div className="file-upload-container">
      <div className="header">
        <h1>File Upload</h1>
        <h2 className="header-byline">Add your documents to extract agnostic project information</h2>
      </div>

      <div className="dragdrop-section">
        <DragDropFile onFileSelect={handleFileSelect} />
      </div>
      <div className="upload-instructions">
        <p>Only PDF files are supported at the moment</p>
      </div>

      {selectedFiles.length > 0 && (
        <div className="uploading-section">
          {selectedFiles.map((file, index) => (
            <FileItem key={index} file={file} isLoading={true} /> 
          ))}
        </div>
      )}


      <div className="generate-buttons">
        <button className="btn purple" onClick={handleGenerateClick}>Generate 00s</button>
        <button className="btn dark-purple" onClick={handleGenerateClick}>Generate BPs</button>
      </div>
    </div>
  );
};

export default FileUpload;
