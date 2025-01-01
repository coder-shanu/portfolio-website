import React from 'react';
import './contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-intro">
        <h1>Contact Me</h1>
        <span>Below are the details to reach out to me!</span>
        <span>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</span>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span className="contact-text">
            Address: <br />Bhopal
          </span>
        </div>
        <div className='contact-details2'>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">
              Email: <br /><a href="mailto:patidarshanu999@gmail.com">patidarshanu999@gmail.com</a>
            </span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span className="contact-text">
              Mobile: <br /> +91-9977348377
            </span>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <span className="contact-text">
              LinkedIn: <br /><a href="https://www.linkedin.com/in/Shanupatidar/" target="_blank" rel="noopener noreferrer">Shanupatidar</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
