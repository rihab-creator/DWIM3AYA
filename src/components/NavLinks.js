import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavLinks.css';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
