import React from "react";
import Navbar from "./navbar";
import shanu from './shanu.jpg';
import './home.css'; 

const Home = () => {
  return (
    <div className="hero">
     
      <div className="intro-container">
        
        <div className="intro-text">
          <h1 className="intro">Hi all, I'm Shanu Patidar</h1>
          <h4 className="intro1">"Passionate and dedicated Software Developer." </h4>
          <div className="hero-links">
        <a href="https://github.com/coder-shanu" target="_blank" rel="noopener noreferrer" className="hero-link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/Shanupatidar/" target="_blank" rel="noopener noreferrer" className="hero-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:patidarshanu999@gmail.com" target="_blank" rel="noopener noreferrer" className="hero-link">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <div className="hero-section">
        <a href="https://drive.google.com/file/d/1MAmkjBWYG7AzvAONuTVBxevshA_6Xxx3/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">
             SEE MY RESUME
          </div>
        </a>
      </div>
        </div>
        <div>
        <img src={shanu} alt="shanu" className="shanu"/>
        </div>
        
      </div>
     
     
      
    </div>
  );
}

export default Home;
