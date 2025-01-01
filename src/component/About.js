import React from 'react'
import './About.css'
import shanu from './shanu.jpg';

function About() {
  return (
    <div className='about-container'>
      <h1 className='about'>About</h1>
      <div className='partition'>
      <div>
      <p>
  Hi, I'm a passionate and dedicated frontend developer with a keen eye for design and a strong commitment 
  to creating seamless user experiences. My journey into web development began with a fascination for how websites
   work and evolved into a career focused on building intuitive, responsive, and visually appealing web applications. 
   I specialize in HTML, CSS, JavaScript, and modern frontend frameworks like React.
</p>

      </div>
      <div className='shanu'>
      <img src={shanu} alt="shanu" className="shanu"/>
      </div>
      </div>
      <br />
      <h2 className='Edu'>Education</h2>
      <div className='education-section'>
        <span className='education-institute'>
          Maulana Azad National Institute Of Technology Bhopal (M.P.), INDIA<br/>
          B. Tech in Electronics and Communication Engineering
        </span>
        <div className='education-details'>
          <div className='education-duration'>
            DECEMBER 2021 - JUNE 2025
          </div>
          <div className='education-cgpa'>
            CGPA - 8.0/10
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
