import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import './Dashboard.css'; // Keep this for styling

function Dashboard() {
  const [files, setFiles] = useState([]);

  const handleFileUploaded = (fileName) => {
    setFiles((prev) => [...prev, fileName]);
  };

  return (
    <div className="dashboard-container">
      <h2>Your Files</h2>
      <FileUpload onUpload={handleFileUploaded} />

      <div className="file-list">
        {files.length === 0 ? (
          <p>No files uploaded yet.</p>
        ) : (
          <ul>
            {files.map((file, idx) => (
              <li key={idx}>📄 {file}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
