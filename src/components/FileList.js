import React, { useEffect, useState } from 'react';
import api from '../services/api';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    api.get('/files').then((res) => setFiles(res.data));
  }, []);

  const deleteFile = async (filename) => {
    await api.delete(`/delete/${filename}`);
    setFiles(files.filter(f => f.name !== filename));
  };

  return (
    <div className="file-list">
      <h3>Your Files</h3>
      <ul>
        {files.map((file) => (
          <li key={file.name}>
            📄 {file.name}
            <button onClick={() => deleteFile(file.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
