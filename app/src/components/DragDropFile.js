import React, { useState } from 'react';
import './DragDropFile.css';
import upload from '../assets/icons/upload_file.png'; 

const DragDropFile = ({ onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const files = event.dataTransfer.files;
    if (files.length) {
      onFileSelect(files);
    }
  };

  const handleFileSelection = (event) => {
    const files = event.target.files;
    if (files.length) {
      onFileSelect(files);
    }
  };

  return (
    <div 
      className={`drag-drop-container ${dragActive ? 'active' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="content">
        <p className="dragFileText">Drag your file(s) to start uploading</p>
        <p className="orText">OR</p>
        <label className="browse-btn">
          Browse files
          <input 
            type="file" 
            multiple 
            onChange={handleFileSelection} 
            style={{ display: 'none' }} 
          />
        </label>
      </div>
    </div>
  );
};

export default DragDropFile;
