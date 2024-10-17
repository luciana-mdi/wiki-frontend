import React from 'react';
import './FileItem.css';

const FileItem = ({ file, isLoading }) => {
  return (
    <div className="file-item">
      <div className="file-details">
        <p className="file-name">{file.name}</p>
        {isLoading ? (
          <div className="loading">
            <span className="loading-text">Uploading... 50%</span>
            <progress value="50" max="100"></progress> 
          </div>
        ) : (
          <div className="loaded">
            <span>Upload complete</span>
            <i className="icon-check"></i> {/* You can replace with an actual checkmark icon */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileItem;
