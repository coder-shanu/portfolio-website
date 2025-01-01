import React from "react";
import { Link } from "react-scroll";
import './navbar.css'; 

const Navbar = () => {
  const navItems = [
    { id: 1, text: "Home", to: "Home" },
    { id: 2, text: "Skills", to: "Skills" },
    { id: 3, text: "About", to: "About" },
    { id: 4, text: "Projects", to: "Projects" },
    { id: 5, text: "Contact", to: "Contact" }
  ];

  return (
    <nav className="navbar">
      <h1 className="logo">SHANU</h1>
      <ul className="desktop_menu">
        {navItems.map(({ id, text, to }) => (
          <li className="desktopitems" key={id}>
            <Link 
              to={to} 
              smooth={true} 
              duration={500} 
              offset={-50} // Adjust this value based on your navbar height
              className="navbar-link"
              activeClass="active"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
