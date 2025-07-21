import React, { useState } from 'react';
import './FileUpload.css'; // Create this file if it doesn't exist

function FileUpload({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return alert('Please select a file.');

    // Simulate file upload — replace this with backend API later
    console.log('Uploading:', file.name);
    onUpload(file.name);
    setFile(null); // Reset input
  };

  return (
    <div className="upload-box">
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
