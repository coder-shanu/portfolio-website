import React from 'react';
import password from './password.jpeg';
import tictactoe from './tictactoe.webp';
import todolist from './todolist.png';
import weather from './weather.png'; // Example path
import bookstore from './book-store.jpeg'; 
import travel from './travelweb.jpeg';

import './projects.css';

function Projects() {
  const cardItems = [
    {
      id: 1,
      logo: password,
      name: "Password Generator",
      description: "Designed and implemented a user-friendly web application capable of generating strong, random passwords to enhance online security."
    },
    {
      id: 2,
      logo: tictactoe,
      name: "Tic-Tac-Toe Game",
      description: "Implemented a fully functional Tic Tac Toe game playable in web browsers, HTML for structure, CSS for styling, and JavaScript for game logic."
    },
    {
      id: 3,
      logo: todolist,
      name: "To-Do List",
      description: "Built a to-do list application to help users manage their tasks efficiently. Implemented state management with React hooks to handle tasks."
    },
    {
      id: 4,
      logo: weather,
      name: "Weather Forecasting App",
      description: "Developed a weather forecasting app utilizing the OpenWeatherMap API to provide real-time weather updates with a user-friendly interface."
    },
    {
      id: 5,
      logo: bookstore,
      name: "Book-Store Management System",
      description: "Created a MERN application for managing books, authors, and genres, featuring user authentication, role-based access, and CRUD operations."
    },
    {
      id: 6,
      logo: travel,
      name: "Travel Website",
      description: "Designed and developed a responsive travel website to showcase destinations, travel packages, and booking functionalities with an interactive user interface."
    }
  ];

  return (
    <div className="projects-container">
      <div className='projects'>
        <h1>Projects</h1>
        <span>Featured Projects</span>
      </div>
      
      <div className="projects-grid">
        {cardItems.map(({ id, logo, name, description }) => (
          <div key={id} className="project-card">
            <img src={logo} alt={name} className="project-logo"/>
            <div className="project-name">
              {name}
            </div>
            <p className="project-description">
              {description}
            </p>
            <div>
              <a href={"https://github.com/shanupatidar"} target="_blank" rel="noopener noreferrer">
                <button className="source-code-button">Source Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
