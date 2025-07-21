import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import './Home.css';

const images = [
  "https://illustrations.popsy.co/gray/cloud-storage.svg",
  "https://illustrations.popsy.co/gray/uploading.svg",
  "https://illustrations.popsy.co/gray/folder-organization.svg",
  "https://illustrations.popsy.co/gray/sharing.svg",
];

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="home-container">
      <motion.div
        className="home-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>☁️ Welcome to Cloud Drive</h1>
        <p>Securely store, access, and share your files from anywhere. Fast. Safe. Reliable.</p>
        <div className="home-buttons">
          <Link to="/register" className="btn primary">Get Started</Link>
          <Link to="/login" className="btn secondary">Login</Link>
        </div>
      </motion.div>

      <motion.div
        className="home-right"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Slider {...sliderSettings}>
          {images.map((src, i) => (
            <div key={i} className="slide">
              <img src={src} alt={`slide-${i}`} />
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default Home;
