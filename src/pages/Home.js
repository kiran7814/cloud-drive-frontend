import React from 'react';
import Navbar from '../components/Navbar';
import FileUpload from '../components/FileUpload';
import FileList from '../components/FileList';

const Home = () => (
  <div>
    <Navbar />
    <div className="home">
      <FileUpload />
      <FileList />
    </div>
  </div>
);

export default Home;
